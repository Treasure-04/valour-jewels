import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Search, User, ShoppingBag, Menu, X, Heart } from 'lucide-react'
import { useCart } from '../context/CartContext'

const menuLinks = [
  { label: 'Home', path: '/' },
  { label: 'Shop All', path: '/category/all' },
  { label: 'About Us', path: '/about' },
  { label: 'Track Order', path: '/track-order' },
  { label: 'Wishlist', path: '/wishlist' },
  { label: 'Login / Register', path: '/login' },
]

const categoryLinks = [
  { label: 'Rings', path: '/category/rings' },
  { label: 'Earrings', path: '/category/earrings' },
  { label: 'Necklaces', path: '/category/necklaces' },
  { label: 'Bracelets/Bangles', path: '/category/bracelets' },
  { label: 'Watches', path: '/category/watches' },
  { label: 'Beads', path: '/category/beads' },
  { label: 'Anklets', path: '/category/anklets' },
  { label: 'Jewelry Sets', path: '/category/jewelry-sets' },
  { label: 'Jewelry Boxes & Packaging', path: '/category/jewelry-boxes' },
  { label: 'Beanies', path: '/category/beanies' },
]

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('menu')
  const navigate = useNavigate()

  const { cartCount } = useCart()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`/search?q=${searchTerm}`)
    setMenuOpen(false)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header style={styles.header}>
      <div style={styles.topRow}>
        <button
          onClick={() => setMenuOpen(true)}
          style={styles.hamburgerButton}
          aria-label="Open menu"
        >
          <Menu size={24} color="#4a2f1f" />
        </button>

        <Link to="/" style={styles.logo}>Valour Jewels</Link>

        <div style={styles.iconGroup}>
          <Link to="/wishlist" style={styles.iconLink}>
            <Heart size={22} color="#4a2f1f" />
          </Link>
          <Link to="/cart" style={styles.iconLink}>
            <div style={styles.cartWrapper}>
              <ShoppingBag size={22} color="#4a2f1f" />
              {cartCount > 0 && (
                <span style={styles.cartBadge}>{cartCount}</span>
              )}
            </div>
          </Link>
        </div>
      </div>

      <form onSubmit={handleSearch} style={styles.searchWrapper}>
        <input
          type="text"
          placeholder="Search for products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={styles.searchInput}
        />
        <button type="submit" style={styles.searchButton}>
          <Search size={18} color="#fff" />
        </button>
      </form>

      {menuOpen && (
        <div style={styles.overlay} onClick={closeMenu}>
          <div style={styles.drawer} onClick={(e) => e.stopPropagation()}>
            <div style={styles.drawerHeader}>
              <button onClick={closeMenu} style={styles.closeButton} aria-label="Close menu">
                <X size={24} color="#4a2f1f" />
              </button>
            </div>

            <div style={styles.tabRow}>
              <button
                onClick={() => setActiveTab('menu')}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === 'menu' ? styles.tabButtonActive : {}),
                }}
              >
                MENU
              </button>
              <button
                onClick={() => setActiveTab('categories')}
                style={{
                  ...styles.tabButton,
                  ...(activeTab === 'categories' ? styles.tabButtonActive : {}),
                }}
              >
                CATEGORIES
              </button>
            </div>

            <div style={styles.linkList}>
              {(activeTab === 'menu' ? menuLinks : categoryLinks).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={closeMenu}
                  style={styles.drawerLink}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

const styles = {
  header: {
    width: '100%',
    position: 'sticky',
    top: 0,
    backgroundColor: '#faf6f0',
    padding: '15px 20px',
    zIndex: 100,
    borderBottom: '1px solid #e8ddd0',
  },
  topRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '12px',
  },
  hamburgerButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: 0,
  },
  logo: {
    color: '#4a2f1f',
    fontSize: '22px',
    fontWeight: 'bold',
    textDecoration: 'none',
    fontFamily: 'serif',
    whiteSpace: 'nowrap',
  },
  iconGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
  },
  iconLink: {
    display: 'flex',
    alignItems: 'center',
  },
  cartWrapper: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: '-8px',
    right: '-10px',
    backgroundColor: '#8b5e3c',
    color: '#fff',
    fontSize: '11px',
    fontWeight: 'bold',
    borderRadius: '50%',
    width: '18px',
    height: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchWrapper: {
    display: 'flex',
    borderRadius: '20px',
    overflow: 'hidden',
    backgroundColor: '#fff',
    border: '1px solid #e0d3c2',
  },
  searchInput: {
    flex: 1,
    border: 'none',
    outline: 'none',
    padding: '10px 16px',
    fontSize: '14px',
    color: '#4a2f1f',
  },
  searchButton: {
    border: 'none',
    backgroundColor: '#8b5e3c',
    padding: '0 18px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 200,
  },
  drawer: {
    width: '300px',
    maxWidth: '85%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  drawerHeader: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '16px',
  },
  closeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
  },
  tabRow: {
    display: 'flex',
    borderBottom: '1px solid #eee',
  },
  tabButton: {
    flex: 1,
    padding: '14px 0',
    background: 'none',
    border: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    color: '#999',
    cursor: 'pointer',
  },
  tabButtonActive: {
    color: '#4a2f1f',
    borderBottom: '2px solid #4a2f1f',
  },
  linkList: {
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'auto',
  },
  drawerLink: {
    padding: '16px 20px',
    fontSize: '15px',
    fontWeight: '600',
    color: '#333',
    textDecoration: 'none',
    borderBottom: '1px solid #f2f2f2',
  },
}