import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [loading, setLoading] = useState(true) // Estado para el Splash Screen

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000) // 1 segundo de splash
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    // Splash Screen
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff',
        fontFamily: 'system-ui'
      }}>
        <img src="/icons/icon-192.png" alt="logo" style={{ width: 96, height: 96, marginBottom: 16 }} />
        <h1 style={{ color: '#1e88e5' }}>awp-kegl</h1>
        <p>Cargando...</p>
      </div>
    )
  }

  // Home Screen (tu app existente)
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
