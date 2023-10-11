import dexterity, {
  Manifest,
  MarkPrice,
  MarketProductGroup,
} from "@hxronetwork/dexterity-ts";
import { PublicKey, Transaction, VersionedTransaction } from "@solana/web3.js";

const MPG_PKG_STR = process.env.NEXT_PUBLIC_MPG as string;

const MPG_PUBKEY = new PublicKey(MPG_PKG_STR);

export const getManifest = async (rpc: string) => {
  // @ts-ignore
  const manifest = await dexterity.getManifest(rpc, false); // don't specify wallet

  return manifest;
};

export const getManifestWithWallet = async (
  rpc: string,
  publicKey: PublicKey,
  signTransaction: <T extends Transaction | VersionedTransaction>(
    transaction: T
  ) => Promise<T>,
  signAllTransactions: <T extends Transaction | VersionedTransaction>(
    transactions: T[]
  ) => Promise<T[]>
) => {
  const manifest = await dexterity.getManifest(rpc, false, {
    publicKey,
    signTransaction,
    signAllTransactions,
  });

  return manifest;
};

export const getMpg = (manifest: Manifest) => {
  if (!manifest) {
    return;
  }

  let desiredMpg, desiredOrderbooks;
  for (const [pkStr, { pubkey, mpg, orderbooks }] of manifest.fields.mpgs) {
    if (MPG_PKG_STR === pkStr) {
      desiredMpg = mpg;
      desiredOrderbooks = orderbooks;
      break;
    }
  }
  if (!desiredMpg) {
    console.error("failed to find mpg!", manifest.fields.mpgs);
    process.exit();
  }

  return {
    desiredMpg,
    desiredOrderbooks,
  };
};

export const getProduct = (
  mpg: MarketProductGroup,
  productName: string,
  desiredOrderbooks: any
) => {
  if (!mpg) {
    return;
  }

  let desiredProduct: any, desiredMarketState: any;
  for (const [pName, { index, product }] of dexterity.Manifest.GetProductsOfMPG(
    mpg
  )) {
    const meta = dexterity.productToMeta(product);
    if (pName.trim() === productName.trim()) {
      desiredProduct = product.outright.outright;
      desiredMarketState = desiredOrderbooks.get(meta.orderbook.toBase58());
      break;
    }
  }

  return { desiredProduct, desiredMarketState };
};

export const getMarkPrice = async (
  manifest: Manifest,
  mpg: MarketProductGroup,
  product: any
) => {
  const markPriceAccount = manifest.getMarkPricesAccount(MPG_PUBKEY, mpg);

  const markPrices = await manifest.getMarkPrices(markPriceAccount);

  const markPricesParsed = markPrices.array.map((markPrice: MarkPrice) => {
    return {
      ...markPrice,
      markPrice: markPrice.markPrice.value.toNumber(),
    };
  });

  const markPrice = markPricesParsed.find(
    (markPrice: any) =>
      markPrice.productKey.toBase58() === product.metadata.productKey.toBase58()
  );

  console.log("markPrice", markPrice);

  return markPrice;
};

export const getTRGs = async (manifest: Manifest) => {
  const trgs = await manifest.getTRGsOfWallet(MPG_PUBKEY);

  return trgs;
};

export const createTRGFn = async (manifest: Manifest) => {
  console.log("creating trg");
  const trg = await manifest.createTrg(MPG_PUBKEY);

  console.log("created trg", trg);

  return trg;
};

export const closeTRGFn = async (
  manifest: Manifest,
  trgPubkey: PublicKey,
  trgAmount: number
) => {
  console.log("closing trg", trgPubkey.toBase58());

  console.log("trgAmount", trgAmount);

  if (trgAmount > 0) {
    await withdrawFn(manifest, trgPubkey, trgAmount);
  }

  await manifest.closeTrg(MPG_PUBKEY, trgPubkey);
};

