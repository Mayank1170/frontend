const marketValue: MarketDataProps[] = [
  {
    id: 1,
    priceValue : 691.1,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "green",
  },
  {
    id: 1,
    priceValue : 161.1,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  },
  {
    id: 1,
    priceValue : 461.1,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "Green",
  },
  {
    id: 1,
    priceValue : 861.1,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  },
  {
    id: 1,
    priceValue : 15661.1,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  },
  {
    id: 1,
    priceValue : 321.7,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "green",
  },
   {
    id: 1,
    priceValue : 18661.1,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  }, {
    id: 1,
    priceValue : 18661.1,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  }, {
    id: 1,
    priceValue : 18661.1,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  }, {
    id: 1,
    priceValue : 300.1,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  },
   {
    id: 1,
    priceValue : 18661.1,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "green",
  },
   {
    id: 1,
    priceValue : 61.1,
    sizeValue : 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  }
]
// const SpreadList : 
export const TradeValue: React.FC = () => {
  return (
    <div>
      <OrderBook />
      <RecentTrades/>
    </div>
  );
};

const OrderBook: React.FC = () => {
  return (
    <div className="bg-neutral-800 py-3 mt-0 w-[100%] rounded-t-[10px] border-[0.5px] border-white/20 border-b-[2.5px] border-b-white/20">
      <div>
        <div className="flex items-center gap-x-4 ml-4 mb-4">
          <h3 className="font-bold text-2xl font-sans">Order Book</h3>
        </div>
        <div>
          <div className="flex flex-row justify-between font-sans opacity-50 px-3">
            <h3 className="text-[15px]">Price</h3>
            <h3 className="text-[15px]">Size (ETH)</h3>
            <h3 className="text-[15px]">Total(ETH)</h3>
          </div>
          <div
            className="space-y-1"
            style={{ maxHeight: "200px", overflowY: "scroll" }}
          >
            {marketValue.slice(0, 100).map((item, index) => (
              <MarketData key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div>
          <div
            className="flex flex-row justify-between font-sans mt-2 px-3"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            <h3 className="text-[15px]">Spread</h3>
            <h3 className="text-[15px]">1.3</h3>
            <h3 className="text-[15px]">0.06%</h3>
          </div>
          <div
            className="space-y-1"
            style={{ maxHeight: "200px", overflowY: "scroll" }}
          >
            {marketValue.slice(0, 100).map((item, index) => (
              <SpreadData key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface MarketDataProps {
  id: number;
  priceValue : number;
  sizeValue: number;
  totalValue: number;
  textColor: string;
}

const MarketData: React.FC<MarketDataProps> = ({
  priceValue,
  sizeValue,
  totalValue,
}) => {
  const calculateBackgroundWidth = (priceValue : number) => {
    const maxPriceValue = 10000; // Replace this with the actual maximum value.
    const widthPercentage = (priceValue / maxPriceValue) * 1000;
    const limitedWidthPercentage = Math.min(widthPercentage, 100);
    return `${limitedWidthPercentage}%`;
  };

  return (
    <div className="w-full relative">
      
    <div
      className="absolute bg-red-900 rounded-md"
      style={{
        height:20,
        width: calculateBackgroundWidth(priceValue),
        opacity: 0.4,
      }}
    ></div>
      <div className="flex flex-row justify-between px-3 w-[100%] relative">
        <p className="font-sans text-red-400 text-[12.87px] ">{priceValue}</p>
        <p className="text-white text-[12.87px] font-sans">{sizeValue}</p>
        <p className="text-[12.87px] text-white font-sans">{totalValue}</p>
    </div>
  </div>
  );
};

const SpreadData: React.FC<MarketDataProps> = ({
  priceValue,
  sizeValue,
  totalValue,
}) =>{
  const calculateBackgroundWidth = (priceValue : number) => {
    const maxPriceValue = 10000; // Replace this with the actual maximum value.
    const widthPercentage = (priceValue / maxPriceValue) * 1000;
    const limitedWidthPercentage = Math.min(widthPercentage, 100);
    return `${limitedWidthPercentage}%`;
  }; 
  return (
    <div className="w-full relative">
      <div className="absolute bg-green-900  rounded-md" 
      style={{
        height: 20,
        width: calculateBackgroundWidth(priceValue),
        opacity: 0.4,
      }}></div>
    <div className='flex flex-row justify-between px-3'>
      <p className="font-sans text-[12.87px] text-[#8EF884]">{priceValue}</p>
      <p className="text-white text-[12.87px] font-sans">{sizeValue}</p>
      <p className="text-[12.87px] text-white font-sans">{totalValue}</p>
    </div>
    </div>
  )
}


const RecentTrades: React.FC = () => {
  return ( 
    <div  className="bg-neutral-800 py-3 mt-0 w-[100%] rounded-b-[10px] border-[0.5px] border-white/20">
      <div>
      <div className="flex items-center gap-x-4 ml-4 mb-4">
         
          <h3 className="font-bold text-2xl font-sans">Recent Trades</h3>
        </div>
      <div>
        <div className='flex flex-row justify-between font-sans opacity-50 px-3'>
          <h3 className="text-[15px]">Price</h3>
          <h3 className="text-[15px]" >Size (ETH)</h3>
          <h3 className="text-[15px]">Total(ETH)</h3>
        </div>
        <div className='space-y-1'>
          {marketValue.map((item, index) => (
            <RecentTradeData key={item.id} {...item}/>
          ))}
        </div>
      </div>
      </div>
     </div>

);
};

const RecentTradeData: React.FC<MarketDataProps> = ({
  priceValue,
  totalValue,
  textColor,
}) =>{
  return (
    <div className="mt-2 rounded-md">
      <div className='flex flex-row justify-between px-3'>
      <p className="font-sans text-[12.87px]" style={{color: textColor}}>{priceValue}</p>
      <p className="text-white text-[12.87px] font-sans">{totalValue}</p>
      <p className="text-[12.87px] text-white font-sans">{totalValue}</p>
      </div>
    </div>
  )
}