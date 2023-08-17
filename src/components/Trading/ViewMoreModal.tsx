import React from 'react';
import { useState } from "react";
import Image from "next/image";

interface ViewMoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const ViewMoreModal:React.FC<ViewMoreModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) {
        return null;
      }
      const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if(target.id === 'container' )
        onClose()
      }
    
    return (
        <div id='container'  onClick={handleOnClose} className="flex flex-col text-white fixed inset-0 bg-[black] bg-opacity-30 backdrop-blur-sm justify-center items-center text-black">
            <div className="bg-[#181818] px-5 lg:w-[50%] h-fit divide-y-2 divide-[#232323] border border-white/20 rounded">
           <div className='my-5 mt-7 px-3 font-redhat font-bold text-[20px]'>
            <h1>SOL-PERP MARKET DETAILS</h1>
           </div>
           <div>
           <ul className='flex flex-col my-9 space-y-7 text-[15px]'>
            <li className='flex  flex-row justify-between w-[100%] font-redhat font-bold '>
             <h1>Min. order Size</h1>
             <h1>0.1</h1>
            </li>
            <li className='flex flex-row justify-between w-full font-redhat font-bold '>
             <h1>Order Tick Size</h1>
             <h1>0.0001</h1>
            </li>
            <li className='flex flex-row justify-between w-full font-redhat font-bold '>
             <h1>Order Step Size</h1>
             <h1>0.1</h1>
            </li> 
           
            <li className='flex flex-row justify-between w-full font-redhat font-bold'>
             <h1>Margin Maintenance</h1>
             <h1>0.002</h1>
            </li> 
            <li className='flex flex-row justify-between w-full font-redhat font-bold '>
             <h1>Total Liquidation Fee</h1>
             <h1>3.5%</h1>
            </li> 
            <li className='flex flex-row justify-between w-full font-redhat font-bold '>
             <h1>Insurance Fund</h1>
             <h1>$247K</h1>
            </li>
            <li className='flex flex-row justify-between w-full font-redhat font-bold '>
             <h1>P & L Pool</h1>
             <h1>$229K</h1>
            </li> 
           </ul>

            </div>
        </div>
        </div>
    )
}
