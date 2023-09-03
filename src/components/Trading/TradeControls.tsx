import Image from "next/image";
import { motion } from 'framer-motion'
import { useState, useEffect, ChangeEvent } from "react";
import ArrowRight from "../icons/ArrowRight";
import { RangeSlider } from "./Slider";
import { BiChevronDown } from 'react-icons/bi'
import { BiChevronUp } from 'react-icons/bi'
import { ImSpinner3 } from 'react-icons/im'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillCheckCircle } from 'react-icons/ai'

const options = [0, 25, 50, 75, 100];

export const TradeControls: React.FC = () => {
  const [leverage, setLeverage] = useState(0);

  const [isBuyClicked, setIsBuyClicked] = useState(true);
  const [isSellClicked, setIsSellClicked] = useState(false);

  const handleBuyClick = () => {
    setIsBuyClicked(true);
    setIsSellClicked(false);
  };

  const handleSellClick = () => {
    setIsBuyClicked(false);
    setIsSellClicked(true);
  };
  const [isOpen, setIsOpen] = useState(false)
  const [orderStatus, setOrderStatus] = useState("Placing market order");
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const handlePopupToggle = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    if (isPopupVisible) {
      setTimeout(() => {
        setOrderStatus("Order Filled")
        setShowCheckmark(true)
      }, 5000)
    }
  })

  const popupContent = orderStatus === "Order Filled"
    ? "Long 0.7 SOL-PERP with an average fill price $21.659"
    : "Long 0.75249 SOL-PERP";

  const ConfirmationMessage = orderStatus === "Order Filled"
    ? "" : "Awaiting Confirmation"

  const popupIcon = showCheckmark ? <AiFillCheckCircle className="text-green-400 rounded-full " /> : <ImSpinner3 className="text-blue-500 text-sm animate-spin" />;
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);


  return (
    <div

      className=" p-6 bg-[#202020] flex-1 w-[100%] h-[100%] rounded-[10px] border-[0.5px] border-white/20"
    >
      <div className="mb-6 font-redhat">
        <div className="flex items-center gap-x-4 mb-5">
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
      <div className="">
        <div className="space-y-2">
          <div className="space-x-1.5 flex flex-row bg-zinc-800 rounded-lg p-3 mx-[-13px]">
            <button
              onClick={handleBuyClick}
              className={`w-[100%] h-10 ${isBuyClicked ? 'bg-[#39FFA0]/20 border-green-400  text-emerald-500' : 'bg-[#373737] border-zinc-500 text-zinc-500'
                } border-2 rounded-md border-green-500 font-redhat font-bold transition-colors duration-300`}
            >
              Buy / Long
            </button>
            <button
              onClick={handleSellClick}
              className={`w-[100%] h-10 ${isSellClicked ? 'bg-[#3E2B2B] border-[#FF5D5D] text-red-400' : 'bg-[#373737]  border-zinc-500 text-zinc-500'
                } border-2 rounded-md border-[#FF5D5D]  font-redhat font-bold transition-colors duration-300`}
            >
              Sell / Short
            </button>
          </div>
          <div className="flex flex-col space-y-1">
          <div className="flex flex-row space-x-4">
            <div className="flex flex-row gap-x-2 items-center">
              <div className="text-[14px] font-semibold">Reduce Only</div>
              <div onClick={() => setToggle1(!toggle1)} className={`flex h-[24px] w-12 cursor-pointer rounded-full border border-black
           ${toggle1 ? "justify-start bg-gray-300/80" : "justify-end bg-[#3db079]"} p-[1px]`}>
                <motion.div className={`h-5 w-5 rounded-full ${toggle1 ? "bg-white" : "bg-white"}`}
                  layout transition={{ type: "spring", stiffness: 700, damping: 30 }} />
              </div>
            </div>
            <div className="flex flex-row gap-x-2 items-center">
              <div className="text-[14px] font-semibold">Post</div>
              <div onClick={() => setToggle2(!toggle2)} className={`flex h-[24px] w-12 cursor-pointer rounded-full border border-black
           ${toggle2 ? "justify-start bg-gray-300/80" : "justify-end bg-[#3db079]"} p-[1px]`}>
                <motion.div className={`h-5 w-5 rounded-full ${toggle2 ? "bg-white" : "bg-white"}`}
                  layout transition={{ type: "spring", stiffness: 700, damping: 30 }} />
              </div>
            </div>
          </div>


          <div className="flex flex-row w-full justify-between">
            <button className="flex flex-row gap-x-2 items-center ">
              <h1 className="text-2xl font-bold text-white text-opacity-70">+</h1>
              <h1 className="text-xs font-semibold text-gray-400">Add Cover Orders</h1>
            </button>
            <button className="flex flex-row gap-x-2 items-center">
              <h1 className="text-2xl font-bold text-white text-opacity-70">+</h1>
              <h1 className="text-xs font-semibold text-gray-400">Add Iceberg Orders</h1>
            </button>
          </div>
          </div>
        </div>
        <div className="space-y-2">
          <div>
            <button onClick={() => setIsOpen((prev) => !prev)} className="w-full text-opacity-40 text-white text-xs font-semibold">
              <div className="flex flex-row ">Slippage Tolerance (Infinite)   {!isOpen ? (
                <BiChevronDown
                  className='h-[25px] w-[25px] xl:h-[17px] xl:w-[17px]' />
              ) : (
                <BiChevronUp className='h-[25px] w-[25px] xl:h-[17px] xl:w-[17px]' />
              )}
              </div>
              {isOpen && (
                <div className="flex flex-row gap-x-1 mt-2" onClick={(e) => {
                  e.stopPropagation();
                }}>
                  <div className="w-full flex flex-row justify-evenly">
                    <div className="flex justify-between items-center bg-neutral-600 bg-opacity-70 px-1 w-[30%] h-8 text-white hover:border-2 rounded-sm hover:border-emerald-500 ">
                      <h1 className="m-0">0</h1>
                      <h1>%</h1>
                    </div>
                    <div className="flex justify-center items-center  bg-neutral-600 bg-opacity-70 w-[20%] h-8  text-white rounded-sm hover:border-2  hover:border-emerald-500">
                      <h1 className="m-0">0.1 %</h1>
                    </div>
                    <div className="flex justify-center items-center  bg-neutral-600 bg-opacity-70 w-[20%] h-8 text-white hover:border-2 rounded-sm hover:border-emerald-500">
                      <h1 className="m-0">0.5 %</h1>
                    </div>
                    <div className="flex justify-center items-center  bg-neutral-600 bg-opacity-70 w-[10%] h-8 text-white hover:border-2 rounded-sm hover:border-emerald-500">
                      <h1 className="m-0">1 %</h1>
                    </div>
                    <div className="flex justify-center items-center  bg-neutral-600 bg-opacity-70 w-[10%] h-8 text-white hover:border-2 rounded-sm hover:border-emerald-500">
                      <h1 className="m-0">1 %</h1>
                    </div>
                  </div>
                </div>
              )}
            </button>
          </div>

          <div className="flex flex-row justify-between content-center items-center">
            <h3 className="text-base font-semibold font-redhat">Req. Initial Margin</h3>
            <div className="flex justify-center items-center bg-black w-28 h-8 text-white border-2 rounded-md border-green-500">
              <h1 className="m-0">200,000 $</h1>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full border-t border-t-white/10 mt-6 mb-6" />
      <Prices />
      <button
        onClick={handlePopupToggle}
        className={`flex flex-row w-full justify-center content-center items-center ${isBuyClicked
          ? ' bg-gradient-to-r from-green-500 to-emerald-300'
          : isSellClicked
            ? 'bg-gradient-to-r from-red-400 to-rose-400'
            : ''
          } p-3 mt-5 rounded-md font-semibold text-black`}
      >
        <div >
          {isBuyClicked ? 'Long ~3.44845 SOL-PERP' : isSellClicked ? 'Short ~3.44845 SOL-PERP' : ''}
        </div>
        {isPopupVisible && (
          <div className="flex flex-col w-[250px] h-[120px] bottom-[20px] right-[68px]  bg-[black] bg-opacity-30  backdrop-blur-[30px] rounded-lg border border-white border-opacity-30 border-white/20 absolute">
            <div className="flex flex-row px-6 py-4 rounded-md justify-between items-center">
              <div className="flex flex-row items-center gap-x-[5px]">
                <div>{popupIcon}</div>
                <p className="text-white text-[17px] font-semibold">{orderStatus}</p>
              </div>
              <div className="text-white text-[12px]"><AiOutlineClose /></div>
            </div>
            <div className="w-[100%] flex flex-col justify-start items-center ">
              <h1 className="text-white w-[90%] opacity-50 text-[12px] pl-0">{popupContent}</h1>
              <h2 className="text-white opacity-50 text-[12px]">{ConfirmationMessage}</h2>
            </div>
          </div>
        )}
      </button>

    </div>
  );
};

