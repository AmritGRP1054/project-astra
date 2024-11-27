"use client";

import { ProjectList } from "@/components/ProjectList";
//import Footer from "@/components/Footer"; // Assuming the footer is in a `components/Footer` file

export default function TaskingPage() {
  return (
    <div className='min-h-screen'>
      {/* Main Content */}
      <main className='pt-20 pb-16 p-4 space-y-6'>
        <div>
          <h2 className='text-2xl font-semibold'>Ankit Kumar</h2>
          <p className='text-gray-600'>Your Past Submitted Projects</p>
        </div>
        <ProjectList />
      </main>
    </div>
  );
}
