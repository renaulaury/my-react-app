import { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { LanguageContext } from '../context/LanguageContext'

export default function Login() {
  const { token, login } = useAuth()
  const { texts } = useContext(LanguageContext)
  const navigate = useNavigate()
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
      await login(email, password)
      navigate('/characters')
    } catch (err) {
      setError(err.message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <form className="card form" onSubmit={handleSubmit}>
      <h1>{texts.login.title}</h1>
      {error && <p className="error">{error}</p>}
      <label>
        {texts.login.email}
        <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
      </label>
      <label>
        {texts.login.password}
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
      </label>
      <button type="submit" disabled={submitting}>
        {submitting ? texts.login.submitting : texts.login.submit}
      </button>
      <p>
        {texts.login.noAccount} <Link to="/register">{texts.login.registerLink}</Link>
      </p>
    </form>
  )
}
