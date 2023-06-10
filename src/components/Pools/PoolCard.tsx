import { usePoolsStore } from "@/store/usePoolsStore";
import { numberWithCommas } from "@/utils/numbers";
import Image from "next/image";

export interface PoolCardProps {
  name: string;
  icon: string;
  feeRate: number;
  fees: number;
  volume: number;
  liquidity: number;
  apr: number;
  id: string;
}

export const PoolCard: React.FC<PoolCardProps> = ({
  name,
  icon,
  feeRate,
  fees,
  volume,
  liquidity,
  id,
  apr,
}) => {
  const [setCurrentPool] = usePoolsStore((state) => [state.setCurrentPool]);
  return (
    <div
      className="rounded-2xl border border-[#7AD0A74D] flex flex-col items-center w-[370px] px-8 pb-5 pt-8 relative"
      style={{
        background:
          "linear-gradient(179.44deg, rgba(59, 176, 120, 0.25) 0.46%, rgba(24, 36, 30, 0.1) 99.5%)",
      }}
    >
      <div
        className="w-1/3 h-2 rounded-b-3xl opacity-30 absolute -top-0"
        style={{
          background:
            "linear-gradient(76.98deg, rgba(76, 255, 255, 0.56) 3.8%, #80FEE3 31.64%, #95FED8 42.63%, #00FFA3 92.69%)",
        }}
      />

      <Image src={icon} width={80} height={48} alt="icon" />
      <div className="text-2xl font-pilat font-medium mt-4">{name}</div>
      <hr className="w-full border-t-white/20 mt-5 mb-4" />

      <div className="flex justify-between font-bold w-full">
        <div>Fee Rate</div>
        <div className="text-right">{feeRate}%</div>
      </div>
      <div className="flex justify-between w-full">
        <div>24H Fees</div>
        <div className="text-right">${numberWithCommas(fees)}</div>
      </div>

      <div className="flex justify-between w-full">
        <div>24H Volume</div>
        <div className="text-right">${numberWithCommas(volume)}</div>
      </div>

      <div className="flex justify-between w-full">
        <div>Liquidity</div>
        <div className="text-right">${numberWithCommas(liquidity)}</div>
      </div>

      <div
        className="px-4 py-2.5 rounded-lg mt-2 mb-4"
        style={{
          background:
            "linear-gradient(149.5deg, rgba(255, 255, 255, 0.135) 0%, rgba(255, 255, 255, 0.0165) 100%)",
        }}
      >
        No rewards
      </div>

      <div className="text-2xl mb-4">{apr}% APR</div>

      <button
        className="w-full py-2 rounded-xl font-bold hover:opacity-80 transition-all ease-in-out duration-200"

        style={{
          background: "linear-gradient(275.16deg, #3BB078 0%, #59B689 100%)",
        }}
        onClick={() => {
          setCurrentPool(id);
        }}
      >
        Deposit
      </button>
    </div>
  );
};
