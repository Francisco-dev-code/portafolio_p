import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('muestra el título de la sección', () => {
    render(<About />)
  expect(screen.getByRole('heading', { name: /Sobre mí/i })).toBeTruthy()
  })
  it('muestra información personal', () => {
    render(<About />)
  expect(screen.getByText(/Francisco/i)).toBeTruthy()
  expect(screen.getByText(/Desarrollador/i)).toBeTruthy()
  })

  it('renderiza la imagen de perfil y usa avatar si falla', async () => {
    render(<About />)
    const img = screen.getByAltText('Foto de perfil') as HTMLImageElement
    expect(img).toBeTruthy()
    // Simular error de carga
    fireEvent.error(img)
    // Espera a que el src cambie a un SVG (data:image/svg+xml o inline)
    await waitFor(() => {
      expect(img.src === '' || img.src.startsWith('data:image/svg+xml') || img.src.includes('svg')).toBe(true)
    })
  })

  it('renderiza el enlace de descarga de CV', () => {
    render(<About />)
    const link = screen.getByRole('link', { name: /Descargar CV/i }) as HTMLAnchorElement
    expect(link).toBeTruthy()
    expect(link.getAttribute('href')).toBe('/DOC-20250919-WA0000.pdf')
    expect(link.hasAttribute('download')).toBeTrue()
  })

  it('renderiza el enlace a LinkedIn', () => {
    render(<About />)
    const link = screen.getByRole('link', { name: /Ver LinkedIn/i }) as HTMLAnchorElement
    expect(link).toBeTruthy()
    expect(link.getAttribute('href')).toContain('linkedin.com')
    expect(link.getAttribute('target')).toBe('_blank')
  })

  it('muestra los hobbies e intereses', () => {
    render(<About />)
    // Filtra solo los <li> de hobbies
    const hobbyItems = screen.getAllByRole('listitem');
    expect(hobbyItems.some(li => li.textContent?.includes('Música y básquet'))).toBe(true);
    expect(hobbyItems.some(li => li.textContent?.includes('Aprendizaje continuo'))).toBe(true);
    expect(hobbyItems.some(li => li.textContent?.includes('Viajes y cultura tech'))).toBe(true);
  })

  it('renderiza los certificados con sus imágenes', () => {
    render(<About />)
    expect(screen.getAllByText(/Scrum Master Professional Certification/i).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/Ethical Hacking Professional Certificate/i).length).toBeGreaterThan(0)
    const certIcons = screen.getAllByAltText(/Certificado/)
    expect(certIcons.length).toBeGreaterThanOrEqual(2)
  })

  it('muestra experiencia, habilidades y formación', () => {
    render(<About />)
    expect(screen.getByText(/Desarrollo de aplicaciones web/i)).toBeTruthy()
    expect(screen.getAllByText(/Python, JavaScript, HTML, React/i).length).toBeGreaterThan(0)
    expect(screen.getByText(/Certificaciones y formación/i)).toBeTruthy()
  })
})
