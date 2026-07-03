import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault() // stops the Link from navigating when button is clicked
    addToCart(product)
  }

  return (
    <div style={styles.card}>
      <Link to={`/product/${product.id}`} style={styles.imageLink}>
        <img src={product.image} alt={product.name} style={styles.image} />
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
  card: {
    backgroundColor: '#fff',
    border: '1px solid #e8ddd0',
    borderRadius: '12px',
    overflow: 'hidden',
  },
  imageLink: {
    display: 'block',
  },
  image: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    display: 'block',
  },
  info: {
    padding: '12px',
  },
  nameLink: {
    textDecoration: 'none',
    color: '#4a2f1f',
  },
  name: {
    fontSize: '14px',
    fontWeight: '600',
    marginBottom: '6px',
  },
  price: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#8b5e3c',
    marginBottom: '10px',
  },
  addButton: {
    width: '100%',
    backgroundColor: '#4a2f1f',
    color: '#fff',
    border: 'none',
    padding: '8px',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: '600',
    cursor: 'pointer',
  },
}