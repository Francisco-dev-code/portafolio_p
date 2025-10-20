import { render, screen } from '@testing-library/react'
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
})
