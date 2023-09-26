import { useWallet } from "@solana/wallet-adapter-react";
import useDexterity from "./useDexterity";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  closeTRGFn,
  createTRGFn,
  depositFn,
  getTRGs,
  withdrawFn,
} from "@/utils/dexterity";
import { PublicKey } from "@solana/web3.js";

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
    mutate: closeTrg,
    isLoading: closingTrg,
    isSuccess: closedTrg,
    error: closeTrgError,
  } = useMutation({
    mutationKey: ["coseTrg", publicKey?.toBase58()],
    mutationFn: async (trgPubkey: PublicKey, trgAmount: number) =>
      await closeTRGFn(manifest, trgPubkey, trgAmount),
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

  const {
    mutate: createWithdrawal,
    isLoading: creatingWithdrawal,
    isSuccess: createdWithdrawal,
    error: createWithdrawalError,
  } = useMutation({
    mutationKey: ["createWithdrawal", publicKey?.toBase58()],
    mutationFn: async (amount: number) => {
      if (!trgs || trgs.length === 0) return;

      await withdrawFn(manifest, trgs[0].pubkey, amount);

      queryClient.refetchQueries({ queryKey: ["trgs", publicKey?.toBase58()] });
    },
  });

  return {
    trgs,
    // create trg
    createTrg,
    creatingTrg,
    createdTrg,
    createTrgError,
    // close trg
    closeTrg,
    closingTrg,
    closedTrg,
    closeTrgError,
    // deposit
    createDeposit,
    creatingDeposit,
    createdDeposit,
    createDepositError,
    // withdraw
    createWithdrawal,
    creatingWithdrawal,
    createdWithdrawal,
    createWithdrawalError,
  };
};

export default useTRGs;
