import { useEffect } from 'react'

import { MessageCircle } from 'lucide-react'
import { Header } from '../components/Header'
import { Module } from '../components/Module'
import { Video } from '../components/Video'
import { useAppDispatch, useAppSelector, useCurrentLesson } from '../store'
import { loadCourse } from '../store/slices/player'

export function Player() {
  const dispatch = useAppDispatch()
  const modules = useAppSelector((state) => state.player.course?.modules)
  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  const { currentLesson } = useCurrentLesson()

  useEffect(() => {
    dispatch(loadCourse())
  }, [dispatch])

  useEffect(() => {
    if (currentLesson) {
      document.title = 'Assistindo: ' + currentLesson.title
    }
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
          {isCourseLoading ? (
            <aside className='w-80 py-10 px-8 flex flex-col justify-center gap-4 absolute divide-y-2 divide-zinc-900 top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800'>
              <h3 className='font-semibold text-zinc-700 text-xl animate-pulse'>
                Buscando suas aulas...
              </h3>
              <div className='w-full h-4 rounded-md bg-zinc-800 animate-pulse [animation-delay:0s]'></div>
              <div className='w-[45%] h-4 rounded-md bg-zinc-800 animate-pulse [animation-delay:0.2s]'></div>
              <div className='w-[80%] h-4 rounded-md bg-zinc-800 animate-pulse [animation-delay:0.4s]'></div>
              <div className='w-[65%] h-4 rounded-md bg-zinc-800 animate-pulse [animation-delay:0.6s]'></div>
              <div className='w-[95%] h-4 rounded-md bg-zinc-800 animate-pulse [animation-delay:0.8s]'></div>
            </aside>
          ) : (
            <aside className='w-80 absolute divide-y-2 divide-zinc-900 top-0 bottom-0 right-0 border-l border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800'>
              {modules?.map((module, index) => (
                <Module
                  key={module.id}
                  title={module.title}
                  amountOfLessons={module.lessons.length}
                  moduleIndex={index}
                />
              ))}
            </aside>
          )}
        </main>
      </div>
    </div>
  )
}
