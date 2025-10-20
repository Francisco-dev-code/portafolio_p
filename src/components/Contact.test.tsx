import { render, screen, waitFor } from '@testing-library/react'
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

  it('permite enviar el formulario con datos válidos', async () => {
    render(<Contact />)
    const user = userEvent.setup()
    
    await user.type(screen.getByLabelText(/nombre/i), 'Ana')
    await user.type(screen.getByLabelText(/email/i), 'ana@example.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Hola! Este es un mensaje de prueba.')
    await user.click(screen.getByRole('button', { name: /enviar/i }))
    
    // Buscar el mensaje de éxito
    expect(screen.getByText((_, element) =>
      !!(element?.className?.includes('form-success'))
    )).toBeTruthy()
  })

  it('muestra error cuando el nombre está vacío', async () => {
    render(<Contact />)
    const user = userEvent.setup()
    
    // Dejar nombre vacío
    await user.type(screen.getByLabelText(/email/i), 'test@example.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Mensaje de prueba válido')
    await user.click(screen.getByRole('button', { name: /enviar/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/Por favor ingresa tu nombre/i)).toBeTruthy()
    })
  })

  it('muestra error cuando el email es inválido', async () => {
    render(<Contact />)
    const user = userEvent.setup()
    
    await user.type(screen.getByLabelText(/nombre/i), 'Ana')
    await user.type(screen.getByLabelText(/email/i), 'emailinvalido')
    await user.type(screen.getByLabelText(/mensaje/i), 'Mensaje de prueba válido')
    await user.click(screen.getByRole('button', { name: /enviar/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/Ingresa un email válido/i)).toBeTruthy()
    })
  })

  it('muestra error cuando el mensaje es muy corto', async () => {
    render(<Contact />)
    const user = userEvent.setup()
    
    await user.type(screen.getByLabelText(/nombre/i), 'Ana')
    await user.type(screen.getByLabelText(/email/i), 'ana@example.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Corto')
    await user.click(screen.getByRole('button', { name: /enviar/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/al menos 10 caracteres/i)).toBeTruthy()
    })
  })

  it('muestra múltiples errores simultáneamente', async () => {
    render(<Contact />)
    const user = userEvent.setup()
    
    // Hacer clic sin llenar ningún campo
    await user.click(screen.getByRole('button', { name: /enviar/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/Por favor ingresa tu nombre/i)).toBeTruthy()
      expect(screen.getByText(/Por favor ingresa tu email/i)).toBeTruthy()
      expect(screen.getByText(/al menos 10 caracteres/i)).toBeTruthy()
    })
  })

  it('limpia el formulario después de enviar exitosamente', async () => {
    render(<Contact />)
    const user = userEvent.setup()
    
    const nameInput = screen.getByLabelText(/nombre/i) as HTMLInputElement
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement
    const messageInput = screen.getByLabelText(/mensaje/i) as HTMLTextAreaElement
    
    await user.type(nameInput, 'Ana')
    await user.type(emailInput, 'ana@example.com')
    await user.type(messageInput, 'Mensaje válido de prueba')
    await user.click(screen.getByRole('button', { name: /enviar/i }))
    
    // Esperar al mensaje de éxito
    await waitFor(() => {
      expect(screen.getByText((_, element) =>
        !!(element?.className?.includes('form-success'))
      )).toBeTruthy()
    })
    
    // Hacer clic en "Enviar otro mensaje"
    const resetButton = await screen.findByRole('button', { name: /enviar otro mensaje/i })
    await user.click(resetButton)
    
    // Verificar que los campos están limpios después de reset
    await waitFor(() => {
      const freshNameInput = screen.getByLabelText(/nombre/i) as HTMLInputElement
      const freshEmailInput = screen.getByLabelText(/email/i) as HTMLInputElement
      const freshMessageInput = screen.getByLabelText(/mensaje/i) as HTMLTextAreaElement
      expect(freshNameInput.value).toBe('')
      expect(freshEmailInput.value).toBe('')
      expect(freshMessageInput.value).toBe('')
    })
  })

  it('valida el formato de email correctamente', async () => {
    const consoleWarnSpy = jasmine.createSpy('console.warn')
    const originalWarn = console.warn
    console.warn = consoleWarnSpy

    render(<Contact />)
    const user = userEvent.setup()
    
    await user.type(screen.getByLabelText(/nombre/i), 'Test')
    
    // Probar email sin @
    await user.type(screen.getByLabelText(/email/i), 'emailsinarroba.com')
    await user.type(screen.getByLabelText(/mensaje/i), 'Mensaje de prueba válido')
    await user.click(screen.getByRole('button', { name: /enviar/i }))
    
    await waitFor(() => {
      expect(screen.getByText(/Ingresa un email válido/i)).toBeTruthy()
    })

    console.warn = originalWarn
  })

  it('preserva los datos del formulario cuando hay errores de validación', async () => {
    render(<Contact />)
    const user = userEvent.setup()
    
    const nameInput = screen.getByLabelText(/nombre/i) as HTMLInputElement
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement
    const messageInput = screen.getByLabelText(/mensaje/i) as HTMLTextAreaElement
    
    await user.type(nameInput, 'Ana')
    await user.type(emailInput, 'emailinvalido')
    await user.type(messageInput, 'Mensaje válido')
    await user.click(screen.getByRole('button', { name: /enviar/i }))
    
    // Los datos deben permanecer en el formulario
    expect(nameInput.value).toBe('Ana')
    expect(emailInput.value).toBe('emailinvalido')
    expect(messageInput.value).toBe('Mensaje válido')
  })
})

