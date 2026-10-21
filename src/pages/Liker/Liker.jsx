import { useEffect, useRef, useState } from 'react'

export default function Liker() {
  const [likes, setLikes] = useState(0)
  const buttonRef = useRef(null)

  // Branche l'écouteur de clic directement sur le bouton du DOM (via la ref)
  // et le retire au démontage du composant
  useEffect(() => {
    const button = buttonRef.current
    const handleClick = () => setLikes((prev) => prev + 1)

    button.addEventListener('click', handleClick)
    return () => button.removeEventListener('click', handleClick)
  }, [])

  return (
    <div>
      <h1>{likes} click{likes > 1 ? 's' : ''}</h1>
      <button ref={buttonRef}>I like to click it click it !</button>
    </div>
  )
}
