import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCharacter, imageUrl } from '../api/simpsons'
import { LanguageContext } from '../context/LanguageContext'

// Choisit une réplique au hasard, différente de `previous` si possible
function pickRandom(phrases, previous) {
  if (!phrases?.length) return null
  const candidates = phrases.length > 1 ? phrases.filter((phrase) => phrase !== previous) : phrases
  return candidates[Math.floor(Math.random() * candidates.length)]
}

export default function QuoteDetail() {
  const { texts } = useContext(LanguageContext)
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [quote, setQuote] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    setCharacter(null)
    setError(false)
    getCharacter(id)
      .then((data) => {
        setCharacter(data)
        setQuote(pickRandom(data.phrases))
      })
      .catch(() => setError(true))
  }, [id])

  if (error) return <p className="error center">{texts.apiError}</p>
  if (!character) return <p className="center">{texts.loading}</p>

  return (
    <section>
      <Link to="/quote">{texts.quotes.back}</Link>
      <h1>{character.name}</h1>
      <div className="card quotes">
        <img src={imageUrl(character.portrait_path)} alt={character.name} />
        <div className="quote-body">
          <p className="bubble" aria-live="polite">
            {quote ? texts.quote(quote) : texts.noQuote}
          </p>
          {character.phrases?.length > 1 && (
            <button onClick={() => setQuote(pickRandom(character.phrases, quote))}>
              {texts.quotes.another}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
