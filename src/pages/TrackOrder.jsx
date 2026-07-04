import { useState } from 'react'

export default function TrackOrder() {
  const [orderId, setOrderId] = useState('')

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Track Your Order</h1>
      <input
        type="text"
        placeholder="Enter your order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        style={styles.input}
      />
      <button style={styles.button}>Track Order</button>
    </div>
  )
}

const styles = {
  page: { padding: '40px 20px', backgroundColor: '#faf6f0', minHeight: '60vh', textAlign: 'center' },
  title: { fontFamily: 'serif', fontSize: '24px', color: '#4a2f1f', marginBottom: '20px' },
  input: { padding: '12px', borderRadius: '8px', border: '1px solid #e0d3c2', width: '100%', maxWidth: '300px', marginBottom: '14px' },
  button: { display: 'block', margin: '0 auto', backgroundColor: '#4a2f1f', color: '#fff', border: 'none', padding: '12px 28px', borderRadius: '25px', fontWeight: '600', cursor: 'pointer' },
}