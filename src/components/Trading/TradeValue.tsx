import { useState } from "react";
import { useDebugValue } from "react";
import { CgArrowsShrinkV } from "react-icons/cg";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import classNames from "classnames";
import { motion } from "framer-motion";
import useTradeData from "@/hooks/useTradeData";
import { PricingLevels } from "./PricingLevels";
import useProducts from "@/hooks/useProducts";
import { getProduct } from "@/utils/dexterity";

const marketValue: MarketDataProps[] = [
  {
    id: 1,
    priceValue: 691.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 2,
    priceValue: 691.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 3,
    priceValue: 691.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 4,
    priceValue: 691.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 5,
    priceValue: 691.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 6,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 7,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 8,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 9,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 10,
    priceValue: 161.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 11,
    priceValue: 461.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 12,
    priceValue: 200.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 13,
    priceValue: 200.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 14,
    priceValue: 200.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 15,
    priceValue: 200.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 16,
    priceValue: 200.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 17,
    priceValue: 200.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 18,
    priceValue: 15661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 19,
    priceValue: 321.7,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 20,
    priceValue: 321.7,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 21,
    priceValue: 321.7,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 22,
    priceValue: 321.7,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 23,
    priceValue: 321.7,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 24,
    priceValue: 321.7,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 25,
    priceValue: 321.7,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 26,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 27,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 28,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 29,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 30,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 31,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 32,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 33,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 34,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 35,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
  {
    id: 36,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#8EF884",
  },
  {
    id: 37,
    priceValue: 61.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "#FF5D5D",
  },
];

const spreadValue: SpreadDataProps[] = [
  {
    id: 1,
    priceValue: 691.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "green",
  },
  {
    id: 2,
    priceValue: 161.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 3,
    priceValue: 461.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "Green",
  },
  {
    id: 4,
    priceValue: 461.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "Green",
  },
  {
    id: 5,
    priceValue: 461.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "Green",
  },
  {
    id: 6,
    priceValue: 461.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "Green",
  },
  {
    id: 7,
    priceValue: 461.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "Green",
  },
  {
    id: 8,
    priceValue: 861.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 9,
    priceValue: 15661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 10,
    priceValue: 321.7,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "green",
  },
  {
    id: 11,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 12,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 13,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 14,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 15,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 16,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 17,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 18,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 19,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
  {
    id: 20,
    priceValue: 18661.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "green",
  },
  {
    id: 21,
    priceValue: 61.1,
    sizeValue: 6.345,
    totalValue: 58.567,
    textColor: "red",
  },
];

export const TradeValue: React.FC = () => {
  return (
    <div>
      <NavLinks />
    </div>
  );
};

marketValue.sort((a, b) => b.priceValue - a.priceValue);
spreadValue.sort((a, b) => a.priceValue - b.priceValue);

const MarketDataContainer: React.FC = () => {
  return (
    <div>
      {marketValue.map((data) => (
        <MarketData
          key={data.id}
          priceValue={data.priceValue}
          sizeValue={data.sizeValue}
          totalValue={data.totalValue}
          textColor={data.textColor}
        />
      ))}
    </div>
  );
};
export default MarketDataContainer;

export const SpreadDataContainer: React.FC = () => {
  return (
    <div>
      {spreadValue.map((data) => (
        <SpreadData
          key={data.id}
          priceValue={data.priceValue}
          sizeValue={data.sizeValue}
          totalValue={data.totalValue}
          textColor={data.textColor}
        />
      ))}
    </div>
  );
};

interface TabLinks {
  name: string;
  label: string;
  click: string;
}
const tabLinks: TabLinks[] = [
  {
    name: "orderBook",
    label: "Books",
    click: "Books",
  },
  {
    name: "recentTrades",
    label: "Trades",
    click: "Trades",
  },
];

export const NavLinks: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<
    "orderBook" | "recentTrades"
  >("orderBook");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleButtonClick = (
    componentName: "orderBook" | "recentTrades",
    index: number
  ) => {
    setActiveComponent(componentName);
    setActiveIndex(index);
    setActiveTabIndex(index);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col w-full items-center ">
      <div className="flex w-full rounded-t-lg  bg-[#202020] relative">
        {tabLinks.map((link, index) => (
          <button
            onClick={() =>
              handleButtonClick(
                link.click as "orderBook" | "recentTrades",
                index
              )
            }
            key={link.label}
            className={classNames(
              "w-full h-12 rounded-lg flex items-center justify-center relative z-[9] transition-colors duration-200 ease-in-out font-semibold",
              {
                "text-black": activeIndex === index,
                "text-white": activeComponent !== link.click,
                "bg-none": activeIndex === index,
              }
            )}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(activeTabIndex)}
          >
            {link.label}
          </button>
        ))}
        <motion.div
          id="active-icon"
          className={classNames("h-full w-[50%] absolute rounded-t-lg", {
            "bg-gradient-to-r from-emerald-700 to-emerald-300":
              activeIndex !== -1,
          })}
          animate={{
            x: `${activeIndex * 100}%`,
            opacity: activeIndex !== -1 ? 1 : -1,
          }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
        />
      </div>
      <div className="flex flex-row items-center w-full bg-neutral-800 border-[0.5px] border-white/20 border-b-0 justify-between ">
        <div className="flex flex-row ml-3 items-center gap-x-1 my-1">
          <CgArrowsShrinkV className="text-lg" />
          <p className="text-white text-base font-normal font-['Red Hat Display'] ">
            Grouping
          </p>
        </div>
        <div
          className="flex mr-3 items-center my-1"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="w-fit h-fit px-2 py-1 bg-neutral-700 rounded-md justify-start items-center gap-1 inline-flex">
            <div className="justify-start items-center gap-1 flex">
              <p className="text-white text-sm font-normal font-['Red Hat Display']">
                0.01
              </p>
              {!isOpen ? (
                <BiChevronDown className="h-[25px] w-[25px] xl:h-[17px] xl:w-[17px]" />
              ) : (
                <BiChevronUp className="h-[25px] w-[25px]  xl:h-[17px] xl:w-[17px]" />
              )}
            </div>
          </div>
        </div>
      </div>
      {activeIndex === 0 ? <OrderBook /> : <RecentTrades />}
    </div>
  );
};

export const OrderBook: React.FC = () => {
  // const { mpg, markPrice, orderbookData } = useTradeData("Price     ");
  // if (!orderbookData) {
  //   return <div>Loading...</div>;
  // // }
  // console.log(mpg, markPrice, orderbookData);

   const OrderBook = useTradeData("ETH0D231014     ");
   
   
  const { products,selectedProduct, setSelectedProduct, openOrders} = useProducts()


  console.log("orders = ",selectedProduct )
  console.log("Order Books",OrderBook.mpg?.marketProducts);


  return (
    <div className="bg-neutral-800 mt-0 w-[100%] border-[0.5px] border-white/20 border-t-0 xl:rounded-b-md xl:rounded-t-[0px] rounded-md border-b-white/20">
      <div className="xl:h-[calc(100vh-286px)] h-[calc(100vh-339px)] overflow-y-hidden place-content-evenly	">
        <div className="flex flex-col h-[50%] overflow-scroll scrollbar-hide">
          <div className="sticky z-[1] top-0 flex flex-row justify-between font-redhat px-3 pb-1 items-center bg-neutral-800">
            <p className="text-[15px]">Price</p>
            <p className="text-[15px]">Size (ETH)</p>
            <p className="text-[15px]">Total(ETH)</p>
          </div>
          <div className="space-y-1 flex flex-col">
            {/* {orderbookData.asks.slice(0, 100).map((item, index) => (
              <MarketData
                key={index}
                priceValue={item.price} // Assuming the structure here
                sizeValue={item.size}
                totalValue={item.total}
                textColor={item.textColor} // You might not have this; adjust as needed
              />
            ))} */}

            {marketValue.slice(0, 100).map((item, index) => (
              <MarketData key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div className="flex flex-col h-[50%] overflow-scroll scrollbar-hide">
          <div
            className="sticky h-12 top-0 flex flex-row justify-between items-center font-redhat px-3"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            <p className="text-[15px]">Spread</p>
            <p className="text-[15px]">1.3</p>
            <p className="text-[15px]">0.06%</p>
          </div>
          <div
            className="space-y-1 scrollbar-hide"
            style={{ overflowY: "scroll", scrollbarWidth: "none" }}
          >
            {spreadValue.slice(0, 100).map((item, index) => (
              <SpreadData key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface MarketDataProps {
  id?: number;
  priceValue: number;
  sizeValue: number;
  totalValue: number;
  textColor: string;
}

const MarketData: React.FC<MarketDataProps> = ({
  priceValue,
  sizeValue,
  totalValue,
}) => {
  const calculateBackgroundWidth = (priceValue: number) => {
    const maxPriceValue = 10000; // Replace this with the actual maximum value.
    const widthPercentage = (priceValue / maxPriceValue) * 1000;
    const limitedWidthPercentage = Math.min(widthPercentage, 100);
    return `${limitedWidthPercentage}%`;
  };

  return (
    <div className="w-full relative">
      <div
        className="absolute bg-red-900 rounded-md"
        style={{
          height: 20,
          width: calculateBackgroundWidth(priceValue),
          opacity: 0.4,
        }}
      ></div>
      <div className="flex flex-row w-full justify-between px-3 relative">
        <p className="font-redhat w-[33.333333%] text-red-400 text-[12.87px] ">
          {priceValue}
        </p>
        <p className="text-white  w-[33.333333%] text-[12.87px] font-redhat">
          {sizeValue}
        </p>
        <p className="text-[12.87px] text-white font-redhat">{totalValue}</p>
      </div>
    </div>
  );
};

interface SpreadDataProps {
  id?: number;
  priceValue: number;
  sizeValue: number;
  totalValue: number;
  textColor: string;
}
const SpreadData: React.FC<SpreadDataProps> = ({
  priceValue,
  sizeValue,
  totalValue,
}) => {
  const calculateBackgroundWidth = (priceValue: number) => {
    const maxPriceValue = 10000;
    const widthPercentage = (priceValue / maxPriceValue) * 1000;
    const limitedWidthPercentage = Math.min(widthPercentage, 100);
    return `${limitedWidthPercentage}%`;
  };
  return (
    <div className="w-full relative">
      <div
        className="absolute bg-green-900 rounded-md"
        style={{
          height: 20,
          width: calculateBackgroundWidth(priceValue),
          opacity: 0.4,
        }}
      ></div>
      <div className="flex flex-row w-full justify-between px-3">
        <p className="font-redhat w-[33.333333%] text-[12.87px] text-[#8EF884]">
          {priceValue}
        </p>
        <p className="text-white w-[33.333333%] text-[12.87px] font-redhat">
          {sizeValue}
        </p>
        <p className="text-[12.87px] text-white font-redhat">{totalValue}</p>
      </div>
    </div>
  );
};

export const RecentTrades: React.FC = () => {
  return (
    <div className="bg-neutral-800  mt-0 w-[100%] rounded-md xl:rounded-md xl:rounded-t-[0px] border-[0.5px] xl:border-t-0 border-white/20">
      <div
        className="xl:h-[calc(100vh-286px)]  h-[calc(100vh-352px)]  scrollbar-hide"
        style={{ overflowY: "scroll", scrollbarWidth: "none" }}
      >
        <div>
          <div className="sticky z-[1] top-0 flex flex-row justify-between font-redhat px-3 pb-1 items-center bg-neutral-800">
            <p className="text-[15px]">Price</p>
            <p className="text-[15px]">Size (ETH)</p>
            <p className="text-[15px]">Total(ETH)</p>
          </div>
          <div className="space-y-1">
            {marketValue.map((item, index) => (
              <RecentTradeData key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const RecentTradeData: React.FC<MarketDataProps> = ({
  priceValue,
  totalValue,
  textColor,
}) => {
  return (
    <div className=" w-full rounded-md">
      <div className="flex flex-row justify-between px-3">
        <p
          className="font-redhat  w-[33.333333%] text-[12.87px]"
          style={{ color: textColor }}
        >
          {priceValue}
        </p>
        <p className="text-white  w-[33.333333%] text-[12.87px] font-redhat">
          {totalValue}
        </p>
        <p className="text-[12.87px] text-white font-redhat">{totalValue}</p>
      </div>
    </div>
  );
};
