import { useOutsideClick } from "@/hooks/useOutsideClick";
import { NextPageWithLayout } from "@/types/custom-next";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import Select, { components } from "react-select";

const SwapPage: NextPageWithLayout = () => {
  return (
    <div className="mt-20 flex items-center flex-col justify-center">
      <Image
        src={"/images/swap-bg.svg"}
        fill={true}
        alt="bg"
        className="object-cover"
      />
      <div
        className="relative z-10 rounded-[20px] p-8 pb-4 border border-[#00FFA34D] w-[750px]"
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
        <div className="w-full flex mt-4 justify-center">
          <button className="hover:opacity-60 transition-opacity duration-200 ease-in-out">
            <Image
              src="/images/icons/arrow-circle-down-plain.svg"
              height={26}
              width={26}
              alt="arrow down icon"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = () => (
  <div className="flex w-full justify-between items-center">
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
        Swap
      </h2>
      <Image
        src="/images/icons/refresh-circle.svg"
        width={50}
        height={50}
        alt="refresh cycle icon"
      />
    </div>
    <button
      className="font-semibold text-[18px] h-[48px] rounded-2xl py-0 px-8"
      style={{
        background: "linear-gradient(95.16deg, #3BB078 0%, #76B999 100%)",
      }}
    >
      Connect Wallet
    </button>
  </div>
);

interface SwapItemProps {
  value: number;
  usdValue: number;
  symbol: Option;
  balance?: number;
}

type Option = {
  value: string;
  icon: string;
};

const symbolOptions: Option[] = [
  {
    value: "USDC",
    icon: "/images/symbols/usdc.png",
  },
  {
    value: "ETH",
    icon: "/images/symbols/eth.png",
  },
];

const SwapItem: React.FC<SwapItemProps> = ({
  value,
  usdValue,
  symbol: defaultSymbol,
  balance,
}) => {
  const [symbol, setSymbol] = useState<string>(defaultSymbol.value);

  return (
    <div className="bg-white/10 rounded-2xl py-7 px-5 flex items-center justify-between w-full">
      <div>
        <h3 className="text-4xl font-bold">{value}</h3>
        <p className="text-white/40 text-[14px] mt-1">${usdValue}</p>
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <SymbolSelect
          value={symbol}
          onChange={(newSymbol) => setSymbol(newSymbol)}
        />

        {balance && (
          <p className="text-white/40 text-[14px] font-semibold">
            Balance:
            {balance}
            <span className="text-[#80FEE3]">Max</span>
          </p>
        )}
      </div>
    </div>
  );
};

type SelectProps = {
  onChange: (option: string) => void;
  value: string;
};

const SymbolSelect: React.FC<SelectProps> = ({ onChange, value }) => {
  const selectedSymbol = symbolOptions.find(
    (option) => option.value === value
  ) as Option;
  const [showOptions, setShowOptions] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleOpenDropdown = () => setShowOptions(true);
  const handleCloseDropdown = () => setShowOptions(false);

  useOutsideClick(dropdownRef, handleCloseDropdown);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => handleOpenDropdown()}
        className="flex items-center gap-x-2 px-4 py-2 bg-black/30 rounded-full"
      >
        <Image
          height={24}
          width={24}
          src={selectedSymbol.icon}
          alt="symbol icon"
        />
        <p className="text-white text-[20px] font-bold">{value}</p>
        <Image
          src="/images/icons/chevron-down.svg"
          width={24}
          height={24}
          alt="chevron down icon"
        />
      </button>
      <AnimatePresence>
        {showOptions && (
          <motion.div
            initial={{ opacity: 0, y: -10, x: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
            exit={{ opacity: 0, y: -10, scale: 0.8, x: 15 }}
            transition={{ duration: 0.2 }}
            className="absolute bg-[#242323] rounded-xl px-2 py-2 pb-6 z-[10000] w-44 mt-1 right-0 shadow-black shadow-2xl"
          >
            {symbolOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  if (option.value !== value) {
                    onChange(option.value);

                    handleCloseDropdown();
                  }
                }}
                className="flex items-center gap-x-2 px-4 py-2 rounded-lg hover:bg-[#393535] transition-colors duration-200 ease-in-out w-full"
              >
                <Image
                  height={24}
                  width={24}
                  src={option.icon}
                  alt="symbol icon"
                />
                <p className="text-white text-[16px] h-[21px] font-medium">
                  {option.value}
                </p>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SwapPage;
