export default function Contact() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Contact Us</h1>
      <div style={styles.card}>
        <p style={styles.label}>Phone</p>
        <p style={styles.value}>+234 800 000 0000</p>
        <p style={styles.label}>Email</p>
        <p style={styles.value}>hello@valourjewels.com</p>
      </div>
    </div>
  )
}

const styles = {
  page: { padding: '40px 20px', backgroundColor: '#faf6f0', minHeight: '60vh' },
  title: { fontFamily: 'serif', fontSize: '24px', color: '#4a2f1f', marginBottom: '24px', textAlign: 'center' },
  card: { backgroundColor: '#fff', border: '1px solid #e8ddd0', borderRadius: '10px', padding: '24px', maxWidth: '400px', margin: '0 auto', textAlign: 'center' },
  label: { fontSize: '12px', color: '#8b7a6a', marginTop: '12px' },
  value: { fontSize: '16px', color: '#4a2f1f', fontWeight: '600' },
}