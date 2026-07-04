import { Link } from 'react-router-dom'

export default function OrderSuccess() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🎉 Order Placed!</h1>
      <p style={styles.text}>Thank you for shopping with Valour Jewels. Your order has been received.</p>
      <Link to="/" style={styles.button}>Back to Home</Link>
    </div>
  )
}

const styles = {
  page: {
    padding: '80px 20px',
    textAlign: 'center',
    backgroundColor: '#faf6f0',
    minHeight: '70vh',
  },
  title: {
    fontFamily: 'serif',
    fontSize: '26px',
    color: '#4a2f1f',
    marginBottom: '12px',
  },
  text: {
    color: '#5a4a3a',
    marginBottom: '24px',
  },
  button: {
    display: 'inline-block',
    backgroundColor: '#4a2f1f',
    color: '#fff',
    padding: '12px 28px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
  },
}