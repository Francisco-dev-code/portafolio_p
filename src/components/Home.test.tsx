import { render, screen } from '@testing-library/react'
import { Home } from './Home'
import { BrowserRouter } from 'react-router-dom'

describe('Home', () => {
  it('renderiza el título principal', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByRole('heading', { name: /Desarrollador Fullstack en formación/i })).toBeTruthy()
  })

  it('muestra los botones principales', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    expect(screen.getByRole('button', { name: /Ver proyectos/i })).toBeTruthy()
    expect(screen.getByRole('button', { name: /Contáctame/i })).toBeTruthy()
  })

  it('muestra las estadísticas del desarrollador', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    
    expect(screen.getAllByText(/2/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Años experiencia/i)).toBeTruthy()
    expect(screen.getByText(/10\+/i)).toBeTruthy()
    expect(screen.getAllByText(/Proyectos/i).length).toBeGreaterThan(0)
  })

  it('muestra el stack tecnológico', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    
    expect(screen.getByText(/Python, JS, HTML, React/i)).toBeTruthy()
  })

  it('renderiza el enlace de descarga de CV', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    )
    
    const cvLinks = screen.getAllByRole('link') as HTMLAnchorElement[]
    const cvLink = cvLinks.find(link => link.href.includes('DOC-20250919-WA0000.pdf'))
    expect(cvLink).toBeTruthy()
  })
})

