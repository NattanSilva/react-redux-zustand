import { Loader } from 'lucide-react'
import Player from 'react-player'
import { useAppDispatch, useAppSelector, useCurrentLesson } from '../store'
import { next } from '../store/slices/player'

export function Video() {
  const dispatch = useAppDispatch()

  const { currentLesson } = useCurrentLesson()
  const isCourseLoading = useAppSelector((state) => state.player.isLoading)

  function handleNext() {
    dispatch(next())
  }

  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      {isCourseLoading ? (
        <div className='flex h-full items-center justify-center'>
          <Loader className='w-10 h-10 text-zinc-400 animate-spin' />
        </div>
      ) : (
        <Player
          width={'100%'}
          height={'100%'}
          controls
          onEnded={handleNext}
          autoPlay
          src={`https://www.youtube.com/watch?v=${currentLesson?.id}`}
        />
      )}
    </div>
  )
}
