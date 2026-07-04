import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()
  const inWishlist = isInWishlist(product.id)

  const handleAddToCart = (e) => {
    e.preventDefault()
    addToCart(product)
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    toggleWishlist(product)
  }

  return (
    <div style={styles.card}>
      <Link to={`/product/${product.id}`} style={styles.imageLink}>
        <img src={product.image} alt={product.name} style={styles.image} />
        <button onClick={handleWishlist} style={styles.wishlistButton}>
          {inWishlist ? '❤️' : '🤍'}
        </button>
      </Link>
      <div style={styles.info}>
        <Link to={`/product/${product.id}`} style={styles.nameLink}>
          <p style={styles.name}>{product.name}</p>
        </Link>
        <p style={styles.price}>₦{product.price.toLocaleString()}</p>
        <button onClick={handleAddToCart} style={styles.addButton}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

const styles = {
  card: { backgroundColor: '#fff', border: '1px solid #e8ddd0', borderRadius: '12px', overflow: 'hidden' },
  imageLink: { display: 'block', position: 'relative' },
  image: { width: '100%', height: '180px', objectFit: 'cover', display: 'block' },
  wishlistButton: { position: 'absolute', top: '8px', right: '8px', background: 'rgba(255,255,255,0.8)', border: 'none', borderRadius: '50%', width: '32px', height: '32px', fontSize: '15px', cursor: 'pointer' },
  info: { padding: '12px' },
  nameLink: { textDecoration: 'none', color: '#4a2f1f' },
  name: { fontSize: '14px', fontWeight: '600', marginBottom: '6px' },
  price: { fontSize: '14px', fontWeight: 'bold', color: '#8b5e3c', marginBottom: '10px' },
  addButton: { width: '100%', backgroundColor: '#4a2f1f', color: '#fff', border: 'none', padding: '8px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer' },
}