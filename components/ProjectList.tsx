import Link from "next/link";
import { Check, MessageCircle, X } from "lucide-react";

// Dummy data for projects
const projects = [
  { id: 1, name: "Project Astra", status: "completed", icon: Check },
  { id: 2, name: "Project Astra", status: "completed", icon: Check },
  { id: 3, name: "Project Astra", status: "in-review", icon: MessageCircle },
  { id: 4, name: "Project Astra", status: "rejected", icon: X },
];

export function ProjectList() {
  return (
    <div className='space-y-4'>
      {projects.map((project, index) => {
        const Icon = project.icon;
        const href = index === 0 ? "/tasking/vaani" : `/project/${project.id}`;
        return (
          <Link
            key={project.id}
            href={href}
            className='block bg-gray-50 p-4 rounded-lg hover:bg-gray-100'>
            <div className='flex items-center gap-3'>
              <div className='p-2 bg-white rounded-full'>
                <Icon className='w-5 h-5 text-gray-600' />
              </div>
              <div>
                <h3 className='font-medium'>{project.name}</h3>
                <p className='text-sm text-gray-600'>{project.name}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
