import Image from "next/image";

const marketData: MarketItemProps[] = [
  {
    icon: "/images/btc.png",
    id: "BTC-USD",
    name: "Bitcoin",
    changePercentage: 6.5,
    changeValue: 112,
  },
  {
    icon: "/images/btc.png",
    id: "BTC-USD",
    name: "Bitcoin",
    changePercentage: 6.5,
    changeValue: 112,
  },
  {
    icon: "/images/btc.png",
    id: "BTC-USD",
    name: "Bitcoin",
    changePercentage: 6.5,
    changeValue: 112,
  },
  {
    icon: "/images/btc.png",
    id: "BTC-USD",
    name: "Bitcoin",
    changePercentage: 6.5,
    changeValue: 112,
  },
];

export const Market: React.FC = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(149.5deg, rgba(255, 255, 255, 0.135) 0%, rgba(255, 255, 255, 0.0165) 100%)",
      }}
      className="p-8 flex-1 w-[100%] h-[100] rounded-[10px] border-[0.5px] border-white/20 font-sans"
    >
      <div className="flex items-center gap-x-4 mb-5">
        <Image
          src="/images/icons/market.svg"
          height={36}
          width={36}
          alt="trade"
        />
        <h3 className="font-bold text-2xl">Market</h3>
      </div>
      <div className="flex flex-col gap-y-4">
        {marketData.map((item, index) => (
          <MarketItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

interface MarketItemProps {
  icon: string;
  id: string;
  name: string;
  changePercentage: number;
  changeValue: number;
}

const MarketItem: React.FC<MarketItemProps> = ({
  icon,
  id,
  name,
  changePercentage,
  changeValue,
}) => {
  return (
    <div className="flex justify-between items-center bg-white/10 rounded-2xl px-4 py-2">
      <div className="flex items-center gap-x-4">
        <Image src={icon} height={48} width={48} alt={id} />
        <div>
          <h3 className="font-bold text-[20px]">{name}</h3>
          <p className="text-[10px] text-white/80">{id}</p>
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
          <p className="text-[#39FFA0]">{changePercentage}%</p>
        </div>
        <div className="bg-[#FFFFFF26] flex items-center gap-x-1 px-4 py-1 rounded-lg">
          {changeValue}
        </div>
      </div>
    </div>
  );
};
