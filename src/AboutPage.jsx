import { useEffect, useState } from 'react'
import './AboutPage.css'

const priorities = [
  {
    icon: 'school',
    title: 'Education that expands choices',
    description: 'Learning support, literacy, mentorship, and leadership opportunities help children and young people shape their own futures.',
  },
  {
    icon: 'volunteer_activism',
    title: 'Dignity at every stage of life',
    description: 'Care for elders and practical support for families are delivered with respect, compassion, and a focus on lasting wellbeing.',
  },
  {
    icon: 'handshake',
    title: 'Communities as partners',
    description: 'Local voices belong at the center of the work—from identifying priorities to building solutions that can continue over time.',
  },
]

const partnershipValues = [
  { icon: 'hearing', title: 'Listen first', text: 'Start with community priorities and the people closest to each challenge.' },
  { icon: 'track_changes', title: 'Agree on outcomes', text: 'Set clear goals together and focus support on practical, meaningful change.' },
  { icon: 'assessment', title: 'Share progress', text: 'Keep sponsors informed with updates, learning, and an honest account of the work.' },
]

function Icon({ children, filled = false }) {
  return <span aria-hidden="true" className={`material-symbols-outlined${filled ? ' fill-icon' : ''}`}>{children}</span>
}

function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'About Rekiya Ibrahim | Ometere Hope Alive Foundation'
    return () => { document.title = previousTitle }
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="about-page">
      <header className="about-header">
        <div className="about-header-inner">
          <a aria-label="Ometere Hope Alive Foundation home" className="about-brand" href="/">
            <span aria-hidden="true" className="brand-emblem">OH</span>
            <span><strong>Ometere Hope Alive</strong><small>Empowering Generations • Nigeria</small></span>
          </a>
          <nav aria-label="Main navigation" className="about-desktop-nav">
            <a href="/">Home</a><a aria-current="page" className="active" href="/about">About</a><a href="/blog">Blog</a><a href="/#programs">Programs</a><a href="/#impact">Our Impact</a>
          </nav>
          <a className="about-nav-cta" href="/get-involved"><Icon>volunteer_activism</Icon>Get involved</a>
          <button aria-expanded={menuOpen} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} className="about-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} type="button"><Icon>{menuOpen ? 'close' : 'menu'}</Icon></button>
        </div>
        {menuOpen && <nav aria-label="Mobile navigation" className="about-mobile-nav"><a href="/" onClick={closeMenu}>Home</a><a href="/about" onClick={closeMenu}>About the Founder</a><a href="/blog" onClick={closeMenu}>Blog & Insights</a><a href="/#programs" onClick={closeMenu}>Programs</a><a href="/#impact" onClick={closeMenu}>Our Impact</a><a href="/get-involved" onClick={closeMenu}>Get involved</a></nav>}
      </header>

      <main>
        <section className="about-hero">
          <div className="about-hero-inner">
            <div className="about-hero-copy">
              <div className="about-eyebrow"><span /> A founder’s story</div>
              <h1>One belief can become a <em>movement of hope.</em></h1>
              <p className="about-hero-lead">Meet Rekiya Ibrahim, founder of Ometere Hope Alive Foundation—a Nigerian community organization working so that opportunity, care, and dignity reach more people.</p>
              <p className="about-hero-detail">Her work is grounded in a simple idea: meaningful change begins when people are seen, heard, and supported to build a future of their own.</p>
              <div className="about-hero-actions"><a className="about-button-primary" href="/partner">Explore partnership <Icon>arrow_forward</Icon></a><a className="about-button-text" href="#founder-story">Discover her story <Icon>south</Icon></a></div>
              <div className="about-hero-proof"><Icon filled>favorite</Icon><span><strong>Purpose-led. Community-rooted.</strong><small>Creating pathways to brighter futures across Nigeria.</small></span></div>
            </div>
            <figure className="founder-portrait-wrap">
              <div className="portrait-accent" />
              <img alt="Rekiya Ibrahim, founder of Ometere Hope Alive Foundation" className="founder-portrait" fetchPriority="high" src="/images/pic_.jpg" />
              <figcaption className="founder-caption"><span className="founder-caption-icon"><Icon>volunteer_activism</Icon></span><span><strong>Rekiya Ibrahim</strong><small>Founder, Ometere Hope Alive Foundation</small></span></figcaption>
              <div aria-hidden="true" className="portrait-sparkle"><Icon>flare</Icon></div>
            </figure>
          </div>
        </section>

        <section className="founder-story section-pad" id="founder-story">
          <div className="about-content-wrap">
            <div className="founder-story-heading"><span className="about-section-label">The story behind the work</span><h2>From concern for people to a commitment to lasting change.</h2></div>
            <div className="founder-story-copy">
              <p className="story-lead">Rekiya Ibrahim’s background is best understood through the purpose she has chosen to serve: helping people meet hardship with support, possibility, and hope.</p>
              <p>She founded Ometere Hope Alive Foundation to turn that purpose into organized community action. The Foundation brings attention to needs that can shape a family’s future—education for children, confidence and leadership for girls, compassionate care for older people, and practical ways for communities to grow stronger.</p>
              <p>Rather than treating support as a one-time gesture, Rekiya’s vision is to build relationships around it. The Foundation works alongside communities, listens to local priorities, and brings people together around solutions that respect the knowledge and strength already present in each place.</p>
              <p>That is the story at the heart of Ometere: a decision to make compassion practical, collective, and focused on what comes next.</p>
            </div>
            <div className="founder-principle"><Icon>format_quote</Icon><p>Hope becomes stronger when people have the opportunity, resources, and partnership to shape their own future.</p><span>THE PRINCIPLE THAT GUIDES OUR WORK</span></div>
          </div>
        </section>

        <section className="foundation-beginnings" id="philosophy">
          <div className="about-content-wrap beginnings-grid">
            <div className="beginnings-intro"><span className="about-section-label">How the Foundation began</span><h2>A platform for turning care into action.</h2><p>Rekiya created Ometere Hope Alive Foundation as a way to bring people, local knowledge, and practical support together—so that good intentions can grow into work communities can feel and sustain.</p><a href="/#programs">See our program areas <Icon>north_east</Icon></a></div>
            <div className="beginnings-steps">
              <article><span className="step-number">01</span><div><h3>Notice what is holding people back</h3><p>Look beyond a single need to the barriers that affect learning, health, safety, and opportunity.</p></div></article>
              <article><span className="step-number">02</span><div><h3>Build with the community</h3><p>Bring residents, educators, volunteers, and partners into the conversation and the work.</p></div></article>
              <article><span className="step-number">03</span><div><h3>Keep the future in view</h3><p>Support solutions that strengthen confidence, capability, and wellbeing over the long term.</p></div></article>
            </div>
          </div>
        </section>

        <section className="about-motivation section-pad">
          <div className="about-content-wrap">
            <div className="about-centered-heading"><span className="about-section-label">What motivates Rekiya</span><h2>Every person deserves the chance to thrive.</h2><p>Rekiya’s motivation is reflected in the people and possibilities at the center of the Foundation’s work.</p></div>
            <div className="priority-grid">{priorities.map((priority, index) => <article className="priority-card" key={priority.title}><span className={`priority-icon priority-tone-${index + 1}`}><Icon>{priority.icon}</Icon></span><span className="priority-index">0{index + 1} / A reason to keep going</span><h3>{priority.title}</h3><p>{priority.description}</p></article>)}</div>
          </div>
        </section>

        <section className="sponsor-section section-pad" id="sponsorship">
          <div className="about-content-wrap sponsor-layout">
            <div className="sponsor-copy"><span className="about-section-label">An invitation to partners</span><h2>Let’s turn shared values into shared impact.</h2><p>Rekiya believes lasting progress is built together. Sponsors and partners can help extend community-led programs while bringing skills, resources, and fresh ideas to the work.</p><p>Every partnership should begin with a clear conversation about priorities, responsibilities, and what meaningful progress looks like. The Foundation welcomes organizations and individuals who want to contribute with care and accountability.</p><a className="about-button-primary" href="/partner">Start a conversation <Icon>arrow_forward</Icon></a></div>
            <div className="partnership-card"><span className="partnership-card-label"><Icon>verified_user</Icon>Partnership, with purpose</span><h3>What a thoughtful partnership looks like</h3><div className="partnership-list">{partnershipValues.map((value) => <article key={value.title}><span><Icon>{value.icon}</Icon></span><div><h4>{value.title}</h4><p>{value.text}</p></div></article>)}</div><a href="tel:+2348082623300">Speak with our team <Icon>call</Icon></a></div>
          </div>
        </section>

        <section className="founder-closing">
          <div className="about-content-wrap founder-closing-inner"><span className="closing-mark"><Icon filled>volunteer_activism</Icon></span><div><span className="about-section-label">The work continues</span><h2>Join Rekiya in creating a future with more hope in it.</h2><p>Your support can help strengthen education, dignity, and opportunity—one community partnership at a time.</p></div><a href="/donate">Support the mission <Icon>arrow_forward</Icon></a></div>
        </section>
      </main>

      <footer className="about-footer"><div className="about-content-wrap about-footer-inner"><a aria-label="Ometere Hope Alive Foundation home" className="about-brand" href="/"><span aria-hidden="true" className="brand-emblem">OH</span><span><strong>Ometere Hope Alive</strong><small>Empowering Generations • Nigeria</small></span></a><p>Building brighter futures through education, dignity, and community partnership.</p><a href="/">Return to home <Icon>arrow_forward</Icon></a><small>© {new Date().getFullYear()} Ometere Hope Alive Foundation. All rights reserved.</small></div></footer>
    </div>
  )
}

export default AboutPage