import { useState } from "react";
import {Chart} from './Chart'
import { Footer } from "./Footer";
import { OrderBook } from "./TradeValue";
import { RecentTrades } from "./TradeValue";

export const Navigator: React.FC = () => {
    const [activeComponent, setActiveComponent] = useState<'Chart' | 'Orderbook' | 'Trades'>('Chart');

    const handleButtonClick = (componentName: 'Chart' | 'Orderbook' | 'Trades') => {
      setActiveComponent(componentName);
    };
    return (
        <div className="flex flex-col w-[100%] xl:hidden space-y-4 h-[100%]">
      <div className="flex flex-row justify-between bg-[#1C1C1C] rounded-lg border border-white/20 ">

        <button className={`rounded-lg w-[100%] px-7 py-3.5 font-medium ${activeComponent === 'Chart' ? 'bg-gradient-to-r from-emerald-600 to-emerald-300  text-gray-950 ' : 'bg-[#1C1C1C] text-white'
          }`}
          onClick={()=> handleButtonClick('Chart')}>Chart</button>

        <button className={`rounded-lg w-[100%] px-7 py-3.5 font-medium ${activeComponent === 'Orderbook' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
          }`}
          onClick={()=> handleButtonClick('Orderbook')}>Orderbook</button>

        <button className={`rounded-lg w-[100%] px-7 py-3.5 font-medium ${activeComponent === 'Trades' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
          }`}
          onClick={()=> handleButtonClick('Trades')}>Trades</button>
      </div>
      <div className="content-end">
      {activeComponent === 'Chart' ? <Chart /> : activeComponent === 'Orderbook' ? <OrderBook /> : <RecentTrades/> } 
    </div>
    <Footer/>
    </div>
    )
}