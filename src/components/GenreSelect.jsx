import { useEffect, useState } from 'react'
import { fetchGenres } from '../services/tmdb-api' //appel api genres
import Loader from './Loader'

function GenreSelect({ value, onSelect }) {
  const [genres, setGenres] = useState([]) //liste genres
  const [isLoading, setIsLoading] = useState(true) //en cours de dl
  const [error, setError] = useState(null) //gestion errors

  // lance recup genres x1
  useEffect(() => {
    async function getGenres() { //recup les genres async
      try { //try recup genres
        const results = await fetchGenres() //appel api
        setGenres(results)
      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false) // arrivée des genres - fin du dl
      }
    }

    getGenres() //lancement
  }, []) // aucune prop utilisée : tableau vide, un seul appel

  //pdt le chargement ptit loader
  if (isLoading) return <Loader size="small" />

  //si erreur: ptit msg
  if (error) return <p>{error}</p>

  // liste déroulante : une option par genre
  return (
    <select
      className="genre-select"
      value={value}
      onChange={(e) => {// find le genre with id
        const genre = genres.find((g) => g.id === Number(e.target.value))
        onSelect(genre) //envoie resultat
      }}
    >
      <option value="">Choisir un genre</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>{genre.name}</option>
      ))}
    </select>
  )
}

export default GenreSelect