import {
  getManifest,
  getMarkPrice,
  getMpg,
  getProduct,
} from "@/utils/dexterity";
import { useConnection } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";

const useMarkPrice = (productName: string) => {
  const { connection } = useConnection();

  const { data: manifest } = useQuery({
    queryKey: ["manifest", connection.rpcEndpoint],
    queryFn: async () => await getManifest(connection.rpcEndpoint),
  });

  const { data: mpg } = useQuery({
    queryKey: ["mpg", connection.rpcEndpoint],
    queryFn: () => getMpg(manifest),
    enabled: !!manifest,
  });

  const { data: product } = useQuery({
    queryKey: ["product", connection.rpcEndpoint, productName],
    queryFn: () => getProduct(mpg, productName),
    enabled: !!mpg,
  });

  const { data: markPrice } = useQuery({
    queryKey: ["markPrice", connection.rpcEndpoint, productName],
    queryFn: () => getMarkPrice(manifest, mpg, product),
    enabled: !!manifest || !!mpg,
  });

  return {
    mpg,
    markPrice,
  };
};

export default useMarkPrice;
