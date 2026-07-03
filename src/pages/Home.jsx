import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <p style={styles.heroSubtitle}>NEW COLLECTION</p>
          <h1 style={styles.heroTitle}>Timeless Pieces,<br />Crafted for You</h1>
          <p style={styles.heroText}>
            Discover rings, earrings, necklaces and more — handpicked to make you shine.
          </p>
          <Link to="/category/all" style={styles.heroButton}>
            Shop Now
          </Link>
        </div>
      </section>

      <section style={styles.categoriesSection}>
        <h2 style={styles.sectionTitle}>Shop by Category</h2>
        <div style={styles.categoryGrid}>
            {['Rings', 'Earrings', 'Necklaces', 'Bracelets/Bangles', 'Watches', 'Beads', 'Anklets', 'Jewelry Sets', 'Jewelry Boxes & Packaging', 'Beanies'].map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat.toLowerCase()}`}
              style={styles.categoryCard}
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

const styles = {
  hero: {
    width: '100%',
    minHeight: '500px',
    backgroundColor: '#4a2f1f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
  },
  heroOverlay: {
    textAlign: 'center',
    maxWidth: '600px',
  },
  heroSubtitle: {
    color: '#d4af8c',
    fontSize: '13px',
    letterSpacing: '3px',
    marginBottom: '12px',
  },
  heroTitle: {
    color: '#faf6f0',
    fontSize: '36px',
    fontFamily: 'serif',
    lineHeight: '1.3',
    marginBottom: '16px',
  },
  heroText: {
    color: '#e8ddd0',
    fontSize: '15px',
    marginBottom: '28px',
  },
  heroButton: {
    display: 'inline-block',
    backgroundColor: '#d4af8c',
    color: '#4a2f1f',
    padding: '14px 36px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '14px',
    letterSpacing: '1px',
  },
  categoriesSection: {
    padding: '50px 20px',
    backgroundColor: '#faf6f0',
  },
  sectionTitle: {
    textAlign: 'center',
    fontSize: '24px',
    fontFamily: 'serif',
    color: '#4a2f1f',
    marginBottom: '30px',
  },
  categoryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '16px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  categoryCard: {
    backgroundColor: '#fff',
    border: '1px solid #e8ddd0',
    borderRadius: '12px',
    padding: '24px 12px',
    textAlign: 'center',
    color: '#4a2f1f',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
  },
}