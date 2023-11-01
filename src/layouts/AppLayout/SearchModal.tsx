import React, { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import s from "../../components/Trading/Accordion.module.css";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import useTRGs from "@/hooks/useTRGs";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Collapse = Accordion.Root;

interface TabsProps {
  onTabChange: (selectedTab: "deposit" | "Withdraw" | "Borrow") => void;
}

interface SearchModalProps {
  visible: boolean;
  onClick: () => void;
}

interface TabLinks {
  label: string;
  click: string;
}

const tabLinks: TabLinks[] = [
  {
    label: "Deposit",
    click: "Deposit",
  },
  {
    label: "Withdraw",
    click: "Withdraw",
  },
  {
    label: "Borrow",
    click: "Borrow",
  },
];

const SearchModal: React.FC<SearchModalProps> = ({ visible, onClick }) => {
  const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "container") onClick();
  };

  const [activeComponent, setActiveComponent] = useState<
    "Deposit" | "Withdraw" | "Borrow"
  >("Deposit");
  const [selectedOption, setSelectedOption] = useState<string>("Main Account");
  const handleChange = (option: string) => {
    setSelectedOption(option);
  };
  const [selectedTab, setSelectedTab] = useState<
    "Deposit" | "Withdraw" | "Borrow"
  >("Deposit");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const onTabChange = (selectedTab: "Deposit" | "Withdraw" | "Borrow") => {
    setSelectedTab(selectedTab);
  };

  const handleButtonClick = (
    componentName: "Deposit" | "Withdraw" | "Borrow",
    index: number
  ) => {
    setActiveComponent(componentName);
    onTabChange(componentName);
    setActiveIndex(index);
    setActiveTabIndex(index);
  };

  const { createDeposit, createWithdrawal } = useTRGs();

  const [amount, setAmount] = useState(0);

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 z-50 bg-[black] bg-opacity-30 backdrop-blur-sm h-full flex justify-center items-center text-black"
    >
      <div className="bg-[#181818] px-5  border border-white/20 rounded-[10px]">
        <p className="px-2 text-xl font-bold text-white py-7">
          Manage Balances
        </p>
        <div className="flex flex-row  bg-[#202020] rounded-lg border border-white/20 ">
          {tabLinks.map((link, index) => (
            <button
              onClick={() =>
                handleButtonClick(
                  link.click as "Deposit" | "Withdraw" | "Borrow",
                  index
                )
              }
              key={link.label}
              className={classNames(
                "w-full h-14 rounded-lg flex items-center justify-evenly relative z-[9] transition-colors duration-200 ease-in-out font-semibold",
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
        </div>
        return (
        <div
          id="container"
          onClick={handleOnClose}
          className="fixed inset-0 z-[99] bg-[black] bg-opacity-30 backdrop-blur-sm h-full flex justify-center items-center text-black"
        >
          <div className="bg-[#181818] px-5 w-[700px] border border-white/20 rounded-[10px]">
            <p className="px-2 text-xl font-bold text-white py-7">
              Manage Balances
            </p>
            <div className="flex flex-row  bg-[#202020] rounded-lg border border-white/20 ">
              {tabLinks.map((link, index) => (
                <button
                  onClick={() =>
                    handleButtonClick(
                      link.click as "Deposit" | "Withdraw" | "Borrow",
                      index
                    )
                  }
                  key={link.label}
                  className={classNames(
                    "w-full h-14 rounded-lg flex items-center justify-evenly relative z-[9] transition-colors duration-200 ease-in-out font-semibold",
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
                className={classNames(
                  "h-[56px] w-[220px] absolute rounded-lg",
                  {
                    "bg-gradient-to-r from-emerald-700 to-emerald-300":
                      activeIndex !== -1,
                  }
                )}
                animate={{
                  x: activeIndex * 220,
                  opacity: activeIndex !== -1 ? 1 : -1,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
              />
            </div>
            <div className="space-y-2 mb-2">
              {selectedTab === "Deposit" && (
                <div
                  className="flex flex-col gap-y-4 mt-2
                .."
                >
                  <div className="w-full">
                    <p className="text-[#84AF9B]">Deposit to</p>
                  </div>
                </div>
              )}
              {selectedTab === "Withdraw" && (
                <div>
                  <div className="mt-2">
                    <div className="w-full">
                      <p className="text-[#84AF9B]">Withdraw from</p>
                    </div>
                  </div>{" "}
                </div>
              )}
              <DropdownMenu.Root>
                <DropdownMenu.Trigger className="flex flex-col justify-between w-full bg-[#FFFFFF26] rounded  py-2 border border-white/20">
                  <DropdownMenu.Trigger className="w-full flex font-semibold justify-between items-center text-white/90 text-[15px] px-3">
                    {selectedOption}
                    <ChevronDownIcon className={s.Icon} />
                  </DropdownMenu.Trigger>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content className="flex flex-col w-[655px] h-fit gap-y-5 py-2 mt-1 text-sm text-white/70 bg-neutral-700 bg-opacity-100 items-start px-2 rounded-md border border-white border-opacity-25 cursor-pointer">
                  <DropdownMenu.Item
                    onSelect={() => handleChange("Main Account")}
                    className="border-none"
                  >
                    Main Account
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => handleChange("Account 2")}>
                    Account 2
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => handleChange("Account 3")}>
                    Account 3
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => handleChange("Account 4")}>
                    Account 4
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onSelect={() => handleChange("Account 5")}>
                    Account 5
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
              {selectedTab === "Borrow" && (
                <div>{/* Content for Borrow tab */}</div>
              )}
            </div>

            <div className="space-y-2"></div>
            <div className="space-y-2">
              <div className="flex flex-row w-full space-x-1">
                <div>
                  <div className="w-[130px] h-[43px] flex items-center justify-center gap-x-2 p-3 rounded bg-gradient-to-b from-zinc-700/70 to-zinc-900">
                    <Image
                      className="bg-blue-600 rounded-full "
                      src="/images/usdc.png"
                      width={30}
                      height={30}
                      alt={"USDC"}
                    />
                    <div>
                      <p className="text-lg text-white font-redhat">USDX</p>
                    </div>
                  </div>
                </div>
                <input
                  type="string"
                  name="quantity"
                  id="quantity"
                  className="bg-[#2D2C2C] w-full rounded pl-4 text-white/70"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                ></input>
              </div>
              <div className="w-full bg-[#2D2C2C] rounded space-y-3 py-2">
                <div className="flex flex-row justify-between mx-4 text-[14px] text-gray-300">
                  <p className="">Wallet balance</p>
                  <div className="flex flex-row space-x-3">
                    <p>113.0787 USDC</p>
                    <p className="bg-[#4D4A4A] px-1 rounded">50%</p>
                    <p className="bg-[#4D4A4A] px-1 rounded">Max</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row text-gray-400 space-x-3 mt-2 mb-5 text-[13px] items-center">
              <p className="border-2 px-2 border-gray-400 border-dotted rounded-full ">
                !
              </p>
              <p>
                USDC deposits will automatically go towards repaying your
                borrows
              </p>
            </div>
            <div className="w-full h-[1px] bg-white/20"></div>
            <div className="flex flex-row justify-between text-white text-[13px] mt-3">
              <p className="text-[#84AF9B] ">Asset Balance</p>
              <p className="text-gray-300">-0.98 USDC</p>
            </div>
            <div className="flex flex-row justify-between text-white text-[13px] mt-2">
              <p className="text-[#84AF9B] ">NetAccount Balance (USD)</p>
              <p className="text-gray-300">$2.00</p>
            </div>
            <button
              className="w-full py-3 mt-12 mb-8 bg-gradient-to-r from-[#3BB078] rounded to-[#59B689] font-redhat"
              onClick={async () => {
                if (selectedTab === "Deposit") {
                  await createDeposit(amount);
                } else {
                  await createWithdrawal(amount);
                }

                // await createDeposit(amount);

                // await createWithdrawal(amount);
              }}
            >
              Confirm Deposit
            </button>
          </div>
        </div>
        );
      </div>
    </div>
  );
};

export default SearchModal;
