import { useState } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";

interface TabsProps {
  onTabChange: (selectedTab: "Price" | "Depth" | "Funding") => void;
}

const tabLinks: TabLinks[] = [
  {
    label: "Price",
    click: "Price",
  },
  {
    label: "Depth",
    click: "Depth",
  },
  {
    label: "Funding",
    click: "Funding",
  },
];

interface TabLinks {
  label: string;
  click: string;
}

export const Tabs: React.FC<TabsProps> = ({ onTabChange }) => {
  const [activeComponent, setActiveComponent] = useState<
    "Price" | "Depth" | "Funding"
  >("Price");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleButtonClick = (
    componentName: "Price" | "Depth" | "Funding",
    index: number
  ) => {
    setActiveComponent(componentName);
    onTabChange(componentName);
    setActiveIndex(index);
    setActiveTabIndex(index);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center ">
        <div className="flex rounded-lg border bg-[#202020] border-white/20 relative">
          {tabLinks.map((link, index) => (
            <button
              onClick={() =>
                handleButtonClick(
                  link.click as "Price" | "Depth" | "Funding",
                  index
                )
              }
              key={link.label}
              className={classNames(
                "w-[105px] h-14 rounded-lg flex items-center justify-center relative z-[9] transition-colors duration-200 ease-in-out font-semibold",
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
            className={classNames("h-full w-[105px] absolute rounded-lg", {
              "bg-gradient-to-r from-emerald-700 to-emerald-300":
                activeIndex !== -1,
            })}
            animate={{
              x: activeIndex * 105,
              opacity: activeIndex !== -1 ? 1 : -1,
            }}
            transition={{
              duration: 0.2,
              ease: "easeOut",
            }}
          />
        </div>
        <div className="flex flex-row space-x-2">
          <div className="flex w-10 h-10 text-3xl  bg-[#202020] justify-center items-center rounded-lg border border-white/20">
            <button>+</button>
          </div>
          <div className="flex w-24 h-10 bg-[#202020] rounded-lg border border-white/20 items-center justify-center">
            <div className="flex flex-row items-center justify-center space-x-2">
              <p>0.1%</p>
            </div>
          </div>
          <div className="flex w-10 h-10 pb-1 text-3xl bg-[#202020] justify-center items-center rounded-lg border border-white/20">
            <button>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};
