import { useEffect, useState } from 'react'
import { fetchMovies } from '../services/tmdb-api' //appel api
import MovieCard from './MovieCard'
import Loader from './Loader'
import './MovieList.css'

function MovieList({ title, endpoint }) {
  const [movies, setMovies] = useState([]) //liste films
  const [isLoading, setIsLoading] = useState(true) //en cours de dl
  const [error, setError] = useState(null) //gestion errors

  // lance recup film x1
  useEffect(() => {
    async function getMovies() { //recup les films async
      try { //try recup films
        const results = await fetchMovies(endpoint) //appel api
        setMovies(results)

      } catch (err) {
        setError(err.message)
      } finally {
        setIsLoading(false) // arrivée des films - fin du dl
      }
    }    

    getMovies() //lancement
  }, [endpoint])

  //pdt le chargement ptit loader
  if (isLoading) return <Loader />

  //si erreur: ptit msg  
  if (error) {
    return <p>{ error }</p>
  }

  return (
    <section className="movie-list">
      <h2 className="movie-list__title">{title}</h2>
      {/* aucun résultat (ex: recherche sans match) */}
      {movies.length === 0 && <p>Aucun film trouvé.</p>}
      <ul className="movie-list__grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </section>
  )
}

export default MovieList
