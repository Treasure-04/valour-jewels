import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart()

  if (cartItems.length === 0) {
    return (
      <div style={styles.emptyPage}>
        <p style={styles.emptyText}>Your cart is empty.</p>
        <Link to="/category/all" style={styles.shopLink}>Start Shopping</Link>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Your Cart</h1>

      <div style={styles.itemList}>
        {cartItems.map((item) => (
          <div key={item.id} style={styles.item}>
            <img src={item.image} alt={item.name} style={styles.itemImage} />

            <div style={styles.itemInfo}>
              <p style={styles.itemName}>{item.name}</p>
              <p style={styles.itemPrice}>₦{item.price.toLocaleString()}</p>

              <div style={styles.quantityRow}>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  style={styles.qtyButton}
                >
                  −
                </button>
                <span style={styles.qtyNumber}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  style={styles.qtyButton}
                >
                  +
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  style={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            </div>

            <p style={styles.itemSubtotal}>
              ₦{(item.price * item.quantity).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      <div style={styles.summary}>
        <p style={styles.totalLabel}>Total</p>
        <p style={styles.totalAmount}>₦{cartTotal.toLocaleString()}</p>
      </div>

      <Link to="/checkout" style={styles.checkoutButton}>
        Proceed to Checkout
      </Link>
    </div>
  )
}

const styles = {
  page: {
    padding: '30px 20px',
    backgroundColor: '#faf6f0',
    minHeight: '70vh',
    maxWidth: '700px',
    margin: '0 auto',
  },
  title: {
    fontFamily: 'serif',
    fontSize: '24px',
    color: '#4a2f1f',
    marginBottom: '20px',
  },
  itemList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  item: {
    display: 'flex',
    gap: '12px',
    backgroundColor: '#fff',
    border: '1px solid #e8ddd0',
    borderRadius: '10px',
    padding: '12px',
    alignItems: 'center',
  },
  itemImage: {
    width: '70px',
    height: '70px',
    objectFit: 'cover',
    borderRadius: '8px',
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#4a2f1f',
    marginBottom: '4px',
  },
  itemPrice: {
    fontSize: '13px',
    color: '#8b5e3c',
    marginBottom: '8px',
  },
  quantityRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  qtyButton: {
    width: '26px',
    height: '26px',
    border: '1px solid #e0d3c2',
    backgroundColor: '#faf6f0',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '14px',
  },
  qtyNumber: {
    fontSize: '14px',
    fontWeight: '600',
    minWidth: '16px',
    textAlign: 'center',
  },
  removeButton: {
    marginLeft: 'auto',
    background: 'none',
    border: 'none',
    color: '#b23b3b',
    fontSize: '12px',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
  itemSubtotal: {
    fontSize: '14px',
    fontWeight: 'bold',
    color: '#4a2f1f',
    whiteSpace: 'nowrap',
  },
  summary: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '24px',
    padding: '16px',
    backgroundColor: '#fff',
    border: '1px solid #e8ddd0',
    borderRadius: '10px',
  },
  totalLabel: {
    fontSize: '16px',
    fontWeight: '600',
    color: '#4a2f1f',
  },
  totalAmount: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#8b5e3c',
  },
  checkoutButton: {
    display: 'block',
    textAlign: 'center',
    backgroundColor: '#4a2f1f',
    color: '#fff',
    padding: '14px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: 'bold',
    marginTop: '20px',
  },
  emptyPage: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#faf6f0',
    minHeight: '70vh',
  },
  emptyText: {
    color: '#8b7a6a',
    marginBottom: '16px',
  },
  shopLink: {
    display: 'inline-block',
    backgroundColor: '#4a2f1f',
    color: '#fff',
    padding: '12px 28px',
    borderRadius: '25px',
    textDecoration: 'none',
    fontWeight: '600',
  },
}