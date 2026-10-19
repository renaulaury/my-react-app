import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getCharacters, imageUrl } from '../api/simpsons'

export default function Characters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const [data, setData] = useState(null)
  const [error, setError] = useState('')
  const [quotes, setQuotes] = useState({})

  // Choisit une réplique au hasard, différente de la précédente si possible
  function showRandomQuote(character) {
    const phrases = character.phrases ?? []
    if (!phrases.length) {
      setQuotes((previousQuotes) => ({ ...previousQuotes, [character.id]: null }))
      return
    }
    const candidates =
      phrases.length > 1 ? phrases.filter((phrase) => phrase !== quotes[character.id]) : phrases
    const phrase = candidates[Math.floor(Math.random() * candidates.length)]
    setQuotes((previousQuotes) => ({ ...previousQuotes, [character.id]: phrase }))
  }

  useEffect(() => {
    setData(null)
    setError('')
    getCharacters(page).then(setData).catch((err) => setError(err.message))
  }, [page])

  if (error) return <p className="error center">{error}</p>
  if (!data) return <p className="center">Chargement…</p>

  return (
    <section>
      <h1>Personnages</h1>
      <div className="grid">
        {data.results.map((character) => (
          <div
            key={character.id}
            className="card character"
            role="button"
            tabIndex={0}
            title="Cliquer pour une citation"
            onClick={() => showRandomQuote(character)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                showRandomQuote(character)
              }
            }}
          >
            <img src={imageUrl(character.portrait_path)} alt={character.name} loading="lazy" />
            <h3>{character.name}</h3>
            <small>{character.occupation}</small>
            {character.id in quotes && (
              <p className="bubble" aria-live="polite">
                {quotes[character.id]
                  ? `« ${quotes[character.id]} »`
                  : 'Aucune citation pour ce personnage.'}
              </p>
            )}
          </div>
        ))}
      </div>
      <div className="pagination">
        <button disabled={!data.prev} onClick={() => setSearchParams({ page: page - 1 })}>
          ← Précédent
        </button>
        <span>
          Page {page} / {data.pages}
        </span>
        <button disabled={!data.next} onClick={() => setSearchParams({ page: page + 1 })}>
          Suivant →
        </button>
      </div>
    </section>
  )
}
