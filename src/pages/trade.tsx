import {
  Chart,
  Market,
  PricingLevels,
  Tables,
  TradeControls,
} from "@/components/Trading";
import { NextPageWithLayout } from "@/types/custom-next";

const TradeingPage: NextPageWithLayout = () => {
  return (
    <div>
      <PricingLevels />
      <div className="grid grid-cols-3 gap-x-8">
        <div className="flex-1 col-span-2">
          <Chart />
          <Tables />
        </div>
        <div className="flex flex-col gap-y-10 mt-6">
          <TradeControls />
          <Market />
        </div>
      </div>
    </div>
  );
};

export default TradeingPage;
