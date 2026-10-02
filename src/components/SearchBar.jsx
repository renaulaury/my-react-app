import { useState } from 'react'

function SearchBar({ onSearch }) {
  const [text, setText] = useState('') //txt tapé

  // envoi du form 
  function handleSubmit(e) { //pdt env form
    e.preventDefault() //pas de rech de la page
    const query = text.trim()
    if (query) onSearch(query) //rien si champ vide
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit} role="search">
      <input
        type="search"
        className="search-bar__input"
        placeholder="Rechercher un film..."
        aria-label="Rechercher un film"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Rechercher</button>
    </form>
  )
}

export default SearchBar
