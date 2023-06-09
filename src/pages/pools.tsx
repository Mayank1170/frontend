import { SearchBox } from "@/components/Pools";
import { PoolCard, PoolCardProps } from "@/components/Pools/PoolCard";
import { NextPageWithLayout } from "@/types/custom-next";

const poolCards: PoolCardProps[] = [
  {
    icon: "/images/symbols/sol-usdc.svg",
    name: "SOL/USDC",
    feeRate: 0.05,
    liquidity: 1781616,
    volume: 45367809,
    fees: 2258,
    apr: 45.5,
  },
  {
    icon: "/images/symbols/sol-usdc.svg",
    name: "SOL/USDC",
    feeRate: 0.05,
    liquidity: 1781616,
    volume: 45367809,
    fees: 2258,
    apr: 45.5,
  },
  {
    icon: "/images/symbols/sol-usdc.svg",
    name: "SOL/USDC",
    feeRate: 0.05,
    liquidity: 1781616,
    volume: 45367809,
    fees: 2258,
    apr: 45.5,
  },
  {
    icon: "/images/symbols/sol-usdc.svg",
    name: "SOL/USDC",
    feeRate: 0.05,
    liquidity: 1781616,
    volume: 45367809,
    fees: 2258,
    apr: 45.5,
  },
  {
    icon: "/images/symbols/sol-usdc.svg",
    name: "SOL/USDC",
    feeRate: 0.05,
    liquidity: 1781616,
    volume: 45367809,
    fees: 2258,
    apr: 45.5,
  },
  {
    icon: "/images/symbols/sol-usdc.svg",
    name: "SOL/USDC",
    feeRate: 0.05,
    liquidity: 1781616,
    volume: 45367809,
    fees: 2258,
    apr: 45.5,
  },
  {
    icon: "/images/symbols/sol-usdc.svg",
    name: "SOL/USDC",
    feeRate: 0.05,
    liquidity: 1781616,
    volume: 45367809,
    fees: 2258,
    apr: 45.5,
  },
  {
    icon: "/images/symbols/sol-usdc.svg",
    name: "SOL/USDC",
    feeRate: 0.05,
    liquidity: 1781616,
    volume: 45367809,
    fees: 2258,
    apr: 45.5,
  },
  {
    icon: "/images/symbols/sol-usdc.svg",
    name: "SOL/USDC",
    feeRate: 0.05,
    liquidity: 1781616,
    volume: 45367809,
    fees: 2258,
    apr: 45.5,
  },
  {
    icon: "/images/symbols/sol-usdc.svg",
    name: "SOL/USDC",
    feeRate: 0.05,
    liquidity: 1781616,
    volume: 45367809,
    fees: 2258,
    apr: 45.5,
  },
];

const PoolsPage: NextPageWithLayout = () => {
  return (
    <div className="">
      <SearchBox />
      <div className="flex flex-wrap gap-10 mt-12">
        {poolCards.map((poolCard) => (
          <PoolCard key={poolCard.name} {...poolCard} />
        ))}
      </div>
    </div>
  );
};

export default PoolsPage;
