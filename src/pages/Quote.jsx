import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getQuotesByCharacter } from '../api/simpsons'

export default function Quote() {
  const [characters, setCharacters] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    getQuotesByCharacter()
      .then(setCharacters)
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <p className="error center">{error}</p>
  if (!characters) return <p className="center">Chargement…</p>

  return (
    <section>
      <h1>Citations</h1>
      <p>Choisis un personnage pour découvrir une de ses citations au hasard.</p>
      <div className="tabs">
        {characters.map((character) => (
          <Link key={character.id} to={`/quote/${character.id}`} className="tab">
            {character.name}
          </Link>
        ))}
      </div>
    </section>
  )
}
