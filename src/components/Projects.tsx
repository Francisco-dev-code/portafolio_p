import { useScrollReveal } from '../hooks/useScrollReveal'
import project1Img from '../../assets/img/project1.svg'
import project2Img from '../../assets/img/project2.svg'
import project3Img from '../../assets/img/project3.svg'
import { useState } from 'react'

type Project = {
  title: string
  description: string
  tech: string[]
  image: string
  evidence: string[]
  link?: string
}

const sample: Project[] = [
  {
    title: 'Gestión de Perfumería',
    description: 'App fullstack para inventario y ventas, con backend, base de datos y pruebas automatizadas.',
    tech: ['JavaScript', 'Postman', 'Mockito', 'JUnit'],
    image: project1Img,
    evidence: [
      '/assets/img/evidence-perfumeria-1.png',
      '/assets/img/evidence-perfumeria-2.png',
      '/assets/img/evidence-perfumeria-3.png',
      '/assets/img/evidence-perfumeria-4.png',
    ],
  },
  {
    title: 'Portafolio Personal',
    description: 'Sitio web interactivo y responsivo para mostrar proyectos y habilidades profesionales.',
    tech: ['React', 'TypeScript', 'Vite', 'CSS'],
    image: project2Img,
    evidence: [
      '/assets/img/evidence-portafolio-1.png',
      '/assets/img/evidence-portafolio-2.png',
    ],
  },
  {
    title: 'Tienda de Tecnología',
    description: 'E-commerce para venta de productos tecnológicos con catálogo dinámico y carrito de compras.',
    tech: ['HTML', 'CSS', 'JSON'],
    image: project3Img,
    evidence: [
      '/assets/img/evidence-tienda-1.png',
      '/assets/img/evidence-tienda-2.png',
    ],
  },
  {
    title: 'Sistema de Gestión',
    description: 'Aplicación desarrollada en NetBeans para administración de recursos, usuarios y procesos.',
    tech: ['JavaScript'],
    image: project1Img,
    evidence: [
      '/assets/img/evidence-gestion-1.png',
      '/assets/img/evidence-gestion-2.png',
    ],
  },
  {
    title: 'Gestión de Tareas',
    description: 'Aplicación para organizar y administrar tareas con estados, prioridades y seguimiento de progreso.',
    tech: ['Java'],
    image: project2Img,
    evidence: [
      '/assets/img/evidence-tareas-1.png',
      '/assets/img/evidence-tareas-2.png',
    ],
  },
  {
    title: 'Carrito de Compras',
    description: 'Sistema de carrito de compras dinámico con funcionalidades de agregar, eliminar y calcular totales.',
    tech: ['JavaScript', 'HTML', 'CSS'],
    image: project3Img,
    evidence: [
      '/assets/img/evidence-carrito-1.png',
      '/assets/img/evidence-carrito-2.png',
    ],
  },
  {
    title: 'Base de Datos Empresarial',
    description: 'Diseño y creación de base de datos relacional con tablas normalizadas y procedimientos almacenados.',
    tech: ['SQL', 'PLSQL', 'Oracle'],
    image: project1Img,
    evidence: [
      '/assets/img/evidence-bd-1.png',
      '/assets/img/evidence-bd-2.png',
      '/assets/img/evidence-bd-3.png',
    ],
  },
  {
    title: 'Gestión de Datos y Consultas en Oracle SQL/PLSQL',
    description: 'Administración de datos y consultas avanzadas en Oracle SQL/PLSQL para análisis y gestión empresarial.',
    tech: ['SQL', 'PLSQL'],
    image: project2Img,
    evidence: [
      '/assets/img/evidence-inventario-1.png',
      '/assets/img/evidence-inventario-2.png',
      '/assets/img/evidence-inventario-3.png',
      '/assets/img/evidence-inventario-4.png',
    ],
  },
]

