import { numberWithCommas } from "@/utils/numbers";
import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";

export const Markets: React.FC = () => {
  return (
    <div>
      <Header />
      <PriceSections />
      <Table />
    </div>
  );
};

const Header: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<
    "All" | "Gaming" | "Security" | "Web3" | "DeFi"
  >("All");
  return (
    <div className="w-full flex justify-between items-center">
      <div>
        <p className="font-bold text-[34px] ">Markets</p>
        <p className="text-2xl font-medium text-white/40">
          Discover new assets available to trade on spedX
        </p>
      </div>
      <div className="flex gap-x-3">
        <div className="flex gap-x-3" id="tabs">
          <HeaderTab
            active={currentTab === "All"}
            label="All"
            onClick={() => setCurrentTab("All")}
          />
          <HeaderTab
            active={currentTab === "Gaming"}
            label="Gaming"
            onClick={() => setCurrentTab("Gaming")}
          />
          <HeaderTab
            active={currentTab === "Security"}
            label="Security"
            onClick={() => setCurrentTab("Security")}
          />
          <HeaderTab
            active={currentTab === "Web3"}
            label="Web3"
            onClick={() => setCurrentTab("Web3")}
          />
          <HeaderTab
            active={currentTab === "DeFi"}
            label="DeFi"
            onClick={() => setCurrentTab("DeFi")}
          />
        </div>
        <div className="h-8 w-[2px] bg-white/20"></div>
        <button>
          <Image src="/images/icons/search.svg" height={24} width={24} alt="" />
        </button>
      </div>
    </div>
  );
};

interface HeaderTabProps {
  active: boolean;
  label: string;
  onClick: () => void;
}

const HeaderTab: React.FC<HeaderTabProps> = ({ active, label, onClick }) => {
  return (
    <div
      className={classNames(
        "px-4  h-7 flex items-center rounded-lg bg-white/20 border hover:border-[#95FED8] border-transparent cursor-pointer",
        {
          "bg-black/20 border-[#95FED8]": active,
        }
      )}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

const PriceSections: React.FC = () => {
  return (
    <div className="flex gap-x-10 mt-12">
      <PriceSection
        label="Trading Volume"
        value={690232242}
        description="generated in the last 24H"
      />
      <PriceSection
        label="Open Interest"
        value={690232242}
        description="created in last 24H"
      />
      <PriceSection
        label="Fees"
        value={690232242}
        description="collected in last 24H"
      />
    </div>
  );
};

interface PriceSections {
  label: string;
  value: number;
  description: string;
}

const PriceSection: React.FC<PriceSections> = ({
  label,
  value,
  description,
}) => {
  return (
    <div className="flex flex-col border-r border-white/20 pr-32">
      <p className="text-white/40 mb-2">{label}</p>
      <p className="text-white text-[32px] mb-1">${numberWithCommas(value)}</p>
      <p className="text-white/40">{description}</p>
    </div>
  );
};

const Table: React.FC = () => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-2xl mt-14 bg-[#1D2320] border-2 border-white/10">
      <table className="w-full text-sm text-left ">
        <thead className="text-xs border-b-2 border-b-[#58AC72]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Market
            </th>
            <th scope="col" className="px-6 py-3">
              Index Price
            </th>
            <th scope="col" className="px-6 py-3">
              24H Change
            </th>
            <th scope="col" className="px-6 py-3">
              1H Funding
            </th>
            <th scope="col" className="px-6 py-3">
              Open Interest
            </th>
            <th scope="col" className="px-2 py-3">
              24H Volume
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <tr key={index} className="border-b border-b-[#58AC72]/40">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium t whitespace-nowrap"
                >
                  Ethereum
                </th>
                <td className="px-6 py-4">$1298.43</td>
                <td className="px-6 py-4 text-red-500">2.7%</td>
                <td className="px-6 py-4 text-[#029238]">60000 / 20.5%</td>
                <td className="px-6 py-4 text-[#029238]">60000 / 20.5%</td>
                <td className="px-2 py-4 ">0</td>
                <td className="px-6 py-4 flex gap-x-1">
                  <button>
                    <Image
                      src="/images/icons/action-0.svg"
                      height={20}
                      width={20}
                      alt=""
                    />
                  </button>
                  <button>
                    <Image
                      src="/images/icons/action-1.svg"
                      height={20}
                      width={20}
                      alt=""
                    />
                  </button>
                  <button>
                    <Image
                      src="/images/icons/action-2.svg"
                      height={20}
                      width={20}
                      alt=""
                    />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
