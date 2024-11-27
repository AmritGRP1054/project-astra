"use client";

import { useRouter } from "next/navigation";
import { Wallet } from "lucide-react";

// Dummy data for past earnings
const pastEarnings = Array(10)
  .fill({
    id: 1,
    taskNumber: "Task #1",
    project: "Project Astra",
    amount: 12500,
    timestamp: "5:05 PM - Aug 22, 2029",
  })
  .map((item, index) => ({ ...item, id: index + 1 }));

export default function PastEarningsPage() {
  //const router = useRouter();

  // API call would look like:
  // useEffect(() => {
  //   const fetchPastEarnings = async () => {
  //     const response = await fetch('/api/earnings/past')
  //     const data = await response.json()
  //     setPastEarnings(data.pastEarnings)
  //   }
  //   fetchPastEarnings()
  // }, [])

  return (
    <div className='flex flex-col min-h-screen bg-gray-50 pb-16'>
      <main className='pt-20 pb-16 p-4 space-y-6'>
        <div className='divide-y bg-white'>
          {pastEarnings.map((earning) => (
            <div
              key={earning.id}
              className='flex items-center justify-between p-4'>
              <div className='flex items-center gap-4'>
                <div className='bg-blue-100 p-2 rounded-full'>
                  <Wallet className='w-4 h-4 text-blue-600' />
                </div>
                <div>
                  <div className='flex items-center gap-2'>
                    <span className='font-medium'>{earning.taskNumber}</span>
                    <span className='px-2 py-1 text-xs text-white bg-purple-600 rounded'>
                      {earning.project}
                    </span>
                  </div>
                  <p className='text-sm text-gray-600'>{earning.timestamp}</p>
                </div>
              </div>
              <span className='font-medium'>
                ₹{earning.amount.toLocaleString()}
              </span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
