import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const { ref, isVisible } = useScrollReveal()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En un caso real, aquí enviarías el formulario a un backend o servicio
    setSent(true)
  }

  return (
    <div ref={ref} className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`}>
      <h2>Contacto</h2>
  <div style={{width:'100%', maxWidth:'900px', minWidth:'320px', display:'grid', gridTemplateColumns:'1fr 2fr', gap:'32px', alignItems:'stretch', justifyContent:'center', background:'var(--bg-card)', borderRadius:'16px', boxShadow:'0 4px 24px rgba(0,123,255,0.10)', padding:'32px 32px', margin:'0 auto'}}>
        <div className="contact-info" style={{minWidth:'260px', maxWidth:'340px', display:'flex', flexDirection:'column', alignItems:'flex-start', gap:'18px', justifyContent:'center', height:'100%', padding:'16px 0'}}>
          <h3 style={{color:'var(--primary)', fontWeight:700, marginBottom:'8px', textAlign:'left'}}>Información de contacto</h3>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <img src="/assets/img/phone.svg" alt="Teléfono" style={{width:'22px',height:'22px'}} />
            <span style={{fontSize:'1rem',fontWeight:500}}>+56 9 3772 7503</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <img src="/assets/img/github.svg" alt="GitHub" style={{width:'22px',height:'22px'}} />
            <a href="https://github.com/Francisco-dev-code" target="_blank" rel="noopener noreferrer" style={{fontSize:'1rem',color:'var(--primary)',fontWeight:600}}>Francisco-dev-code</a>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <img src="/assets/img/linkedin.svg" alt="LinkedIn" style={{width:'22px',height:'22px'}} />
            <a href="https://www.linkedin.com/in/francisco-gonz%C3%A1lez-chea-7975072a3" target="_blank" rel="noopener noreferrer" style={{fontSize:'1rem',color:'var(--primary)',fontWeight:600,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'160px',display:'inline-block'}}>LinkedIn</a>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <span style={{fontSize:'1rem',fontWeight:600}}>Email:</span>
            <a href="mailto:fran.gonzalez.chea@gmail.com" style={{fontSize:'1rem',color:'var(--primary)',fontWeight:600}}>fran.gonzalez.chea@gmail.com</a>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
            <span style={{fontSize:'1rem',fontWeight:600}}>Ubicación:</span>
            <span style={{fontSize:'1rem',color:'var(--text-secondary)'}}>Santiago, Chile</span>
          </div>
          <div style={{marginTop:'8px',textAlign:'left',width:'100%'}}>
            <span style={{fontWeight:600, color:'var(--accent)'}}>Horario de atención</span>
            <div style={{fontSize:'0.98rem',color:'var(--text-secondary)'}}>Lunes a Viernes, 9:00 - 18:00</div>
          </div>
        </div>
  <div style={{width:'100%', minWidth:'280px', display:'flex', flexDirection:'column', gap:'18px', justifyContent:'center', alignItems:'center', height:'100%'}}>
          {sent ? (
            <div style={{maxWidth:'400px',margin:'0 auto',textAlign:'center'}}>
              <p style={{fontSize:'1.2rem', color:'var(--secondary)'}}>
                ✓ ¡Gracias por tu mensaje, <strong>{name || 'amig@'}</strong>! Te responderé pronto.
              </p>
              <button onClick={() => setSent(false)} style={{marginTop:'16px'}}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <p style={{maxWidth:'400px',textAlign:'center'}}>
                ¿Tienes algún proyecto en mente, dudas o quieres colaborar? <br />
                Completa el formulario y te responderé lo antes posible.
              </p>
              <form onSubmit={onSubmit} className="contact-form" style={{width:'100%',maxWidth:'400px'}}>
                <label>
                  Nombre
                  <input value={name} onChange={e=>setName(e.target.value)} placeholder="Tu nombre" required />
                </label>
                <label>
                  Email
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tucorreo@ejemplo.com" required />
                </label>
                <label>
                  Mensaje
                  <textarea value={message} onChange={e=>setMessage(e.target.value)} rows={5} placeholder="¿En qué puedo ayudarte?" required />
                </label>
                <button type="submit">Enviar Mensaje</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
