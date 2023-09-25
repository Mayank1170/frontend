import { useWallet } from "@solana/wallet-adapter-react";
import useDexterity from "./useDexterity";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createTRGFn, getTRGs } from "@/utils/dexterity";

const useTRGs = () => {
  const { manifest } = useDexterity();
  const { publicKey } = useWallet();

  const { data: trgs } = useQuery({
    queryKey: ["trgs", publicKey?.toBase58()],
    queryFn: async () => await getTRGs(manifest),
    enabled: !!manifest && !!publicKey && !!manifest.fields.wallet?.publicKey,
  });

  //   const createTrg = useMemo(() => createTRGFn(manifest), [manifest]);

  const {
    mutate: createTrg,
    isLoading: creatingTrg,
    isSuccess: createdTrg,
    error: createTrgError,
  } = useMutation({
    mutationKey: ["createTrg", publicKey?.toBase58()],
    mutationFn: async () => await createTRGFn(manifest),
  });

  return {
    trgs,
    createTrg,
    creatingTrg,
    createdTrg,
    createTrgError,
  };
};

export default useTRGs;
