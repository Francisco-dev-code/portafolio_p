import { renderHook, act } from '@testing-library/react'
import { useScrollReveal } from './useScrollReveal'

describe('useScrollReveal Hook', () => {
  let observeMock: jasmine.Spy
  let unobserveMock: jasmine.Spy
  let disconnectMock: jasmine.Spy
  let observerCallback: IntersectionObserverCallback | null = null

  beforeEach(() => {
    // Crear mocks de los métodos del IntersectionObserver
    observeMock = jasmine.createSpy('observe')
    unobserveMock = jasmine.createSpy('unobserve')
    disconnectMock = jasmine.createSpy('disconnect')
    observerCallback = null

    // Mock del constructor de IntersectionObserver
    const MockIntersectionObserver = class {
      observe = observeMock
      unobserve = unobserveMock
      disconnect = disconnectMock
      root = null
      rootMargin = ''
      thresholds = [0.1]

      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback
      }
    }

    // Reemplazar el IntersectionObserver global
    window.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver
  })

  afterEach(() => {
    // Limpiar los mocks
    observeMock.calls.reset()
    unobserveMock.calls.reset()
    disconnectMock.calls.reset()
  })

  it('inicializa con isVisible en false', () => {
    const { result } = renderHook(() => useScrollReveal())
    expect(result.current.isVisible).toBe(false)
  })

  it('cambia isVisible a true cuando el elemento intersecta', () => {
    const { result } = renderHook(() => useScrollReveal())
    
    // Simular una intersección dentro de act()
    act(() => {
      const mockEntry = {
        isIntersecting: true,
        target: document.createElement('div'),
        boundingClientRect: {} as DOMRectReadOnly,
        intersectionRatio: 1,
        intersectionRect: {} as DOMRectReadOnly,
        rootBounds: null,
        time: Date.now(),
      } as IntersectionObserverEntry

      // Invocar el callback con el entry
      if (observerCallback) {
        observerCallback([mockEntry], {} as IntersectionObserver)
      }
    })

    // Verificar que isVisible cambió a true
    expect(result.current.isVisible).toBe(true)
  })

  it('no cambia isVisible cuando el elemento no intersecta', () => {
    const { result } = renderHook(() => useScrollReveal())
    
    // Simular que NO intersecta dentro de act()
    act(() => {
      const mockEntry = {
        isIntersecting: false,
        target: document.createElement('div'),
        boundingClientRect: {} as DOMRectReadOnly,
        intersectionRatio: 0,
        intersectionRect: {} as DOMRectReadOnly,
        rootBounds: null,
        time: Date.now(),
      } as IntersectionObserverEntry

      if (observerCallback) {
        observerCallback([mockEntry], {} as IntersectionObserver)
      }
    })

    // Verificar que isVisible sigue en false
    expect(result.current.isVisible).toBe(false)
  })

  it('permite especificar el tipo genérico del elemento', () => {
    const { result } = renderHook(() => useScrollReveal<HTMLButtonElement>())
    
    // Verificar que el ref es del tipo correcto
    expect(result.current.ref.current).toBeNull()
    expect(result.current.isVisible).toBe(false)
  })
})
