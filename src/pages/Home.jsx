import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import products from '../data/products'

const heroImages = [
  'https://images.unsplash.com/photo-1492714485642-dd6df6baafa2?w=1200&h=700&fit=crop&q=80',
  'https://images.unsplash.com/photo-1671513579768-6f950fe62d5c?w=1200&h=700&fit=crop&q=80',
  'https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?w=1200&h=700&fit=crop&q=80',
  'https://images.unsplash.com/photo-1655255114527-d0a834d9a774?w=1200&h=700&fit=crop&q=80',
  'https://images.unsplash.com/photo-1631729670375-7b9bc6ba6c07?w=1200&h=700&fit=crop&q=80',
]

const categories = ['rings', 'earrings', 'necklaces', 'bracelets', 'watches', 'beads', 'anklets', 'jewelry-sets', 'jewelry-boxes', 'beanies']

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <section style={styles.hero}>
        {heroImages.map((img, index) => (
          <img
            key={img}
            src={img}
            alt=""
            style={{
              ...styles.heroImage,
              opacity: index === currentImage ? 1 : 0,
            }}
          />
        ))}

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
          {categories.map((cat) => {
            const sampleProduct = products.find((p) => p.category === cat)
            return (
              <Link key={cat} to={`/category/${cat}`} style={styles.categoryCard}>
                <img
                  src={sampleProduct?.image}
                  alt={cat}
                  style={styles.categoryImage}
                />
                <p style={styles.categoryLabel}>
                  {cat.replace('-', ' ')}
                </p>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}

const styles = {
  hero: {
    position: 'relative',
    width: '100%',
    minHeight: '500px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 1.2s ease-in-out',
  },
  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
    background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.55) 100%)',
  },
  heroSubtitle: {
    color: '#d4af8c',
    fontSize: '13px',
    letterSpacing: '3px',
    marginBottom: '12px',
    textShadow: '0 2px 6px rgba(0,0,0,0.6)',
  },
  heroTitle: {
    color: '#fff',
    fontSize: '36px',
    fontFamily: 'serif',
    lineHeight: '1.3',
    marginBottom: '16px',
    textShadow: '0 2px 8px rgba(0,0,0,0.6)',
  },
  heroText: {
    color: '#f0e8de',
    fontSize: '15px',
    marginBottom: '28px',
    maxWidth: '500px',
    textShadow: '0 1px 6px rgba(0,0,0,0.6)',
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
    overflow: 'hidden',
    textAlign: 'center',
    color: '#4a2f1f',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
  },
  categoryImage: {
    width: '100%',
    height: '120px',
    objectFit: 'cover',
    display: 'block',
  },
  categoryLabel: {
    padding: '12px',
    textTransform: 'capitalize',
  },
}