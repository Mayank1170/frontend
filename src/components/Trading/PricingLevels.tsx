import Image from "next/image";

export const PricingLevels: React.FC = () => {
  return (
    <div
      className="flex items-center border border-white/20 rounded-[20px] h-[200px] gap-x-10 max-w-[1100px]"
      style={{
        background:
          "linear-gradient(301.33deg, rgba(0, 0, 0, 0.192) 0%, rgba(255, 255, 255, 0.096) 100%)",
      }}
    >
      <GeneralInfo />
      <OHLCData />
    </div>
  );
};

const GeneralInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5 ml-10">
      <div className="flex items-center gap-x-4">
        <Image src="/images/btc.png" width={48} height={48} alt={"bitcoin"} />
        <div>
          <h3 className="text-3xl font-bold">BTC-USD</h3>
          <p className="opacity-[86]">Bitcoin</p>
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
    <div
      className="grid grid-cols-4 rounded-[16px] h-full flex-1 gap-x-10 px-12"
      style={{
        background: "linear-gradient(95.16deg, #3BB078 0%, #76B999 100%)",
      }}
    >
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
        <h3 className="font-bold text-xl 2xl:text-3xl">{numberWithCommas(value)}</h3>
        <p>{name}</p>
      </div>
      <div
        className="bg-black/25 rounded-t-[20px] w-full"
        style={{
          height: `${(value/max) * 100}%`,
        }}
      />
    </div>
  );
};


const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
