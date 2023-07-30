import {
  Chart,
  Market,
  PricingLevels,
  TradeValue,
  Tables,
  Tabs,
  TradeControls,
} from "@/components/Trading";
import { NextPageWithLayout } from "@/types/custom-next";

const TradeingPage: NextPageWithLayout = () => {
  return (
    <div >
      <div className="grid grid-flow-col gap-5 gap-y-2 w-full">
        <div>
          <PricingLevels/>
          
        </div>
          <div className="grid grid-flow-col gap-5 gap-y-3 w-full">
          <div className="col-span-4 space-y-2">
            <Tabs/>
            <Chart/>
          </div>
            <TradeValue/>
        </div>
         <div className="row-span-2 h-full ">
            <div className="flex flex-col gap-y-3 h-full">
            <TradeControls />
            <Market />
            </div>
         </div>
       </div>
    </div>
  );
};

export default TradeingPage;
