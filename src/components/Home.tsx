import { useScrollReveal } from '../hooks/useScrollReveal'
// Imagen de perfil importada vía Vite para garantizar disponibilidad
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import profileImg from '../assets/img/profile.jpg'
import iconBriefcase from '../assets/img/icon-briefcase.svg'
import iconDownload from '../assets/img/icon-download.svg'
import iconMail from '../assets/img/icon-mail.svg'
import iconCalendar from '../assets/img/icon-calendar.svg'
import iconTerminal from '../assets/img/icon-terminal.svg'

export function Home() {
  const { ref, isVisible } = useScrollReveal()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  useEffect(() => {
  const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
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
            <img src={iconBriefcase} alt="" className="icon-inline" aria-hidden />{' '}
            Ver proyectos
          </button>
          <a href="/DOC-20250919-WA0000.pdf" download style={{marginLeft:'12px'}}>
            <button className="btn-ghost">
              <img src={iconDownload} alt="" className="icon-inline" aria-hidden />{' '}
              Descargar CV
            </button>
          </a>
          <button className="btn-ghost" onClick={() => navigate('/contacto')}>
            <img src={iconMail} alt="" className="icon-inline" aria-hidden />{' '}
            Contáctame
          </button>
        </div>
        <div className="badges">
          <div className="badge">
            <img src={iconCalendar} alt="" className="icon-inline" aria-hidden />{' '}
            <div className="num">2</div>
            <div className="label">Años experiencia</div>
          </div>
          <div className="badge">
            <img src={iconBriefcase} alt="" className="icon-inline" aria-hidden />{' '}
            <div className="num">10+</div>
            <div className="label">Proyectos</div>
          </div>
          <div className="badge">
            <img src={iconTerminal} alt="" className="icon-inline" aria-hidden />{' '}
            <div className="num">Python, JS, HTML, React</div>
            <div className="label">Stack</div>
          </div>
        </div>
        <div className="hero-microcopy" style={{marginTop:'16px', display:'flex', gap:'10px', flexWrap:'wrap'}}>
          <span>Siempre aprendiendo y buscando nuevos retos.</span>
          <span>Listo para colaborar y crecer en el mundo tech.</span>
        </div>
      </div>
      <div className="hero-image">
        <button className="profile-frame" onClick={()=>setOpen(true)} aria-label="Abrir imagen de perfil" style={{overflow:'hidden'}}>
          <img
            src={profileImg}
            alt="Foto de perfil de Francisco Gonzalez"
            loading="lazy"
            className="profile-img parallax-img"
            style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}}
            onError={(e)=>{ (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="Arial" font-size="24">Imagen no disponible</text></svg>' }}
          />
        </button>
        <dialog className={`profile-lightbox${open ? ' open' : ''}`} open={open} tabIndex={-1} aria-modal="true" aria-label="Imagen de perfil" onKeyDown={e => { if (e.key === 'Escape') setOpen(false) }}>
          <button className="close-btn" onClick={(e)=>{e.stopPropagation(); setOpen(false);}} tabIndex={0} aria-label="Cerrar imagen">Cerrar</button>
          <img
            src={profileImg}
            alt="Foto de perfil ampliada"
            onError={(e)=>{ (e.currentTarget as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><rect width="100%" height="100%" fill="%23e5e7eb"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="Arial" font-size="28">Imagen no disponible</text></svg>' }}
          />
        </dialog>
      </div>
    </div>
  )
}

