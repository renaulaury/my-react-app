import { useState } from 'react'
import MovieList from './components/MovieList'
import GenreSelect from './components/GenreSelect'
import './App.css'

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null) //genre choisi - null = accueil

  return (
    <div className="app">
      <h1 className="app-title">Ma super filmothèque</h1>

      {/* nav : btn accueil + liste déroulante genres */}
      <nav className="app-nav">
        {/* retour accueil : on vide le genre */}
        <button onClick={() => setSelectedGenre(null)}>Accueil</button>
        {/* value = genre affiché / onSelect = récup le genre choisi */}
        <GenreSelect value={selectedGenre?.id ?? ''} onSelect={setSelectedGenre} />
      </nav>

      {/* si genre choisi → ses films, sinon → accueil */}
      {selectedGenre ? (
        // key = id genre : recrée la liste à chaque changement (loader inclus)
        <MovieList
          key={selectedGenre.id}
          title={selectedGenre.name}
          endpoint={`discover/movie?with_genres=${selectedGenre.id}`}
        />
      ) : (
        // accueil : populaires + mieux notés
        <>
          <MovieList title="Populaires" endpoint="movie/popular" />
          <MovieList title="Les mieux notés" endpoint="movie/top_rated" />
        </>
      )}
    </div>
  )
}

export default App