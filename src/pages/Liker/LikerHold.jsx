import { useEffect, useRef, useState } from 'react'

const DELAY = 100 // ms entre deux +1 quand on reste appuyé

export default function LikerHold() {
  const [likes, setLikes] = useState(0)
  const buttonRef = useRef(null)
  // Garde l'id du setInterval entre les rendus sans provoquer de nouveau rendu
  const intervalRef = useRef(null)

  // Clic prolongé : +1 en continuuuu 
  useEffect(() => {
    const button = buttonRef.current
    const addLike = () => setLikes((prev) => prev + 1)

    const start = () => {
      intervalRef.current = setInterval(addLike, DELAY)
    }
    const stop = () => {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }

    button.addEventListener('mousedown', start)
    button.addEventListener('mouseup', stop)
    // Si la souris sort du bouton en restant appuyée, on arrête aussi
    button.addEventListener('mouseleave', stop)

    return () => {
      stop()
      button.removeEventListener('mousedown', start)
      button.removeEventListener('mouseup', stop)
      button.removeEventListener('mouseleave', stop)
    }
  }, [])

  return (
    <div>
      <h1>{likes} click{likes > 1 ? 's' : ''}</h1>
      <button ref={buttonRef}>I like to click it click iiiiiiiiiiiit !</button>
    </div>
  )
}
