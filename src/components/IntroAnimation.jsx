import { useState, useEffect } from 'react'

export default function IntroAnimation({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800)
    const finishTimer = setTimeout(() => onFinish(), 2300)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish])

  return (
    <div style={{ ...styles.overlay, opacity: fadeOut ? 0 : 1 }}>
      <div style={styles.content}>
        <h1 style={styles.logo}>Valour Jewels</h1>
        <div style={styles.line}></div>
        <p style={styles.tagline}>Timeless Pieces, Crafted for You</p>
      </div>

      <style>
        {`
          @keyframes fadeInLogo {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes growLine {
            from { width: 0; }
            to { width: 80px; }
          }
        `}
      </style>
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
    backgroundColor: '#4a2f1f',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    transition: 'opacity 0.5s ease',
  },
  content: {
    textAlign: 'center',
  },
  logo: {
    color: '#faf6f0',
    fontFamily: 'serif',
    fontSize: '32px',
    letterSpacing: '2px',
    animation: 'fadeInLogo 0.8s ease forwards',
  },
  line: {
    height: '2px',
    backgroundColor: '#d4af8c',
    margin: '14px auto',
    animation: 'growLine 0.8s ease forwards 0.4s',
    width: '0px',
  },
  tagline: {
    color: '#d4af8c',
    fontSize: '13px',
    letterSpacing: '1px',
    opacity: 0,
    animation: 'fadeInLogo 0.8s ease forwards 0.8s',
  },
}