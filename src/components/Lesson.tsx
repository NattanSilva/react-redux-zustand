import { Video } from 'lucide-react'

interface LessonProps {
  title: string
  duration: string
}

export function Lesson({ title, duration }: Readonly<LessonProps>) {
  return (
    <button className='flex items-center gap-4 text-sm text-zinc-400 cursor-pointer hover:text-zinc-300 transition-colors hover:font-medium'>
      <Video className='w-4 h-4 text-zinc-500' />
      <span>{title}</span>
      <span className='ml-auto font-mono text-xs text-zinc-500'>
        {duration}
      </span>
    </button>
  )
}
