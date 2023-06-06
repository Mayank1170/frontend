import { PricingLevels, TradeControls } from "@/components/Trading";
import { NextPageWithLayout } from "@/types/custom-next";

const TradeingPage: NextPageWithLayout = () => {
  return (
    <div className="flex gap-x-8">
      <div className="flex-1">
        <PricingLevels />
      </div>
      <div className="flex1">
        <TradeControls />
      </div>
    </div>
  );
};

export default TradeingPage;
