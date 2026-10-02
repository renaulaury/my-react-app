import { fetchRequestToken } from './tmdb-api'

const USERS_KEY = 'users' // comptes inscrits (localStorage)
const TOKEN_KEY = 'token' // token TMDB de l'utilisateur connecté (sessionStorage)

// TMDB n'a pas de route d'inscription → comptes stockés en local
function getUsers() {
  return JSON.parse(localStorage.getItem(USERS_KEY) ?? '[]') //transf json -> tableau (vide si aucun compte)
}

// inscription : refuse un email déjà utilisé
export function registerUser({ email, password }) {
  const users = getUsers()

  //email déjà pris → erreur
  if (users.some((user) => user.email === email)) {
    throw new Error('Un compte existe déjà avec cet email')
  }

  localStorage.setItem(USERS_KEY, JSON.stringify([...users, { email, password }])) //ajout du nouveau compte
}

// connexion : vérifie email + mdp puis récup et stocke le token TMDB
export async function loginUser({ email, password }) {
  const user = getUsers().find((u) => u.email === email && u.password === password) //cherche le compte

  //aucun compte trouvé → erreur
  if (!user) {
    throw new Error('Email ou mot de passe incorrect')
  }

  const token = await fetchRequestToken() //appel api
  sessionStorage.setItem(TOKEN_KEY, token) //token gardé jusqu'à fermeture de l'onglet
}

// déconnexion : on supprime le token
export function logoutUser() {
  sessionStorage.removeItem(TOKEN_KEY)
}

// connecté = token présent
export function isAuthenticated() {
  return Boolean(sessionStorage.getItem(TOKEN_KEY)) //null → false, token → true
}
