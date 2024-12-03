"use client";

import {
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

interface RadialChartProps {
  value: number;
  color: string;
  label: string;
}
export function RadialChart({ value, color, label }: RadialChartProps) {
  const data = [{ value: value }];

  return (
    <div className='w-full max-w-[200px] mx-auto'>
      <ChartContainer
        config={{
          value: {
            label: label,
            color: color,
          },
        }}>
        <ResponsiveContainer width='100%' aspect={1}>
          <RadialBarChart
            cx='50%'
            cy='50%'
            innerRadius='60%'
            outerRadius='80%'
            barSize={10}
            data={data}
            startAngle={180}
            endAngle={0}>
            <PolarAngleAxis
              type='number'
              domain={[0, 100]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              background
              dataKey='value'
              cornerRadius={30 / 2}
              fill={color}
            />
            <text
              x='50%'
              y='50%'
              textAnchor='middle'
              dominantBaseline='middle'
              className='fill-muted-foreground text-lg font-medium'>
              {label}
            </text>
          </RadialBarChart>
        </ResponsiveContainer>
      </ChartContainer>
      <div className='mt-2 text-center'>
        <span className='text-3xl font-bold'>{value}%</span>
      </div>
    </div>
  );
}
