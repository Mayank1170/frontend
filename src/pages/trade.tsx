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
  InfoTabs,
  Info

} from "@/components/Trading";
import { useState } from "react";
import { NextPageWithLayout } from "@/types/custom-next";

const TradeingPage: NextPageWithLayout = () => {

  const [selectedTab, setSelectedTab] = useState<'Price' | 'Depth' | 'Funding' | 'Details'>('Price');

  const onTabChange = (selectedTab: 'Price' | 'Depth' | 'Funding' | 'Details') => {
    setSelectedTab(selectedTab);
  };
  const [infoTab, setInfoTabs] = useState<'Active Positions' | 'Active Orders' | 'Position History' | 'Order History' | 'PnL' | 'Balances'>('Active Positions');
  const onInfoTabChange = (infoTab: 'Active Positions' | 'Active Orders' | 'Position History' | 'Order History' | 'PnL' | 'Balances') => {
    setInfoTabs(infoTab);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (

    <div className="flex flex-row space-x-4">
      <div className="w-full h-full flex flex-col space-y-2">

        <div><PricingLevels onOpenModal={openModal} /></div>
        <div className=""><Navigator /></div>
        <div className="w-full h-full justify-between flex flex-row space-x-4">
          <div className="w-full flex flex-col space-y-4 ">
            <div className="justify-between hidden xl:inline"><Tabs onTabChange={onTabChange} /></div>
            <div className="w-full h-[100%] hidden xl:inline">
              {selectedTab === 'Price' ? (
                <ChartTwo />
              ) : selectedTab === 'Depth' ? (
                <DepthChart />
              ) : (
                <FundingChart />
              )
              }
            </div>

          </div>
          <div className="w-[30%] mt-2 hidden xl:inline"> <TradeValue /></div>
        </div>
        <div>
          <InfoTabs onInfoTabChange={onInfoTabChange} />
        </div>
        <div>
          <Info />
        </div>

      </div>
      <div className="w-[30%] flex-col space-y-4 hidden xl:inline">
        <div><TradeControls /></div>
        <div><Market /></div>

      </div>
      <ViewMoreModal isOpen={isModalOpen} onClose={closeModal}>
      </ViewMoreModal>
    </div>


  );
};
export default TradeingPage;