import { useScrollReveal } from '../hooks/useScrollReveal'

export function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}>
      <h2>Sobre mí</h2>
      <div style={{maxWidth:'800px'}}>
        <p>
          Soy un desarrollador con pasión por crear <strong>interfaces limpias y accesibles</strong>. 
          Me gusta trabajar con React, TypeScript y herramientas modernas de desarrollo.
        </p>
        <p>
          Mi enfoque está en escribir código limpio, mantenible y bien testeado. 
          Creo firmemente en la importancia de la experiencia de usuario y el rendimiento.
        </p>
        <div style={{marginTop:'32px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))', gap:'20px'}}>
          <div className="card">
            <h3>💻 Tecnologías</h3>
            <p>React, TypeScript, Node.js, Vite</p>
          </div>
          <div className="card">
            <h3>🧪 Testing</h3>
            <p>Karma, Jasmine, Testing Library</p>
          </div>
          <div className="card">
            <h3>🎨 Diseño</h3>
            <p>CSS3, Responsive, Accesibilidad</p>
          </div>
        </div>
      </div>
    </div>
  )
}
