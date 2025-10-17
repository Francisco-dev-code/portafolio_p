import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('permite enviar el formulario', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.type(screen.getByLabelText(/nombre/i), 'Ana')
    await user.type(screen.getByLabelText(/email/i), 'ana@example.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Hola!')

    await user.click(screen.getByRole('button', { name: /enviar/i }))
    expect(screen.getByText(/gracias por tu mensaje/i)).toBeTruthy()
  })
})
