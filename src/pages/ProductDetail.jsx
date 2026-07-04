import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import { useCart } from '../context/CartContext'
import { useWishlist } from '../context/WishlistContext'

export default function ProductDetail() {
  const { productId } = useParams()
  const { addToCart } = useCart()
  const { toggleWishlist, isInWishlist } = useWishlist()

  const product = products.find((p) => p.id === parseInt(productId))

  if (!product) {
    return (
      <div style={styles.notFound}>
        <p>Product not found.</p>
        <Link to="/category/all" style={styles.backLink}>Back to Shop</Link>
      </div>
    )
  }

  const inWishlist = isInWishlist(product.id)

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  return (
    <div style={styles.page}>
      <div style={styles.content}>
        <img src={product.image} alt={product.name} style={styles.image} />

        <div style={styles.info}>
          <p style={styles.category}>{product.category.replace('-', ' ')}</p>
          <h1 style={styles.name}>{product.name}</h1>
          <p style={styles.price}>₦{product.price.toLocaleString()}</p>

          <p style={styles.description}>
            A beautifully crafted piece from our {product.category.replace('-', ' ')} collection,
            designed to add timeless elegance to any look.
          </p>

          <div style={styles.buttonRow}>
            <button onClick={() => addToCart(product)} style={styles.addButton}>
              Add to Cart
            </button>
            <button onClick={() => toggleWishlist(product)} style={styles.wishlistButton}>
              {inWishlist ? '❤️ Wishlisted' : '🤍 Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div style={styles.relatedSection}>
          <h2 style={styles.relatedTitle}>You may also like</h2>
          <div style={styles.relatedGrid}>
            {relatedProducts.map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} style={styles.relatedCard}>
                <img src={p.image} alt={p.name} style={styles.relatedImage} />
                <p style={styles.relatedName}>{p.name}</p>
                <p style={styles.relatedPrice}>₦{p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
  page: {
    backgroundColor: '#faf6f0',
    minHeight: '70vh',
    padding: '30px 20px',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  image: {
    flex: '1 1 300px',
    width: '100%',
    maxWidth: '400px',
    height: '400px',
    objectFit: 'cover',
    borderRadius: '12px',
  },
  info: {
    flex: '1 1 300px',
  },
  category: {
    textTransform: 'uppercase',
    fontSize: '12px',
    letterSpacing: '1px',
    color: '#8b7a6a',
    marginBottom: '8px',
  },
  name: {
    fontFamily: 'serif',
    fontSize: '26px',
    color: '#4a2f1f',
    marginBottom: '10px',
  },
  price: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#8b5e3c',
    marginBottom: '16px',
  },
  description: {
    color: '#5a4a3a',
    lineHeight: '1.7',
    marginBottom: '24px',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    maxWidth: '280px',
  },
  addButton: {
    backgroundColor: '#4a2f1f',
    color: '#fff',
    border: 'none',
    padding: '14px',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  wishlistButton: {
    backgroundColor: '#fff',
    color: '#4a2f1f',
    border: '1px solid #e0d3c2',
    padding: '14px',
    borderRadius: '25px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  relatedSection: {
    maxWidth: '900px',
    margin: '50px auto 0',
  },
  relatedTitle: {
    fontFamily: 'serif',
    fontSize: '20px',
    color: '#4a2f1f',
    marginBottom: '20px',
    textAlign: 'center',
  },
  relatedGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '16px',
  },
  relatedCard: {
    backgroundColor: '#fff',
    border: '1px solid #e8ddd0',
    borderRadius: '10px',
    overflow: 'hidden',
    textDecoration: 'none',
    color: '#4a2f1f',
  },
  relatedImage: {
    width: '100%',
    height: '130px',
    objectFit: 'cover',
    display: 'block',
  },
  relatedName: {
    fontSize: '13px',
    fontWeight: '600',
    padding: '10px 10px 4px',
  },
  relatedPrice: {
    fontSize: '13px',
    color: '#8b5e3c',
    padding: '0 10px 10px',
  },
  notFound: {
    padding: '60px 20px',
    textAlign: 'center',
  },
  backLink: {
    color: '#8b5e3c',
    fontWeight: '600',
  },
}