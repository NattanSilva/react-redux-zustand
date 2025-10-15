import Player from 'react-player'
import { useDispatch } from 'react-redux'
import { useCurrentLesson } from '../store'
import { next } from '../store/slices/player'

export function Video() {
  const dispatch = useDispatch()

  const { currentLesson } = useCurrentLesson()

  function handleNext() {
    dispatch(next())
  }

  return (
    <div className='w-full bg-zinc-950 aspect-video'>
      <Player
        width={'100%'}
        height={'100%'}
        controls
        onEnded={handleNext}
        autoPlay
        src={`https://www.youtube.com/watch?v=${currentLesson.id}`}
      />
    </div>
  )
}
