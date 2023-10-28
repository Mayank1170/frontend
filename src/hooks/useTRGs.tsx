import { useWallet } from "@solana/wallet-adapter-react";
import useDexterity from "./useDexterity";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  closeTRGFn,
  createTRGFn,
  depositFn,
  getTRGBalance,
  getTRGs,
  placeLimitOrder,
  placeMarketOrder,
  withdrawFn,
} from "@/utils/dexterity";
import { PublicKey } from "@solana/web3.js";

const useTRGs = () => {
  const { manifest } = useDexterity();
  const { publicKey } = useWallet();

  const queryClient = useQueryClient();

  const { data: trgs } = useQuery({
    queryKey: ["trgs", publicKey?.toBase58()],
    queryFn: async () => await getTRGs(manifest!),
    enabled: !!manifest && !!publicKey && !!manifest.fields.wallet?.publicKey,
  });

  const { data: trgBalance } = useQuery({
    queryKey: ["trgBalance", publicKey?.toBase58()],
    queryFn: async () => await getTRGBalance(manifest!, trgs![0].pubkey),
    enabled:
      !!manifest &&
      !!publicKey &&
      !!manifest.fields.wallet?.publicKey &&
      !!trgs &&
      trgs.length > 0,
  });

  const {
    mutate: createTrg,
    isLoading: creatingTrg,
    isSuccess: createdTrg,
    error: createTrgError,
  } = useMutation({
    mutationKey: ["createTrg", publicKey?.toBase58()],
    mutationFn: async () => await createTRGFn(manifest!),
  });

  const {
    mutate: closeTrg,
    isLoading: closingTrg,
    isSuccess: closedTrg,
    error: closeTrgError,
  } = useMutation({
    mutationKey: ["coseTrg", publicKey?.toBase58()],
    mutationFn: async ({
      trgPubkey,
      trgAmount,
    }: {
      trgPubkey: PublicKey;
      trgAmount: number;
    }) => {
      await closeTRGFn(manifest!, trgPubkey, trgAmount);
      await queryClient.refetchQueries({
        queryKey: ["trgs", publicKey?.toBase58()],
      });
    },
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
        await createTRGFn(manifest!);

        const trgsNew = await getTRGs(manifest!);

        console.log("trg created for deposit", trgsNew);

        await depositFn(manifest!, trgsNew[0].pubkey, amount);
      } else {
        await depositFn(manifest!, trgs[0].pubkey, amount);
      }

      queryClient.refetchQueries({
        queryKey: ["trgBalance", publicKey?.toBase58()],
      });
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

      await withdrawFn(manifest!, trgs[0].pubkey, amount);

      queryClient.refetchQueries({
        queryKey: ["trgBalance", publicKey?.toBase58()],
      });
    },
  });

  const {
    mutate: createLimitOrder,
    isLoading: creatingLimitOrder,
    isSuccess: createdLimitOrder,
    error: createLimitOrderError,
  } = useMutation({
    mutationKey: ["createLimitOrder", publicKey?.toBase58()],
    mutationFn: async ({
      type,
      price,
      size,
      productName,
    }: {
      type: "buy" | "sell";
      price: number;
      size: number;
      productName: string;
    }) => {
      if (!trgs || trgs.length === 0) return;
      await placeLimitOrder(
        manifest!,
        type,
        price,
        size,
        trgs![0].pubkey,
        productName
      );

      queryClient.refetchQueries({
        queryKey: ["trgBalance", publicKey?.toBase58()],
      });
    },
  });
  const {
    mutate: createMarketOrder,
    isLoading: creatingMarketOrder,
    isSuccess: createdMarketOrder,
    error: createMarketOrderError,
  } = useMutation({
    mutationKey: ["createMarketOrder", publicKey?.toBase58()],
    mutationFn: async ({
      type,
      size,
      productName,
      slippage,
      markPrice,
    }: {
      type: "buy" | "sell";
      size: number;
      productName: string;
      slippage: number;
      markPrice: number;
    }) => {
      if (!trgs || trgs.length === 0) return;
      await placeMarketOrder(
        manifest!,
        type,
        size,
        trgs![0].pubkey,
        productName,
        markPrice,
        slippage
      );

      queryClient.refetchQueries({
        queryKey: ["trgBalance", publicKey?.toBase58()],
      });
    },
  });

  const {
    mutate: createMarketOrder,
    isLoading: creatingMarketOrder,
    isSuccess: createdMarketOrder,
    error: createMarketOrderError,
  } = useMutation({
    mutationKey: ["createMarketOrder", publicKey?.toBase58()],
    mutationFn: async ({
      type,
      size,
      productName,
      slippage,
      markPrice,
    }: {
      type: "buy" | "sell";
      size: number;
      productName: string;
      slippage: number;
      markPrice: number;
    }) => {
      if (!trgs || trgs.length === 0) return;
      await placeMarketOrder(
        manifest!,
        type,
        size,
        trgs![0].pubkey,
        productName,
        markPrice,
        slippage
      );

      queryClient.refetchQueries({
        queryKey: ["trgBalance", publicKey?.toBase58()],
      });
    },
  });

  return {
    trgs,
    trgBalance,
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
    // deposit placeMarketOrder,
    createDeposit,
    creatingDeposit,
    createdDeposit,
    createDepositError,
    // withdraw
    createWithdrawal,
    creatingWithdrawal,
    createdWithdrawal,
    createWithdrawalError,
    // place limit order
    createLimitOrder,
    creatingLimitOrder,
    createdLimitOrder,
    createLimitOrderError,
    // place market order
    createMarketOrder,
    creatingMarketOrder,
    createdMarketOrder,
    createMarketOrderError,
  };
};

export default useTRGs;
