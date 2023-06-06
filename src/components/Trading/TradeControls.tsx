import Image from "next/image";
import { useState } from "react";
import ArrowRight from "../icons/ArrowRight";

export const TradeControls: React.FC = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(149.5deg, rgba(255, 255, 255, 0.135) 0%, rgba(255, 255, 255, 0.0165) 100%)",
      }}
      className="p-8 flex-1 w-[500px] rounded-[20px] border-[0.5px] border-white/20"
    >
      <div className="mb-6">
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
      <Leverage />
      <hr className="w-full border-t border-t-white/10 mt-12 mb-6" />
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
      <div id="Order Type" className="flex flex-col gap-y-1">
        <label htmlFor="order-type" className="opacity-70">
          Order Type
        </label>
        <select
          name="order-type"
          id="order-type"
          className="w-full bg-[#FFFFFF26] rounded-lg px-4 py-2 border border-white/20"
        >
          <option value="market">Market</option>
          <option value="limit">Limit</option>
        </select>
      </div>
      <div id="price-usd" className="flex flex-col gap-y-1">
        <label htmlFor="price" className="opacity-70">
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
        {/* <label htmlFor="crypto">Crypto</label> */}
        <div className="flex items-center gap-x-2 bg-[#FFFFFF26] rounded-lg px-4 py-2 w-full border border-white/20">
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

const leverageOptions = ["0X", "25X", "50X", "75X", "100X"];

const Leverage: React.FC = () => {
  const [leverage, setLeverage] = useState(0);
  return (
    <div>
      <h3 className="text-[24px] font-semibold mb-2">Leverage</h3>
      <div className="flex flex-wrap gap-x-2">
        {leverageOptions.map((option, index) => (
          <button
            key={index}
            className={`w-[80px] h-[40px] rounded-[10px] border-[0.5px] border-white/20 transition duration-200 ${
              leverage === index
                ? "bg-white/40 ring-2 ring-white/70"
                : "bg-white/20"
            }`}
            onClick={() => setLeverage(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

const Prices: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="flex justify-between">
        <p className="text-white/70">Est. Entry Price</p>
        <p className="text-white/80 text-right">$40.6123</p>
      </div>
      <div className="flex justify-between">
        <p className="text-white/70">Est. Price impact</p>
        <p className="text-white/80 text-right">0.01%</p>
      </div>
      <div className="flex justify-between">
        <p className="text-white/70">Est. Liquidation Price</p>
        <p className="text-white/80 text-right flex gap-x-2">
          None <ArrowRight /> 18.45%
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
          0 <ArrowRight /> 0.16222 Short
        </p>
      </div>
    </div>
  );
};
