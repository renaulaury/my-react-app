import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { LanguageContext } from '../context/LanguageContext'

export default function ProtectedRoute() {
  const { token, loading } = useAuth()
  const { texts } = useContext(LanguageContext)

  if (loading) return <p className="center">{texts.loading}</p>
  if (!token) return <Navigate to="/login" replace />
  return <Outlet />
}
