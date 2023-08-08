import { numberWithCommas } from "@/utils/numbers";
import Image from "next/image";

export const PricingLevels: React.FC = () => {
  return (
    <div
      className="flex bg-[#202020] items-center border border-white/20 rounded-[10px] h-[200px] gap-x-5 w-full"
     
    >
      <GeneralInfo />
      <div
        className="rounded-[16px] h-full flex-1 px-12 flex gap-x-10"
      >
        <OHLCData />
        <AdditionalInfo />
      </div>
    </div>
  );
};

const GeneralInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 ml-10">
      <div className="w-[230px] h-[77px] flex items-center justify-center gap-x-4 p-3 rounded-lg bg-gradient-to-b from-zinc-700/70 to-zinc-800/80">
        <Image src="/images/Solana.png" width={48} height={48} alt={"Solana"} />
        <div >
          <h3 className="text-2xl font-redhat">SOL-PERP</h3>
        </div>
      </div>
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
    <div className="grid grid-cols-4 gap-x-10 h-full font-redhat text-[8.72px]">
      <OHLCDataItem name="Open" value={16800} max={16900} />
      <OHLCDataItem name="Close" value={16500} max={16900} />
      <OHLCDataItem name="High" value={16900} max={16900} />
      <OHLCDataItem name="Low" value={16200} max={16900} />
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
        <h3 className="font-bold text-md 2xl:text-lg text-white/70">
          {numberWithCommas(value)}
        </h3>
        <p className="text-white/70">{name}</p>
      </div>
      <div
        className="bg-gradient-to-r from-emerald-700 to-emerald-300 rounded-t-[8px] w-[70%]"
        style={{
          height: `${(value / max) * 100}%`,
        }}
      />
    </div>
  );
};

const AdditionalInfo: React.FC = () => {
  return (
    <div className="flex h-full gap-x-8 pt-10">
      <div className="flex flex-col gap-y-6">
        <AdditionalInfoItem value="$19.1695" name="Index Price" />
        <AdditionalInfoItem value="$2.77M" name="24H Volume" />
      </div>
      <div className="flex flex-col gap-y-6">
        <AdditionalInfoItem value="-0.00083% in 35:14" name="Predicted Funding Rate" />
        <AdditionalInfoItem value="-0.00017%" name="24H Avg Funding" />
      </div>
      <div className="flex flex-col gap-y-6">
        <AdditionalInfoItem value="90.1k/200K SOL" name="Open Interest" />
        <button className="rounded-lg px-5 py-2 text-[14px] hover:opacity-80 ease-in-out duration-200 transition-opacity" style={{
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
      <p className="text-white/60 text-[15px] font-bold font-redhat">{value}</p>
      <p className="text-[14px] text-white/40">{name}</p>
    </div>
  );
};
