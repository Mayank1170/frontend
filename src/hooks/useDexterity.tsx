import { getManifest, getManifestWithWallet, getMpg } from "@/utils/dexterity";
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

  return {
    manifest,
    mpg,
  };
};

export default useDexterity;
