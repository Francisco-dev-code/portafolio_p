import { renderHook, act } from '@testing-library/react'
import { useDarkMode } from './useDarkMode'

describe('useDarkMode Hook', () => {
  let getItemSpy: jasmine.Spy
  let setItemSpy: jasmine.Spy
  let setAttributeSpy: jasmine.Spy
  let removeAttributeSpy: jasmine.Spy

  beforeEach(() => {
    // Mock de localStorage
    getItemSpy = jasmine.createSpy('getItem').and.returnValue(null)
    setItemSpy = jasmine.createSpy('setItem')
    
    spyOnProperty(window, 'localStorage', 'get').and.returnValue({
      getItem: getItemSpy,
      setItem: setItemSpy,
      removeItem: jasmine.createSpy('removeItem'),
      clear: jasmine.createSpy('clear'),
      key: jasmine.createSpy('key'),
      length: 0,
    } as Storage)

    // Mock de document.documentElement
    setAttributeSpy = jasmine.createSpy('setAttribute')
    removeAttributeSpy = jasmine.createSpy('removeAttribute')
    
    spyOnProperty(document, 'documentElement', 'get').and.returnValue({
      setAttribute: setAttributeSpy,
      removeAttribute: removeAttributeSpy,
    } as unknown as HTMLElement)
  })

  it('inicializa con modo claro por defecto cuando no hay valor guardado', () => {
    const { result } = renderHook(() => useDarkMode())
    expect(result.current.isDark).toBe(false)
    expect(getItemSpy).toHaveBeenCalledWith('darkMode')
  })

  it('carga el modo oscuro desde localStorage cuando está guardado', () => {
    getItemSpy.and.returnValue('true')
    const { result } = renderHook(() => useDarkMode())
    expect(result.current.isDark).toBe(true)
  })

  it('guarda el estado en localStorage cuando cambia a oscuro', () => {
    const { result } = renderHook(() => useDarkMode())
    
    act(() => {
      result.current.toggle()
    })

    expect(result.current.isDark).toBe(true)
    expect(setItemSpy).toHaveBeenCalledWith('darkMode', 'true')
    expect(setAttributeSpy).toHaveBeenCalledWith('data-theme', 'dark')
  })

  it('guarda el estado en localStorage cuando cambia a claro', () => {
    getItemSpy.and.returnValue('true')
    const { result } = renderHook(() => useDarkMode())
    
    act(() => {
      result.current.toggle()
    })

    expect(result.current.isDark).toBe(false)
    expect(setItemSpy).toHaveBeenCalledWith('darkMode', 'false')
    expect(removeAttributeSpy).toHaveBeenCalled()
  })

  it('aplica el atributo data-theme cuando está en modo oscuro', () => {
    getItemSpy.and.returnValue('true')
    renderHook(() => useDarkMode())
    
    expect(setAttributeSpy).toHaveBeenCalledWith('data-theme', 'dark')
  })

  it('remueve el atributo data-theme cuando está en modo claro', () => {
    renderHook(() => useDarkMode())
    
    expect(removeAttributeSpy).toHaveBeenCalled()
  })

  it('permite múltiples toggles seguidos', () => {
    const { result } = renderHook(() => useDarkMode())
    
    act(() => {
      result.current.toggle() // false -> true
    })
    expect(result.current.isDark).toBe(true)
    
    act(() => {
      result.current.toggle() // true -> false
    })
    expect(result.current.isDark).toBe(false)
    
    act(() => {
      result.current.toggle() // false -> true
    })
    expect(result.current.isDark).toBe(true)
  })
})
