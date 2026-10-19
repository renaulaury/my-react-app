const AUTH_URL = 'https://authdev.ri7.tech/api'

async function request(path, options = {}) {
  const res = await fetch(`${AUTH_URL}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    // L'API renvoie { error, message, details: [{ field, message }] }
    const details = data.details?.map((d) => d.message).join(' ')
    throw new Error(details || data.message || 'Une erreur est survenue.')
  }
  return data
}

export function register(username, email, password) {
  return request('/register', {
    method: 'POST',
    body: JSON.stringify({ username, email, password }),
  })
}

export function login(email, password) {
  return request('/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
  })
}

export function getMe(token) {
  return request('/me', { headers: { Authorization: `Bearer ${token}` } })
}
