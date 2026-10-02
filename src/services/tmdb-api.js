const BASE_URL = 'https://api.themoviedb.org/3'

// appel générique à l'API TMDB (partagé par fetchMovies et fetchGenres)
async function fetchTmdb(endpoint) {
  const url = new URL(`${BASE_URL}/${endpoint}`) //découpe l'url
  url.searchParams.set('language', 'fr-FR') //add lang (? ou & tout seul)

  const response = await fetch(url, { //recup les données
    headers: { //envoie du token
      Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
    },
  })

  //si erreur déclenchement
  if (!response.ok) {
    throw new Error("Erreur lors du chargement des données")
  }

  //Yop les données sont dans la place
  return response.json() //transf json -> objet js
}

// récup une liste de films
export async function fetchMovies(endpoint) {
  const data = await fetchTmdb(endpoint)
  return data.results
}

// récup la liste des genres
export async function fetchGenres() {
  const data = await fetchTmdb('genre/movie/list')
  return data.genres
}

// génère un token de requête (authentification)
export async function fetchRequestToken() {
  const data = await fetchTmdb('authentication/token/new')
  return data.request_token
}

// 1appel
// export async function fetchMovies(endpoint) {
//     const response = await fetch( //recup films 
//           `https://api.themoviedb.org/3/${endpoint}?language=fr-FR`,
//           {
//             headers: { //envoie du token
//               Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
//             },
//           }
//         )

//         //si erreur déclenchement
//         if (!response.ok) {
//           throw new Error("Erreur lors du chargement des films")
//         }

//         //Yop les films sont dans la place
//         const data = await response.json() //transf json -> objet js
//         return data.results
//     }