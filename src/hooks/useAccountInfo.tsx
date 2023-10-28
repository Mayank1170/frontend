import { useQuery } from "@tanstack/react-query";
import useTRGs from "./useTRGs";
import { useWallet } from "@solana/wallet-adapter-react";
import { getAccountInfo } from "@/utils/dexterity";
import useDexterity from "./useDexterity";

const useAccountInfo = () => {
  const { trgs } = useTRGs();
  const { manifest } = useDexterity();
  const { publicKey } = useWallet();

  const { data: accountInfo } = useQuery({
    queryKey: ["accountInfo", publicKey?.toBase58()],
    queryFn: async () => {
      return await getAccountInfo(manifest!, trgs![0].pubkey);
    },
    enabled:
      !!manifest &&
      !!publicKey &&
      !!manifest.fields.wallet?.publicKey &&
      !!trgs &&
      trgs.length > 0,
  });

  console.log("accountInfo:", accountInfo);

  return { accountInfo };
};

export default useAccountInfo;
