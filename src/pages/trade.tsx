import {
  ChartTwo,
  DepthChart,
  FundingChart,
  Market,
  PricingLevels,
  Navigator,
  TradeValue,
  Tables,
  Tabs,
  TradeControls,
  ViewMoreModal,
  Info,
  Label,
} from "@/components/Trading";
import { useState } from "react";
import { NextPageWithLayout } from "@/types/custom-next";
import useTradeData from "@/hooks/useTradeData";
import useTRGs from "@/hooks/useTRGs";
import useDexterity from "@/hooks/useDexterity";

const TradeingPage: NextPageWithLayout = () => {
  const [selectedTab, setSelectedTab] = useState<
    "Price" | "Depth" | "Funding" | "Details"
  >("Price");

  const onTabChange = (
    selectedTab: "Price" | "Depth" | "Funding" | "Details"
  ) => {
    setSelectedTab(selectedTab);
  };
  const [infoTab, setInfoTabs] = useState<
    | "Active Positions"
    | "Active Orders"
    | "Position History"
    | "Order History"
    | "PnL"
    | "Balances"
  >("Active Positions");
  const onInfoTabChange = (
    infoTab:
      | "Active Positions"
      | "Active Orders"
      | "Position History"
      | "Order History"
      | "PnL"
      | "Balances"
  ) => {
    setInfoTabs(infoTab);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const { trgs, trgBalance } = useTRGs();
  console.log("trgs", trgs);
  console.log("trgBalance", trgBalance);

  const { orderbookData } = useTradeData("ETH0D231014     ");
  console.log(orderbookData);

  const { products } = useDexterity();

  console.log("products", products);

  return (
    <div className="flex flex-row space-x-4">
      <div className="flex flex-col w-full h-full space-y-2">
        <div>
          <PricingLevels onOpenModal={openModal} />
        </div>
        <div className="">
          <Navigator />
        </div>
        <div className="flex flex-row justify-between w-full h-full space-x-4">
          <div className="flex flex-col w-full space-y-4 ">
            <div className="justify-between hidden xl:inline">
              <Tabs onTabChange={onTabChange} />
            </div>
            <div className="w-full h-[100%] hidden xl:inline">
              {selectedTab === "Price" ? (
                <ChartTwo />
              ) : selectedTab === "Depth" ? (
                <DepthChart />
              ) : (
                // </div>
                <FundingChart />
              )}
            </div>
          </div>
          <div className="w-[30%] mt-2 hidden xl:inline">
            {" "}
            <TradeValue />
          </div>
        </div>
        <div>
          <Info />
        </div>
      </div>
      <div className="w-[30%] flex-col space-y-4 hidden xl:inline">
        <div>
          <TradeControls />
        </div>
        {/* <div><Market /></div> */}
      </div>
      {/* <ViewMoreModal isOpen={isModalOpen} onClose={closeModal}></ViewMoreModal> */}
      <Label />
    </div>
  );
};
export default TradeingPage;
