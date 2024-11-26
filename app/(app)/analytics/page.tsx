"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Clock,
  IndianRupee,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  Tooltip,
} from "recharts";

// Dummy data for the bar chart
const dailyUploads = [
  { day: "Mon", uploaded: 18, rejected: 5, approved: 8 },
  { day: "Tue", uploaded: 15, rejected: 4, approved: 6 },
  { day: "Wed", uploaded: 20, rejected: 6, approved: 10 },
  { day: "Thu", uploaded: 16, rejected: 5, approved: 7 },
  { day: "Fri", uploaded: 19, rejected: 6, approved: 8 },
  { day: "Sat", uploaded: 14, rejected: 4, approved: 6 },
  { day: "Sun", uploaded: 12, rejected: 3, approved: 5 },
];

// Dummy data for the pie chart
const approvalDistribution = [
  { name: "Approved", value: 165, color: "#10B981" },
  { name: "Rejected", value: 46, color: "#EF4444" },
  { name: "In Queue", value: 10, color: "#F59E0B" },
  { name: "Delayed", value: 5, color: "#6366F1" },
];

export default function AnalyticsDashboard() {
  return (
    <div className='flex flex-col min-h-screen bg-gray-50'>

      {/* Main Content */}
      <main className='pt-20 pb-20 p-4 space-y-6'>
        {/* Greeting */}
        <div className='space-y-2'>
          <h2 className='text-2xl font-semibold'>Hi👋 Ankit Kumar</h2>
          <p className='text-gray-600'>
            Here, you can explore key insights, track your performance, and make
            informed decisions with data tailored just for you.
          </p>
        </div>

        {/* Stats Grid */}
        <div className='grid grid-cols-2 gap-4'>
          <Card className='p-4 space-y-2'>
            <div className='flex items-center gap-2'>
              <CheckCircle className='w-5 h-5 text-indigo-600' />
              <span className='text-gray-600'>Task Done</span>
            </div>
            <p className='text-2xl font-bold'>54</p>
          </Card>

          <Card className='p-4 space-y-2'>
            <div className='flex items-center gap-2'>
              <IndianRupee className='w-6 h-6 text-indigo-600' />
              <span className='text-gray-600'>Amount Received</span>
            </div>
            <p className='text-2xl font-bold'>₹50,789</p>
          </Card>

          <Card className='p-4 space-y-2'>
            <div className='flex items-center gap-2'>
              <Clock className='w-6 h-6 text-indigo-600' />
              <span className='text-gray-600'>Hours Completed</span>
            </div>
            <p className='text-2xl font-bold'>458 hr</p>
          </Card>

          <Card className='p-4 space-y-2'>
            <div className='flex items-center gap-2'>
              <CheckCircle className='w-5 h-5 text-indigo-600' />
              <span className='text-gray-600'>Approval Rate</span>
            </div>
            <p className='text-2xl font-bold'>45%</p>
          </Card>
        </div>

        {/* Languages */}
        <Card className='p-4'>
          <h3 className='font-semibold mb-3'>Languages Done</h3>
          <div className='flex gap-2'>
            <Badge variant='secondary'>Hindi</Badge>
            <Badge variant='secondary'>English</Badge>
            <Badge variant='secondary'>Marathi</Badge>
          </div>
        </Card>

        {/* Approval Distribution */}
        <Card className='p-4'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='font-semibold'>Approval Distribution</h3>
            <div className='flex items-center gap-2'>
              <Button variant='ghost' size='icon'>
                <ChevronLeft className='h-4 w-4' />
              </Button>
              <span>January</span>
              <Button variant='ghost' size='icon'>
                <ChevronRight className='h-4 w-4' />
              </Button>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center justify-center gap-8'>
            <div className='w-64 h-64'>
              <ResponsiveContainer width='100%' height='100%'>
                <PieChart>
                  <Pie
                    data={approvalDistribution}
                    cx='50%'
                    cy='50%'
                    labelLine={false}
                    outerRadius={80}
                    fill='#8884d8'
                    dataKey='value'>
                    {approvalDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className='grid grid-cols-2 gap-4 text-sm'>
              {approvalDistribution.map((item, index) => (
                <div key={index} className='flex items-center gap-2'>
                  <span
                    className='w-3 h-3 rounded-full'
                    style={{ backgroundColor: item.color }}></span>
                  <span>
                    {item.name}:- {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Daily Uploads Chart */}
        <Card className='p-4'>
          <div className='flex items-center justify-between mb-4'>
            <h3 className='font-semibold'>Daily Uploads</h3>
            <select className='text-sm border rounded-md px-2 py-1'>
              <option>Weekly(18 Aug -24 Aug)</option>
            </select>
          </div>

          <div className='h-64'>
            <ResponsiveContainer width='100%' height='100%'>
              <BarChart data={dailyUploads}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis width={4} dataKey='day' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar
                  dataKey='uploaded'
                  stackId='a'
                  fill='#3B82F6'
                  name='Uploaded'
                />
                <Bar
                  dataKey='rejected'
                  stackId='a'
                  fill='#EF4444'
                  name='Rejected'
                />
                <Bar
                  dataKey='approved'
                  stackId='a'
                  fill='#10B981'
                  name='Approved'
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </main>
    </div>
  );
}
