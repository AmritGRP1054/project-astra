"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy data for the weekly chart
const weeklyChartData = [
  { date: "10 Aug", amount: 300 },
  { date: "11 Aug", amount: 500 },
  { date: "12 Aug", amount: 400 },
  { date: "13 Aug", amount: 300 },
  { date: "14 Aug", amount: 200 },
  { date: "15 Aug", amount: 450 },
  { date: "16 Aug", amount: 500 },
];

// Dummy data for the monthly chart (30 days)
const monthlyChartData = Array.from({ length: 30 }, (_, i) => ({
  date: `${i + 1} Aug`,
  amount: Math.floor(Math.random() * 1000) + 100,
}));

// Dummy data for past earnings
const pastEarnings = [
  {
    id: 1,
    taskNumber: "Task #1",
    project: "Project Astra",
    amount: 12500,
    time: "5:05 PM",
    date: "Aug 22, 2023",
  },
  {
    id: 2,
    taskNumber: "Task #2",
    project: "Project Astra",
    amount: 12500,
    time: "5:05 PM",
    date: "Aug 22, 2023",
  },
  {
    id: 3,
    taskNumber: "Task #3",
    project: "Project Astra",
    amount: 12500,
    time: "5:05 PM",
    date: "Aug 22, 2023",
  },
  {
    id: 4,
    taskNumber: "Task #4",
    project: "Project Astra",
    amount: 12500,
    time: "5:05 PM",
    date: "Aug 22, 2023",
  },
];

export default function EarningsDashboard() {
  const [timeframe, setTimeframe] = useState<"weekly" | "monthly">("weekly");

  // API integration points:
  /*
  useEffect(() => {
    // Fetch earnings data
    const fetchEarnings = async () => {
      const response = await fetch('/api/earnings');
      const data = await response.json();
      // Update state with earnings data
    }
    
    // Fetch past tasks
    const fetchTasks = async () => {
      const response = await fetch('/api/tasks');
      const data = await response.json();
      // Update state with tasks data
    }
    
    fetchEarnings();
    fetchTasks();
  }, []);
  */

  const chartData = timeframe === "weekly" ? weeklyChartData : monthlyChartData;

  return (
    <div className='flex flex-col min-h-screen bg-gray-50 pt-20 pb-16'>
      <div className='grid grid-cols-2 gap-4 p-4'>
        <Card className='p-4'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-lg bg-[#1a237e]/10 flex items-center justify-center'>
              <Wallet className='w-6 h-6 text-[#1a237e]' />
            </div>
            <div>
              <p className='text-sm text-gray-600'>Total Income</p>
              <p className='text-lg font-semibold'>₹50,789</p>
            </div>
          </div>
        </Card>
        <Card className='p-4'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-lg bg-[#1a237e]/10 flex items-center justify-center'>
              <Wallet className='w-6 h-6 text-[#1a237e]' />
            </div>
            <div>
              <p className='text-sm text-gray-600'>Monthly Income</p>
              <p className='text-lg font-semibold'>₹50,789</p>
            </div>
          </div>
        </Card>
      </div>

      <div className='p-4'>
        <div className='flex justify-between items-center mb-4'>
          <select className='border rounded-md px-2 py-1'>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Last Year</option>
          </select>
          {/* <div className='flex gap-2'>
            <Button
              variant={timeframe === "weekly" ? "default" : "outline"}
              onClick={() => setTimeframe("weekly")}
              className='bg-[#1a237e]'>
              Weekly
            </Button>
            <Button
              variant={timeframe === "monthly" ? "default" : "outline"}
              onClick={() => setTimeframe("monthly")}
              className='bg-[#1a237e]'>
              Monthly
            </Button>
          </div>
        </div> */}

          <div className='flex gap-2'>
            <Button
              variant='default'
              onClick={() => setTimeframe("weekly")}
              className={`${
                timeframe === "weekly"
                  ? "bg-[#222b8c] text-white" // Deep blue background with white text for active
                  : "bg-purple-100 text-[#1a237e]" // Light purple background with deep blue text for inactive
              } px-4 py-2 rounded-md`}>
              Weekly
            </Button>
            <Button
              variant='default'
              onClick={() => setTimeframe("monthly")}
              className={`${
                timeframe === "monthly"
                  ? "bg-[#1a237e] text-white" // Deep blue background with white text for active
                  : "bg-purple-100 text-[#1a237e]" // Light purple background with deep blue text for inactive
              } px-4 py-2 rounded-md`}>
              Monthly
            </Button>
          </div>
        </div>

        <Card className='p-4 h-[200px]'>
          <ResponsiveContainer width='100%' height='100%'>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis
                dataKey='date'
                tick={{ fontSize: 10 }}
                interval={timeframe === "weekly" ? 0 : "preserveStartEnd"}
              />
              <YAxis />
              <Tooltip />
              <Line
                type='monotone'
                dataKey='amount'
                stroke='#1a237e'
                strokeWidth={2}
                dot={{ fill: "#1a237e", r: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>

      <div className='flex justify-between items-center px-4 mt-4'>
        <h2 className='font-semibold text-lg'>Past Earnings</h2>
        <Button variant='link' className='text-[#2525a6]'>
          <Link href='/earnings/past'>view all</Link>
        </Button>
      </div>

      <div className='p-4 space-y-4'>
        {pastEarnings.map((earning) => (
          <Card key={earning.id} className='p-4'>
            <div className='flex items-center justify-between'>
              <div className='flex items-center gap-3'>
                <div className='w-10 h-10 rounded-lg bg-[#1a237e]/10 flex items-center justify-center'>
                  <Wallet className='w-6 h-6 text-[#1a237e]' />
                </div>
                <div>
                  <div className='flex items-center gap-2'>
                    <p className='font-semibold'>{earning.taskNumber}</p>
                    <span className='px-2 py-1 rounded-full text-xs bg-purple-600 text-white'>
                      {earning.project}
                    </span>
                  </div>
                  <p className='text-sm text-gray-600'>
                    {earning.time} - {earning.date}
                  </p>
                </div>
              </div>
              <p className='font-semibold text-green-600'>
                ₹{earning.amount.toLocaleString()}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
