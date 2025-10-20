import { render, screen } from '@testing-library/react'
import { Projects } from './Projects'

describe('Projects', () => {
  it('muestra el título de la sección', () => {
    render(<Projects />)
  expect(screen.getByRole('heading', { name: /Proyectos/i })).toBeTruthy()
  })
  it('muestra los nombres de los proyectos', () => {
    render(<Projects />)
  expect(screen.getByText(/Gestión de Perfumería/i)).toBeTruthy()
  expect(screen.getByText(/Portafolio Personal/i)).toBeTruthy()
  })
  it('muestra tecnologías usadas', () => {
    render(<Projects />)
  expect(screen.getAllByText(/JavaScript/i).length).toBeGreaterThan(0)
  expect(screen.getAllByText(/Postman/i).length).toBeGreaterThan(0)
  expect(screen.getAllByText(/Mockito/i).length).toBeGreaterThan(0)
  expect(screen.getAllByText(/JUnit/i).length).toBeGreaterThan(0)
  })
})
