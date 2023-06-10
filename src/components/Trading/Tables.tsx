import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const tabs: TabProps[] = [
  {
    label: "Positions",
    id: "positions",
  },
  {
    label: "Trades",
    id: "trades",
  },
  {
    label: "P&L",
    id: "pnl",
  },
  {
    label: "Balances",
    id: "balances",
  },
];

interface TabProps {
  label: string;
  id: string;
}

interface TabSelectorProps {
  currentTab: TabProps;
  setCurrentTab: (tab: TabProps) => void;
}

const TabSelector: React.FC<TabSelectorProps> = ({
  currentTab,
  setCurrentTab,
}) => {
  const currentTabIndex = tabs.indexOf(currentTab);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex bg-[#373737] rounded-2xl relative">
      {tabs.map((tab, index) => (
        <div
          key={tab.label}
          className={classNames(
            "w-[116px] h-14 rounded-2xl flex items-center justify-center relative z-10 transition-colors duration-200 ease-in-out font-semibold"
          )}
          onMouseEnter={() => {
            setActiveIndex(index);
          }}
          onMouseLeave={() => {
            setActiveIndex(currentTab ? tabs.indexOf(currentTab) : 0);
          }}
          onClick={() => {
            setCurrentTab(tab);
          }}
        >
          {tab.label}
        </div>
      ))}
      <motion.div
        id="active-icon"
        className={classNames(
          "h-full w-[116px] absolute rounded-2xl bg-[#3BB078]"
        )}
        animate={{
          x: activeIndex * 116,
          opacity: activeIndex !== currentTabIndex ? 0.5 : 1,
        }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
        }}
      />
    </div>
  );
};

export const Tables: React.FC = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div
      className="mt-8 rounded-[20px] border border-white/25 p-8 relative"
      style={{
        background:
          "linear-gradient(301.33deg, rgba(0, 0, 0, 0.192) 0%, rgba(255, 255, 255, 0.096) 100%)",
      }}
    >
      <TabSelector currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <AnimatePresence>
        <Table />
      </AnimatePresence>
    </div>
  );
};

const Table = () => {
  return (
    <motion.div className="relative overflow-x-auto shadow-md rounded-2xl mt-10 bg-[#1D2320] border-2 border-white/10">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs border-b-2 border-b-[#58AC72]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Market
            </th>
            <th scope="col" className="px-6 py-3">
              Size
            </th>
            <th scope="col" className="px-6 py-3">
              Entry Price
            </th>
            <th scope="col" className="px-6 py-3">
              Fee
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <tr
                key={index}
                className="border-b border-b-[#58AC72]/40"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium t whitespace-nowrap"
                >
                  Ethereum
                </th>
                <td className="px-6 py-4">$1298.43</td>
                <td className="px-6 py-4">60000 / 20.5%</td>
                <td className="px-6 py-4">60000 / 20.5%</td>
                <td className="px-6 py-4">
                 2 weeks ago
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </motion.div>
  );
};
