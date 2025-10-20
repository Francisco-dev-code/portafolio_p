import { render, screen } from '@testing-library/react'
import { Home } from './Home'
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
  it('renderiza el título principal', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { name: /Desarrollador Fullstack en formación/i })).toBeTruthy()
  })
  it('muestra los botones principales', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
  expect(screen.getByRole('button', { name: /Ver proyectos/i })).toBeTruthy()
  expect(screen.getByRole('button', { name: /Contáctame/i })).toBeTruthy()
  })
})
