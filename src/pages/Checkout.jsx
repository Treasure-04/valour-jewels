import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePaystackPayment } from 'react-paystack'
import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: cartTotal * 100, // Paystack expects amount in kobo
    publicKey: 'pk_test_3a424fdecf90eb62ede135321d24b594ec70cd27',
  }

  const initializePayment = usePaystackPayment(config)

  const onSuccess = () => {
    clearCart()
    navigate('/order-success')
  }

  const onClose = () => {
    console.log('Payment closed')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !name || !phone || !address) {
      alert('Please fill in all fields before proceeding to payment.')
      return
    }
    initializePayment({ onSuccess, onClose })
  }

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyPage}>
        <p style={styles.emptyText}>Your cart is empty. Add items before checking out.</p>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Checkout</h1>

      <div style={styles.summary}>
        <h2 style={styles.summaryTitle}>Order Summary</h2>
        {cartItems.map((item) => (
          <div key={item.id} style={styles.summaryRow}>
            <span>{item.name} x{item.quantity}</span>
            <span>₦{(item.price * item.quantity).toLocaleString()}</span>
          </div>
        ))}
        <div style={styles.summaryTotal}>
          <span>Total</span>
          <span>₦{cartTotal.toLocaleString()}</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
          placeholder="Your full name"
        />

        <label style={styles.label}>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          placeholder="you@example.com"
        />

        <label style={styles.label}>Phone Number</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={styles.input}
          placeholder="080..."
        />

        <label style={styles.label}>Delivery Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={styles.textarea}
          placeholder="Your delivery address"
        />

        <button type="submit" style={styles.payButton}>
          Pay ₦{cartTotal.toLocaleString()}
        </button>
      </form>
    </div>
  )
}

const styles = {
  page: {
    padding: '30px 20px',
    backgroundColor: '#faf6f0',
    minHeight: '70vh',
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    fontFamily: 'serif',
    fontSize: '24px',
    color: '#4a2f1f',
    marginBottom: '20px',
  },
  summary: {
    backgroundColor: '#fff',
    border: '1px solid #e8ddd0',
    borderRadius: '10px',
    padding: '16px',
    marginBottom: '24px',
  },
  summaryTitle: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#4a2f1f',
    marginBottom: '12px',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#5a4a3a',
    marginBottom: '8px',
  },
  summaryTotal: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#4a2f1f',
    marginTop: '10px',
    paddingTop: '10px',
    borderTop: '1px solid #eee',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  label: {
    fontSize: '13px',
    fontWeight: '600',
    color: '#4a2f1f',
    marginTop: '10px',
  },
  input: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e0d3c2',
    fontSize: '14px',
    outline: 'none',
  },
  textarea: {
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e0d3c2',
    fontSize: '14px',
    outline: 'none',
    minHeight: '80px',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  payButton: {
    marginTop: '20px',
    backgroundColor: '#4a2f1f',
    color: '#fff',
    border: 'none',
    padding: '14px',
    borderRadius: '25px',
    fontSize: '15px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  emptyPage: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#faf6f0',
    minHeight: '70vh',
  },
  emptyText: {
    color: '#8b7a6a',
  },
}