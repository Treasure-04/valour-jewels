import { useState, useEffect } from 'react'

const images = [
  'https://images.unsplash.com/photo-1492714485642-dd6df6baafa2?w=800&h=1000&fit=crop&q=80',
  'https://images.unsplash.com/photo-1671513579768-6f950fe62d5c?w=800&h=1000&fit=crop&q=80',
  'https://images.unsplash.com/photo-1758995115682-1452a1a9e35b?w=800&h=1000&fit=crop&q=80',
  'https://images.unsplash.com/photo-1655255114527-d0a834d9a774?w=800&h=1000&fit=crop&q=80',
  'https://images.unsplash.com/photo-1631729670375-7b9bc6ba6c07?w=800&h=1000&fit=crop&q=80',
]

export default function IntroAnimation({ onFinish }) {
  const [currentImage, setCurrentImage] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 700)

    const fadeTimer = setTimeout(() => setFadeOut(true), 3600)
    const finishTimer = setTimeout(() => onFinish(), 4100)

    return () => {
      clearInterval(imageInterval)
      clearTimeout(fadeTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish])

  return (
    <div style={{ ...styles.overlay, opacity: fadeOut ? 0 : 1 }}>
      {images.map((img, index) => (
        <img
          key={img}
          src={img}
          alt=""
          style={{
            ...styles.image,
            opacity: index === currentImage ? 1 : 0,
          }}
        />
      ))}

      <div style={styles.darkOverlay}></div>

      <div style={styles.content}>
        <h1 style={styles.logo}>Valour Jewels</h1>
        <p style={styles.tagline}>Timeless Pieces, Crafted for You</p>
      </div>
    </div>
  )
}

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    zIndex: 9999,
    transition: 'opacity 0.5s ease',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 0.6s ease-in-out',
  },
  darkOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    zIndex: 2,
  },
  logo: {
    color: '#fff',
    fontFamily: 'serif',
    fontSize: '34px',
    letterSpacing: '2px',
    marginBottom: '10px',
  },
  tagline: {
    color: '#d4af8c',
    fontSize: '13px',
    letterSpacing: '1px',
  },
}