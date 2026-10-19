import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ProtectedRoute() {
  const { token, loading } = useAuth()

  if (loading) return <p className="center">Chargement…</p>
  if (!token) return <Navigate to="/login" replace />
  return <Outlet />
}
