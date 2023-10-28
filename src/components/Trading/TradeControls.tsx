import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect, ChangeEvent } from "react";
import ArrowRight from "../icons/ArrowRight";
// import { RangeSlider } from "./Slider";`
import toast, { Toaster } from "react-hot-toast";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { ImSpinner3 } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import useTRGs from "@/hooks/useTRGs";
import * as Accordion from "@radix-ui/react-accordion";
import { getProduct } from "@/utils/dexterity";
import {
  CaretDownIcon,
  CaretUpIcon,
  ChevronDownIcon,
} from "@modulz/radix-icons";
import { useForm } from "react-hook-form";
import s from "./Accordion.module.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import useProducts from "@/hooks/useProducts";
import useTradeData from "@/hooks/useTradeData";
import Button from "@radix-ui/react-accordion";
import { Market } from "./Market";
export const Collapse = Accordion.Root;
import useAccountInfo from "@/hooks/useAccountInfo";

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
  const [isOpen, setIsOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState("Placing market order");
  const [showCheckmark, setShowCheckmark] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [usdValue, setUsdValue] = useState<number>();
  const [price, setPrice] = useState<number>();
  const [quantity, setQuantity] = useState<number>();
  const {
    trgs,
    trgBalance,
    closeTrg,
    createTrg,
    createLimitOrder,
    createMarketOrder,
  } = useTRGs();

  const [transactionMessage, setTransactionMessage] = useState<string>("");

  const { products, selectedProduct, setSelectedProduct, openOrders } =
    useProducts();
  console.log("Product name:", selectedProduct);
  const { markPrice } = useTradeData(selectedProduct!);
  const handlePopupToggle = async () => {
    // await createTrg();

    // Wait until trgs is populated
    let attempts = 0;
    while (!trgs || trgs.length === 0) {
      if (attempts > 10) {
        console.error("Failed to populate trgs after multiple attempts");
        return;
      }
      await new Promise((res) => setTimeout(res, 500));
      attempts += 1;
    }

    if (!trgs || trgs.length === 0) {
      console.error("trgs array is empty or undefined");
      return;
    }

    if (selectedProduct === null) {
      console.error("No product selected");
      return;
    }
    // await createLimitOrder({
    //   price: price!,
    //   size: quantity!,
    //   productName: selectedProduct!,
    //   type: "buy",
    // });

    console.log("markPriceBeforePlacing", markPrice);

    await createMarketOrder({
      markPrice: markPrice?.markPrice,
      productName: selectedProduct!,
      size: quantity!,
      slippage: 0.5,
      type: "buy",
    });

    setTransactionMessage("Transaction got executed");
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    if (isPopupVisible) {
      setTimeout(() => {
        setOrderStatus("Order Filled");
        setShowCheckmark(true);
      }, 5000);
    }
  });

  const popupContent =
    orderStatus === "Order Filled"
      ? `Long  ${selectedProduct} with an average fill price $21.659`
      : `${selectedProduct}`;

  const ConfirmationMessage =
    orderStatus === "Order Filled" ? "" : "Awaiting Confirmation";

  const popupIcon = showCheckmark ? (
    <AiFillCheckCircle className="text-green-400 rounded-full " />
  ) : (
    <ImSpinner3 className="text-sm text-blue-500 animate-spin" />
  );
  const [toggle1, setToggle1] = useState<boolean>(false);
  const [toggle2, setToggle2] = useState<boolean>(false);

  return (
    <div className=" p-6 bg-[#202020] flex-1 w-[100%] h-[100%] rounded-[10px] border-[0.5px] border-white/20">
      <div className="mb-6 font-redhat">
        <div className="flex items-center mb-5 gap-x-4">
          <Image
            src="/images/icons/trade.svg"
            height={42}
            width={42}
            alt="trade"
          />
          <h3 className="text-3xl font-bold">Trade</h3>
        </div>
        <div className="space-x-1.5 flex flex-row bg-zinc-800 rounded-lg p-3 mx-[-13px] mb-3">
          <button
            onClick={handleBuyClick}
            className={`w-[100%] h-10 ${
              isBuyClicked
                ? "bg-[#39FFA0]/20 border-green-400  text-emerald-500"
                : "bg-[#373737] border-zinc-500 text-zinc-500"
            } border-2 rounded-md border-green-500 font-redhat font-bold transition-colors duration-300`}
          >
            Buy / Long
          </button>
          <button
            onClick={handleSellClick}
            className={`w-[100%] h-10 ${
              isSellClicked
                ? "bg-[#3E2B2B] border-[#FF5D5D] text-red-400"
                : "bg-[#373737]  border-zinc-500 text-zinc-500"
            } border-2 rounded-md border-[#FF5D5D]  font-redhat font-bold transition-colors duration-300`}
          >
            Sell / Short
          </button>
        </div>
        <Inputs
          price={price}
          setPrice={setPrice}
          quantity={quantity}
          setQuantity={setQuantity}
          usdValue={usdValue}
          setUsdValue={setUsdValue}
        />
      </div>
      <div className="">
        <div className="space-y-4">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row items-center gap-x-2">
                <div className="text-[14px] font-semibold">Reduce Only</div>
                <div
                  onClick={() => setToggle1(!toggle1)}
                  className={`flex h-[24px] w-12 cursor-pointer rounded-full border border-black
           ${
             toggle1
               ? "justify-start bg-gray-300/80"
               : "justify-end bg-[#3db079]"
           } p-[1px]`}
                >
                  <motion.div
                    className={`h-5 w-5 rounded-full ${
                      toggle1 ? "bg-white" : "bg-white"
                    }`}
                    layout
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  />
                </div>
              </div>
              <div className="flex flex-row items-center gap-x-2">
                <p className="text-[14px] font-semibold">Post</p>
                <p
                  onClick={() => setToggle2(!toggle2)}
                  className={`flex h-[24px] w-12 cursor-pointer rounded-full border border-black
           ${
             toggle2
               ? "justify-start bg-gray-300/80"
               : "justify-end bg-[#3db079]"
           } p-[1px]`}
                >
                  <motion.div
                    className={`h-5 w-5 rounded-full ${
                      toggle2 ? "bg-white" : "bg-white"
                    }`}
                    layout
                    transition={{ type: "spring", stiffness: 700, damping: 30 }}
                  />
                </p>
              </div>
            </div>

            <div>
              <div className="flex flex-row justify-between w-full">
                <button className="flex flex-row items-center gap-x-2 ">
                  <p className="text-2xl font-bold text-white text-opacity-70">
                    +
                  </p>
                  <p className="text-xs font-semibold text-gray-400">
                    Add Cover Orders
                  </p>
                </button>
                <button className="flex flex-row items-center gap-x-2">
                  <p className="text-2xl font-bold text-white text-opacity-70">
                    +
                  </p>
                  <p className="text-xs font-semibold text-gray-400">
                    Add Iceberg Orders
                  </p>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-0">
            <Collapse type="multiple" className={s.Container}>
              <Accordion.Item value="item-1" className={s.Item}>
                <Accordion.Header className={s.Header}>
                  <Accordion.Trigger className={s.Trigger}>
                    <span> Slippage Tolerance (Infinite)</span>
                    <ChevronDownIcon aria-hidden className={s.Icon} />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className={s.Content}>
                  <div className="flex flex-row justify-between items-center bg-neutral-600 bg-opacity-70 px-1 w-[30%] h-7 text-white hover:border-2 rounded-sm hover:border-emerald-500 ">
                    <input
                      placeholder="0"
                      className="flex w-full bg-neutral-600 bg-opacity-10 h-7 "
                    />
                    <p className="m-0">%</p>
                  </div>
                  <div className="flex justify-center items-center  bg-neutral-600 bg-opacity-70 w-[20%] h-7  text-white rounded-sm hover:border-2  hover:border-emerald-500">
                    <p className="m-0 text-xs">0.1 %</p>
                  </div>
                  <div className="flex justify-center items-center  bg-neutral-600 bg-opacity-70 w-[20%] h-7 text-white hover:border-2 rounded-sm hover:border-emerald-500">
                    <p className="m-0 text-xs">0.5 %</p>
                  </div>
                  <div className="flex justify-center items-center  bg-neutral-600 bg-opacity-70 w-[10%] h-7 text-white hover:border-2 rounded-sm hover:border-emerald-500">
                    <p className="m-0 text-xs">1 %</p>
                  </div>
                  <div className="flex justify-center items-center  bg-neutral-600 bg-opacity-70 w-[10%] h-7 text-white hover:border-2 rounded-sm hover:border-emerald-500">
                    <p className="m-0 text-xs">1 %</p>
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </Collapse>
            <div className="flex flex-row items-center content-center justify-between">
              <p className="text-base font-semibold font-redhat">
                Req. Initial Margin
              </p>
              <div className="flex items-center justify-center h-8 text-white bg-black border-2 border-green-500 rounded-md w-28">
                <p className="m-0">200,000 $</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          toast.custom((t) => (
            <div
              className={`${
                t.visible ? "animate-enter" : "animate-leave"
              } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex flex-col w-[21%] h-[120px] bottom-[30px] right-[68px]  bg-[black] bg-opacity-30  backdrop-blur-[30px] rounded-lg border border-white border-opacity-30 border-white/20 absolute">
                <div className="flex flex-row px-6 py-4 rounded-md justify-between items-center">
                  <div className="flex flex-row items-center gap-x-[5px]">
                    <div>{popupIcon}</div>
                    <p className="text-white text-[17px] font-semibold">
                      {orderStatus}
                    </p>
                  </div>
                  <button
                    className="text-white text-[12px]"
                    // onClick={() => toast.dismiss(t.id)}
                  >
                    <AiOutlineClose />
                  </button>
                </div>
                <div className="w-[100%] flex flex-col justify-start items-center ">
                  <p className="text-white w-[90%] opacity-50 text-[13px] 2xl:text-[16px] 3xl:text-[17px] pl-0">
                    {popupContent}
                  </p>
                  <p className="text-white opacity-50 text-[12px]">
                    {ConfirmationMessage}
                  </p>
                </div>
              </div>
            </div>
          ));
        }}
      >
        <button
          onClick={handlePopupToggle}
          className={`flex flex-row w-full justify-center content-center items-center ${
            isBuyClicked
              ? " bg-gradient-to-r from-green-500 to-emerald-300"
              : isSellClicked
              ? "bg-gradient-to-r from-red-400 to-rose-400"
              : ""
          } p-3 mt-5 rounded-md font-semibold text-black`}
        >
          <div>
            {isBuyClicked
              ? `Long ${selectedProduct}`
              : isSellClicked
              ? `Short ${selectedProduct}`
              : ""}
          </div>
        </button>
      </div>
      <hr className="w-full border-t border-t-white/10 mt-6 mb-6" />
      <Prices />
    </div>
  );
};

const Inputs = ({
  price,
  setPrice,
  quantity,
  setQuantity,
  usdValue,
  setUsdValue,
}: {
  price: number | undefined;
  setPrice: (price: number) => void;
  quantity: number | undefined;
  setQuantity: (quantity: number) => void;
  usdValue: number | undefined;
  setUsdValue: (usdValue: number) => void;
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("Market");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const handleChange = (option: string) => {
    setSelectedOption(option);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
    calculateUsdValue(Number(event.target.value), quantity!);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(event.target.value));
    calculateUsdValue(price!, Number(event.target.value));
  };

  const calculateUsdValue = (priceValue: number, quantityValue: number) => {
    const priceNumber = priceValue;
    const quantityNumber = quantityValue;

    if (!isNaN(priceNumber) && !isNaN(quantityNumber)) {
      const usd = priceNumber * quantityNumber;
      setUsdValue(Number(usd.toFixed(2)));
    } else {
      setUsdValue(0);
    }
  };
  console.log("Get Product", getProduct);

  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  return (
    <div className="flex flex-col w-full gap-y-4">
      <div className="flex flex-row w-full gap-x-3 justify-">
        <div
          id="Order Type"
          className="w-[50%] flex flex-col gap-y-1 font-redhat"
        >
          <label htmlFor="order-type" className="opacity-70">
            Order Type
          </label>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="relative flex flex-col justify-between w-full bg-[#FFFFFF26] rounded  py-2 border border-white/20">
              <DropdownMenu.Trigger className="flex flex-row justify-between items-center px-2 text-sm py-[2.2px]">
                {selectedOption}
                <ChevronDownIcon className={s.Icon} />
              </DropdownMenu.Trigger>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="flex flex-col w-full h-fit gap-y-5 py-2 mt-3 text-sm bg-neutral-700 bg-opacity-100 items-start px-2 rounded-md border border-white border-opacity-25 z-[2] cursor-pointer">
              <DropdownMenu.Item onSelect={() => handleChange("Market")}>
                Market
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => handleChange("Limit")}>
                Limit
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => handleChange("Stop-Market")}>
                Stop-Market
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => handleChange("Stop-Limit")}>
                Stop-Limit
              </DropdownMenu.Item>
              <DropdownMenu.Item onSelect={() => handleChange("Take-Profit")}>
                Take-Profit
              </DropdownMenu.Item>
              <DropdownMenu.Item
                onSelect={() => handleChange("Take-Profit-Limit")}
              >
                Take-Profit-Limit
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
        <form
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          className="w-[50%] flex flex-col gap-y-1 font-redhat"
        >
          <label htmlFor="price" className="opacity-70 ">
            Price
          </label>
          <div className="flex items-center justify-center bg-[#FFFFFF26] rounded px-4 py-2 w-full border border-white/20">
            <input
              value={price}
              onChange={handlePriceChange}
              type="text"
              name="price"
              id="price"
              placeholder="16,800"
              className="flex-1 px-2 bg-transparent w-[4.5rem]"
            />
            <span>USD</span>
          </div>
        </form>
      </div>
      <div className="flex flex-row gap-x-3">
        <form
          onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          className="w-[50%] flex flex-col gap-y-1 font-redhat"
        >
          <label htmlFor="price" className="opacity-70 ">
            Quantity
          </label>
          <div className="flex items-center justify-center bg-[#FFFFFF26] rounded px-4 py-2 w-full border border-white/20">
            <input
              {...register("0.005")}
              type="text"
              value={quantity}
              onChange={handleInputChange}
              name="crypto"
              id="crypto"
              className="flex-1 w-20 px-2 bg-transparent"
            />
            <Image
              src="/images/btc.png"
              width={24}
              height={24}
              alt="bitcoin"
              className="mr-2"
            />{" "}
          </div>
        </form>
        <div id="crypto-input" className="w-[50%]">
          <div className="h-[28px] w-full"></div>
          <div className="flex items-center justify-between bg-[#FFFFFF26] rounded px-4 py-2 w-[full] border border-white/20 font-redhat">
            <p>{usdValue}</p>
            <Image
              src="/images/usdc.png"
              width={24}
              height={24}
              alt="bitcoin"
              className="h-6 w-6 mr-2"
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
  const tradeInfo = useAccountInfo();

  return (
    <div className="flex flex-col w-full p-3 rounded-lg gap-y-4 font-redhat bg-neutral-700 bg-opacity-60">
      <div className="flex flex-row justify-between gap-x-2">
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">Initial Margin</p>
          <p className="text-white text-[10px] font-semibold">
            {tradeInfo.accountInfo?.initialMarginReq}
          </p>
        </div>
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">Margin</p>
          <p className="text-white text-[10px] font-semibold">$ 100K</p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full gap-x-2">
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">
            Est. Entry Price
          </p>
          <p className="text-white text-[10px] font-semibold">21</p>
        </div>
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">
            Est. Price Impact
          </p>
          <p className="text-white text-[10px] font-semibold">{`<0.01%`}</p>
        </div>
      </div>

      <div className="flex flex-row justify-between gap-x-2">
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">
            Est. Liquidation Price
          </p>
          <p className="text-white text-[10px] font-semibold">19.88</p>
        </div>
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">Est. Leverage</p>
          <p className="text-white text-[10px] font-semibold">1.05x</p>
        </div>
      </div>
      <div className="flex flex-row justify-between gap-x-2">
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">
            Est. Order Size
          </p>
          <p className="text-white text-[10px] font-semibold">10,000</p>
        </div>
        <div className="flex flex-col w-[50%]">
          <p className="text-white text-[13px] font-semibold">
            Est. Order Value
          </p>
          <p className="text-white text-[10px] font-semibold">210K</p>
        </div>
      </div>
    </div>
  );
};
