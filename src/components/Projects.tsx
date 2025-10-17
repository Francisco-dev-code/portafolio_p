import { useScrollReveal } from '../hooks/useScrollReveal'
import project1Img from '../../assets/img/project1.svg'
import project2Img from '../../assets/img/project2.svg'
import project3Img from '../../assets/img/project3.svg'

type Project = {
  title: string
  description: string
  tech: string[]
  image: string
  link?: string
}

const sample: Project[] = [
  { 
    title: 'Portafolio Web', 
    description: 'Sitio personal con React, TypeScript y Karma/Jasmine para testing.',
    tech: ['React', 'TypeScript', 'Vite'],
    image: project1Img
  },
  { 
    title: 'Dashboard Analytics', 
    description: 'Panel de control con gráficos interactivos y datos en tiempo real.',
    tech: ['React', 'Chart.js', 'API REST'],
    image: project2Img
  },
  { 
    title: 'E-commerce App', 
    description: 'Tienda online con carrito, pagos y gestión de inventario.',
    tech: ['Next.js', 'Stripe', 'MongoDB'],
    image: project3Img
  },
]

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollReveal<HTMLLIElement>()
  
  return (
    <li 
      ref={ref}
      className={`card ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <img 
        src={project.image} 
        alt={project.title}
        style={{width:'100%', height:'200px', objectFit:'cover', borderRadius:'8px', marginBottom:'16px'}}
      />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div style={{marginTop:'16px', display:'flex', gap:'8px', flexWrap:'wrap'}}>
        {project.tech.map((t, j) => (
          <span key={j} style={{
            background:'var(--bg-light)', 
            padding:'4px 12px', 
            borderRadius:'16px',
            fontSize:'0.85rem',
            color:'var(--primary)',
            fontWeight:600
          }}>
            {t}
          </span>
        ))}
      </div>
    </li>
  )
}

export function Projects() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`} style={{maxWidth:'1100px', margin:'0 auto', padding:'0'}}>
      <h2 style={{marginBottom:'18px'}}>Proyectos</h2>
      <p style={{marginBottom:'18px'}}>Algunos de los proyectos en los que he trabajado recientemente.</p>
      <ul className="grid" style={{marginTop:'0'}}>
        {sample.map((p, i) => (
          <ProjectCard key={i} project={p} index={i} />
        ))}
      </ul>
    </div>
  )
}
