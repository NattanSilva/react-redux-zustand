import { MessageCircle } from 'lucide-react'
import { useEffect } from 'react'
import { Header } from '../components/Header'
import { Module } from '../components/Module'
import { Video } from '../components/Video'
import { useAppSelector, useCurrentLesson } from '../store'

export function Player() {
  const modules = useAppSelector((state) => state.player.course.modules)

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    document.title = 'Assistindo: ' + currentLesson?.title
  }, [currentLesson])

  return (
    <div className='w-full h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center'>
      <div className='flex w-[1100px] flex-col gap-6'>
        <div className='flex items-center justify-between'>
          <Header />

          <button className='flex items-center gap-2 rounded bg-violet-500 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-violet-600 cursor-pointer'>
            <MessageCircle className='w-4 h-4 ' />
            Deixar Feedback
          </button>
        </div>
        <main className='relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80'>
          <div className='flex-1'>
            <Video />
          </div>
          <aside className='w-80 absolute divide-y-2 divide-zinc-900 top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800'>
            {modules.map((module, index) => (
              <Module
                key={module.id}
                title={module.title}
                amountOfLessons={module.lessons.length}
                moduleIndex={index}
              />
            ))}
          </aside>
        </main>
      </div>
    </div>
  )
}
