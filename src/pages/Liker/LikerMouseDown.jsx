import { useRef, useState } from 'react'

const DELAY = 100 // ms entre deux +1 quand on reste appuyé

export default function LikerMouseDown() {
  const [likes, setLikes] = useState(0)
  // Garde l'id du setInterval entre les rendus sans provoquer de nouveau rendu
  const intervalRef = useRef(null)

  const start = () => {
    intervalRef.current = setInterval(() => setLikes((prev) => prev + 1), DELAY)
  }
  const stop = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  // Clic prolongé : +1 en continu, via les props React (pas d'addEventListener)
  return (
    <div>
      <h1>{likes} click{likes > 1 ? 's' : ''}</h1>
      <button onMouseDown={start} onMouseUp={stop} onMouseLeave={stop}>
        I like to click it click iiiiiiiiiiiit !
      </button>
    </div>
  )
}