export const getTRGBalance = async (
  manifest: Manifest,
  trgPubkey: PublicKey
) => {
  const trader = new dexterity.Trader(manifest, trgPubkey);

  let balance;

  await trader.connect(NaN, async () => {
    balance = Number(trader.getCashBalance());
  });

  return balance as unknown as number;
};

export const depositFn = async (
  manifest: Manifest,
  trgPubkey: PublicKey,
  amount: number
) => {
  const trader = new dexterity.Trader(manifest, trgPubkey);
  const n = dexterity.Fractional.New(amount, 0);

  await trader.update();

  await trader.deposit(n, {
    onTxSentFn: (sig: string) =>
      console.log(
        `\nSUCCESSFULL deposit OF ${amount.toLocaleString()} UXDC\n${
          sig ? `SIGNATURE: https://solscan.io/tx/${sig}?cluster=devnet` : ""
        }`
      ),
  });
};

export const withdrawFn = async (
  manifest: Manifest,
  trgPubkey: PublicKey,
  amount: number
) => {
  const trader = new dexterity.Trader(manifest, trgPubkey);
  const n = dexterity.Fractional.New(amount, 0);

  await trader.connect(NaN, async () => {
    console.log(
      `\nTRG BALANCE before withdraw: ${Number(
        trader.getCashBalance()
      ).toLocaleString()} UXDC`
    );
  });

  await trader.withdraw(n).then((sig: any) => {
    console.log(
      `\nSUCCESSFULL withdraw OF ${amount.toLocaleString()} UXDC\n${
        sig ? `SIGNATURE: https://solscan.io/tx/${sig}?cluster=devnet` : ""
      }`
    );
  });

  await trader.connect(NaN, async () => {
    console.log(
      `\nTRG BALANCE after withdraw: ${Number(
        trader.getCashBalance()
      ).toLocaleString()} UXDC`
    );
  });
};

export const placeLimitOrder = async (
  manifest: Manifest,
  type: "buy" | "sell",
  price: number,
  size: number,
  trgPubkey: PublicKey,
  productName: string
) => {
  const trader = new dexterity.Trader(manifest, trgPubkey);

  await trader.update();

  let productIndex: any;
  for (const [name, { index, product }] of trader.getProducts()) {
    console.log(name);
    if (name.trim() === productName.trim()) {
      productIndex = index;
      break;
    }
  }

  const sizeFractional = dexterity.Fractional.New(size, 0);
  const priceFractional = dexterity.Fractional.New(price, 0);

  const callbacks = {
    onGettingBlockHashFn: () => {},
    onGotBlockHashFn: () => {},
    onTxSentFn: (sig: any) =>
      console.log(
        `\nSUCCESSFULLY PLACED LIMIT ${type.toLocaleUpperCase()} ORDER\nSIGNATURE: https://solscan.io/tx/${sig}?cluster=devnet`
      ),
  };

  console.log(
    "Placing limit order with price:",
    price,
    "and size:",
    size,
    "type:",
    type,
    "product:",
    productName
  );

  try {
    if (type === "buy") {
      await trader.newOrder(
        productIndex,
        true,
        priceFractional,
        sizeFractional,
        false,
        null,
        null,
        null,
        null,
        callbacks
      );
    }

    if (type === "sell") {
      await trader.newOrder(
        productIndex,
        false,
        priceFractional,
        sizeFractional,
        false,
        null,
        null,
        null,
        null,
        callbacks
      );
    }
  } catch (err) {
    console.error(err);
  }
};

export const getOrderbook = async (
  manifest: Manifest,
  product: any,
  marketState: any
) => {
  console.log("getting orderbook", product, manifest);
  const { asks, bids } = await manifest.getBook(product, marketState);

  const totalBids = bids.reduce(
    (acc: number, bid) => acc + bid.price.toNumber() * bid.quantity.toDecimal(),
    0
  );

  const totalAsks = asks.reduce(
    (acc: number, ask) => acc + ask.price.toNumber() * ask.quantity.toDecimal(),
    0
  );

  return {
    asks,
    bids,
    totalAsks,
    totalBids,
  };
};
