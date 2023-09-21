  import { useState } from "react";

  interface TabsProps {
    onTabChange: (selectedTab: 'Price' | 'Depth' | 'Funding') => void;
  }

  export const Tabs: React.FC<TabsProps> = ({ onTabChange }) => {
    const [activeComponent, setActiveComponent] = useState<'Price' | 'Depth' | 'Funding'>('Price');

    const handleButtonClick = (componentName: 'Price' | 'Depth' | 'Funding') => {
      setActiveComponent(componentName);
      onTabChange(componentName);
    };

    return (
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row  bg-[#1C1C1C] rounded-lg border border-white/20 transition-all">

          <button  onClick={() => handleButtonClick('Price')} className={`rounded-lg px-7 py-3.5  font-medium hover:bg-gray-500 ${activeComponent === 'Price' ? 'bg-gradient-to-r from-emerald-600 to-emerald-300  text-gray-950 ' : 'bg-[#1C1C1C] text-white'
            }`}>Price</button>

          <button  onClick={() => handleButtonClick('Depth')} className={`rounded-lg px-7 py-3.5 font-medium hover:bg-gray-500  ${activeComponent === 'Depth' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
            }`}>Depth</button>

          <button onClick={() => handleButtonClick('Funding')} className={`rounded-lg px-7 py-3.5 font-medium hover:bg-gray-500 ${activeComponent === 'Funding' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
            }`}>Funding</button>

        </div>
        <div className="flex flex-row space-x-2">
          <div className="flex w-10 h-10 text-3xl  bg-[#202020] justify-center items-center rounded-lg border border-white/20">
            <button>+</button>
          </div>
          <div className="flex w-24 h-10 bg-[#202020] rounded-lg border border-white/20 items-center justify-center ">
            <div className="flex flex-row items-center justify-center space-x-2">
              <h1>0.1%</h1>
            </div>
          </div>
          <div className="flex w-10 h-10 pb-1 text-3xl bg-[#202020] justify-center items-center rounded-lg border border-white/20 ">
            <button>-</button>
          </div>
        </div>


      </div>
    )
  }



