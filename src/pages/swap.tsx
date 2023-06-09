import {
  Calculations,
  Header,
  SwapItem,
  symbolOptions,
} from "@/components/Swap";
import { NextPageWithLayout } from "@/types/custom-next";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const SwapPage: NextPageWithLayout = () => {
  const [showCalculations, setShowCalculations] = useState(false);

  const toggleCalculations = () => setShowCalculations((prev) => !prev);

  return (
    <div className="mt-20 flex items-center flex-col justify-center pb-20">
      <Image
        src={"/images/swap-bg.svg"}
        fill={true}
        alt="bg"
        className="object-cover"
      />
      <motion.div
        className="relative z-10 rounded-[24px] p-8 pb-10 border border-[#00FFA34D] w-[750px]"
        style={{
          background:
            "radial-gradient(116.75% 116.14% at 0% 0%, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.056) 0.01%, rgba(255, 255, 255, 0) 100%), rgba(24, 24, 24, 0.56)",
        }}

      >
        <Header />
        <div className="flex flex-col gap-y-4 items-center mt-5 justify-center">
          <SwapItem
            value={3.4}
            usdValue={6237.3}
            symbol={symbolOptions[0]}
            balance={0.16}
          />
          <button className="absolute mt-4 hover:opacity-75">
            <Image
              src="/images/arrow-circle-down.svg"
              height={50}
              width={50}
              alt="arrow down icon"
            />
          </button>
          <SwapItem
            value={6159.65}
            usdValue={6159.65}
            symbol={symbolOptions[1]}
          />
        </div>
        <div className="flex justify-between mt-6">
          <p className="text-2xl text-white/70 font-medium">
            1 ETH = 1999.89 USDC ($2000)
          </p>
          <p className="text-2xl text-white/70 font-medium flex gap-x-2 items-center">
            <Image
              src="/images/icons/gas-station.svg"
              height={24}
              width={24}
              alt="gas station icon"
            />
            7.99
          </p>
        </div>
        <div className="w-full flex mt-4 mb-3 justify-center">
          <button
            className={
              classNames("hover:opacity-60 transition-all duration-300 ease-in-out", {
                "-rotate-180": showCalculations,
              })
            }
            onClick={toggleCalculations}
          >
            <Image
              src="/images/icons/arrow-circle-down-plain.svg"
              height={26}
              width={26}
              alt="arrow down icon"
            />
          </button>
        </div>
        <AnimatePresence>
          {showCalculations && <Calculations />}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SwapPage;
