import { useState } from "react";

interface TabsProps {
    onInfoTabChange: (selectedTab: 'Positions' | 'Orders' | 'History' | 'Balances') => void;
}

export const InfoTabs: React.FC<TabsProps> = ({ onInfoTabChange }) => {
    const [activeComponent, setActiveComponent] = useState<'Positions' | 'Orders' | 'History' | 'Balances'>('Positions');

    const handleButtonClick = (componentName: 'Positions' | 'Orders' | 'History' | 'Balances') => {
        setActiveComponent(componentName);
        onInfoTabChange(componentName);
    };

    return (
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row  bg-[#1C1C1C] rounded-lg border border-white/20 ">

                <button onClick={() => handleButtonClick('Positions')} className={`rounded-lg px-7 py-3.5 font-medium ${activeComponent === 'Positions' ? 'bg-gradient-to-r from-emerald-600 to-emerald-300  text-gray-950 ' : 'bg-[#1C1C1C] text-white'
                    }`}>Positions</button>

                <button onClick={() => handleButtonClick('Orders')} className={`rounded-lg px-7 py-3.5 font-medium ${activeComponent === 'Orders' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
                    }`}>Orders</button>

                <button onClick={() => handleButtonClick('History')} className={`rounded-lg px-7 py-3.5 font-medium ${activeComponent === 'History' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
                    }`}>History</button>

                <button onClick={() => handleButtonClick('Balances')} className={`rounded-lg px-7 py-3.5 font-medium ${activeComponent === 'Balances' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#1C1C1C] text-white'
                    }`}>Balances</button>

            </div>


        </div>
    )
}



