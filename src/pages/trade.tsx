import {
  Chart,
  Market,
  PricingLevels,
  TradeValue,
  Tables,
  TradeControls,
} from "@/components/Trading";
import { NextPageWithLayout } from "@/types/custom-next";

const TradeingPage: NextPageWithLayout = () => {
  return (
    <div >
      <div className="grid grid-flow-col gap-5 w-full">
        <div>
          <PricingLevels/>
        </div>
          <div className="grid grid-flow-col gap-5">
          <div className="col-span-12">
            <Chart/>
          </div>
            <TradeValue/>
        </div>
         <div className="row-span-3 ">
            <div className="flex flex-col gap-y-3">
            <TradeControls />
            <Market />
            </div>
         </div>
       </div>
    </div>
  );
};

export default TradeingPage;
