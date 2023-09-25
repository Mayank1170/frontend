import dexterity from "@hxronetwork/dexterity-ts";
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

export const getMpg = (manifest: any) => {
  if (!manifest) {
    return;
  }

  let desiredMpg;
  for (const [pkStr, { pubkey, mpg }] of manifest.fields.mpgs) {
    if (MPG_PKG_STR === pkStr) {
      desiredMpg = mpg;
      break;
    }
  }
  if (!desiredMpg) {
    console.error("failed to find mpg!", manifest.fields.mpgs);
    process.exit();
  }

  return desiredMpg;
};

export const getProduct = (mpg: any, productName: string) => {
  if (!mpg) {
    return;
  }

  let desiredProduct: any;
  for (const [pName, { index, product }] of dexterity.Manifest.GetProductsOfMPG(
    mpg
  )) {
    if (pName.trim() === productName) {
      desiredProduct = product.outright.outright;
      break;
    }
  }

  return desiredProduct;
};

export const getMarkPrice = async (manifest: any, mpg: any, product: any) => {
  const markPriceAccount = manifest.getMarkPricesAccount(MPG_PUBKEY, mpg);

  const markPrices = await manifest.getMarkPrices(markPriceAccount);

  const markPricesParsed = markPrices.array.map((markPrice: any) => {
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

export const getTRGs = async (manifest: any) => {
  console.log("efgh");
  const trgs = await manifest.getTRGsOfWallet(MPG_PUBKEY);

  console.log("existing trgs", trgs);

  return trgs;
};
