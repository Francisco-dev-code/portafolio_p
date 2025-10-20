import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import phoneIcon from '../../assets/img/phone.svg'
import avatarFallback from '../../assets/img/avatar.svg'
import githubIcon from '../../assets/img/github.svg'
import linkedinIcon from '../../assets/img/linkedin.svg'

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState<{name?:string; email?:string; message?:string}>({})
  const { ref, isVisible } = useScrollReveal()

  const validate = () => {
    const next: {name?:string; email?:string; message?:string} = {}
    if (!name.trim()) next.name = 'Por favor ingresa tu nombre.'
    const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/
    if (!email.trim()) next.email = 'Por favor ingresa tu email.'
    else if (!emailRe.test(email)) next.email = 'Ingresa un email válido.'
    if (!message.trim() || message.trim().length < 10) next.message = 'El mensaje debe tener al menos 10 caracteres.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    // En un caso real, aquí enviarías el formulario a un backend o servicio
    setSent(true)
  }

  return (
    <div ref={ref} className={`section ${isVisible ? 'reveal-active' : 'reveal-hidden'}`} style={{background:'var(--bg-light)',minHeight:'100vh',padding:'60px 20px 40px 20px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <h2 style={{marginBottom:'32px'}}>Contacto</h2>
      <div className="contact-panel" style={{display:'flex',justifyContent:'center',alignItems:'flex-start',gap:'32px',background:'var(--bg-card)',borderRadius:'24px',boxShadow:'0 8px 32px rgba(37,99,235,0.12)',padding:'32px 28px',maxWidth:'850px',margin:'0 auto',border:'1px solid var(--border)'}}>
        <div className="contact-info-column" style={{flex:'1',minWidth:'260px',maxWidth:'320px',display:'flex',flexDirection:'column',alignItems:'center',gap:'18px'}}>
          <div style={{width:'90px',height:'90px',borderRadius:'50%',overflow:'hidden',boxShadow:'0 2px 12px rgba(37,99,235,0.12)',marginBottom:'8px',background:'var(--bg-light)'}}>
            <img src="/assets/img/profile.jpg" alt="Foto de contacto" style={{width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}} onError={(e)=>{(e.currentTarget as HTMLImageElement).src = avatarFallback}} />
          </div>
          <h3 style={{color:'var(--primary)', fontWeight:700, marginBottom:'8px', textAlign:'center',fontSize:'1.15rem'}}>Información de contacto</h3>
          <div style={{display:'flex',alignItems:'center',gap:'14px',background:'var(--bg-light)',borderRadius:'12px',padding:'10px 16px',width:'100%',border:'1px solid var(--border)'}}>
            <img src={phoneIcon} alt="Teléfono" style={{width:'32px',height:'32px',filter:'drop-shadow(0 2px 6px rgba(0,194,255,0.2))'}} />
            <span style={{fontSize:'1.08rem',fontWeight:500,color:'var(--text-primary)'}}>+56 9 3772 7503</span>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'14px',background:'var(--bg-light)',borderRadius:'12px',padding:'10px 16px',width:'100%',border:'1px solid var(--border)'}}>
            <img src={githubIcon} alt="GitHub" style={{width:'32px',height:'32px',filter:'drop-shadow(0 2px 6px rgba(51,51,51,0.2))'}} />
            <a href="https://github.com/Francisco-dev-code" target="_blank" rel="noopener noreferrer" style={{fontSize:'1.08rem',color:'var(--primary)',fontWeight:600}}>Francisco-dev-code</a>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'14px',background:'var(--bg-light)',borderRadius:'12px',padding:'10px 16px',width:'100%',border:'1px solid var(--border)'}}>
            <img src={linkedinIcon} alt="LinkedIn" style={{width:'32px',height:'32px',filter:'drop-shadow(0 2px 6px rgba(0,119,181,0.2))'}} />
            <a href="https://www.linkedin.com/in/francisco-gonzález-chea-7975072a3" target="_blank" rel="noopener noreferrer" style={{fontSize:'1.08rem',color:'var(--primary)',fontWeight:600,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'160px',display:'inline-block'}}>LinkedIn</a>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'14px',background:'var(--bg-light)',borderRadius:'12px',padding:'10px 16px',width:'100%',border:'1px solid var(--border)'}}>
            <span style={{fontSize:'1.08rem',fontWeight:600,color:'var(--text-primary)'}}>Email:</span>
            <a href="mailto:fran.gonzalez.chea@gmail.com" style={{fontSize:'0.95rem',color:'var(--primary)',fontWeight:600,wordBreak:'break-all',overflow:'hidden',textOverflow:'ellipsis'}}>fran.gonzalez.chea@gmail.com</a>
          </div>
          <div style={{display:'flex',alignItems:'center',gap:'14px',background:'var(--bg-light)',borderRadius:'12px',padding:'10px 16px',width:'100%',border:'1px solid var(--border)'}}>
            <span style={{fontSize:'1.08rem',fontWeight:600,color:'var(--text-primary)'}}>Ubicación:</span>
            <span style={{fontSize:'1.08rem',color:'var(--text-secondary)'}}>Santiago, Chile</span>
          </div>
          <div style={{marginTop:'8px',textAlign:'center',width:'100%'}}>
            <span style={{fontWeight:600, color:'var(--accent)'}}>Horario de atención</span>
            <div style={{fontSize:'1rem',color:'var(--text-secondary)'}}>Lunes a Viernes, 9:00 - 18:00</div>
          </div>
        </div>
        <div className="contact-form-column" style={{flex:'2',minWidth:'280px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
          {sent ? (
            <div style={{maxWidth:'400px',margin:'0 auto',textAlign:'center'}}>
                <output className="form-success" aria-live="polite">
                  ✓ ¡Gracias por tu mensaje, <strong>{name || 'amig@'}</strong>! Te responderé pronto.
                </output>
              <button onClick={() => { setSent(false); setName(''); setEmail(''); setMessage(''); setErrors({}) }} style={{marginTop:'16px'}}>
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <div style={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}}>
              <p style={{maxWidth:'400px',textAlign:'center',color:'var(--text-secondary)',fontSize:'1.05rem'}}>
                ¿Tienes algún proyecto en mente, dudas o quieres colaborar? <br />
                Completa el formulario y te responderé lo antes posible.
              </p>
              <form onSubmit={onSubmit} className="contact-form" style={{width:'100%',maxWidth:'400px'}} noValidate>
                <label htmlFor="contact-name" style={{color:'var(--text-primary)',fontWeight:600}}>
                  Nombre
              <input id="contact-name" value={name} onChange={e=>setName(e.target.value)} placeholder="Tu nombre" aria-invalid={!!errors.name} aria-describedby={errors.name ? 'error-name' : undefined} style={{marginBottom:'16px',width:'100%',padding:'10px 14px',borderRadius:'8px',border:'2px solid var(--border)',fontSize:'1rem',background:'var(--bg-light)',color:'var(--text-primary)'}} />
                </label>
                {errors.name && <div id="error-name" className="form-error" role="alert">{errors.name}</div>}

                <label htmlFor="contact-email" style={{color:'var(--text-primary)',fontWeight:600}}>
                  Email
              <input id="contact-email" type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="tucorreo@ejemplo.com" aria-invalid={!!errors.email} aria-describedby={errors.email ? 'error-email' : undefined} style={{marginBottom:'16px',width:'100%',padding:'10px 14px',borderRadius:'8px',border:'2px solid var(--border)',fontSize:'1rem',background:'var(--bg-light)',color:'var(--text-primary)'}} />
                </label>
                {errors.email && <div id="error-email" className="form-error" role="alert">{errors.email}</div>}

                <label htmlFor="contact-message" style={{color:'var(--text-primary)',fontWeight:600}}>
                  Mensaje
              <textarea id="contact-message" value={message} onChange={e=>setMessage(e.target.value)} rows={5} placeholder="¿En qué puedo ayudarte?" aria-invalid={!!errors.message} aria-describedby={errors.message ? 'error-message' : undefined} style={{marginBottom:'16px',width:'100%',padding:'10px 14px',borderRadius:'8px',border:'2px solid var(--border)',fontSize:'1rem',resize:'vertical',background:'var(--bg-light)',color:'var(--text-primary)'}} />
                </label>
                {errors.message && <div id="error-message" className="form-error" role="alert">{errors.message}</div>}

                <button type="submit" style={{
                  width:'100%',
                  padding:'12px 0',
                  fontSize:'1.08rem',
                  fontWeight:700,
                  borderRadius:'12px',
                  background:'linear-gradient(90deg,#009cff 0%,#0057b8 100%)',
                  color:'#fff',
                  border:'none',
                  boxShadow:'0 2px 12px #009cff22',
                  cursor:'pointer',
                  transition:'background 0.2s'
                }}>Enviar Mensaje</button>

                {/* Live region for non-field-specific feedback */}
                <div className="visually-hidden" aria-live="polite" aria-atomic="true">
                  {Object.values(errors).length > 0 ? 'Hay errores en el formulario' : ''}
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
