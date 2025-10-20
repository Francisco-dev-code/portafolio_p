import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react'
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

  it('abre el modal de evidencia al hacer click en una tarjeta', async () => {
    render(<Projects />)
    const card = screen.getByRole('button', { name: /Ver evidencia de Gestión de Perfumería/i })
    expect(card).toBeTruthy()
    card.click()
    // Esperar a que el modal aparezca con el rol dialog
    const dialog = await screen.findByRole('dialog')
    expect(dialog).toBeTruthy()
    // Buscar el heading dentro del modal (h3 con el nombre del proyecto)
    const heading = dialog.querySelector('h3')
    expect(heading).toBeTruthy()
    expect(heading?.textContent).toMatch(/Gestión de Perfumería/i)
  })

  it('cierra el modal de evidencia al hacer click en ×', async () => {
    render(<Projects />)
    const card = screen.getByRole('button', { name: /Ver evidencia de Gestión de Perfumería/i })
    card.click()
    // Buscar el botón de cerrar por aria-label
  const closeBtn = await screen.findByRole('button', { name: 'Cerrar' })
  expect(closeBtn).toBeTruthy()
  closeBtn.click()
    // Esperar a que desaparezca el modal (dialog)
    await waitForElementToBeRemoved(() => screen.queryByRole('dialog'))
  })

  it('muestra todas las evidencias del proyecto en el modal', async () => {
    render(<Projects />)
    const card = screen.getByRole('button', { name: /Ver evidencia de Gestión de Perfumería/i })
    card.click()
    // Esperar a que aparezcan las imágenes de evidencia
    const evidencias = await screen.findAllByAltText(/Evidencia [0-9]+ de Gestión de Perfumería/i)
    expect(evidencias.length).toBeGreaterThanOrEqual(1)
  })

  it('permite hacer zoom en una imagen de evidencia y cerrar el zoom', async () => {
    render(<Projects />)
    const card = screen.getByRole('button', { name: /Ver evidencia de Gestión de Perfumería/i })
    card.click()
    // Esperar a que el modal esté en el DOM
    await waitFor(() => {
      expect(screen.getByRole('dialog')).toBeTruthy()
    })
    // Buscar el botón de ampliar evidencia (puede que tarde en renderizar)
    const imgBtn = await screen.findAllByRole('button', { name: /Ampliar evidencia/i })
    expect(imgBtn.length).toBeGreaterThan(0)
    imgBtn[0].click()
    // Esperar a que aparezca la imagen ampliada
    await waitFor(() => {
      expect(screen.getByAltText('Evidencia ampliada')).toBeTruthy()
    })
    // Cerrar zoom
    const closeZoom = screen.getByRole('button', { name: /cerrar evidencia ampliada/i })
    closeZoom.click()
    // Esperar a que desaparezca la imagen ampliada
    await waitForElementToBeRemoved(() => screen.queryByAltText('Evidencia ampliada'))
  })
})
