import { motion } from "framer-motion";
import Image from "next/image";
import { SwapItem, symbolOptions } from "../Swap";
import { usePoolsStore } from "@/store/usePoolsStore";

export const AddLiquidty: React.FC = () => {
  const [setCurrentPool] = usePoolsStore((state) => [state.setCurrentPool]);

  const handleGoBack = () => setCurrentPool("");

  return (
    <div className="flex flex-col w-full items-center">
      <Image
        src={"/images/swap-bg.svg"}
        fill={true}
        alt="bg"
        className="object-cover"
      />
      <button
        onClick={handleGoBack}
        className="absolute left-10 opacity-30 hover:opacity-100 transition-opacity duration-200 ease-in-out"
      >
        <Image
          src="/images/icons/go-back.svg"
          height={45}
          width={45}
          alt="go back"
        />
      </button>
      <motion.div
        className="relative z-10 rounded-[24px] p-8 pb-10 border border-[#00FFA34D] w-[500px]"
        style={{
          background:
            "radial-gradient(116.75% 116.14% at 0% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.056) 0.01%, rgba(255, 255, 255, 0) 100%), rgba(24, 24, 24, 0.56)",
        }}
      >
        <div className="flex items-center gap-x-2">
          <h2
            style={{
              background:
                "linear-gradient(76.98deg, rgba(76, 255, 255, 0.56) 3.8%, #80FEE3 31.64%, #95FED8 42.63%, #00FFA3 92.69%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="font-bold text-[40px]"
          >
            Add Liquidity
          </h2>
        </div>
        <div className="flex flex-col gap-y-4 items-center mt-8 justify-center">
          <SwapItem value={3.4} usdValue={6237.3} symbol={symbolOptions[0]} />
          <Image
            src="/images/icons/plus.svg"
            height={24}
            width={24}
            alt="plus"
            className="my-1"
          />
          <SwapItem value={3.4} usdValue={6237.3} symbol={symbolOptions[1]} />
        </div>
        <div className="mt-8">
          <h4 className="mb-3 font-semibold text-sm">Prices and Pool Share</h4>
          <div className="bg-white/10 rounded-lg flex justify-between py-3 px-4 text-center">
            <div>
              <div>18821.21</div>
              <div className="text-[12px] text-white/40">USDC Per Eth</div>
            </div>
            <div>
              <div>0.000004223</div>
              <div className="text-[12px] text-white/40">ETH Per USDC</div>
            </div>

            <div>
              <div>{"<0.01%"}</div>
              <div className="text-[12px] text-white/40">Share of Pool</div>
            </div>
          </div>
        </div>
        <button
          style={{
            background: "linear-gradient(95.16deg, #3BB078 0%, #8FBFA8 100%)",
          }}
          className="rounded-2xl py-3 mt-12 w-full text-[20px]"
        >
          Connect Wallet
        </button>
      </motion.div>
    </div>
  );
};
