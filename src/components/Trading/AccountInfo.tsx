import React from 'react'
import useAccountInfo from '@/hooks/useAccountInfo'

export const AccountInfo: React.FC = () => {

  const accountInfo = useAccountInfo();

  console.log("acc info:",accountInfo.accountInfo);
  return (
    <div>
      <div className="bg-[#181818] px-5 lg:w-[100%] h-fit divide-y-2 divide-[#232323] border border-white/20 rounded-xl">
        <div className="my-5 mt-7 px-3 font-redhat font-bold text-[20px]">
          <p>Account Info</p>
        </div>
        <div>
          <ul className="flex flex-col my-9 space-y-7 text-[15px]">
            <li className="flex  flex-row justify-between w-[100%] font-redhat font-bold ">
              <p>Cash Balance:</p>
              <p>{accountInfo.accountInfo?.cashBalance}</p>
            </li>
            <li className="flex flex-row justify-between w-full font-redhat font-bold ">
              <p>Open Position Value</p>
              <p>{accountInfo.accountInfo?.openPositionsValue}</p>
            </li>
            <li className="flex flex-row justify-between w-full font-redhat font-bold ">
              <p>Position Value</p>
              <p>{accountInfo.accountInfo?.portfolioValue}</p>
            </li>

            <li className="flex flex-row justify-between w-full font-redhat font-bold">
              <p>Account Health</p>
              <p>{accountInfo.accountInfo?.accountHealth}</p>
            </li>
            <li className="flex flex-row justify-between w-full font-redhat font-bold ">
              <p>Account Effective Leverage</p>
              <p>{accountInfo.accountInfo?.accountLeverage}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

// export default AccountInfo
