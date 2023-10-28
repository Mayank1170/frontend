import {
  getManifest,
  getMarkPrice,
  getMpg,
  getOrderbook,
  getProduct,
} from "@/utils/dexterity";
import { useConnection } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import useDexterity from "./useDexterity";

const useTradeData = (productName: string) => {
  const { connection } = useConnection();

  const { manifest, mpg, desiredOrderbooks } = useDexterity();

  const { data: product } = useQuery({
    queryKey: ["product", connection.rpcEndpoint, productName],
    queryFn: () => getProduct(mpg!, productName, desiredOrderbooks),
    enabled: !!mpg,
  });

  const { data: markPrice } = useQuery({
    queryKey: ["markPrice", connection.rpcEndpoint, productName],
    queryFn: () => getMarkPrice(manifest!, mpg!, product?.desiredProduct),
    enabled: manifest && mpg && product?.desiredProduct ? true : false,
    });


  const { data: orderbookData } = useQuery({
    queryKey: ["orderbookData", connection.rpcEndpoint, productName],
    queryFn: () =>
      getOrderbook(
        manifest!,
        product?.desiredProduct,
        product?.desiredMarketState
      ),
    enabled:
      !!manifest || !!product?.desiredProduct || !!product?.desiredMarketState,
  });  

  return {
    product,
    mpg,
    markPrice,
    orderbookData,
  };
};

export default useTradeData;