const Inputs = () => {

  const [selectedOption, setSelectedOption] = useState<string>('Market');
  const [isOpen, setIsOpen] = useState(false);
  const options = [
    'Market',
    'Employee',
    'Stop-Market',
    'Stop-Limit',
    'Take-Profit',
    'Take-Profit-Limit',
  ];
  const handleChange = (option: string) => {
    setSelectedOption(option);
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col w-full gap-y-4">
      <div className="w-full flex flex-row gap-x-3 justify-">
        <div id="Order Type" className="w-[50%] flex flex-col gap-y-1 font-redhat">
          <label htmlFor="order-type" className="opacity-70">
            Order Type
          </label>
          <div onClick={() => setIsOpen((prev) => !prev)} className="relative flex flex-col justiffity-between w-full bg-[#FFFFFF26] rounded  py-2 border border-white/20">
            <div className="flex flex-row justify-between px-2">
              <div className="flex font-semibold items-center text-[13px]">
                {selectedOption}
              </div>
              {!isOpen ? (
                <BiChevronDown className="h-[25px] w-[25px]" />
              ) : (
                <BiChevronUp className="h-[25px] w-[25px]" />
              )}
            </div>
            {!isOpen ? (
              <div></div>
            ) : (
              <div className="flex flex-col w-full h-fit gap-y-2 absolute top-[50px] bg-neutral-700 bg-opacity-100 items-start pl-3 rounded-md border border-white border-opacity-25">
                {options.map((option) => (
                  <div
                    key={option}
                    onClick={() => handleChange(option)}
                    className="w-full text-white/90 text-[12.89px] hover:text-[13px] font-medium hover:text-white cursor-pointer"
                  >
                    <div className="h-2"></div>
                    {option}
                    <div className="h-2"></div>

                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
        <div id="price-usd" className="w-[50%] flex flex-col gap-y-1 font-redhat">
          <label htmlFor="price" className="opacity-70 ">
            Price
          </label>
          <div className="flex items-center justify-center bg-[#FFFFFF26] rounded px-4 py-2 w-full border border-white/20">
            <input
              placeholder="16,800"
              type="string"
              name="price"
              id="price"
              className="flex-1 px-2 bg-transparent w-[4.5rem]"
            />
            <span>USD</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row gap-x-3">
        <div id="quantity-input" className="flex flex-col w-[50%] gap-y-1">
          <div >
            Quantity
          </div>
          <input
            type="string"
            name="quantity"
            id="quantity"
            className="w-full bg-[#FFFFFF26] rounded px-4 py-2 border border-white/20"
          />
        </div>
        <div id="crypto-input" className="w-[50%]">
          <div className="h-[28px] w-full">

          </div>
          <div className="flex items-center justify-center bg-[#FFFFFF26] rounded px-4 py-2 w-[full] border border-white/20 font-redhat">
            <input
              type="string"
              name="crypto"
              id="crypto"
              className="flex-1 bg-transparent px-2 w-20"
            />
            <Image
              src="/images/btc.png"
              width={24}
              height={24}
              alt="bitcoin"
              className="mr-2"
            />
          </div>
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
      <div className="flex flex-wrap gap-x-2 font-redhat">
        {options.map((leverage) => (
          <button
            key={leverage}
            className={`w-[80px] h-[40px] rounded-[10px] border-[0.5px] border-white/20 transition duration-200 ${value === leverage
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
    <div className="w-full flex flex-col gap-y-4 font-redhat bg-neutral-700 bg-opacity-60 p-3 rounded-lg">
      <div className="flex flex-row justify-between gap-x-2">
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">Initial Margin</p>
          <p className="text-white text-[10px] font-semibold">$ 200K</p>
        </div>
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">Margin</p>
          <p className="text-white text-[10px] font-semibold">$ 100K</p>
        </div>
      </div>
      <div className="flex flex-row w-full justify-between gap-x-2">
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">Est. Entry Price</p>
          <p className="text-white text-[10px] font-semibold">21</p>
        </div>
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">Est. Price Impact</p>
          <p className="text-white text-[10px] font-semibold">{`<0.01%`}</p>
        </div>

      </div>

      <div className="flex flex-row justify-between gap-x-2">
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">Est. Liquidation Price</p>
          <p className="text-white text-[10px] font-semibold">19.88</p>
        </div>
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">Est. Leverage</p>
          <p className="text-white text-[10px] font-semibold">1.05x</p>
        </div>

      </div>
      <div className="flex flex-row justify-between gap-x-2">
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">Est. Order Size</p>
          <p className="text-white text-[10px] font-semibold">10,000</p>
        </div>
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">Est. Order Value</p>
          <p className="text-white text-[10px] font-semibold">210K</p>
        </div>

      </div>
    </div>
  );
};