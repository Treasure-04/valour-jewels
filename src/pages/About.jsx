export default function About() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>About Valour Jewels</h1>
      <p style={styles.text}>
        Valour Jewels is dedicated to bringing you timeless, high-quality jewelry pieces
        crafted with care. From rings to necklaces, every piece is chosen to make you shine.
      </p>
      <p style={styles.location}>📍 Ogbogoro by Ozuoba, Port Harcourt, Nigeria</p>
    </div>
  )
}

const styles = {
  page: { padding: '40px 20px', backgroundColor: '#faf6f0', minHeight: '60vh', maxWidth: '600px', margin: '0 auto' },
  title: { fontFamily: 'serif', fontSize: '24px', color: '#4a2f1f', marginBottom: '16px', textAlign: 'center' },
  text: { color: '#5a4a3a', lineHeight: '1.7', textAlign: 'center', marginBottom: '16px' },
  location: { color: '#8b5e3c', fontWeight: '600', textAlign: 'center' },
}