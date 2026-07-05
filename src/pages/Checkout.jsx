import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePaystackPayment } from 'react-paystack'
import { useCart } from '../context/CartContext'

const shippingOptions = [
  { id: 'standard', label: 'Standard Delivery (3-5 days)', price: 1500 },
  { id: 'express', label: 'Express Delivery (1-2 days)', price: 3500 },
  { id: 'pickup', label: 'Self Pickup (Port Harcourt)', price: 0 },
]

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [shipping, setShipping] = useState(null)

  const shippingFee = shipping ? shippingOptions.find((s) => s.id === shipping).price : 0
  const finalTotal = cartTotal + shippingFee

  const config = {
    reference: new Date().getTime().toString(),
    email: email,
    amount: finalTotal * 100,
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
    if (!shipping) {
      alert('Please select a shipping method before proceeding to payment.')
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

        <div style={styles.summaryRow}>
          <span>Subtotal</span>
          <span>₦{cartTotal.toLocaleString()}</span>
        </div>

        <div style={styles.summaryRow}>
          <span>Shipping</span>
          <span>{shipping ? `₦${shippingFee.toLocaleString()}` : 'Not selected'}</span>
        </div>

        <div style={styles.summaryTotal}>
          <span>Total</span>
          <span>₦{finalTotal.toLocaleString()}</span>
        </div>
      </div>

      <div style={styles.shippingSection}>
        <h2 style={styles.summaryTitle}>Select Shipping Method</h2>
        {shippingOptions.map((option) => (
          <label key={option.id} style={styles.shippingOption}>
            <input
              type="radio"
              name="shipping"
              value={option.id}
              checked={shipping === option.id}
              onChange={() => setShipping(option.id)}
            />
            <span style={styles.shippingLabel}>
              {option.label} — {option.price === 0 ? 'Free' : `₦${option.price.toLocaleString()}`}
            </span>
          </label>
        ))}
      </div>

      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Full Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={styles.input} placeholder="Your full name" />

        <label style={styles.label}>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input} placeholder="you@example.com" />

        <label style={styles.label}>Phone Number</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} style={styles.input} placeholder="080..." />

        <label style={styles.label}>Delivery Address</label>
        <textarea value={address} onChange={(e) => setAddress(e.target.value)} style={styles.textarea} placeholder="Your delivery address" />

        <button type="submit" style={styles.payButton}>
          Pay ₦{finalTotal.toLocaleString()}
        </button>
      </form>
    </div>
  )
}

const styles = {
  page: { padding: '30px 20px', backgroundColor: '#faf6f0', minHeight: '70vh', maxWidth: '600px', margin: '0 auto' },
  title: { fontFamily: 'serif', fontSize: '24px', color: '#4a2f1f', marginBottom: '20px' },
  summary: { backgroundColor: '#fff', border: '1px solid #e8ddd0', borderRadius: '10px', padding: '16px', marginBottom: '20px' },
  summaryTitle: { fontSize: '16px', fontWeight: '600', color: '#4a2f1f', marginBottom: '12px' },
  summaryRow: { display: 'flex', justifyContent: 'space-between', fontSize: '14px', color: '#5a4a3a', marginBottom: '8px' },
  summaryTotal: { display: 'flex', justifyContent: 'space-between', fontSize: '16px', fontWeight: 'bold', color: '#4a2f1f', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #eee' },
  shippingSection: { backgroundColor: '#fff', border: '1px solid #e8ddd0', borderRadius: '10px', padding: '16px', marginBottom: '24px' },
  shippingOption: { display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 0', fontSize: '14px', color: '#4a2f1f', cursor: 'pointer', borderBottom: '1px solid #f2f2f2' },
  shippingLabel: { flex: 1 },
  form: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '13px', fontWeight: '600', color: '#4a2f1f', marginTop: '10px' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #e0d3c2', fontSize: '14px', outline: 'none' },
  textarea: { padding: '12px', borderRadius: '8px', border: '1px solid #e0d3c2', fontSize: '14px', outline: 'none', minHeight: '80px', fontFamily: 'inherit', resize: 'vertical' },
  payButton: { marginTop: '20px', backgroundColor: '#4a2f1f', color: '#fff', border: 'none', padding: '14px', borderRadius: '25px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer' },
  emptyPage: { padding: '60px 20px', textAlign: 'center', backgroundColor: '#faf6f0', minHeight: '70vh' },
  emptyText: { color: '#8b7a6a' },
}