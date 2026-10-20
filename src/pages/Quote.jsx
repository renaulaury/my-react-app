import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getQuotesByCharacter } from '../api/simpsons'
import { LanguageContext } from '../context/LanguageContext'

export default function Quote() {
  const { texts } = useContext(LanguageContext)
  const [characters, setCharacters] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    getQuotesByCharacter()
      .then(setCharacters)
      .catch(() => setError(true))
  }, [])

  if (error) return <p className="error center">{texts.apiError}</p>
  if (!characters) return <p className="center">{texts.loading}</p>

  return (
    <section>
      <h1>{texts.quotes.title}</h1>
      <p>{texts.quotes.intro}</p>
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
