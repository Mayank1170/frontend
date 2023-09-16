import React from 'react'
import InfoData from './InfoData'

export const Info = () => {
  return (
    <div>
      <div>
        <ul className='flex flex-row justify-around bg-green-900 bg-opacity-20 p-3 items-center border-b-2 border-green-300 rounded-t-lg'>
            <li>Market</li>
            <li>Size</li>
            <li>Enrty Price</li>
            <li>Market Price</li>
            <li>Data</li>
        </ul>
        {InfoData.map((item)=> (
        <ul className='flex flex-row justify-between bg-green-900 bg-opacity-20 p-3 items-center border-b-[1px] border-green-400 rounded-t-l'>
            <li className='w-[25%] justify-start items-center '>{item.Market}</li>
            <li className='w-[25%]  justify-start'>{item.size}</li>
            <li className='w-[25%]  justify-start items-center'>{item.entryPrice}</li>
            <li className='w-[25%]  justify-start items-center'>{item.MarkPrice}</li>
            <li className='w-[15%]'>{item.Date}</li>
        </ul>
        ))}
      </div>
    </div>
  )
}

