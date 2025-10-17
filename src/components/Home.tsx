import { useScrollReveal } from '../hooks/useScrollReveal'
import heroImage from '../../assets/img/hero.svg'

export function Home() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div 
      ref={ref}
      className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}
      style={{display:'flex', alignItems:'center', gap:'48px', flexWrap:'wrap'}}
    >
      <div style={{flex:'1', minWidth:'300px'}}>
        <h1>Hola, soy Francisco 👋</h1>
        <p style={{fontSize:'1.3rem', maxWidth:'700px'}}>
          Desarrollador web con enfoque en <strong>React</strong> y <strong>TypeScript</strong>. 
          Me apasiona crear experiencias digitales modernas, accesibles y de alto rendimiento.
        </p>
        <div style={{marginTop:'32px', display:'flex', gap:'16px'}}>
          <button onClick={() => window.location.href='/proyectos'}>
            Ver Proyectos
          </button>
          <button style={{background:'transparent', color:'var(--primary)', border:'2px solid var(--primary)', boxShadow:'none'}}
                  onClick={() => window.location.href='/contacto'}>
            Contactar
          </button>
        </div>
      </div>
      <div style={{flex:'1', minWidth:'300px', display:'flex', justifyContent:'center'}}>
        <img 
          src={heroImage} 
          alt="Hero illustration" 
          style={{width:'100%', maxWidth:'500px', height:'auto'}}
          className="parallax-img"
        />
      </div>
    </div>
  )
}
