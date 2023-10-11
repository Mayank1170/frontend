import React from "react";
import { useState } from "react";
import Image from "next/image";
import useTRGs from "@/hooks/useTRGs";

interface SearchModalProps {
  visible: boolean;
  onClick: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ visible, onClick }) => {
  const handleOnClose = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    if (target.id === "container") onClick();
  };
  const [activeComponent, setActiveComponent] = useState<
    "deposite" | "Withdraw" | "Borrow"
  >("deposite");

  const { createDeposit, createWithdrawal } = useTRGs();

  const [amount, setAmount] = useState(0);

  if (!visible) return null;
  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 z-[99] bg-[black] bg-opacity-30 backdrop-blur-sm h-full flex justify-center items-center text-black"
    >
      <div className="bg-[#181818] px-5  border border-white/20 rounded-[10px]">
        <div className="px-2 text-xl font-bold text-white py-7">
          Manage Balances
        </div>
        <div className="flex flex-row  bg-[#202020] rounded-lg border border-white/20 ">
          <button
            className={`rounded-lg w-64 px-7 py-3.5 font-medium ${
              activeComponent === "deposite"
                ? "bg-gradient-to-r from-emerald-600 to-emerald-300  text-gray-950 "
                : "bg-[#202020] text-white"
            }`}
          >
            Deposite
          </button>

          <button
            className={`rounded-lg w-64  px-7 py-3.5 font-medium ${
              activeComponent === "Withdraw"
                ? "bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950"
                : "bg-[#202020] text-white"
            }`}
          >
            Withdraw
          </button>

          <button
            className={`rounded-lg w-64  px-7 py-3.5 font-medium ${
              activeComponent === "Borrow"
                ? "bg-gradient-to-r from-emerald-700 to-emerald-300  text-gray-950"
                : "bg-[#202020] text-white"
            }`}
          >
            Borrow
          </button>
        </div>
        <div className="mb-2 space-y-4">
          <div>
            <p className="text-white text-[16px] pt-3 font-redhat">
              depositeed assets automatically earn yield through lending
            </p>
            <div className="flex flex-row text-[16px] text-[#3BB078] space-x-4 font-redhat">
              <p>Learn More</p>
              <p>depositee Guides </p>
            </div>
          </div>
          <div className="flex flex-row justify-between text-[14px]">
            <p className="text-[#84AF9B]">Transfer type and Amount</p>
            <p className="text-gray-300">depositee APR 0.5724%</p>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex flex-row w-full space-x-1">
            <div>
              <div className="w-[130px] h-[43px] flex items-center justify-center gap-x-2 p-3 rounded bg-gradient-to-b from-zinc-700/70 to-zinc-900">
                <Image
                  className="bg-blue-600 rounded-full "
                  src="/images/usdc.png"
                  width={30}
                  height={30}
                  alt={"USDC"}
                />
                <div>
                  <h3 className="text-lg text-white font-redhat">USDC</h3>
                </div>
              </div>
            </div>
            <input
              className="bg-[#2D2C2C] w-full rounded"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="w-full bg-[#2D2C2C] rounded space-y-3 py-2">
            <div className="flex flex-row justify-between mx-4 text-[14px] text-gray-300">
              <h1 className="">Wallet balance</h1>
              <div className="flex flex-row space-x-3">
                <h1>113.0787 USDC</h1>
                <h1 className="bg-[#4D4A4A] px-1 rounded">50%</h1>
                <h1 className="bg-[#4D4A4A] px-1 rounded">Max</h1>
              </div>
            </div>
            <div className="flex flex-row justify-between mx-4 text-[14px] text-gray-300">
              <h1 className="">Wallet balance</h1>
              <div className="flex flex-row space-x-3">
                <h1>113.0787 USDC</h1>
                <h1 className="bg-[#4D4A4A] px-1 rounded">50%</h1>
                <h1 className="bg-[#4D4A4A] px-1 rounded">Max</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row text-gray-400 space-x-3 mt-2 mb-5 text-[13px] items-center">
          <h1 className="px-2 border-2 border-gray-400 border-dotted rounded-full ">
            !
          </p>
          <p>
            USDC deposites will automatically go towards repaying your borrows
          </p>
        </div>
        <div className="w-full h-[1px] bg-gray-800"></div>
        <div className="flex flex-row justify-between text-white text-[13px] mt-3">
          <h1 className="text-[#84AF9B] ">Asset Balance</h1>
          <h1 className="text-gray-300">-0.98 USDC</h1>
        </div>
        <div className="flex flex-row justify-between text-white text-[13px] mt-2">
          <h1 className="text-[#84AF9B] ">NetAccount Balance (USD)</h1>
          <h1 className="text-gray-300">$2.00</h1>
        </div>
        <button
          className="w-full py-3 mt-12 mb-8 bg-gradient-to-r from-[#3BB078] rounded to-[#59B689] font-redhat"
          onClick={async () => {
            await createDeposit(amount);

            // await createWithdrawal(amount);
          }}
        >
          Confirm Deposite
        </button>
      </div>
    </div>
  );
};

export default SearchModal;
