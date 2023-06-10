import { SearchBox } from "@/components/Pools";
import { AddLiquidty } from "@/components/Pools/AddLiquidity";
import { PoolCard, PoolCardProps } from "@/components/Pools/PoolCard";
import { usePoolsStore } from "@/store/usePoolsStore";
import { NextPageWithLayout } from "@/types/custom-next";
import { useState } from "react";

const poolCards: PoolCardProps[] = [
  {
    icon: "/images/symbols/sol-usdc.svg",
    name: "SOL/USDC",
    feeRate: 0.05,
    liquidity: 1781616,
    volume: 45367809,
    fees: 2258,
    apr: 45.5,
    id: "sol-usdc",
  },
];


const PoolsPage: NextPageWithLayout = () => {
  const [currentPool] = usePoolsStore((state) => [state.currentPool]);
  return (
    <div className="">
      {!currentPool ? (
        <>
          <SearchBox />
          <PoolCards />
        </>
      ) : (
        <AddLiquidty />
      )}
    </div>
  );
};

const PoolCards = () => {
  return (
    <div className="flex flex-wrap gap-10 mt-12">
      {poolCards.map((poolCard) => (
        <PoolCard key={poolCard.name} {...poolCard} />
      ))}
    </div>
  );
};

export default PoolsPage;
