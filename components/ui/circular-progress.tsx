interface CircularProgressProps {
  value: number;
  color?: string;
  size?: number;
  label: string;
}

export function CircularProgress({
  value,
  color = "text-green-500",
  size = 120,
  label,
}: CircularProgressProps) {
  const circumference = 2 * Math.PI * 47;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className='flex flex-col items-center gap-2'>
      <div className='relative' style={{ width: size, height: size }}>
        <svg className='w-full h-full transform -rotate-90'>
          <circle
            className='text-gray-200'
            strokeWidth='6'
            stroke='currentColor'
            fill='transparent'
            r='47'
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className={color}
            strokeWidth='6'
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap='round'
            stroke='currentColor'
            fill='transparent'
            r='47'
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        <div className='absolute inset-0 flex items-center justify-center'>
          <span className='text-2xl font-semibold'>{value}%</span>
        </div>
      </div>
      <span className='text-gray-600 text-sm'>{label}</span>
    </div>
  );
}