function ProjectCard({ project, index, onEvidence }: { readonly project: Project; readonly index: number; readonly onEvidence: (project: Project) => void }) {
  const { ref, isVisible } = useScrollReveal<HTMLButtonElement>()
  return (
    <li style={{listStyle:'none',padding:0,margin:0}}>
      <button
        ref={ref}
        className={`card ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}
        style={{
          animationDelay: `${index * 0.1}s`,
          cursor: 'pointer',
          width: '100%',
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          padding: '0',
          textAlign: 'left',
          borderRadius: '22px',
          boxShadow: '0 8px 32px rgba(37,99,235,0.10)',
          transition: 'box-shadow 0.2s, transform 0.2s',
          marginBottom: '24px',
          position: 'relative',
          overflow: 'hidden',
        }}
        aria-label={`Ver evidencia de ${project.title}`}
        onClick={() => onEvidence(project)}
        onMouseEnter={e => {e.currentTarget.style.boxShadow = '0 16px 40px rgba(37,99,235,0.18)'; e.currentTarget.style.transform = 'translateY(-4px) scale(1.03)'}}
        onMouseLeave={e => {e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.10)'; e.currentTarget.style.transform = 'none'}}
      >
        <div style={{width:'100%',height:'260px',display:'flex',alignItems:'center',justifyContent:'center',background:'var(--bg-light)',borderRadius:'18px 18px 0 0',marginBottom:'12px',boxShadow:'0 2px 12px rgba(37,99,235,0.08)'}}>
          <img src={project.image} alt={project.title} className="project-image" style={{width:'240px',height:'240px',objectFit:'contain',filter:'drop-shadow(0 2px 12px rgba(0,194,255,0.2))'}} />
        </div>
        <div style={{padding:'0 20px 20px 20px'}}>
        <h3 style={{color:'var(--primary)',fontWeight:800,fontSize:'1.18rem',margin:'0 0 8px 0',letterSpacing:'0.01em'}}>{project.title}</h3>
        <p style={{color:'var(--text-secondary)',fontSize:'1rem',margin:'0 0 14px 0',lineHeight:'1.6',fontWeight:500}}>{project.description}</p>
        <div style={{marginTop:'8px',display:'flex',gap:'8px',flexWrap:'wrap',justifyContent:'center'}}>
          {project.tech.map(t => (
            <span key={t} style={{
              background: 'linear-gradient(135deg,#00d4ff 0%,#00a8ff 100%)',
              padding: '5px 14px',
              borderRadius: '18px',
              fontSize: '0.88rem',
              color: '#fff',
              fontWeight: 700,
              boxShadow: '0 2px 8px rgba(0,168,255,0.3)',
              border: '1px solid #00a8ff',
              letterSpacing:'0.02em',
              transition:'background 0.2s, box-shadow 0.2s',
            }}>
              {t}
            </span>
          ))}
        </div>
        </div>
        <span style={{position:'absolute',top:'18px',right:'18px',background:'var(--bg-card)',borderRadius:'50%',boxShadow:'0 2px 8px rgba(37,99,235,0.12)',padding:'6px 10px',fontSize:'0.9rem',color:'var(--primary)',fontWeight:700,opacity:0.85,border:'1px solid var(--border)'}}>Ver más</span>
      </button>
    </li>
  )
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal()
  const [modal, setModal] = useState<{open: boolean, project?: Project}>(() => ({open: false}))
  const [zoomImg, setZoomImg] = useState<string|null>(null)

  return (
    <div ref={ref} className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`} style={{maxWidth:'1100px', margin:'0 auto', padding:'0'}}>
      <h2 style={{marginBottom:'18px'}}>Proyectos</h2>
      <p style={{marginBottom:'18px'}}>Algunos de los proyectos en los que he trabajado recientemente.</p>
      <ul className="grid" style={{marginTop:'0'}}>
        {sample.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} onEvidence={proj => setModal({open:true, project:proj})} />
        ))}
      </ul>

      {modal.open && modal.project && (
        <dialog open className="modal-evidence" style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.18)',
          backdropFilter: 'blur(4px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '20px',
          border: 'none',
          borderRadius: '22px',
        }}>
          <div
            style={{
              background: 'var(--bg-card)',
              padding: '40px 32px 32px 32px',
              borderRadius: '22px',
              border: '2px solid var(--border)',
              boxShadow: '0 8px 40px rgba(37,99,235,0.15)',
              maxWidth: '700px',
              width: '100%',
              maxHeight: '90vh',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              overflow: 'auto',
              boxSizing: 'border-box',
            }}
          >
            <button onClick={() => setModal({ open: false })} style={{ position: 'absolute', top: 18, right: 18, fontSize: '2.2rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--primary)', lineHeight: '1', borderRadius:'50%', boxShadow:'0 2px 8px rgba(37,99,235,0.12)', width:'44px', height:'44px', display:'flex', alignItems:'center', justifyContent:'center', transition:'background 0.2s' }} aria-label="Cerrar" onMouseEnter={e=>e.currentTarget.style.background='var(--bg-light)'} onMouseLeave={e=>e.currentTarget.style.background='none'}>×</button>
            <h3 style={{ marginBottom: '24px', textAlign: 'center', fontSize: '1.5rem', width: '100%', color: 'var(--text-primary)', fontWeight:800, letterSpacing:'0.01em' }}>{modal.project?.title}</h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '24px',
              justifyContent: 'center',
              marginBottom: '20px',
              width: '100%',
            }}>
              {Array.isArray(modal.project?.evidence)
                ? modal.project.evidence.map((img, idx) => (
                    <div key={img} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', width: '100%' }}>
                      <button
                        type="button"
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          margin: 0,
                          cursor: 'zoom-in',
                          width: '100%',
                          borderRadius:'14px',
                          boxShadow:'0 2px 12px #0074f822',
                          transition:'box-shadow 0.2s',
                        }}
                        aria-label={`Ampliar evidencia ${idx + 1}`}
                        onClick={() => setZoomImg(img)}
                        onMouseEnter={e=>e.currentTarget.style.boxShadow='0 8px 24px #0074f844'}
                        onMouseLeave={e=>e.currentTarget.style.boxShadow='0 2px 12px #0074f822'}
                      >
                        <img
                          src={img}
                          alt={`Evidencia ${idx + 1} de ${modal.project?.title}`}
                          style={{
                            width: '100%',
                            maxWidth: '260px',
                            height: 'auto',
                            borderRadius: '12px',
                            border: '2px solid var(--border)',
                            boxShadow: '0 2px 10px rgba(37,99,235,0.08)',
                            background: 'var(--bg-light)',
                            display: 'block',
                            transition:'box-shadow 0.2s',
                          }}
                        />
                      </button>
                      <span style={{ marginTop: '10px', fontSize: '0.95rem', color: 'var(--primary)', textAlign: 'center', fontWeight:700 }}>Evidencia {idx + 1}</span>
                    </div>
                  ))
                : null}
            </div>
            <p style={{ fontSize: '1.08rem', color: 'var(--text-secondary)', marginTop: '8px', textAlign: 'center', maxWidth: '95%', lineHeight: '1.7', fontWeight:500 }}>{modal.project?.description}</p>
          </div>
        </dialog>
      )}

      {zoomImg && (
        <dialog open style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.28)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 2000,
          border: 'none',
          borderRadius: '22px',
        }}>
          <button
            type="button"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              margin: 0,
              cursor: 'zoom-out',
              position: 'absolute',
              top: '32px',
              right: '32px',
              fontSize: '2.2rem',
              color: '#fff',
              zIndex: 2100,
              borderRadius:'50%',
              boxShadow:'0 2px 8px #0074f822',
              width:'44px',
              height:'44px',
              display:'flex',
              alignItems:'center',
              justifyContent:'center',
              transition:'background 0.2s',
            }}
            aria-label="Cerrar evidencia ampliada"
            onClick={() => setZoomImg(null)}
            onMouseEnter={e=>e.currentTarget.style.background='#0074f8'}
            onMouseLeave={e=>e.currentTarget.style.background='none'}
          >×</button>
          <img
            src={zoomImg}
            alt="Evidencia ampliada"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              borderRadius: '18px',
              boxShadow: '0 8px 40px rgba(37,99,235,0.15)',
              background: 'var(--bg-card)',
              border: '4px solid var(--bg-card)',
              transition:'box-shadow 0.2s',
            }}
          />
        </dialog>
      )}
    </div>
  )
}
