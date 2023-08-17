import React from 'react';
import { useState } from "react";
import Image from "next/image";

interface SearchModalProps {
    visible: boolean;
    onClick: () => void;
}


const SearchModal: React.FC<SearchModalProps> = ({ visible, onClick }) => {
    const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        if(target.id === 'container')
        onClick();
    }
    const [activeComponent, setActiveComponent] = useState<'Deposit' | 'Withdraw' | 'Borrow'>('Deposit');


    if (!visible) return null;
    return (
        <div id='container' onClick={handleOnClose} className="fixed inset-0 bg-[black] bg-opacity-30 backdrop-blur-sm h-full flex justify-center items-center text-black">
            <div className="bg-[#181818] px-5  border border-white/20 rounded-[10px]">
                <div className='text-white text-xl font-bold px-2 py-7'>
                    Manage Balances
                </div>
                <div className="flex flex-row  bg-[#202020] rounded-lg border border-white/20 ">
                    <button className={`rounded-lg w-64 px-7 py-3.5 font-medium ${activeComponent === 'Deposit' ? 'bg-gradient-to-r from-emerald-600 to-emerald-300  text-gray-950 ' : 'bg-[#202020] text-white'
                        }`}>Deposit</button>

                    <button className={`rounded-lg w-64  px-7 py-3.5 font-medium ${activeComponent === 'Withdraw' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#202020] text-white'
                        }`}>Withdraw</button>

                    <button className={`rounded-lg w-64  px-7 py-3.5 font-medium ${activeComponent === 'Borrow' ? 'bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950' : 'bg-[#202020] text-white'
                        }`}>Borrow</button>
                </div>
                <div className='space-y-4 mb-2'>
                    <div>
                        <h1 className='text-white text-[16px] pt-3 font-redhat'>Deposited assets automatically earn yield through lending</h1>
                        <div className='flex flex-row text-[16px] text-[#3BB078] space-x-4 font-redhat'>
                            <h1>Learn More</h1>
                            <h1>Deposite Guides </h1>
                        </div>
                    </div>
                    <div className='flex flex-row justify-between text-[14px]'>
                        <h1 className='text-[#84AF9B]'>Transfer type and Amount</h1>
                        <h1 className='text-gray-300'>Deposite APR 0.5724%</h1>
                    </div>
                </div>
                <div className='space-y-2'>
                    <div className='flex flex-row w-full space-x-1'>
                        <div >
                            <div className="w-[130px] h-[43px] flex items-center justify-center gap-x-2 p-3 rounded bg-gradient-to-b from-zinc-700/70 to-zinc-900">
                                <Image className='bg-blue-600 rounded-full ' src="/images/usdc.png" width={30} height={30} alt={"USDC"} />
                                <div >
                                    <h3 className="text-lg text-white font-redhat">USDC</h3>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#2D2C2C] w-full rounded'></div>
                    </div>
                    <div className='w-full bg-[#2D2C2C] rounded space-y-3 py-2'>
                        <div className='flex flex-row justify-between mx-4 text-[14px] text-gray-300'>
                            <h1 className=''>Wallet balance</h1>
                            <div className='flex flex-row space-x-3'>
                                <h1>113.0787 USDC</h1>
                                <h1 className='bg-[#4D4A4A] px-1 rounded'>50%</h1>
                                <h1 className='bg-[#4D4A4A] px-1 rounded'>Max</h1>
                            </div>

                        </div>
                        <div className='flex flex-row justify-between mx-4 text-[14px] text-gray-300'>
                            <h1 className=''>Wallet balance</h1>
                            <div className='flex flex-row space-x-3'>
                                <h1>113.0787 USDC</h1>
                                <h1 className='bg-[#4D4A4A] px-1 rounded'>50%</h1>
                                <h1 className='bg-[#4D4A4A] px-1 rounded'>Max</h1>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flex flex-row text-gray-400 space-x-3 mt-2 mb-5 text-[13px] items-center">
                    <h1 className='border-2 px-2 border-gray-400 border-dotted rounded-full '>!</h1>
                    <h1>USDC deposits will automatically go towards repaying your borrows</h1>
                </div>
                <div className='w-full h-[1px] bg-gray-800'></div>
                <div className='flex flex-row justify-between text-white text-[13px] mt-3'>
                    <h1 className='text-[#84AF9B] '>Asset Balance</h1>
                    <h1 className='text-gray-300'>-0.98 USDC</h1>
                </div>
                <div className='flex flex-row justify-between text-white text-[13px] mt-2'>
                    <h1 className='text-[#84AF9B] '>NetAccount Balance (USD)</h1>
                    <h1 className='text-gray-300'>$2.00</h1>
                </div>
                <button className='w-full py-3 mt-12 mb-8 bg-gradient-to-r from-[#3BB078] rounded to-[#59B689] font-redhat'>Confirm Deposite</button>

            </div>
        </div>
    )
}

export default SearchModal;