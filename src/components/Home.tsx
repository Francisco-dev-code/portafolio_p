import { useScrollReveal } from '../hooks/useScrollReveal'
import avatar from '../../assets/img/avatar.svg'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const { ref, isVisible } = useScrollReveal()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onKey = (e: any) => { if (e.key === 'Escape') setOpen(false) }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])
  return (
    <div
      ref={ref}
      className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'} hero-grid`}
    >
      <div className="hero-content">
        <h1 className="hero-title" style={{ marginBottom: '12px' }}>Desarrollador Fullstack en formación</h1>
        <p className="hero-lead">2 años de experiencia universitaria creando soluciones con Python, JavaScript, HTML y React.</p>
        <div className="hero-actions" style={{display:'flex', alignItems:'center', gap:'12px'}}>
          <button className="btn-cta" onClick={() => navigate('/proyectos')}>
            <img src="/assets/img/icon-briefcase.svg" alt="Ver proyectos" className="icon-inline" aria-hidden />{' '}
            Ver proyectos
          </button>
          <a href="/DOC-20250919-WA0000.pdf" download style={{marginLeft:'12px'}}>
            <button className="btn-ghost">
              <img src="/assets/img/icon-download.svg" alt="Descargar CV" className="icon-inline" aria-hidden />{' '}
              Descargar CV
            </button>
          </a>
          <button className="btn-ghost" onClick={() => navigate('/contacto')}>
            <img src="/assets/img/icon-mail.svg" alt="Contáctame" className="icon-inline" aria-hidden />{' '}
            Contáctame
          </button>
        </div>
        <div className="badges">
          <div className="badge">
            <img src="/assets/img/icon-calendar.svg" alt="Experiencia" className="icon-inline" aria-hidden />{' '}
            <div className="num">2</div>
            <div className="label">Años experiencia</div>
          </div>
          <div className="badge">
            <img src="/assets/img/icon-briefcase.svg" alt="Proyectos" className="icon-inline" aria-hidden />{' '}
            <div className="num">10+</div>
            <div className="label">Proyectos</div>
          </div>
          <div className="badge">
            <img src="/assets/img/icon-terminal.svg" alt="Stack" className="icon-inline" aria-hidden />{' '}
            <div className="num">Python, JS, HTML, React</div>
            <div className="label">Stack</div>
          </div>
        </div>
        <div className="hero-microcopy" style={{marginTop:'16px'}}>
          <span>Siempre aprendiendo y buscando nuevos retos.</span>
          <span>Listo para colaborar y crecer en el mundo tech.</span>
        </div>
      </div>
      <div className="hero-image">
        <button className="profile-frame" onClick={()=>setOpen(true)} aria-label="Abrir imagen de perfil" style={{overflow:'hidden'}}>
          <img src="/assets/img/profile.jpg" alt="Foto de perfil de Francisco Gonzalez" loading="lazy" className="profile-img parallax-img" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}} onError={(e)=>{(e.currentTarget as HTMLImageElement).src = avatar}} />
        </button>
        <dialog className={`profile-lightbox${open ? ' open' : ''}`} open={open} tabIndex={-1} aria-modal="true" aria-label="Imagen de perfil" onKeyDown={e => { if (e.key === 'Escape') setOpen(false) }}>
          <button className="close-btn" onClick={(e)=>{e.stopPropagation(); setOpen(false);}} tabIndex={0} aria-label="Cerrar imagen">Cerrar</button>
          <img src="/assets/img/profile.jpg" alt="Foto de perfil ampliada" onError={(e)=>{(e.currentTarget as HTMLImageElement).src = avatar}} />
        </dialog>
      </div>
    </div>
  )
}

