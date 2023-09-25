import useMarkPrice from "@/hooks/useMarkPrice";
import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface ExampleProps {}

interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: DataItem[] = [
  {
    name: "Page A",
    uv: 7000,
    pv: 0,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 6000,
    pv: 2398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 5000,
    pv: 3800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 4780,
    pv: 4908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 3890,
    pv: 5800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 6800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 0,
    pv: 7300,
    amt: 2100,
  },
];

export class Example extends PureComponent<ExampleProps> {
  static demoUrl = "https://codesandbox.io/s/synchronized-area-chart-kpg1s";

  render() {
    return (
      <div
        className="flex flex-row w-full h-full bg-neutral-900"
        id="depthView"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} syncId="anyId">
            <CartesianGrid vertical={false} horizontal={false} />

            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="" fill="#205F41" />
          </AreaChart>
        </ResponsiveContainer>
        <div className="w-[0.4px] h-full bg-gray-600/40 divide-dotted text-white"></div>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} syncId="anyId">
            <CartesianGrid vertical={false} horizontal={false} />
            <YAxis orientation="right" className="" />
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="" fill="#FF5D5D" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
