import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '../../services/auth' //vérif du token

// pas de token dans le sessionStorage → redirection vers le login
// children = la page protégée (ex: Home)
function ProtectedRoute({ children }) {
  return isAuthenticated() ? children : <Navigate to="/login" replace /> //replace : pas de retour arrière vers la page protégée
}

export default ProtectedRoute
