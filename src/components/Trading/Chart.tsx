import { useEffect, useState } from "react";
import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export const Chart: React.FC = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div
      style={{
        height: "100%",
        width: "100%",
      }}
      className="rounded-[10px] border-[0.5px] border-white/20 overflow-hidden mt-0"
    >
      {loaded && (
        <AdvancedRealTimeChart
          allow_symbol_change={false}
          hide_top_toolbar={true}
          hide_side_toolbar={true}
          // hide_legend={true}
          symbol="BTC"
          height={600}
          width={1000}
          theme="dark"
          autosize
        />
      )}
    </div>
  );
};
