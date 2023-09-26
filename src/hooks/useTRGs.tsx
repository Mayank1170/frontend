import { useWallet } from "@solana/wallet-adapter-react";
import useDexterity from "./useDexterity";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTRGFn, depositFn, getTRGs } from "@/utils/dexterity";

const useTRGs = () => {
  const { manifest } = useDexterity();
  const { publicKey } = useWallet();

  const queryClient = useQueryClient();

  const { data: trgs } = useQuery({
    queryKey: ["trgs", publicKey?.toBase58()],
    queryFn: async () => await getTRGs(manifest),
    enabled: !!manifest && !!publicKey && !!manifest.fields.wallet?.publicKey,
  });

  const {
    mutate: createTrg,
    isLoading: creatingTrg,
    isSuccess: createdTrg,
    error: createTrgError,
  } = useMutation({
    mutationKey: ["createTrg", publicKey?.toBase58()],
    mutationFn: async () => await createTRGFn(manifest),
  });

  const {
    mutate: createDeposit,
    isLoading: creatingDeposit,
    isSuccess: createdDeposit,
    error: createDepositError,
  } = useMutation({
    mutationKey: ["createDeposit", publicKey?.toBase58()],
    mutationFn: async (amount: number) => {
      if (!trgs) return;
      if (trgs.length === 0) {
        const trg = await createTRGFn(manifest);

        await depositFn(manifest, trg.pubkey, amount);
      } else {
        await depositFn(manifest, trgs[0].pubkey, amount);
      }

      queryClient.refetchQueries({ queryKey: ["trgs", publicKey?.toBase58()] });
    },
  });

  return {
    trgs,
    createTrg,
    creatingTrg,
    createdTrg,
    createTrgError,
    createDeposit,
    creatingDeposit,
    createdDeposit,
    createDepositError,
  };
};

export default useTRGs;
