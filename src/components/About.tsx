import { useScrollReveal } from '../hooks/useScrollReveal'
import avatar from '../../assets/img/avatar.svg'

export function About() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div ref={ref} className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}>
      <h2>Sobre mí</h2>
  <div className="about-panel">
  <div className="about-left">
          <a href="/assets/img/profile.jpg" target="_blank" rel="noopener noreferrer" aria-label="Abrir imagen de perfil en nueva pestaña">
            <div className="profile-frame" style={{width:'120px',height:'120px',borderRadius:'50%',overflow:'hidden',display:'inline-block'}}>
              <img src="/assets/img/profile.jpg" alt="Foto de perfil" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center',boxShadow:'0 4px 24px rgba(37,99,235,0.12)',marginBottom:'8px'}} onError={(e)=>{(e.currentTarget as HTMLImageElement).src = avatar}} />
            </div>
          </a>
          <span style={{fontWeight:700, fontSize:'1.25rem', color:'var(--primary)', textAlign:'center'}}>Francisco Gonzalez</span>
          <span style={{color:'var(--text-secondary)', fontSize:'1rem', textAlign:'center'}}>Desarrollador Fullstack en formación</span>
          <a href="/DOC-20250919-WA0000.pdf" download style={{marginTop:'8px',color:'var(--secondary)',fontWeight:600}}>Descargar CV</a>
          <a href="https://www.linkedin.com/in/francisco-gonzález-chea-7975072a3" target="_blank" rel="noopener noreferrer" style={{marginTop:'4px',color:'var(--primary)',fontWeight:600}}>Ver LinkedIn</a>
          <div style={{marginTop:'16px',textAlign:'center'}}>
            <span style={{fontWeight:600, color:'var(--accent)'}}>Hobbies & Intereses</span>
            <ul style={{margin:'8px 0 0 0',padding:0,listStyle:'none',fontSize:'0.98rem',color:'var(--text-secondary)'}}>
              <li>🎵🏀 Música y básquet</li>
              <li>📚 Aprendizaje continuo</li>
              <li>🌎 Viajes y cultura tech</li>
            </ul>
            <div style={{marginTop:'18px',textAlign:'center'}}>
              <a href="/assets/img/Scrum%20Master%20Professional%20Certification%20.pdf" target="_blank" rel="noopener noreferrer" className="badge" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'var(--accent)',color:'#fff',borderRadius:'18px',padding:'6px 16px',fontWeight:600,textDecoration:'none',boxShadow:'0 2px 8px rgba(37,99,235,0.10)'}}>
                <img src="/assets/img/icon-certificate.svg" alt="Certificado Scrum Master" className="icon-inline" style={{width:'22px',height:'22px'}} />
                Scrum Master Professional Certification
              </a>
              <a href="/assets/img/Ethical%20Hacking%20Professional%20Certificate-Francisco-GonzalezChea.pdf" target="_blank" rel="noopener noreferrer" className="badge" style={{display:'inline-flex',alignItems:'center',gap:'8px',background:'var(--accent)',color:'#fff',borderRadius:'18px',padding:'6px 16px',fontWeight:600,textDecoration:'none',boxShadow:'0 2px 8px rgba(37,99,235,0.10)',marginTop:'8px'}}>
                <img src="/assets/img/icon-certificate.svg" alt="Certificado Ethical Hacking" className="icon-inline" style={{width:'22px',height:'22px'}} />
                Ethical Hacking Professional Certificate
              </a>
            </div>
          </div>
        </div>
  <div className="about-right">
          <p>
            Apasionado por la tecnología y el aprendizaje, exploro el mundo digital combinando Python, JavaScript, HTML y React. Me gusta transformar ideas en experiencias reales, experimentando tanto en frontend como en backend. Mi motor es la curiosidad y el deseo de crecer con cada nuevo reto.
          </p>
          <p>
            <strong>Experiencia:</strong> <br />
            - Desarrollo de aplicaciones web y soluciones backend.<br />
            - Creación de interfaces accesibles y modernas.<br />
            - Implementación de pruebas básicas y validaciones.<br />
            - Trabajo colaborativo en equipos universitarios.<br />
          </p>
          <p>
            <strong>Habilidades:</strong> <br />
            - Python, JavaScript, HTML, React<br />
            - SQL, PLSQL, Oracle<br />
            - Frontend y Backend<br />
            - CSS3, Responsive Design, Accesibilidad<br />
            - Git, GitHub, Vite
          </p>
          <p>
            <strong>Certificaciones y formación:</strong> <br />
            - Scrum Master Professional Certification<br />
            - Ethical Hacking Professional Certificate<br />
            - Cursos de React, TypeScript y desarrollo web<br />
          </p>
          <p>
            <strong>Logros destacados:</strong> <br />
            - Más de 10 proyectos universitarios completados<br />
            - Participación en hackathons y retos académicos<br />
            - Reconocimiento por dedicación y aprendizaje continuo<br />
          </p>
          <p>
            <em>“La tecnología es el puente entre ideas y soluciones.”</em>
          </p>
        </div>
      </div>
  <div style={{margin:'32px auto 0 auto', maxWidth:'900px', display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))', gap:'20px', justifyContent:'center'}}>
        <div className="card">
          <h3><img src="/assets/img/icon-terminal.svg" alt="Stack" style={{width:'22px',verticalAlign:'middle',marginRight:'8px'}} /> Stack principal</h3>
          <p>Python, JavaScript, HTML, React, SQL, PLSQL</p>
        </div>
        <div className="card">
          <h3><img src="/assets/img/icon-briefcase.svg" alt="Proyectos" style={{width:'22px',verticalAlign:'middle',marginRight:'8px'}} /> Proyectos</h3>
          <p>10+ desarrollados en la universidad (frontend y backend)</p>
        </div>
        <div className="card">
          <h3><img src="/assets/img/icon-calendar.svg" alt="Experiencia" style={{width:'22px',verticalAlign:'middle',marginRight:'8px'}} /> Experiencia</h3>
          <p>2 años de formación universitaria</p>
        </div>
        <div className="card">
          <h3><img src="/assets/img/icon-certificate.svg" alt="Certificados" style={{width:'22px',verticalAlign:'middle',marginRight:'8px'}} /> Certificados</h3>
          <p>Scrum Master, Ethical Hacking Professional</p>
        </div>
      </div>
    </div>
  )
}
