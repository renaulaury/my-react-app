import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import ProtectedRoute from './components/auth/ProtectedRoute'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Ma super filmothèque</h1>

      <Routes>
        {/* films : accessibles uniquement avec un token */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        {/* pages publiques : connexion + inscription */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* route inconnue → accueil (ou login si pas connecté) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
