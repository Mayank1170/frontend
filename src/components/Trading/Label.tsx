import React from "react";
import Image from "next/image";

export const Label: React.FC = () => {
  return (
    <div className="md:flex h-[25px] flex-row items-center justify-between absolute left-0 bottom-0 right-0 bg-black hidden">
      <div className="flex flex-row items-center gap-x-2">
        <div className="w-3 h-3 rounded-full bg-emerald-600 "></div>
        <p className="text-[10px] lg:text-[13px]">Operational</p>
        <p className="text-[10px] lg:text-[13px]">-</p>
        <div className="w-3 h-3 rounded-full bg-red-500 "></div>
        <p className="text-[10px] lg:text-[13px]">Triton RPC Pool 1 (129ms)</p>
        <p className="text-[10px] lg:text-[13px]">-</p>
        <p className="text-[10px] lg:text-[13px]">mainnet beta</p>
        <p className="text-[10px] lg:text-[13px]">-</p>
        <p className="text-[10px] lg:text-[13px]">4680 TPS</p>
        <p className="text-[10px] lg:text-[13px]">-</p>
        <p className="text-[10px] lg:text-[13px]">Priority Fees: Low</p>
      </div>
      <div className="flex flex-row items-center gap-x-6">
        <div className="flex flex-row gap-x-3 items-center">
          <p className="opacity-60 text-white text-[10px] lg:text-[13px] font-semibold font-['Red Hat Display']">
            POWERED BY
          </p>
          <Image
            src="/images/HXRO.png"
            width={85}
            height={100}
            alt={"Solana"}
          />
        </div>
        <div className="flex flex-row gap-x-4 mr-5">
          <Image
            src="/images/icons/discord.svg"
            height={16}
            width={20}
            alt="discord"
            className="hover:cursor-pointer"
          />
          <Image
            src="/images/social/twitter.svg"
            width={16}
            height={20}
            alt="twitter"
            className="hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};
