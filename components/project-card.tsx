import Link from "next/link";

interface ProjectCardProps {
  name: string;
  languages: string[];
  expiryDate: string;
}

export function ProjectCard({ name, languages, expiryDate }: ProjectCardProps) {
  return (
    <Link href='/tasking/vaani' className='block w-full'>
      <div className='bg-purple-900 rounded-lg p-4 text-white w-full'>
        <h3 className='text-xl font-semibold mb-2'>{name}</h3>
        <p className='text-purple-200 mb-4'>{name}</p>

        <div className='flex justify-between items-center mb-4'>
          <div>
            <p className='text-sm mb-2'>Language</p>
            <div className='flex gap-2'>
              {languages.map((lang) => (
                <span
                  key={lang}
                  className={`px-2 py-1 rounded text-xs ${
                    lang === "Hindi"
                      ? "bg-purple-700"
                      : "bg-white text-purple-900"
                  }`}>
                  {lang}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p className='text-sm mb-2'>Expiry Date</p>
            <span className='bg-purple-700 px-2 py-1 rounded text-xs'>
              {expiryDate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
