import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { registerUser } from '../../services/auth' //création du compte
import './AuthForm.css'

// 8 caractères min, au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractère spécial
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/

function Register() {
  const [email, setEmail] = useState('') //email tapé
  const [password, setPassword] = useState('') //mdp tapé
  const [confirm, setConfirm] = useState('') //confirmation du mdp
  const [error, setError] = useState('') //msg d'erreur
  const navigate = useNavigate() //redirection

  // envoi du form : vérif du mdp puis création du compte
  function handleSubmit(e) {
    e.preventDefault() //pas de rech de la page

    //regex
    if (!PASSWORD_REGEX.test(password)) {
      setError('Le mot de passe doit contenir au moins 8 caractères, une minuscule, une majuscule, un chiffre et un caractère spécial')
      return
    }

    //les 2 mdp doivent être identiques
    if (password !== confirm) {
      setError('Les mots de passe ne correspondent pas')
      return
    }

    try {
      registerUser({ email, password }) //enregistré dans le localStorage
      navigate('/login') //inscrit go se co
    } catch (err) {
      setError(err.message) //ex: email déjà utilisé
    }
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Inscription</h2>

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
        {/* rappel des règles de la regex */}
        <small className="auth-form__hint">
          8 caractères min. avec majuscule, minuscule, chiffre et caractère spécial
        </small>
      </label>

      <label>
        Confirmer le mot de passe
        <input
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />
      </label>

      {/* erreur : affichée seulement s'il y en a une */}
      {error && <p className="auth-form__error">{error}</p>}

      <button type="submit">S'inscrire</button>

      <p>
        Déjà inscrit ? <Link to="/login">Se connecter</Link>
      </p>
    </form>
  )
}

export default Register
