import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { CircularProgress } from "@/components/ui/circular-progress";
import { projects, userData } from "@/lib/data";

export default function Home() {
  return (
    <div className='max-w-4xl mx-auto p-6 pt-20 pb-24'>
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-2xl font-semibold'>Hi👋 {userData.name}</h1>
      </div>

      <div className='mb-8'>
        <div className='flex justify-between items-center mb-4 sticky top-0 bg-white z-10 py-2'>
          <h2 className='text-xl font-semibold'>New Projects</h2>
          <Link href='/tasking' className='text-purple-600'>
            view all
          </Link>
        </div>

        <div className='overflow-x-auto'>
          <div className='flex space-x-6 pb-4'>
            {projects.map((project) => (
              <div key={project.id} className='flex-shrink-0 w-80'>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='mb-8'>
        <div className='bg-white rounded-lg shadow-md p-6'>
          <div className='flex justify-around'>
            <CircularProgress
              value={userData.taskApprovalRate}
              color='text-green-500'
              label='Task Approval Rate'
            />
            <CircularProgress
              value={userData.taskRejectionRate}
              color='text-red-500'
              label='Task Rejection Rate'
            />
          </div>
        </div>
      </div>

      <div className='bg-purple-900 rounded-lg p-6 text-white text-center'>
        <h3 className='text-lg font-semibold mb-2'>BECOME A TASKER</h3>
        <p className='mb-4'>
          Start doing your daily task
          <br />
          and earn money daily
        </p>
        <Link
          href='/tasking'
          className='inline-block bg-white text-purple-900 px-6 py-2 rounded-full font-semibold hover:bg-purple-100 transition-colors'>
          Start Tasking
        </Link>
      </div>
    </div>
  );
}
