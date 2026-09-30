import './MovieCard.css'

function MovieCard({ movie }) {
  return (
    <li className="movie-card">
      <img
        className="movie-card__poster"
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={`Affiche du film ${movie.title}`}
      />
      <p className="movie-card__title">{movie.title}</p>
    </li>
  )
}

export default MovieCard
