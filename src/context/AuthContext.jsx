import { createContext, useContext, useEffect, useState } from 'react'
import * as authApi from '../api/auth'

const AuthContext = createContext(null)
const TOKEN_KEY = 'token'

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY))
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(!!token)

  // Au chargement (ou changement de token), on récupère le profil via /me
  useEffect(() => {
    if (!token) {
      setUser(null)
      setLoading(false)
      return
    }
    setLoading(true)
    authApi
      .getMe(token)
      .then((data) => setUser(data.user))
      .catch(() => logout()) // token expiré ou invalide
      .finally(() => setLoading(false))
  }, [token])

  function saveToken(newToken) {
    localStorage.setItem(TOKEN_KEY, newToken)
    setToken(newToken)
  }

  async function login(email, password) {
    const data = await authApi.login(email, password)
    saveToken(data.token)
  }

  async function register(username, email, password) {
    const data = await authApi.register(username, email, password)
    saveToken(data.token)
  }

  function logout() {
    localStorage.removeItem(TOKEN_KEY)
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ token, user, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
