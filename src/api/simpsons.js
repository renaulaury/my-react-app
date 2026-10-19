const API_URL = 'https://thesimpsonsapi.com/api'
const CDN_URL = 'https://cdn.thesimpsonsapi.com/500'

export function imageUrl(path) {
  return path ? `${CDN_URL}${path}` : null
}

async function get(path) {
  const res = await fetch(`${API_URL}${path}`)
  if (!res.ok) throw new Error('Impossible de contacter l’API des Simpson.')
  return res.json()
}

// { count, next, prev, pages, results: [...] }
export function getCharacters(page = 1) {
  return get(`/characters?page=${page}`)
}

export function getCharacter(id) {
  return get(`/characters/${id}`)
}

// Personnages principaux (1re page) ayant des répliques, limitées à `max` chacun
export async function getQuotesByCharacter(max = 10) {
  const { results } = await getCharacters(1)
  return results
    .filter((character) => character.phrases?.length)
    .map((character) => ({ ...character, phrases: character.phrases.slice(0, max) }))
}
