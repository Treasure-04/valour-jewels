import { useParams } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function Category() {
  const { categoryName } = useParams()

  const filteredProducts = categoryName === 'all'
    ? products
    : products.filter((p) => p.category === categoryName)

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        {categoryName === 'all' ? 'All Products' : categoryName.replace('-', ' ')}
      </h1>

      {filteredProducts.length === 0 ? (
        <p style={styles.empty}>No products found in this category yet.</p>
      ) : (
        <div style={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

const styles = {
  page: {
    padding: '30px 20px',
    backgroundColor: '#faf6f0',
    minHeight: '70vh',
  },
  title: {
    fontFamily: 'serif',
    fontSize: '24px',
    color: '#4a2f1f',
    textTransform: 'capitalize',
    marginBottom: '24px',
    textAlign: 'center',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
    gap: '16px',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  empty: {
    textAlign: 'center',
    color: '#8b7a6a',
  },
}