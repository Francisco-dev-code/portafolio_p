import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('muestra el título de la sección', () => {
    render(<Contact />)
  expect(screen.getAllByText(/Contacto/i).length).toBeGreaterThan(0)
  })
  it('muestra información de contacto', () => {
    render(<Contact />)
  expect(screen.getByText(/Información de contacto/i)).toBeTruthy()
  expect(screen.getByText(/Santiago, Chile/i)).toBeTruthy()
  expect(screen.getByText(/fran.gonzalez.chea@gmail.com/i)).toBeTruthy()
  })
  it('permite enviar el formulario', async () => {
    render(<Contact />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/nombre/i), 'Ana')
    await user.type(screen.getByLabelText(/email/i), 'ana@example.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Hola! Este es un mensaje de prueba.')
    await user.click(screen.getByRole('button', { name: /enviar/i }))
    // Buscar el mensaje de éxito con una función matcher flexible
    expect(screen.getByText((_, element) =>
      element?.className?.includes('form-success')
    )).toBeTruthy()
  })
})
