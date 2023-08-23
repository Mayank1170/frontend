import { useState } from "react";


const marketValue: MarketDataProps[] = [
  {
    id: 1,
    priceValue: 691.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#8EF884",
  },
  {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  },
  {
    id: 1,
    priceValue: 161.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  },
  {
    id: 1,
    priceValue: 461.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#8EF884",
  },
  {
    id: 1,
    priceValue: 200.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  },
  {
    id: 1,
    priceValue: 15661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  },
  {
    id: 1,
    priceValue: 321.7,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#8EF884",
  },
  {
    id: 1,
    priceValue: 321.7,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#8EF884",
  }, {
    id: 1,
    priceValue: 321.7,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#8EF884",
  }, {
    id: 1,
    priceValue: 321.7,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#8EF884",
  },
  {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  },
  {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  },
  {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#8EF884",
  },
  {
    id: 1,
    priceValue: 61.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "#FF5D5D",
  }
]

const spreadValue: SpreadDataProps[] = [
  {
    id: 1,
    priceValue: 691.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "green",
  },
  {
    id: 1,
    priceValue: 161.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  },
  {
    id: 1,
    priceValue: 461.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "Green",
  },
  {
    id: 1,
    priceValue: 461.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "Green",
  }, {
    id: 1,
    priceValue: 461.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "Green",
  }, {
    id: 1,
    priceValue: 461.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "Green",
  }, {
    id: 1,
    priceValue: 461.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "Green",
  },
  {
    id: 1,
    priceValue: 861.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  },
  {
    id: 1,
    priceValue: 15661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  },
  {
    id: 1,
    priceValue: 321.7,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "green",
  },
  {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  },
  {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  },
  {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  },
  {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  }, {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  },
  {
    id: 1,
    priceValue: 18661.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "green",
  },
  {
    id: 1,
    priceValue: 61.1,
    sizeValue: 6.3450,
    totalValue: 58.5670,
    textColor: "red",
  }
]
export const TradeValue: React.FC = () => {
  return (
    <div>
      <NavLinks />
    </div>
  );
};

marketValue.sort((a, b) => b.priceValue - a.priceValue);
spreadValue.sort((a, b) => a.priceValue - b.priceValue);

const MarketDataContainer: React.FC = () => {
  return (
    <div>
      {marketValue.map((data) => (
        <MarketData
          key={data.id}
          priceValue={data.priceValue}
          sizeValue={data.sizeValue}
          totalValue={data.totalValue}
          textColor={data.textColor}
        />
      ))}
    </div>
  );
};
export default MarketDataContainer;

export const SpreadDataContainer: React.FC = () => {
  return (
    <div>
      {spreadValue.map((data) => (
        <SpreadData
          key={data.id}
          priceValue={data.priceValue}
          sizeValue={data.sizeValue}
          totalValue={data.totalValue}
          textColor={data.textColor}
        />
      ))}
    </div>
  );
};


export const NavLinks: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState<'orderBook' | 'recentTrades'>('orderBook');

  const handleButtonClick = (componentName: 'orderBook' | 'recentTrades') => {
    setActiveComponent(componentName);
  };


  return (
    <div>
      <button
        className={`w-[50%]  font-medium h-[50px] rounded-tl-lg ${activeComponent === 'orderBook' ? 'bg-[#67B38F] text-gray-950' : 'bg-[#202020] text-white'
          }`}
        onClick={() => handleButtonClick('orderBook')}
      >
        Books
      </button>
      <button
        className={`w-[50%] text-white font-medium h-[50px] rounded-tr-lg ${activeComponent === 'recentTrades' ? 'bg-[#67B38F] text-gray-950' : 'bg-[#202020] text-white'
          }`}
        onClick={() => handleButtonClick('recentTrades')}
      >
        Trade
      </button>
      {activeComponent === 'orderBook' ? <OrderBook /> : <RecentTrades />}
    </div>
  );
};



