import React from 'react'
import InfoData from './InfoData'

interface InfoItem {
    Market: string;
    size: string;
    entryPrice: string;
    MarkPrice: string;
    Date: string;
}

export const Info: React.FC = () => {
    return (
        <div>
            <div>
                <ul className='flex flex-row justify-around bg-green-900 bg-opacity-20 p-3 items-center border-b-2 border-green-300 rounded-t-lg'>
                    <li>Market</li>
                    <li>Size</li>
                    <li>Entry Price</li>
                    <li>Market Price</li>
                    <li>Data</li>
                </ul>
                {InfoData.map((item: InfoItem) => (
                    <ul className='flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-[1px] border-green-400 rounded-t-l' key={item.Market}>
                        <li className='w-[25%] justify-start items-center'>{item.Market}</li>
                        <li className='w-[25%] justify-start'>{item.size}</li>
                        <li className='w-[25%] justify-start items-center'>{item.entryPrice}</li>
                        <li className='w-[25%] justify-start items-center'>{item.MarkPrice}</li>
                        <li className='w-[15%]'>{item.Date}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
}

