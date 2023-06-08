import { AdvancedRealTimeChart } from "react-ts-tradingview-widgets";

export const Chart: React.FC = () => {
  return (
    <div
      style={{
        height: "600px",
        width: "100%",
      }}
      className="rounded-[20px] border-[0.5px] border-white/20 overflow-hidden mt-6"
    >
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
      ></AdvancedRealTimeChart>
    </div>
  );
};
