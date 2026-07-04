import { useWishlist } from '../context/WishlistContext'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'

export default function Wishlist() {
  const { wishlistItems } = useWishlist()

  if (wishlistItems.length === 0) {
    return (
      <div style={styles.emptyPage}>
        <p style={styles.emptyText}>Your wishlist is empty.</p>
        <Link to="/category/all" style={styles.shopLink}>Start Shopping</Link>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Your Wishlist</h1>
      <div style={styles.grid}>
        {wishlistItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

const styles = {
  page: { padding: '30px 20px', backgroundColor: '#faf6f0', minHeight: '70vh' },
  title: { fontFamily: 'serif', fontSize: '24px', color: '#4a2f1f', marginBottom: '24px', textAlign: 'center' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '16px', maxWidth: '1000px', margin: '0 auto' },
  emptyPage: { padding: '60px 20px', textAlign: 'center', backgroundColor: '#faf6f0', minHeight: '70vh' },
  emptyText: { color: '#8b7a6a', marginBottom: '16px' },
  shopLink: { display: 'inline-block', backgroundColor: '#4a2f1f', color: '#fff', padding: '12px 28px', borderRadius: '25px', textDecoration: 'none', fontWeight: '600' },
}