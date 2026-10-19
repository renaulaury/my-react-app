import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCharacter, imageUrl } from '../api/simpsons'

// Choisit une réplique au hasard, différente de `previous` si possible
function pickRandom(phrases, previous) {
  if (!phrases?.length) return null
  const candidates = phrases.length > 1 ? phrases.filter((phrase) => phrase !== previous) : phrases
  return candidates[Math.floor(Math.random() * candidates.length)]
}

export default function QuoteDetail() {
  const { id } = useParams()
  const [character, setCharacter] = useState(null)
  const [quote, setQuote] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    setCharacter(null)
    setError('')
    getCharacter(id)
      .then((data) => {
        setCharacter(data)
        setQuote(pickRandom(data.phrases))
      })
      .catch((err) => setError(err.message))
  }, [id])

  if (error) return <p className="error center">{error}</p>
  if (!character) return <p className="center">Chargement…</p>

  return (
    <section>
      <Link to="/quote">← Retour aux citations</Link>
      <h1>{character.name}</h1>
      <div className="card quotes">
        <img src={imageUrl(character.portrait_path)} alt={character.name} />
        <div className="quote-body">
          <p className="bubble" aria-live="polite">
            {quote ? `« ${quote} »` : 'Aucune citation pour ce personnage.'}
          </p>
          {character.phrases?.length > 1 && (
            <button onClick={() => setQuote(pickRandom(character.phrases, quote))}>
              Une autre citation
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
