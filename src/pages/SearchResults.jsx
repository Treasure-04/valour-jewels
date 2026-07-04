import { useSearchParams } from 'react-router-dom'
import products from '../data/products'
import ProductCard from '../components/ProductCard'

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')?.toLowerCase() || ''

  const results = products.filter((p) =>
    p.name.toLowerCase().includes(query) || p.category.toLowerCase().includes(query)
  )

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>
        {results.length > 0
          ? `Search results for "${query}"`
          : `No results found for "${query}"`}
      </h1>

      {results.length > 0 && (
        <div style={styles.grid}>
          {results.map((product) => (
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
    fontSize: '20px',
    color: '#4a2f1f',
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
}