import { Chart, Market, PricingLevels, TradeControls } from "@/components/Trading";
import { NextPageWithLayout } from "@/types/custom-next";

const TradeingPage: NextPageWithLayout = () => {
  return (
    <div className="flex gap-x-8">
      <div className="flex-1">
        <PricingLevels />
        <Chart />
      </div>
      <div className="flex flex-col gap-y-10">
        <TradeControls />
        <Market />
      </div>
    </div>
  );
};

export default TradeingPage;
