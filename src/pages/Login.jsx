import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'

export default function Login() {
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      if (isRegister) {
        await createUserWithEmailAndPassword(auth, email, password)
      } else {
        await signInWithEmailAndPassword(auth, email, password)
      }
      navigate('/')
    } catch (err) {
      setError(err.message.replace('Firebase: ', ''))
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>{isRegister ? 'Create Account' : 'Login'}</h1>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            placeholder="you@example.com"
            required
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            placeholder="At least 6 characters"
            required
          />

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.button}>
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <p style={styles.toggleText}>
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <span style={styles.toggleLink} onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? 'Login' : 'Register'}
          </span>
        </p>
      </div>
    </div>
  )
}

const styles = {
  page: { padding: '50px 20px', backgroundColor: '#faf6f0', minHeight: '70vh', display: 'flex', justifyContent: 'center' },
  card: { backgroundColor: '#fff', border: '1px solid #e8ddd0', borderRadius: '12px', padding: '32px', maxWidth: '380px', width: '100%' },
  title: { fontFamily: 'serif', fontSize: '22px', color: '#4a2f1f', marginBottom: '20px', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '600', color: '#4a2f1f', marginTop: '10px' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #e0d3c2', fontSize: '14px', outline: 'none' },
  error: { color: '#b23b3b', fontSize: '13px', marginTop: '8px' },
  button: { marginTop: '20px', backgroundColor: '#4a2f1f', color: '#fff', border: 'none', padding: '14px', borderRadius: '25px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' },
  toggleText: { textAlign: 'center', fontSize: '13px', color: '#5a4a3a', marginTop: '20px' },
  toggleLink: { color: '#8b5e3c', fontWeight: '600', cursor: 'pointer', textDecoration: 'underline' },
}