export const OrderBook: React.FC = () => {
  return (
    <div className="bg-neutral-800 pt-3 mt-0 w-[100%] border-[0.5px] border-white/20 rounded-b-lg border-b-white/20">
      <div className="xl:h-[calc(100vh-286px)] h-[calc(100vh-339px)] overflow-y-hidden place-content-evenly	">
        <div>
          <div className="flex flex-row justify-between font-redhat opacity-50 px-3">
            <h3 className="text-[15px]">Price</h3>
            <h3 className="text-[15px]">Size (ETH)</h3>
            <h3 className="text-[15px]">Total(ETH)</h3>
          </div>
          <div
            className="space-y-1 flex flex-col whitespace-nowrap  scrollbar-hide"
            style={{ maxHeight: "362px", overflowY: "scroll" }}
          >

            {marketValue.slice(0, 100).map((item, index) => (
              <MarketData key={item.id} {...item} />
            ))}
          </div>
        </div>
        <div >
          <div
            className="flex flex-row justify-between items-center h-7 font-redhat px-3"
            style={{ background: "rgba(255,255,255,0.12)" }}
          >
            <h3 className="text-[15px]">Spread</h3>
            <h3 className="text-[15px]">1.3</h3>
            <h3 className="text-[15px]">0.06%</h3>
          </div>
          <div
            className="space-y-1  scrollbar-hide"
            style={{ maxHeight: "362px", overflowY: "scroll", scrollbarWidth: 'none' }}
          >
            {spreadValue.slice(0, 100).map((item, index) => (
              <SpreadData key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface MarketDataProps {
  id?: number;
  priceValue: number;
  sizeValue: number;
  totalValue: number;
  textColor: string;
}

const MarketData: React.FC<MarketDataProps> = ({priceValue, sizeValue, totalValue}) => {
  const calculateBackgroundWidth = (priceValue: number) => {
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
          height: 20,
          width: calculateBackgroundWidth(priceValue),
          opacity: 0.4,
        }}
      ></div>
      <div className="flex flex-row justify-between px-3 w-[100%] relative">
        <p className="font-redhat text-red-400 text-[12.87px] ">{priceValue}</p>
        <p className="text-white text-[12.87px] font-redhat">{sizeValue}</p>
        <p className="text-[12.87px] text-white font-redhat">{totalValue}</p>
      </div>
    </div>
  );
};

interface SpreadDataProps {
  id?: number;
  priceValue: number;
  sizeValue: number;
  totalValue: number;
  textColor: string;
}
const SpreadData: React.FC<SpreadDataProps> = ({priceValue, sizeValue, totalValue}) => {
  const calculateBackgroundWidth = (priceValue: number) => {
    const maxPriceValue = 10000;
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
        <p className="font-redhat text-[12.87px] text-[#8EF884]">{priceValue}</p>
        <p className="text-white text-[12.87px] font-redhat">{sizeValue}</p>
        <p className="text-[12.87px] text-white font-redhat">{totalValue}</p>
      </div>
    </div>
  )
}


export const RecentTrades: React.FC = () => {
  return (
    <div className="bg-neutral-800 py-3 mt-0 w-[100%] rounded-b-[10px] border-[0.5px] border-white/20">
      <div className="xl:h-[calc(100vh-299px)]  h-[calc(100vh-352px)] ">
        <div>
          <div className='flex flex-row justify-between font-redhat opacity-50 px-3'>
            <h3 className="text-[15px]">Price</h3>
            <h3 className="text-[15px]" >Size (ETH)</h3>
            <h3 className="text-[15px]">Total(ETH)</h3>
          </div>
          <div className='space-y-1'>
            {marketValue.map((item, index) => (
              <RecentTradeData key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>

  );
};

const RecentTradeData: React.FC<MarketDataProps> = ({ priceValue, totalValue, textColor }) => {
  return (
    <div className="mt-2 rounded-md">
      <div className='flex flex-row justify-between px-3'>
        <p className="font-redhat text-[12.87px]" style={{ color: textColor }}>{priceValue}</p>
        <p className="text-white text-[12.87px] font-redhat">{totalValue}</p>
        <p className="text-[12.87px] text-white font-redhat">{totalValue}</p>
      </div>
    </div>
  )
}