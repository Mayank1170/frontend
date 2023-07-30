import { useState } from "react";





export const Tabs: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<'Price' | 'Depth' | 'Funding' | 'Details'> ('Price');

  const handleButtonClick = (componentName: 'Price' | 'Depth' | 'Funding' | 'Details') => {
    setActiveComponent(componentName);
  };
  
  return (
    <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row  bg-[#1C1C1C] rounded-lg border border-white/20 ">

            <button className={`rounded-lg px-7 py-3.5 font-medium ${
          activeComponent === 'Price' ? 'bg-gradient-to-r from-emerald-600 to-emerald-300  text-gray-950 ' : 'bg-[#1C1C1C] text-white'
        }`}>Price</button>

            <button className={`rounded-lg px-7 py-3.5 font-medium ${
          activeComponent === 'Depth' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
        }`}>Depth</button>

            <button className={`rounded-lg px-7 py-3.5 font-medium ${
          activeComponent === 'Funding' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
        }`}>Funding</button>

            <button className={`rounded-lg px-7 py-3.5 font-medium ${
          activeComponent === 'Details' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
        }`}>Details</button>
        </div>
        <div className="flex flex-row space-x-2">
         <div className="flex w-10 h-10  text-3xl  bg-white/10 rounded-lg border border-white/20 justify-center items-center">
          <button>+</button>
         </div>
         <div className="flex w-24 h-10 bg-white/10 rounded-lg border border-white/20 items-center justify-center ">
          <div className="flex flex-row items-center justify-center space-x-2">
          <h1>0.1%</h1>
          </div>
         </div>
         <div className="flex w-10 h-10 text-3xl bg-white/10 justify-center items-center rounded-lg border border-white/20 ">
          <button>-</button>
         </div>
    </div>


        </div>
    // </div>
  )
}



