import { useState } from 'react'
import MovieList from './components/MovieList'
import GenreSelect from './components/GenreSelect'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [selectedGenre, setSelectedGenre] = useState(null) //genre choisi - null = accueil
  const [searchQuery, setSearchQuery] = useState('') //recherche - '' = pas de recherche

  // retour accueil : on vide genre + recherche
  function goHome() {
    setSelectedGenre(null)
    setSearchQuery('')
  }

  // choix d'un genre : on annule la recherche
  function handleGenreSelect(genre) {
    setSelectedGenre(genre)
    setSearchQuery('')
  }

  // recherche : on annule le genre
  function handleSearch(query) {
    setSearchQuery(query)
    setSelectedGenre(null)
  }

  return (
    <div className="app">
      <h1 className="app-title">Ma super filmothèque</h1>

      {/* nav : btn accueil + liste déroulante genres + recherche */}
      <nav className="app-nav">
        <button onClick={goHome}>Accueil</button>
        {/* value = genre affiché / onSelect = récup le genre choisi */}
        <GenreSelect value={selectedGenre?.id ?? ''} onSelect={handleGenreSelect} />
        <SearchBar onSearch={handleSearch} />
      </nav>

      {/* recherche → résultats, genre choisi → ses films, sinon → accueil */}
      {searchQuery ? (
        // key = recherche : recrée la liste à chaque nouvelle recherche
        <MovieList
          key={searchQuery}
          title={`Résultats pour « ${searchQuery} »`}
          endpoint={`search/movie?query=${encodeURIComponent(searchQuery)}`}
        />
      ) : selectedGenre ? (
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