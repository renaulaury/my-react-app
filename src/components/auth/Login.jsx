import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { loginUser } from '../../services/auth' //connexion + token
import './AuthForm.css'

function Login() {
  const [email, setEmail] = useState('') //email tapé
  const [password, setPassword] = useState('') //mdp tapé
  const [error, setError] = useState('') //msg d'erreur
  const [loading, setLoading] = useState(false) //en cours de connexion
  const navigate = useNavigate() //redirection

  // envoi du form : vérif du compte puis récup du token
  async function handleSubmit(e) {
    e.preventDefault() //pas de rech de la page
    setError('') //on efface l'ancienne erreur
    setLoading(true)

    try {
      await loginUser({ email, password }) //token stocké dans le sessionStorage
      navigate('/', { replace: true }) //redirection vers les films
    } catch (err) {
      setError(err.message) //mauvais identifiants ou api KO
      setLoading(false)
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Connexion</h2>

      <label>
        Email
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>

      <label>
        Mot de passe
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      {/* erreur : affichée seulement s'il y en a une */}
      {error && <p className="auth-form__error">{error}</p>}

      {/* btn désactivé pdt la connexion : pas de double envoi */}
      <button type="submit" disabled={loading}>
        {loading ? 'Connexion…' : 'Se connecter'}
      </button>

      <p>
        Pas encore de compte ? <Link to="/register">S'inscrire</Link>
      </p>
    </form>
  )
}

export default Login
