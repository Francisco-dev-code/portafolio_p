// styles already imported in main.tsx
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { useDarkMode } from './hooks/useDarkMode'

function App() {
  const { isDark, toggle } = useDarkMode()

  return (
    <Router>
      <div className="app-container">
        <header className="site-header">
          <nav className="site-nav">
            <Link to="/" className="nav-link">Inicio</Link>
            <Link to="/sobre-mi" className="nav-link">Sobre mí</Link>
            <Link to="/proyectos" className="nav-link">Proyectos</Link>
            <Link to="/contacto" className="nav-link">Contacto</Link>
            <button 
              onClick={toggle} 
              className="theme-toggle"
              aria-label="Toggle dark mode"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </nav>
        </header>

        <main className="site-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-mi" element={<About />} />
            <Route path="/proyectos" element={<Projects />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">© {new Date().getFullYear()} Mi Portafolio</footer>
      </div>
    </Router>
  )
}

export default App
