import Image from "next/image";
import { useState } from "react";
import ArrowRight from "../icons/ArrowRight";
import { RangeSlider } from "./Slider";

const options = [0, 25, 50, 75, 100];

export const TradeControls: React.FC = () => {
  const [leverage, setLeverage] = useState(0);
  return (
    <div
      style={{
        background:
          "linear-gradient(149.5deg, rgba(255, 255, 255, 0.135) 0%, rgba(255, 255, 255, 0.0165) 100%)",
      }}
      className="p-8 flex-1 w-[100%] h-[100%] rounded-[10px] border-[0.5px] border-white/20"
    >
      <div className="mb-6 font-sans">
        <div className="flex items-center gap-x-4 mb-8">
          <Image
            src="/images/icons/trade.svg"
            height={42}
            width={42}
            alt="trade"
          />
          <h3 className="font-bold text-3xl">Trade</h3>
        </div>
        <Inputs />
      </div>
      <div className="space-y-4">
      <div className="space-x-1.5 flex flex-row">
        <button className="w-[100%] h-10 bg-[#39FFA0]/20 border-2 rounded-md border-green-500 text-green-400 font-sans font-bold">Buy / Long</button>
        <button className="w-[100%] h-10 bg-[#3E2B2B] border-2 rounded-md border-[#FF5D5D] text-[#FF5D5D] font-sans font-bold">Sell / Short</button>
      </div>
      <div className="flex flex-row justify-between content-center items-center">
      <h3 className="text-[20px] font-semibold font-sans">Accesible Leverage</h3>
      <div className="flex justify-center items-center bg-black w-28 h-8 text-white border-2 rounded-md border-green-500">
    <h1 className="m-0">200,000$</h1>
</div>
      </div>
      </div>
      <hr className="w-full border-t border-t-white/10 mt-6 mb-6" />
      <Prices />
    </div>
  );
};

const Inputs = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 max-w-[300px] gap-x-6 gap-y-4 items-end">
      <div id="quantity-input" className="flex flex-col gap-y-1">
        <label htmlFor="quantity" className="opacity-70">
          Quantity
        </label>
        <input
          type="string"
          name="quantity"
          id="quantity"
          className="w-full bg-[#FFFFFF26] rounded-lg px-4 py-2 border border-white/20"
        />
      </div>
      <div id="Order Type" className="flex flex-col gap-y-1 font-sans">
        <label htmlFor="order-type" className="opacity-70">
          Order Type
        </label>
        <select
          name="order-type"
          id="order-type"
          className="w-full bg-[#FFFFFF26] rounded-lg px-4 py-2 border border-white/20 "
        >
          <option value="market">Market</option>
          <option value="limit">Limit</option>
        </select>
      </div>
      <div id="price-usd" className="flex flex-col gap-y-1 font-sans">
        <label htmlFor="price" className="opacity-70 ">
          Price (USD)
        </label>
        <div className="flex items-center gap-x-2 bg-[#FFFFFF26] rounded-lg px-4 py-2 w-full border border-white/20">
          <input
            type="string"
            name="price"
            id="price"
            className="flex-1 bg-transparent w-[4.5rem]"
          />
          <span>USD</span>
        </div>
      </div>
      <div id="crypto-input">
        <div className="flex items-center gap-x-2 bg-[#FFFFFF26] rounded-lg px-4 py-2 w-full border border-white/20 font-sans">
          <input
            type="string"
            name="crypto"
            id="crypto"
            className="bg-transparent p-0 w-20"
          />
          <Image
            src="/images/btc.png"
            width={24}
            height={24}
            alt="bitcoin"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

interface LeverageInputProps {
  value: number;
  setValue: (value: number) => void;
  options: number[];
}

const Leverage: React.FC<LeverageInputProps> = ({
  value,
  setValue,
  options,
}) => {
  return (
    <div>
      <div className="flex flex-wrap gap-x-2 font-sans">
        {options.map((leverage) => (
          <button
            key={leverage}
            className={`w-[80px] h-[40px] rounded-[10px] border-[0.5px] border-white/20 transition duration-200 ${
              value === leverage
                ? "bg-white/40 ring-2 ring-white/70"
                : "bg-white/20"
            }`}
            onClick={() => setValue(leverage)}
          >
            {leverage}X
          </button>
        ))}
      </div>
    </div>
  );
};

const Prices: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-y-4 font-sans">
      <div className="flex justify-between">
        <p className="text-white/70">Est. Entry Price</p>
        <p className="text-white/80 text-right">$40.6123</p>
      </div>
      <div className="flex justify-between">
        <p className="text-white/70">Est. Price impact</p>
        <p className="text-white/80 text-right">0%</p>
      </div>
      <div className="flex justify-between">
        <p className="text-white/70">Est. Liquidation Price</p>
        <p className="text-white/80 text-right flex gap-x-2">
          None <ArrowRight /> 18.43%
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-white/70">Acct. Leverage</p>
        <p className="text-white/80 text-right flex gap-x-2">
          0X
          <ArrowRight /> 8X
        </p>
      </div>
      <div className="flex justify-between">
        <p className="text-white/70">Position</p>
        <p className="text-white/80 text-right flex gap-x-2">
          0 <ArrowRight /> 0.16002 LONG
        </p>
      </div>
    </div>
  );
};
