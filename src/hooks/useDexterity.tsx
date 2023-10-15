import {
  getManifest,
  getManifestWithWallet,
  getMpg,
  getProducts,
} from "@/utils/dexterity";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";

const useDexterity = () => {
  const { connection } = useConnection();
  const { publicKey, signTransaction, signAllTransactions } = useWallet();

  const { data: manifest } = useQuery({
    queryKey: ["manifest", connection.rpcEndpoint, publicKey],
    queryFn: async () =>
      publicKey && signTransaction && signAllTransactions
        ? await getManifestWithWallet(
            connection.rpcEndpoint,
            publicKey,
            signTransaction,
            signAllTransactions
          )
        : await getManifest(connection.rpcEndpoint),
  });

  const { data: mpg } = useQuery({
    queryKey: ["mpg", connection.rpcEndpoint],
    queryFn: () => getMpg(manifest!),
    enabled: !!manifest,
  });

  const { data: products } = useQuery({
    queryKey: ["products", connection.rpcEndpoint],
    queryFn: () => getProducts(mpg?.desiredMpg!),
    enabled: !!mpg?.desiredMpg,
  });

  return {
    manifest,
    mpg: mpg?.desiredMpg,
    desiredOrderbooks: mpg?.desiredOrderbooks,
    products,
  };
};

export default useDexterity;