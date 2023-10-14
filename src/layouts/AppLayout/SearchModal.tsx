import React from "react";
import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import s from "../../components/Trading/Accordion.module.css";
import * as Accordion from "@radix-ui/react-accordion";
export const Collapse = Accordion.Root;
import { motion } from "framer-motion";

import { ChevronDownIcon } from "@radix-ui/react-icons";
interface TabsProps {
  onTabChange: (selectedTab: "deposit" | "Withdraw" | "Borrow") => void;
}
interface SearchModalProps {
  visible: boolean;
  onClick: () => void;
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

interface TabLinks {
  label: string;
  click: string;
}

const SearchModal: React.FC<SearchModalProps> = ({ visible, onClick }) => {
  const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "container") onClick();
  };
  const [activeComponent, setActiveComponent] = useState<
    "Deposit" | "Withdraw" | "Borrow"
  >("Deposit");
  const [selectedOption, setSelectedOption] = useState<string>("Main Account");
  // const [isOpen, setIsOpen] = useState(false);

  const options = [
    "Main Account",
    "Account 2",
    "Account 3",
    "Account 4",
    "Account 5",
  ];
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

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 z-[99] bg-[black] bg-opacity-30 backdrop-blur-sm h-full flex justify-center items-center text-black"
    >
      <div className="bg-[#181818] px-5 w-[700px] border border-white/20 rounded-[10px]">
        <div className="text-white text-xl font-bold px-2 py-7">
          Manage Balances
        </div>
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
            className={classNames("h-[56px] w-[220px] absolute rounded-lg", {
              "bg-gradient-to-r from-emerald-700 to-emerald-300":
                activeIndex !== -1,
            })}
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
        <div className="space-y-4 mb-2">
          {selectedTab === "Deposit" && (
            <div className="flex flex-col gap-y-4">
              <div className="w-full">
                <p className="text-[#84AF9B]">Deposit to</p>
                <Collapse type="multiple" className={s.Container}>
                  <Accordion.Item value="item-1" className={s.Item}>
                    <Accordion.Header className={s.Header}>
                      <Accordion.Trigger className={s.Trigger}>
                        <div className="flex items-center justify-between bg-[#FFFFFF26] rounded px-2 py-[10px] w-full border border-white/20">
                          <div className="flex font-semibold items-center text-white/90 text-[15px]">
                            {selectedOption}
                          </div>
                          <ChevronDownIcon aria-hidden className={s.Icon} />
                        </div>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content>
                      <div className="flex flex-col w-full h-fit gap-y-2 absolute z-[10] bg-neutral-700 bg-opacity-100 items-start mt-3 px-[9px] rounded-md border border-white border-opacity-25">
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
                    </Accordion.Content>
                  </Accordion.Item>
                </Collapse>
              </div>
            </div>
          )}

          {selectedTab === "Withdraw" && (
            <div>
              <div className="flex flex-col gap-y-4">
                <div className="w-full">
                  <p className="text-[#84AF9B]">Withdraw from</p>
                  <Collapse type="multiple" className={s.Container}>
                    <Accordion.Item value="item-1" className={s.Item}>
                      <Accordion.Header className={s.Header}>
                        <Accordion.Trigger className={s.Trigger}>
                          <div className="flex items-center justify-between bg-[#FFFFFF26] rounded px-2 py-[10px] w-full border border-white/20">
                            <div className="flex font-semibold items-center text-white/90 text-[15px]">
                              {selectedOption}
                            </div>
                            <ChevronDownIcon aria-hidden className={s.Icon} />
                          </div>
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content>
                        <div className="flex flex-col w-full h-fit gap-y-2 absolute z-[10] bg-neutral-700 bg-opacity-100 items-start mt-3 px-[9px] rounded-md border border-white border-opacity-25">
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
                      </Accordion.Content>
                    </Accordion.Item>
                  </Collapse>
                </div>
              </div>{" "}
            </div>
          )}

          {selectedTab === "Borrow" && (
            <div>{/* Content for Borrow tab */}</div>
          )}
        </div>
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
                  <p className="text-lg text-white font-redhat">USDC</p>
                </div>
              </div>
            </div>
            <input
              type="string"
              name="quantity"
              id="quantity"
              className="bg-[#2D2C2C] w-full rounded pl-4 text-white/70"
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
            USDC deposites will automatically go towards repaying your borrows
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
        <button className="w-full py-3 mt-12 mb-8 bg-gradient-to-r from-[#3BB078] rounded to-[#59B689] font-redhat">
          Confirm depositee
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
