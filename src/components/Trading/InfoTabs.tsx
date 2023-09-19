import { useState } from "react";

interface TabsProps {
    onInfoTabChange: (selectedTab:  'Active Positions' | 'Active Orders' | 'Position History' | 'Order History' | 'PnL' | 'Balances') => void;
}

export const InfoTabs: React.FC<TabsProps> = ({ onInfoTabChange }) => {
    const [activeComponent, setActiveComponent] = useState<'Active Positions' | 'Active Orders' | 'Position History' | 'Order History' | 'PnL' | 'Balances'>('Active Positions');

    const handleButtonClick = (componentName: 'Active Positions' | 'Active Orders' | 'Position History' | 'Order History' | 'PnL' | 'Balances') => {
        setActiveComponent(componentName);
        onInfoTabChange(componentName);
    };

    return (
        <div className="flex flex-row justify-betwen items-center">
            <div className="flex flex-row  bg-[#1C1C1C] rounded-lg border border-white/20 ">

                <button onClick={() => handleButtonClick('Active Positions')} className={`rounded-lg px-7 py-3.5 font-medium ${activeComponent === 'Active Positions' ? 'bg-gradient-to-r from-emerald-600 to-emerald-300  text-gray-950 ' : 'bg-[#1C1C1C] text-white'
                    }`}>Active Positions</button>

                <button onClick={() => handleButtonClick('Active Orders')} className={`rounded-lg px-7 py-3.5 font-medium ${activeComponent === 'Active Orders' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
                    }`}>Active Orders</button>

                <button onClick={() => handleButtonClick('Position History')} className={`rounded-lg px-7 py-3.5 font-medium ${activeComponent === 'Position History' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
                    }`}>Position History</button>

                <button onClick={() => handleButtonClick('Order History')} className={`rounded-lg px-7 py-3.5 font-medium ${activeComponent === 'Order History' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
                    }`}>Order History</button>

                <button onClick={() => handleButtonClick('PnL')} className={`rounded-lg px-7 py-3.5 font-medium ${activeComponent === 'PnL' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
                    }`}>PnL</button>



                <button onClick={() => handleButtonClick('Balances')} className={`rounded-lg px-7 py-3.5 font-medium ${activeComponent === 'Balances' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
                    }`}>Balances</button>

            </div>


        </div>
    )
}



