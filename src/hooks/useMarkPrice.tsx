import dexterity from "@hxronetwork/dexterity-ts";
import { useConnection } from "@solana/wallet-adapter-react";
import { Connection, PublicKey } from "@solana/web3.js";
import { useEffect, useMemo, useState } from "react";

const useMarkPrice = (productName: string) => {
  const { connection } = useConnection();
  const [mpg, setMpg] = useState<any>(null);
  const [markPrice, setMarkPrice] = useState<any>(null);

  const mpgPkStr = "4cKB5xKtDpv4xo6ZxyiEvtyX3HgXzyJUS1Y8hAfoNkMT";

  const mpgPubkey = useMemo(() => new PublicKey(mpgPkStr), [mpgPkStr]);

  useEffect(() => {
    (async () => {
      // @ts-ignore
      const manifest = await dexterity.getManifest(
        connection.rpcEndpoint,
        false
      ); // don't specify wallet

      let desiredMpg, desiredOrderbooks;
      for (const [pkStr, { pubkey, mpg, orderbooks }] of manifest.fields.mpgs) {
        if (mpgPkStr === pkStr) {
          desiredMpg = mpg;
          desiredOrderbooks = orderbooks;
          break;
        }
      }
      if (!desiredMpg) {
        console.error("failed to find mpg!", manifest.fields.mpgs);
        process.exit();
      }
      if (!desiredOrderbooks) {
        console.error("failed to find orderbooks!", manifest.fields.mpgs);
        process.exit();
      }

      setMpg(desiredMpg);

      console.log("desiredMpg", desiredMpg);
      console.log("desiredOrderbooks", desiredOrderbooks);

      const markPriceAccount = manifest.getMarkPricesAccount(
        mpgPubkey,
        desiredMpg
      );
      console.log("markPriceAccount", markPriceAccount);

      const markPrices = await manifest.getMarkPrices(markPriceAccount);
      //   console.log("markPrices", markPrices);

      // convert markPrices.array[n].markPrice from bignumber to number

      const markPricesParsed = markPrices.array.map((markPrice) => {
        return {
          ...markPrice,
          markPrice: markPrice.markPrice.value.toNumber(),
        };
      });

      console.log("markPricesParsed", markPricesParsed);

      let desiredProduct: any, desiredMarketState;
      for (const [
        pName,
        { index, product },
      ] of dexterity.Manifest.GetProductsOfMPG(desiredMpg)) {
        const meta = dexterity.productToMeta(product);
        if (pName.trim() === productName) {
          desiredProduct = product.outright.outright;
          //   desiredMarketState = desiredOrderbooks.get(meta.orderbook.toBase58());
          break;
        }
      }
      //   if (!desiredMarketState) {
      //     console.error("failed to find market state!");
      //     process.exit();
      //   }

      console.log("desiredProduct", desiredProduct);

      // find markprice from parsed based on desiredProduct.metadata.productKey from array item's product key

      const markPrice = markPricesParsed.find(
        (markPrice) =>
          markPrice.productKey.toBase58() ===
          desiredProduct.metadata.productKey.toBase58()
      );

      console.log("markPrice", markPrice);

      setMarkPrice(markPrice);
    })();
  }, [connection.rpcEndpoint, mpgPubkey]);

  return {
    mpg,
    markPrice,
  };
};

export default useMarkPrice;
