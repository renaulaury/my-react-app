import { useEffect, useState } from 'react'
import { getQuotesByCharacter, imageUrl } from '../api/simpsons'

export default function Quote() {
  const [characters, setCharacters] = useState(null)
  const [activeId, setActiveId] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    getQuotesByCharacter()
      .then((list) => {
        setCharacters(list)
        setActiveId(list[0]?.id ?? null)
      })
      .catch((err) => setError(err.message))
  }, [])

  if (error) return <p className="error center">{error}</p>
  if (!characters) return <p className="center">Chargement…</p>

  const active = characters.find((c) => c.id === activeId)

  return (
    <section>
      <h1>Citations</h1>
      <div className="tabs" role="tablist">
        {characters.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={c.id === activeId}
            className={c.id === activeId ? 'tab active' : 'tab'}
            onClick={() => setActiveId(c.id)}
          >
            {c.name}
          </button>
        ))}
      </div>
      {active && (
        <div className="card quotes" role="tabpanel">
          <img src={imageUrl(active.portrait_path)} alt={active.name} />
          <ol>
            {active.phrases.map((phrase, i) => (
              <li key={i}>« {phrase} »</li>
            ))}
          </ol>
        </div>
      )}
    </section>
  )
}
