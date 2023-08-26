import { numberWithCommas } from "@/utils/numbers";
import { ViewMoreModal } from "./ViewMoreModal";
import Image from "next/image";
import { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BiChevronUp } from 'react-icons/bi'


interface PricingLevelProps {
  onOpenModal: () => void;
}

export const PricingLevels: React.FC<PricingLevelProps> = ({ onOpenModal }) => {
  return (
    <div
      className="flex bg-[#202020] justify-between xl:pr-8 items-center rounded-lg border border-white border-opacity-30  border-white/20 h-fit"
    >
      <div className="">
        <GeneralInfo />
      </div>
      <AdditionalInfo onOpenModal={onOpenModal} />
    </div>
  );
};

const GeneralInfo: React.FC = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="flex flex-row my-2">
      <button onClick={() => setIsOpen((prev) => !prev)}>
        <div className="flex flex-row p-3 items-center justify-center rounded gap-2">
          <Image src="/images/Solana.png" width={100} height={100} alt={"Solana"} className="2xl:w-12 w-8 h-8 2xl:h-12 xl:flex hidden" />
          <div >
            <h3 className="xl:text-[20px] sm:text-[25px] text-[25px] font-redhat ">SOL-PERP</h3>
          </div>
          {!isOpen ? (
            <BiChevronDown
              className='h-[25px] w-[25px]' />
          ) : (
            <BiChevronUp className='h-[25px] w-[25px]' />
          )}
        </div>
      </button>
      <div className="xl:flex hidden 2xl:gap-x-5 gap-x-3 my-4">
        <div className="bg-[#39FFA0]/20 2xl:w-[90px] w-[80px] flex items-center gap-x-1 px-2 py-1 rounded-lg">
          <Image
            src="/images/icons/arrow-up.svg"
            width={21}
            height={21}
            alt={"arrow-up"}
          />
          <p className="text-[#39FFA0]">+6.5%</p>
        </div>
        <div className="bg-[#FFFFFF26] flex items-center px-4 py-1 rounded-lg">
          +112
        </div>
      </div>
    </div>
  )
}

// const OHLCData: React.FC = () => {
//   return (
//     <div className=" grid-cols-4 gap-x-10 h-full font-redhat hidden 2xl:grid text-[8.72px]">
//       <OHLCDataItem name="Open" value={16800} max={16900} />
//       <OHLCDataItem name="Close" value={3000} max={16900} />
//       <OHLCDataItem name="High" value={16900} max={16900} />
//       <OHLCDataItem name="Low" value={7000} max={16900} />
//     </div>
//   );
// };

// interface OHLCDataItemProps {
//   name: string;
//   value: number;
//   max: number;
// }

// const OHLCDataItem: React.FC<OHLCDataItemProps> = ({ name, value, max }) => {
//   return (
//     <div className="flex flex-col justify-between h-full pt-10 gap-y-8">
//       <div className="font-pilat">
//         <h3 className="font-bold text-md 2xl:text-lg text-white/90">
//           {numberWithCommas(value)}
//         </h3>
//         <p className="text-white/90">{name}</p>
//       </div>
//       <div
//         className="bg-[#274738] rounded-t-[8px] w-20"
//         style={{
//           height: `${(value / max) * 100}%`,
//         }}
//       />
//     </div>
//   );
// };

interface AdditionalInfoProps {
  onOpenModal: () => void; // Prop received from PricingLevels
}

const AdditionalInfo: React.FC<AdditionalInfoProps> = ({ onOpenModal }) => {
  return (
    <div className="flex 3xl:w-[50%] w-[65%] h-full items-center xl:mr-0 mr-5 justify-end xl:justify-between">
      <div className="flex flex-row xl:pr:[30px]"><AdditionalInfoItem value="19.5142" name="Mark Price" /></div>
      <div className="xl:flex hidden"><AdditionalInfoItem value="$2.77M" name="24H Volume" /></div>
      <div className="xl:flex hidden"><AdditionalInfoItem value="$19.1695" name="Index Price" /></div>
      <div className="xl:flex hidden"><AdditionalInfoItem value="-0.00083% in 35:14" name="Predicted Funding Rate" /></div>
      <div className="hidden xl:flex"><AdditionalInfoItem value="90.1k/200K SOL" name="Open Interest" /></div>
      <button onClick={onOpenModal} className="xl:flex w-fit h-fit hidden rounded-lg px-3 py-3 text-[14px] items-center justify-center hover:opacity-80 ease-in-out duration-200 transition-opacity" style={{
          background: "rgba(77, 74, 74, 0.4)"
        }}>
          View More Details
      </button>
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
      <p className="text-white/80 2xl:text-[20px] xl:text-[13px] text-[25px] font-bold font-redhat">{value}</p>
      <p className="text-[14px] text-white/40">{name}</p>
    </div>
  );
}; 