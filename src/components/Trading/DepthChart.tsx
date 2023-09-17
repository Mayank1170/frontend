import React, { PureComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface ExampleProps {}

interface DataItem {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: DataItem[] = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export class Example extends PureComponent<ExampleProps> {
  static demoUrl = 'https://codesandbox.io/s/synchronized-area-chart-kpg1s';

  render() {
    return (
      <div style={{ width: '100%', height:'100%'}} className='flex flex-row'>
        <ResponsiveContainer width="100%" height='100%'>
          <AreaChart
            data={data}
            syncId="anyId"
           
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis display={"none"} />
            <YAxis display={'none'}/>
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="" fill="#205F41" />
          </AreaChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="100%" height='100%'>
          <AreaChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
           
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis display={'none'} />
            <YAxis display={'none'}/>
            <Tooltip />
            <Area type="monotone" dataKey="pv" stroke="" fill="#FF5D5D" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
