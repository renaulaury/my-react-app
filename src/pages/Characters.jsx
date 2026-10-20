import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { getCharacters, imageUrl } from '../api/simpsons'
import { LanguageContext } from '../context/LanguageContext'

// composant styled
// Carte personnage : le fond devient rose quand sélectionnée ($active)
const CharacterCard = styled.div`
  background: ${(props) => (props.$active ? '#f8b8d0' : 'var(--surface)')};
  color: ${(props) => (props.$active ? 'var(--dark)' : 'var(--text)')};
  transition: background 0.3s, transform 0.1s;
`

export default function Characters() {
  const { texts } = useContext(LanguageContext)
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [selectedId, setSelectedId] = useState(null)

  // Sélect/déselect card 
  function toggleCharacter(id) {
    setSelectedId((currentId) => (currentId === id ? null : id))
  }

  useEffect(() => {
    setData(null)
    setError(false)
    getCharacters(page).then(setData).catch(() => setError(true))
  }, [page])

  if (error) return <p className="error center">{texts.apiError}</p>
  if (!data) return <p className="center">{texts.loading}</p>

  return (
    <section>
      <h1>{texts.characters.title}</h1>
      <div className="grid">
        {data.results.map((character) => (
          <CharacterCard
            key={character.id}
            className="card character"
            $active={character.id === selectedId}
            onClick={() => toggleCharacter(character.id)}
          >
            <img src={imageUrl(character.portrait_path)} alt={character.name} loading="lazy" />
            <h3>{character.name}</h3>
            <small>{character.occupation}</small>
          </CharacterCard>
        ))}
      </div>
      <div className="pagination">
        <button disabled={!data.prev} onClick={() => setSearchParams({ page: page - 1 })}>
          {texts.characters.previous}
        </button>
        <span>{texts.characters.page(page, data.pages)}</span>
        <button disabled={!data.next} onClick={() => setSearchParams({ page: page + 1 })}>
          {texts.characters.next}
        </button>
      </div>
    </section>
  )
}
