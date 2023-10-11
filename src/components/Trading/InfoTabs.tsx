import React, { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

interface TabsProps {
  onInfoTabChange: (
    selectedTab:
      | "Active Positions"
      | "Active Orders"
      | "Position History"
      | "Order History"
      | "PnL"
      | "Balances"
  ) => void;
}

interface InfoTabLinks {
  label: string;
  click: string;
}

const infoTabLinks: InfoTabLinks[] = [
  {
    label: "Active Positions",
    click: "Active Positions",
  },
  {
    label: "Active Orders",
    click: "Active Orders",
  },
  {
    label: "Position History",
    click: "Position History",
  },
  {
    label: "Order History",
    click: "Order History",
  },
  {
    label: "PnL",
    click: "PnL",
  },
  {
    label: "Balances",
    click: "Balances",
  },
];

export const InfoTabs: React.FC<TabsProps> = ({ onInfoTabChange }) => {
  const [activeComponent, setActiveComponent] = useState<
    | "Active Positions"
    | "Active Orders"
    | "Position History"
    | "Order History"
    | "PnL"
    | "Balances"
  >("Active Positions");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleButtonClick = (
    componentName:
      | "Active Positions"
      | "Active Orders"
      | "Position History"
      | "Order History"
      | "PnL"
      | "Balances",
    index: number
  ) => {
    setActiveComponent(componentName);
    onInfoTabChange(componentName);
    setActiveIndex(index);
    setActiveTabIndex(index);
  };

  return (
    // <div className="w-full flex flex-row items-center">
      <div className="w-full relative flex flex-row bg-[#1C1C1C] rounded-lg border border-white/20 justify-between  ">
        {infoTabLinks.map((link, index) => (
          <button
            onClick={() =>
              handleButtonClick(
                link.click as
                  | "Active Positions"
                  | "Active Orders"
                  | "Position History"
                  | "Order History"
                  | "PnL"
                  | "Balances",
                index
              )
            }
            key={link.label}
            className={classNames(
              "w-full h-14 rounded-lg flex items-center justify-center relative z-10 transition-colors duration-200 ease-in-out font-semibold",
              {
                "text-black": activeIndex === index,
                "text-white": activeComponent !== link.click,
                "bg-none":
                  activeIndex === index,
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
          className={classNames("h-full w-[16.6667%] absolute rounded-lg", {
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
    // </div>
  );
};
