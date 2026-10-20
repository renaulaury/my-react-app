import { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { LanguageContext } from '../context/LanguageContext'

export default function Register() {
  const { token, register } = useAuth()
  const { texts } = useContext(LanguageContext)
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)

  if (token) return <Navigate to="/characters" replace />

  async function handleSubmit(event) {
    event.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      await register(username, email, password)
      navigate('/characters')
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h1>{texts.register.title}</h1>
      {error && <p className="error">{error}</p>}
      <label>
        {texts.register.username}
        <input
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          minLength={3}
          maxLength={32}
          pattern="[A-Za-z0-9_.\-]+"
          title={texts.register.usernameHint}
          required
        />
      </label>
      <label>
        {texts.register.email}
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <label>
        {texts.register.password}
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          minLength={8}
          required
        />
      </label>
      <button type="submit" disabled={submitting}>
        {submitting ? texts.register.submitting : texts.register.submit}
      </button>
      <p>
        {texts.register.alreadyRegistered} <Link to="/login">{texts.register.loginLink}</Link>
      </p>
    </form>
  )
}
