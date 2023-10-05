import React, { useState } from "react";
import { InfoTabs } from "./InfoTabs";
import InfoData from "./InfoData";

interface InfoItem {
  Market: string;
  size: string;
  entryPrice: string;
  Value: string;
  FillQuantity: string;
  LiqPrice : string;
  RemainingQuantity: string;
  AvgFillPrice: string;
  Balance: string;
  InitialMargin: string;
  UPnL: string;
  RPnL: string;
  Actions: string;
  MarkPrice: string;
  Date: string;
}

const ActivePositionsContent: React.FC = () => {
  return (
      <div>
        <ul className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-2 border-green-300 rounded-t-lg">
          <li className="w-[25%]">Market</li>
          <li className="w-[25%]">Size</li>
          <li className="w-[25%]">Entry Price</li>
          <li className="w-[15%]">Value</li>
          <li className="w-[25%]">Liq. Price</li>
          <li className="w-[25%]">Init. Margin</li>
          <li className="w-[15%]">UPnL</li>
          <li className="w-[15%]">RPnL</li>
          <li className="w-[15%]">Actions</li>
        </ul>
        {InfoData.map((item: InfoItem) => (
          <ul
            className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-[1px] border-green-400 rounded-t-l"
            key={item.Market}
          >
            <li className="w-[25%] justify-start items-center">
              {item.Market}
            </li>
            
            <li className="w-[25%] justify-start">{item.size}</li>
            <li className="w-[25%] justify-start items-center">
              {item.entryPrice}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.Value}
            </li>
            <li className="w-[25%] justify-start items-center">
              {item.LiqPrice}
            </li>
            <li className="w-[25%] justify-start items-center">
              {item.InitialMargin}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.UPnL}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.RPnL}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.Actions}
            </li>
          </ul>
        ))}
      </div>
  );
};

