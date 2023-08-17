import { numberWithCommas } from "@/utils/numbers";
import {ViewMoreModal} from "./ViewMoreModal";
import Image from "next/image";
import { useState } from 'react'
import {AiOutlineCaretDown} from 'react-icons/ai'
import {AiOutlineCaretUp} from 'react-icons/ai'


interface PricingLevelProps {
  onOpenModal: () => void;
}

export const PricingLevels: React.FC<PricingLevelProps> = ({onOpenModal}) => {
  return (
    <div
      className="flex bg-[#202020] justify-between items-center border border-white/20 rounded-[10px] h-[200px] gap-x-5"    
    >
      <div className="">
      <GeneralInfo />
      </div>
      <div className="rounded-[16px] h-full px-12 flex gap-x-10 right-0">
      <OHLCData />
        <AdditionalInfo onOpenModal={onOpenModal} />
      </div>
    </div>
  );
};

const GeneralInfo: React.FC = () => {

    const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-col gap-y-5 ml-10">
      <button onClick={()=> setIsOpen((prev)=> !prev)}>
          <div className="sm:h-[77px] h-fit py-3 px-2 sm:w-[100%] w-[100%] flex items-center justify-center rounded-lg2 bg-gradient-to-b from-zinc-700/70 to-zinc-800/80">
            <Image src="/images/Solana.png" width={100} height={100} alt={"Solana"} className="w-8 h-8"/>
            <div >
              <h3 className="sm:text-[25px] text-[15px] font-redhat">SOL-PERP</h3>
            </div>
            {!isOpen ? (
              <AiOutlineCaretDown className='h-8'/>
            ) : (
              <AiOutlineCaretUp className='h-8'/>
            )}
          </div>        
      </button>
      <div className="flex gap-x-5">
        <div className="bg-[#39FFA0]/20 flex items-center gap-x-1 px-2 py-1 rounded-lg">
          <Image
            src="/images/icons/arrow-up.svg"
            width={21}
            height={21}
            alt={"arrow-up"}
          />
          <p className="text-[#39FFA0]">+6.5%</p>
        </div>
        <div className="bg-[#FFFFFF26] flex items-center gap-x-1 px-4 py-1 rounded-lg">
          +112
        </div>
      </div>
    </div>
  );
};

const OHLCData: React.FC = () => {
  return (
    <div className="grid grid-cols-4 gap-x-10 h-full font-redhat hidden 2xl:grid text-[8.72px]">
      <OHLCDataItem name="Open" value={16800} max={16900} />
      <OHLCDataItem name="Close" value={3000} max={16900} />
      <OHLCDataItem name="High" value={16900} max={16900} />
      <OHLCDataItem name="Low" value={7000} max={16900} />
    </div>
  );
};

interface OHLCDataItemProps {
  name: string;
  value: number;
  max: number;
}

const OHLCDataItem: React.FC<OHLCDataItemProps> = ({ name, value, max }) => {
  return (
    <div className="flex flex-col justify-between h-full pt-10 gap-y-8">
      <div className="font-pilat">
        <h3 className="font-bold text-md 2xl:text-lg text-white/90">
          {numberWithCommas(value)}
        </h3>
        <p className="text-white/90">{name}</p>
      </div>
      <div
        className="bg-[#274738] rounded-t-[8px] w-[70%]"
        style={{
          height: `${(value / max) * 100}%`,
        }}
      />
    </div>
  );
};

interface AdditionalInfoProps {
  onOpenModal: () => void; // Prop received from PricingLevels
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({onOpenModal}) => {
  return (
    <div className="flex h-full gap-x-8 items-center justify-between">
      <div className="lg:flex flex-col gap-y-6 hidden">
      <AdditionalInfoItem value="19.5142" name="Mark Price" />
       
        <AdditionalInfoItem value="$2.77M" name="24H Volume" />
      </div>
      <div className="lg:flex flex-col gap-y-6 hidden">
      <AdditionalInfoItem value="$19.1695" name="Index Price" />
        <AdditionalInfoItem value="-0.00083% in 35:14" name="Predicted Funding Rate" />
   
      </div>
      <div className="flex flex-col gap-y-6">
        <div className="hidden lg:flex">
        <AdditionalInfoItem value="90.1k/200K SOL" name="Open Interest" />
        </div>
        <button onClick={onOpenModal} className="rounded-lg px-3 py-2 text-[14px] hover:opacity-80 ease-in-out duration-200 transition-opacity" style={{
          background: "rgba(77, 74, 74, 0.4)"
        }}>
          View More Details 
        </button>
      </div>
    </div>
  );
};

interface AdditionalInfoItemProps {
  value: string;
  name: string;
}

const AdditionalInfoItem: React.FC<AdditionalInfoItemProps> = ({
  value,
  name,
}) => {
  return (
    <div className="flex flex-col">
      <p className="text-white/80 text-[18px] font-bold font-redhat">{value}</p>
      <p className="text-[14px] text-white/40">{name}</p>
    </div>
  );
};
