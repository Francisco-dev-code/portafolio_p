import { useScrollReveal } from '../hooks/useScrollReveal'

export function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}>
      <h2>Sobre mí</h2>
  <div style={{maxWidth:'900px', display:'grid', gridTemplateColumns:'1fr 2fr', gap:'32px', alignItems:'center', justifyContent:'center', background:'var(--bg-card)', borderRadius:'16px', boxShadow:'0 4px 24px rgba(0,123,255,0.10)', padding:'24px 18px', margin:'0 auto'}}>
  <div style={{minWidth:'160px', maxWidth:'200px', display:'flex', flexDirection:'column', alignItems:'center', gap:'10px', justifyContent:'center'}}>
          <img src="/assets/img/avatar.svg" alt="Foto de perfil" style={{width:'120px',height:'120px',borderRadius:'50%',boxShadow:'0 4px 24px rgba(37,99,235,0.12)',marginBottom:'8px'}} />
          <span style={{fontWeight:700, fontSize:'1.25rem', color:'var(--primary)', textAlign:'center'}}>Francisco Gonzalez</span>
          <span style={{color:'var(--text-secondary)', fontSize:'1rem', textAlign:'center'}}>Desarrollador Web | Frontend</span>
          <a href="/DOC-20250919-WA0000.pdf" download style={{marginTop:'8px',color:'var(--secondary)',fontWeight:600}}>Descargar CV</a>
          <a href="https://www.linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" style={{marginTop:'4px',color:'var(--primary)',fontWeight:600}}>Ver LinkedIn</a>
          <div style={{marginTop:'16px',textAlign:'center'}}>
            <span style={{fontWeight:600, color:'var(--accent)'}}>Hobbies & Intereses</span>
            <ul style={{margin:'8px 0 0 0',padding:0,listStyle:'none',fontSize:'0.98rem',color:'var(--text-secondary)'}}>
              <li>🎸 Música y guitarra</li>
              <li>📚 Aprendizaje continuo</li>
              <li>🏃‍♂️ Running y deportes</li>
              <li>🌎 Viajes y cultura tech</li>
            </ul>
          </div>
        </div>
  <div style={{width:'100%', minWidth:'240px', display:'flex', flexDirection:'column', gap:'14px', justifyContent:'center'}}>
          <p>
            Soy un desarrollador web con experiencia en <strong>React, TypeScript y Node.js</strong>. Me especializo en crear interfaces modernas, accesibles y de alto rendimiento. Me apasiona el aprendizaje continuo y la mejora constante.
          </p>
          <p>
            <strong>Experiencia:</strong> <br />
            - Desarrollo de aplicaciones web y dashboards interactivos.<br />
            - Implementación de pruebas unitarias y automatizadas.<br />
            - Colaboración en equipos ágiles y multidisciplinarios.<br />
            - Optimización de rendimiento y accesibilidad.
          </p>
          <p>
            <strong>Habilidades:</strong> <br />
            - JavaScript, TypeScript, React, Node.js, Vite<br />
            - CSS3, Responsive Design, Accesibilidad<br />
            - Testing: Karma, Jasmine, Testing Library<br />
            - Git, GitHub, CI/CD
          </p>
          <p>
            <strong>Certificaciones y formación:</strong> <br />
            - Certificado en Desarrollo Web Moderno<br />
            - Cursos de React y TypeScript<br />
            - Formación en metodologías ágiles
          </p>
          <p>
            <strong>Logros destacados:</strong> <br />
            - Finalista en Hackathon de Innovación 2024<br />
            - Proyecto destacado en comunidad React España<br />
            - Reconocimiento por excelencia en trabajo en equipo
          </p>
          <p>
            <em>“La tecnología es el puente entre ideas y soluciones.”</em>
          </p>
        </div>
      </div>
  <div style={{margin:'32px auto 0 auto', maxWidth:'900px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'20px', justifyContent:'center'}}>
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
        <div className="card">
          <h3>🚀 Herramientas</h3>
          <p>Git, GitHub, CI/CD, Figma</p>
        </div>
      </div>
    </div>
  )
}
