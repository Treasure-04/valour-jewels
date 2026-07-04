import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <p style={styles.about}>
        At Valour Jewels, we're passionate about bringing you timeless, high-quality
        jewelry pieces you'll love. Shop today and discover pieces crafted to make you shine.
      </p>

      <div style={styles.socials}>
  <a href="#" style={styles.iconCircle}>📷</a>
  <a href="#" style={styles.iconCircle}>✈️</a>
</div>

      <div style={styles.linksRow}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/category/all" style={styles.link}>Shop</Link>
        <Link to="/track-order" style={styles.link}>Track Order</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact Us</Link>
      </div>

      <p style={styles.copyright}>© {new Date().getFullYear()} Valour Jewels. All rights reserved.</p>
    </footer>
  )
}

const styles = {
  footer: {
    backgroundColor: '#4a2f1f',
    padding: '40px 20px 24px',
    textAlign: 'center',
  },
  about: {
    color: '#e8ddd0',
    fontSize: '14px',
    lineHeight: '1.6',
    maxWidth: '500px',
    margin: '0 auto 24px',
  },
  socials: {
    display: 'flex',
    justifyContent: 'center',
    gap: '14px',
    marginBottom: '28px',
  },
  iconCircle: {
    width: '38px',
    height: '38px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  linksRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '10px 20px',
    marginBottom: '24px',
    borderTop: '1px solid rgba(255,255,255,0.15)',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
    padding: '20px 0',
  },
  link: {
    color: '#d4af8c',
    textDecoration: 'none',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.5px',
  },
  copyright: {
    color: '#a8917d',
    fontSize: '12px',
  },
}