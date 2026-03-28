import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import {
  WhatsappLogo, Phone, MapPin, Star, Tooth, Heart,
  UserCircle, ArrowRight, List, X, Clock, ShieldCheck,
  Sparkle, FirstAid, Scan, Smiley,
} from '@phosphor-icons/react'

const WHATSAPP = '554832059839'
const PHONE_NUM = '(48) 3205-9839'
const ADDRESS = 'R. Emeline Matildes C. Scheidt, 45 - Sala 01, Centro, Palho\u00e7a - SC'

const wa = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`

const NAV = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Servi\u00e7os' },
  { href: '#tecnologia', label: 'Tecnologia' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

const SERVICES = [
  { icon: <Scan size={32} weight="duotone" />, title: 'Invisalign', desc: 'Alinhadores transparentes para um sorriso perfeito sem aparelho convencional.' },
  { icon: <Tooth size={32} weight="duotone" />, title: 'Implantes', desc: 'Reabilita\u00e7\u00e3o oral com implantes modernos e alta previsibilidade.' },
  { icon: <Sparkle size={32} weight="duotone" />, title: 'Est\u00e9tica Dental', desc: 'Clareamento, lentes de contato e facetas para um sorriso deslumbrante.' },
  { icon: <Heart size={32} weight="duotone" />, title: 'Odontopediatria', desc: 'Cuidado especial para os sorrisos dos pequenos. Ambiente l\u00fadico e acolhedor.' },
  { icon: <FirstAid size={32} weight="duotone" />, title: 'Endodontia', desc: 'Tratamento de canal moderno e indolor com tecnologia de ponta.' },
  { icon: <Smiley size={32} weight="duotone" />, title: 'Harmoniza\u00e7\u00e3o', desc: 'Harmoniza\u00e7\u00e3o orofacial com preenchimentos e toxina bot\u00ednica.' },
]

const REVIEWS = [
  { name: 'Luciana M.', text: 'A Dra. Nadine \u00e9 incr\u00edvel! Fiz Invisalign e o resultado superou minhas expectativas. Cl\u00ednica linda e moderna.', stars: 5 },
  { name: 'Pedro H.', text: 'Melhor cl\u00ednica de Palho\u00e7a! Atendimento humanizado, equipe atenciosa. Minha fam\u00edlia toda \u00e9 paciente.', stars: 5 },
  { name: 'Gabriela S.', text: 'Fiz clareamento e estou apaixonada! A tecnologia digital deles \u00e9 impressionante. Super recomendo!', stars: 5 },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <>
      <Helmet><title>DentCare | Cl\u00ednica Odontol\u00f3gica em Palho\u00e7a</title></Helmet>

      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, padding: '14px 0',
        background: scrolled ? 'rgba(250,251,252,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none', transition: 'all 0.4s',
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--mint)', fontWeight: 600 }}>
            Dent<span style={{ color: 'var(--purple)' }}>Care</span>
          </a>
          <div className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
            {NAV.map(n => <a key={n.href} href={n.href} style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500 }}
              onMouseEnter={e => e.target.style.color = 'var(--mint)'} onMouseLeave={e => e.target.style.color = 'var(--text-muted)'}>{n.label}</a>)}
            <a href={wa('Ol\u00e1, gostaria de agendar na DentCare Palho\u00e7a.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--mint)', color: '#fff', padding: '10px 24px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600 }}>
              <WhatsappLogo size={18} weight="duotone" /> Agendar
            </a>
          </div>
          <button onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-btn" style={{ display: 'none', background: 'none', border: 'none', color: 'var(--mint)', cursor: 'pointer' }}>
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden', background: 'rgba(250,251,252,0.98)' }}>
              <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {NAV.map(n => <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} style={{ color: 'var(--dark)', padding: '10px 0', borderBottom: '1px solid var(--border)' }}>{n.label}</a>)}
                <a href={wa('Agendar!')} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--mint)', color: '#fff', padding: '14px', borderRadius: '8px', fontWeight: 600, justifyContent: 'center' }}>
                  <WhatsappLogo size={18} weight="duotone" /> Agendar
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', background: 'linear-gradient(160deg, #FAFBFC 0%, #E8F8F5 50%, #FAFBFC 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,184,148,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '80px' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(0,184,148,0.1)', padding: '8px 16px', borderRadius: '40px', marginBottom: '24px' }}>
                <Scan size={16} weight="duotone" style={{ color: 'var(--purple)' }} />
                <span style={{ fontSize: '0.8rem', color: 'var(--purple)', fontWeight: 600 }}>Odontologia digital com iTero 5D</span>
              </motion.div>
              <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
                style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: 'var(--dark)', marginBottom: '20px', lineHeight: 1.1 }}>
                Seu sorriso merece <span style={{ color: 'var(--mint)' }}>cuidado</span> especial
              </motion.h1>
              <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
                style={{ fontSize: '1.05rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.8 }}>
                Cl\u00ednica odontol\u00f3gica moderna em Palho\u00e7a com tecnologia digital avan\u00e7ada.
                Invisalign, implantes, est\u00e9tica e muito cuidado humano. Dra. Nadine Andrade e equipe.
              </motion.p>
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href={wa('Ol\u00e1, gostaria de agendar uma consulta na DentCare.')} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--mint)', color: '#fff', padding: '14px 28px', borderRadius: '8px', fontWeight: 600 }}>
                  <WhatsappLogo size={20} weight="duotone" /> Agendar Consulta
                </a>
                <a href="#servicos" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '2px solid var(--mint)', color: 'var(--mint)', padding: '14px 28px', borderRadius: '8px', fontWeight: 600 }}>
                  Servi\u00e7os <ArrowRight size={18} />
                </a>
              </motion.div>
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4}
                style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '32px' }}>
                <div style={{ display: 'flex', gap: '2px' }}>{[...Array(5)].map((_, i) => <Star key={i} size={18} weight="fill" style={{ color: '#F5A623' }} />)}</div>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}><strong style={{ color: 'var(--dark)' }}>4.7</strong> no Google</span>
              </motion.div>
            </div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
              <div style={{ aspectRatio: '1', background: 'linear-gradient(135deg, rgba(0,184,148,0.1), rgba(108,92,231,0.06))', borderRadius: '24px', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <Tooth size={80} weight="duotone" style={{ color: 'var(--mint)', opacity: 0.4 }} />
                  <p style={{ color: 'var(--text-muted)', marginTop: '16px', fontWeight: 500 }}>Tecnologia iTero 5D</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p style={{ color: 'var(--mint)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 600 }}>Sobre N\u00f3s</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--dark)', marginBottom: '20px' }}>
              Qualidade com <span style={{ color: 'var(--mint)' }}>acolhimento</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.8 }}>
              A DentCare nasceu em 2020 com a vis\u00e3o de oferecer tratamentos odontol\u00f3gicos de qualidade
              combinados com cuidado humano acolhedor. Dirigida pela Dra. Nadine Andrade, especialista em
              Endodontia e Ortodontia, com forma\u00e7\u00e3o complementar em est\u00e9tica e odontopediatria.
            </p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            {[
              { num: '4.7', label: 'Nota no Google' },
              { num: 'iTero', label: 'Scanner Digital 5D' },
              { num: '100%', label: 'Especialistas' },
              { num: 'Dra. Nadine', label: 'Diretora Cl\u00ednica' },
            ].map((s, i) => (
              <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ padding: '28px', background: 'var(--bg)', borderRadius: '12px', border: '1px solid var(--border)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', color: 'var(--mint)', marginBottom: '6px' }}>{s.num}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICOS */}
      <section id="servicos" style={{ padding: '100px 0', background: 'var(--bg)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: 'var(--mint)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 600 }}>Servi\u00e7os</p>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--dark)' }}>Nossos <span style={{ color: 'var(--mint)' }}>tratamentos</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {SERVICES.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ padding: '28px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '12px', transition: 'box-shadow .3s, transform .3s' }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,184,148,0.08)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}>
                <div style={{ color: 'var(--mint)', marginBottom: '14px' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', color: 'var(--dark)', marginBottom: '8px' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7 }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <a href={wa('Ol\u00e1, gostaria de saber mais sobre os tratamentos.')} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--mint)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: 600 }}>
              <WhatsappLogo size={20} weight="duotone" /> Agendar Avalia\u00e7\u00e3o
            </a>
          </div>
        </div>
      </section>

      {/* TECNOLOGIA */}
      <section id="tecnologia" style={{ padding: '80px 0', background: 'linear-gradient(135deg, var(--mint), #00A884)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Scan size={48} weight="duotone" style={{ color: '#fff', marginBottom: '20px' }} />
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', color: '#fff', marginBottom: '16px' }}>Tecnologia iTero Element 5D</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '550px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            Scanner digital que cria imagens 3D da sua boca e simula resultados do tratamento ortod\u00f4ntico em tempo real.
            Sem moldes desconfort\u00e1veis \u2014 s\u00f3 precis\u00e3o e rapidez.
          </p>
          <a href={wa('Ol\u00e1! Gostaria de conhecer a tecnologia iTero na DentCare.')} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#fff', color: 'var(--mint)', padding: '16px 40px', borderRadius: '8px', fontWeight: 700 }}>
            <WhatsappLogo size={22} weight="duotone" /> Agendar Escaneamento
          </a>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" style={{ padding: '100px 0', background: 'var(--white)' }}>
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: 'var(--dark)' }}>Pacientes que <span style={{ color: 'var(--mint)' }}>recomendam</span></h2>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {REVIEWS.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15 }}
                style={{ padding: '28px', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '14px' }}>{[...Array(r.stars)].map((_, j) => <Star key={j} size={16} weight="fill" style={{ color: '#F5A623' }} />)}</div>
                <p style={{ color: 'var(--text)', fontStyle: 'italic', lineHeight: 1.7, marginBottom: '16px' }}>&ldquo;{r.text}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <UserCircle size={28} weight="duotone" style={{ color: 'var(--mint)' }} />
                  <p style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--dark)' }}>{r.name}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" style={{ padding: '100px 0', background: 'var(--bg)' }}>
        <div className="container">
          <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p style={{ color: 'var(--mint)', fontSize: '0.8rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '12px', fontWeight: 600 }}>Contato</p>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(1.8rem, 3vw, 2.2rem)', color: 'var(--dark)', marginBottom: '24px' }}>
                Venha <span style={{ color: 'var(--mint)' }}>sorrir</span> com a gente
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { icon: <MapPin size={22} weight="duotone" />, label: 'Endere\u00e7o', value: ADDRESS },
                  { icon: <Phone size={22} weight="duotone" />, label: 'Telefone', value: PHONE_NUM },
                  { icon: <Clock size={22} weight="duotone" />, label: 'Hor\u00e1rio', value: 'Seg \u00e0 Sex 9h-19h30 | S\u00e1b com agendamento' },
                ].map(c => (
                  <div key={c.label} style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: 44, height: 44, borderRadius: '10px', background: 'rgba(0,184,148,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--mint)', flexShrink: 0 }}>{c.icon}</div>
                    <div><p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: 2, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{c.label}</p><p style={{ color: 'var(--dark)' }}>{c.value}</p></div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ padding: '40px', background: 'var(--white)', border: '1px solid var(--border)', borderRadius: '16px', textAlign: 'center' }}>
              <WhatsappLogo size={56} weight="duotone" style={{ color: 'var(--mint)', marginBottom: '20px' }} />
              <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.3rem', color: 'var(--dark)', marginBottom: '12px' }}>Agende pelo WhatsApp</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '28px' }}>Atendimento r\u00e1pido e personalizado.</p>
              <a href={wa('Ol\u00e1, gostaria de agendar na DentCare.')} target="_blank" rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'var(--mint)', color: '#fff', padding: '14px 32px', borderRadius: '8px', fontWeight: 600, width: '100%', justifyContent: 'center' }}>
                <WhatsappLogo size={20} weight="duotone" /> Enviar Mensagem
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <footer style={{ padding: '40px 0 20px', background: 'var(--dark)', color: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', marginBottom: '32px' }}>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', color: 'var(--mint-light)', marginBottom: '12px' }}>DentCare</h4>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>Cl\u00ednica odontol\u00f3gica moderna em Palho\u00e7a. Cuidado humano com tecnologia digital.</p>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', marginBottom: '12px' }}>Links</h4>
              {NAV.map(n => <a key={n.href} href={n.href} style={{ display: 'block', color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', marginBottom: '6px' }}>{n.label}</a>)}
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--serif)', marginBottom: '12px' }}>Contato</h4>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{ADDRESS}<br />{PHONE_NUM}</p>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px', textAlign: 'center', fontSize: '0.75rem', color: 'rgba(255,255,255,0.4)' }}>
            &copy; {new Date().getFullYear()} DentCare Palho\u00e7a. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <a href={wa('Agendar!')} target="_blank" rel="noopener noreferrer"
        style={{ position: 'fixed', bottom: 24, right: 24, width: 56, height: 56, borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(37,211,102,0.4)', zIndex: 999 }}>
        <WhatsappLogo size={30} weight="fill" style={{ color: '#fff' }} />
      </a>

      <style>{`
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-menu-btn { display: block !important; } .hero-grid, .about-grid, .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }
        @media (min-width: 769px) { .mobile-menu-btn { display: none !important; } }
      `}</style>
    </>
  )
}
