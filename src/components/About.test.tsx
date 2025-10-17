import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('muestra el título Sobre mí', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /sobre mí/i })).toBeTruthy()
  })
})
