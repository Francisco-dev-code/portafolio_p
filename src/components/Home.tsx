import { useScrollReveal } from '../hooks/useScrollReveal'
import heroImage from '../../assets/img/hero.svg'

export function Home() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div 
      ref={ref}
      className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}
      style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'40px', alignItems:'center', justifyContent:'center', maxWidth:'1100px', margin:'0 auto', padding:'0'}}
    >
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'flex-start', minWidth:'280px', maxWidth:'500px', margin:'0 auto'}}>
        <h1 style={{marginBottom:'18px'}}>Hola, soy Francisco 👋</h1>
        <p style={{fontSize:'1.25rem', maxWidth:'480px', marginBottom:'24px'}}>
          Desarrollador web especializado en <strong>React</strong> y <strong>TypeScript</strong>.<br />
          Apasionado por crear experiencias digitales modernas, accesibles y de alto rendimiento.
        </p>
        <div style={{marginTop:'8px', display:'flex', gap:'18px'}}>
          <button onClick={() => window.location.href='/proyectos'}>
            Ver Proyectos
          </button>
          <button style={{background:'var(--accent)', color:'#fff', border:'none', boxShadow:'0 2px 8px rgba(0,123,255,0.10)'}}
                  onClick={() => window.location.href='/contacto'}>
            Contactar
          </button>
        </div>
      </div>
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', minWidth:'280px', maxWidth:'500px', margin:'0 auto'}}>
        <img 
          src={heroImage} 
          alt="Hero illustration" 
          style={{width:'100%', maxWidth:'380px', height:'auto', borderRadius:'18px', boxShadow:'0 8px 32px rgba(0,123,255,0.10)'}}
          className="parallax-img"
        />
      </div>
    </div>
  )
}
