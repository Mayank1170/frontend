import { useOutsideClick } from "@/hooks/useOutsideClick";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

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

export const symbolOptions: Option[] = [
  {
    value: "USDC",
    icon: "/images/symbols/usdc.png",
  },
  {
    value: "ETH",
    icon: "/images/symbols/eth.png",
  },
];

export const SwapItem: React.FC<SwapItemProps> = ({
  value,
  usdValue,
  symbol: defaultSymbol,
  balance,
}) => {
  const [symbol, setSymbol] = useState<string>(defaultSymbol.value);

  return (
    <div className="bg-white/10 rounded-2xl py-4 px-5 flex items-center justify-between w-full">
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
            {balance}{" "}
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