const ActiveOrdersContent: React.FC = () => {
  return (
    <div>
      <div>
        <ul className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-2 border-green-300 rounded-t-lg">
          <li className="w-[25%]">Symbol</li>
          <li className="w-[25%]">Size</li>
          <li className="w-[25%]">Entry Price</li>
          <li className="w-[15%]">Value</li>
          <li className="w-[15%]">Fill Qty.</li>
          <li className="w-[25%]">Remaining Qty.</li>
          <li className="w-[15%]">Avg. Fill Price</li>
        </ul>
        {InfoData.map((item: InfoItem) => (
          <ul
            className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-[1px] border-green-400 rounded-t-l"
            key={item.Market}
          >
            <li className="w-[25%] justify-start items-center">
              {item.Market}
            </li>
            <li className="w-[25%] justify-start">{item.size}</li>
            <li className="w-[25%] justify-start items-center">
              {item.entryPrice}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.Value}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.FillQuantity}
            </li>
            <li className="w-[25%] justify-start items-center">
              {item.RemainingQuantity}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.AvgFillPrice}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

const PositionHistoryContent: React.FC = () => {
  return (
    <div>
      <div>
        <ul className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-2 border-green-300 rounded-t-lg">
          <li className="w-[25%]">Market</li>
          <li className="w-[25%]">Size</li>
          <li className="w-[25%]">Entry Price</li>
          <li className="w-[15%]">Value</li>
          <li className="w-[25%]">Liq. Price</li>
          <li className="w-[25%]">Init. Margin</li>
          <li className="w-[15%]">UPnL</li>
          <li className="w-[15%]">RPnL</li>
          <li className="w-[15%]">Actions</li>
        </ul>
        {InfoData.map((item: InfoItem) => (
          <ul
            className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-[1px] border-green-400 rounded-t-l"
            key={item.Market}
          >
            <li className="w-[25%] justify-start items-center">
              {item.Market}
            </li>
            
            <li className="w-[25%] justify-start">{item.size}</li>
            <li className="w-[25%] justify-start items-center">
              {item.entryPrice}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.Value}
            </li>
            <li className="w-[25%] justify-start items-center">
              {item.LiqPrice}
            </li>
            <li className="w-[25%] justify-start items-center">
              {item.InitialMargin}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.UPnL}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.RPnL}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.Actions}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};


const OrderHistoryContent: React.FC = () => {
  return (
    <div>
      <div>
        <ul className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-2 border-green-300 rounded-t-lg">
          <li className="w-[25%]">Symbol</li>
          <li className="w-[25%]">Size</li>
          <li className="w-[25%]">Entry Price</li>
          <li className="w-[15%]">Value</li>
          <li className="w-[15%]">Fill Qty.</li>
          <li className="w-[25%]">Remaining Qty.</li>
          <li className="w-[15%]">Avg. Fill Price</li>
        </ul>
        {InfoData.map((item: InfoItem) => (
          <ul
            className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-[1px] border-green-400 rounded-t-l"
            key={item.Market}
          >
            <li className="w-[25%] justify-start items-center">
              {item.Market}
            </li>
            <li className="w-[25%] justify-start">{item.size}</li>
            <li className="w-[25%] justify-start items-center">
              {item.entryPrice}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.Value}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.FillQuantity}
            </li>
            <li className="w-[25%] justify-start items-center">
              {item.RemainingQuantity}
            </li>
            <li className="w-[15%] justify-start items-center">
              {item.AvgFillPrice}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};


const PnLContnet: React.FC = () => {
  return(
    <div>
       <div>
        <ul className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-2 border-green-300 rounded-t-lg">
          <li className="w-[25%]">Symbol</li>
          <li className="w-[25%]">Entry Price</li>
          <li className="w-[25%]">Settled PnL</li>
          <li className="w-[25%]">Funding</li>
          <li className="w-[15%]">Unsettled PnL</li>
        </ul>
        {InfoData.map((item: InfoItem) => (
          <ul
            className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-[1px] border-green-400 rounded-t-l"
            key={item.Market}
          >
            <li className="w-[25%] justify-start items-center">
              {item.Market}
            </li>
            <li className="w-[25%] justify-start">{item.size}</li>
            <li className="w-[25%] justify-start items-center">
              {item.entryPrice}
            </li>
            <li className="w-[25%] justify-start items-center">
              {item.MarkPrice}
            </li>
            <li className="w-[15%]">{item.Date}</li>
          </ul>
        ))}
      </div>
    </div>
  )
}

const BalancesContent: React.FC = () => {
  return(
    <div>
       <div>
        <ul className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-2 border-green-300 rounded-t-lg">
          <li className="w-[25%]">Symbol</li>
          <li className="w-[25%]">Balance</li>
          <li className="w-[25%]">Liq. Price</li>
        </ul>
        {InfoData.map((item: InfoItem) => (
          <ul
            className="flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-[1px] border-green-400 rounded-t-l"
            key={item.Market}
          >
            <li className="w-[25%] justify-start items-center">
              {item.Market}
            </li>
            <li className="w-[25%] justify-start">{item.Balance}</li>
            <li className="w-[25%] justify-start items-center">
              {item.LiqPrice}
            </li>
          </ul>
        ))}
      </div>
    </div>
  )
}

export const Info: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<
    | "Active Positions"
    | "Active Orders"
    | "Position History"
    | "Order History"
    | "PnL"
    | "Balances"
  >("Active Positions");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "Active Positions":
        return <ActivePositionsContent />;
      case "Active Orders":
        return <ActiveOrdersContent />;
      case "Position History":
        return <PositionHistoryContent />;
      case "Order History":
        return <OrderHistoryContent/>
      case "PnL": 
        return <PnLContnet/>
      case "Balances": 
        return <BalancesContent/>
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-y-2">
      <InfoTabs
        onInfoTabChange={(selectedTab) => setSelectedTab(selectedTab)}
      />
      <div>{renderTabContent()}</div>
    </div>
  );
};
