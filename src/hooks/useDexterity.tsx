import { getManifest, getMpg } from "@/utils/dexterity";
import { useConnection } from "@solana/wallet-adapter-react";
import { useQuery } from "@tanstack/react-query";

const useDexterity = () => {
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

  return {
    manifest,
    mpg,
  };
};

export default useDexterity;
