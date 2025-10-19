import { Loader } from 'lucide-react'
import ReactPlayer from 'react-player'
import { useCurrentLesson, useStore } from '../zustand-store'

export function Video() {
  const { currentLesson } = useCurrentLesson()

  const isLoading = useStore((store) => store.isLoading)

  const next = useStore((store) => store.next)

  function handlePlayNext() {
    next()
  }

  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      {true ? (
        <div className='flex h-full items-center justify-center'>
          <Loader className='w-12 h-12 text-zinc-400 animate-spin' />
        </div>
      ) : (
        <ReactPlayer
          width='100%'
          height='100%'
          controls
          playing
          onEnded={handlePlayNext}
          src={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )
}
