import {
  getManifest,
  getMarkPrice,
  getMpg,
  getProduct,
} from "@/utils/dexterity";
import { useConnection } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";
import useDexterity from "./useDexterity";

const useMarkPrice = (productName: string) => {
  const { connection } = useConnection();

  const { manifest, mpg } = useDexterity();

  const { data: product } = useQuery({
    queryKey: ["product", connection.rpcEndpoint, productName],
    queryFn: () => getProduct(mpg!, productName),
    enabled: !!mpg,
  });

  const { data: markPrice } = useQuery({
    queryKey: ["markPrice", connection.rpcEndpoint, productName],
    queryFn: () => getMarkPrice(manifest!, mpg!, product),
    enabled: !!manifest || !!mpg,
  });

  return {
    mpg,
    markPrice,
  };
};

export default useMarkPrice;
