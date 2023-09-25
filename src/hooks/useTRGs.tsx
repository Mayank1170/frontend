import { useWallet } from "@solana/wallet-adapter-react";
import useDexterity from "./useDexterity";
import { useQuery } from "@tanstack/react-query";
import { getTRGs } from "@/utils/dexterity";

const useTRGs = () => {
  const { manifest } = useDexterity();
  const { publicKey } = useWallet();

  console.log("publicKey", publicKey?.toBase58());
  console.log("manifest", manifest);

  const { data: trgs } = useQuery({
    queryKey: ["trgs", publicKey?.toBase58()],
    queryFn: async () => await getTRGs(manifest),
    enabled: !!manifest && !!publicKey && !!manifest.fields.wallet?.publicKey,
  });

  return {
    trgs,
  };
};

export default useTRGs;
