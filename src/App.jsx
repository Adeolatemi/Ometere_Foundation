import { useEffect, useRef, useState } from 'react'
import AboutPage from './AboutPage.jsx'
import BlogPage from './BlogPage.jsx'
import GetInvolvedPage from './GetInvolvedPage.jsx'
import './App.css'

const impactStats = [
  { icon: 'school', tag: 'Mentorship', value: 4500, suffix: '+', title: 'Girls & Young Women', description: 'Empowered with long-term leadership mentorship, STEM scholarships, and dignity packs.', tone: 'amber' },
  { icon: 'menu_book', tag: '42 Schools', value: 18200, suffix: '+', title: 'Students Reached', description: 'Provided learning materials, tailored uniforms, and digital literacy resources.', tone: 'green' },
  { icon: 'elderly', tag: 'Dignity', value: 1850, suffix: '+', title: 'Elders Supported', description: 'Assisted with healthcare, monthly nutritious staple packs, and companionship.', tone: 'amber' },
  { icon: 'water_drop', tag: 'Infrastructure', value: 35, suffix: '+', title: 'Communities Uplifted', description: 'Through clean water, sanitation hubs, and vocational centers.', tone: 'green' },
]

const foundationValues = [
  { icon: 'groups', title: 'Who We Are', description: 'Ometere Hope Alive Foundation is an independent Nigerian non-governmental organization. We work within underserved semi-urban and rural areas to identify gaps in education, healthcare, and livelihood dignity.', footer: 'Rooted in Nigeria', footerIcon: 'public', tone: 'green' },
  { icon: 'handshake', title: 'What We Do', description: 'We design and execute sustainable, locally co-managed initiatives. From scholarships for vulnerable girls to solar-powered boreholes and elder care networks, every initiative is built to endure.', footer: 'Grassroots Co-Creation', footerIcon: 'psychology', tone: 'amber' },
  { icon: 'family_restroom', title: 'Why It Matters', description: 'When a young woman gains skills, her family flourishes. When elders are honored with healthcare, wisdom is preserved. We build generational continuity that turns vulnerability into shared resilience.', footer: 'Generational Stability', footerIcon: 'timeline', tone: 'green' },
]

const programs = [
  { title: 'Girl Child Empowerment & Leadership', category: 'Education & Leadership', label: 'Flagship Initiative', image: '/images/school-community-gathering.png', alt: 'Students gathered for a community education outreach', description: 'Breaking systemic cycles through scholarships, mentorship cohorts, dignity kits, and public speaking incubators.', bullets: ['4,500+ girls on active academic bursaries', '12 annual leadership & debate retreats'], featured: true },
  { title: 'Inclusive Education & Literacy', category: 'Rural Literacy', label: 'Education', image: '/images/childrens-day-outreach.png', alt: 'Children and families gathered at an Ometere Hope Alive Foundation event', description: 'Refurbishing rural schools, equipping libraries with contemporary literature, and supporting teacher development.' },
  { title: 'Dignified Elderly Care & Health', category: 'Honoring Elders', label: 'Health & Dignity', image: '/images/field-seminar.png', alt: 'Community partners gathered during a foundation event', description: 'Free mobile geriatric clinics, chronic condition management, and monthly nutrition deliveries for seniors.' },
  { title: 'Youth Skills & Vocational Hubs', category: 'Vocational Tech', label: 'Skills & Careers', image: '/images/foundation-partners.png', alt: 'Foundation partners gathered at a community event', description: 'Bootcamps in solar installation, digital skills, agronomy, and seed micro-grants for graduate ventures.' },
  { title: 'Resilient Community Water & Sanitation', category: 'Water & Climate', label: 'Community', image: '/images/youth-community-outreach.png', alt: 'Children and community members at an outreach gathering', description: 'Installing solar boreholes, establishing agricultural cooperatives, and supporting public health and sanitation.' },
]

const waysToHelp = [
  { icon: 'volunteer_activism', label: 'Direct Impact', title: 'Make a Donation', description: 'Support community-led programs through a one-time transfer or monthly giving plan.', action: 'Donate Funds', href: '/donate', tone: 'amber' },
  { icon: 'person_add', label: 'Field & Digital', title: 'Become a Volunteer', description: 'Lend your talents in education, mentoring, health, technology, or community outreach.', action: 'Volunteer Now', href: '/volunteer', tone: 'green' },
  { icon: 'corporate_fare', label: 'Institutional', title: 'Partner With Us', description: 'Collaborate on programs, grant co-funding, and sustainable community impact.', action: 'Start a Partnership', href: '/partner', tone: 'amber' },
]

const testimonials = [
  { quote: '“At my age, feeling remembered is the greatest medicine. The Foundation doctors do not simply hand out tablets; they sit with us, ask after our grandchildren, and treat our gray hair with royal honor.”', initials: 'MB', name: 'Mama Blessing, 72', role: 'Elderly Care Beneficiary • Kogi State', tone: 'amber' },
  { quote: '“Training young women who have never touched a computer, only to see them building live web apps four months later, is transformative. Ometere Foundation creates actual economic autonomy.”', initials: 'CO', name: 'Chinedu O.', role: 'Lead Tech Mentor & Volunteer • Lagos', tone: 'green' },
  { quote: '“Female dropout rates in our secondary school dropped after Ometere introduced dignity kits, tuition sponsorships, and parent counseling.”', initials: 'FA', name: 'Mrs. Fatima Aliyu', role: 'Principal, Community Secondary School', tone: 'amber' },
]

const gallery = [
  { image: '/images/school-outreach-hall.png', alt: 'Students attending a large school outreach gathering', caption: 'Students Together at an Outreach', label: 'Education Outreach', featured: true },
  { image: '/images/field-seminar.png', alt: 'Community members attending an NGO seminar', caption: 'Community Seminar', label: 'Community Partnership' },
  { image: '/images/community-workshop.png', alt: 'Foundation team members at a workshop', caption: 'Foundation Team', label: 'Partner Collaboration' },
  { image: '/images/youth-community-outreach.png', alt: 'Young people at a community outreach event', caption: 'Youth Community Outreach', label: 'Community Resilience' },
  { image: '/images/childrens-day-outreach.png', alt: 'Children celebrating at a foundation community event', caption: 'Children’s Day Gathering', label: 'Community Outreach', featured: true },
]

function Icon({ children, className = '', filled = false }) {
  return <span aria-hidden="true" className={`material-symbols-outlined${filled ? ' fill-icon' : ''} ${className}`}>{children}</span>
}

function AnimatedStat({ value, suffix = '' }) {
  const [count, setCount] = useState(0)
  const statRef = useRef(null)

  useEffect(() => {
    const element = statRef.current
    if (!element) return undefined

    let animationFrame = 0
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      observer.disconnect()
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setCount(value)
        return
      }

      let startTime
      const duration = 1400
      const animate = (timestamp) => {
        if (startTime === undefined) startTime = timestamp
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const easedProgress = 1 - (1 - progress) ** 3
        setCount(Math.floor(value * easedProgress))

        if (progress < 1) animationFrame = requestAnimationFrame(animate)
      }

      animationFrame = requestAnimationFrame(animate)
    }, { threshold: 0.45 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [value])

  return <span aria-label={`${value.toLocaleString()}${suffix}`} ref={statRef}>{count.toLocaleString()}{suffix}</span>
}

function ProgramCard({ program }) {
  return (
    <article className={`program-tile group warm-ambient-card ${program.featured ? 'program-tile-featured lg:col-span-2' : ''}`}>
      <div className="program-tile-image"><img alt={program.alt} className="transition-transform duration-500 group-hover:scale-105" loading="lazy" src={program.image} />{program.featured && <span className="program-image-badge">{program.label}</span>}</div>
      <div className="program-tile-copy">
        <div className="program-category"><Icon>{program.featured ? 'auto_stories' : 'volunteer_activism'}</Icon>{program.category}</div>
        <h3>{program.title}</h3>
        <p>{program.description}</p>
        {program.bullets && <ul className="program-bullets">{program.bullets.map((bullet) => <li key={bullet}><Icon>check_circle</Icon>{bullet}</li>)}</ul>}
        <a className="program-link" href="/donate">Support this program <Icon>arrow_forward</Icon></a>
      </div>
    </article>
  )
}

function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileProgramsOpen, setMobileProgramsOpen] = useState(false)
  const [mobileInvolvedOpen, setMobileInvolvedOpen] = useState(false)

  const closeMobileMenu = () => setMobileMenuOpen(false)

  return (
    <div className="min-h-screen flex flex-col bg-background text-on-surface antialiased overflow-x-hidden">
      <header className="site-header sticky top-0 z-50 bg-surface/90 backdrop-blur-md shadow-sm">
        <div className="site-header-inner flex justify-between items-center w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-3.5 md:py-4">
          <a className="flex items-center gap-3 group shrink-0" href="#home" onClick={closeMobileMenu}><span aria-hidden="true" className="brand-emblem">OH</span><span className="flex flex-col"><span className="brand-name font-headline-md text-lg sm:text-xl font-semibold text-primary tracking-tight leading-tight">Ometere Hope Alive</span><span className="brand-tagline font-caption text-xs text-secondary font-semibold uppercase tracking-wider hidden sm:inline-block">Empowering Generations • Nigeria</span></span></a>
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-6">
            <a className="desktop-nav-link desktop-nav-active" href="#home">Home</a><a className="desktop-nav-link" href="/about">About</a><a className="desktop-nav-link" href="/blog">Blog</a><a className="desktop-nav-link" href="#impact">Impacts</a>
            <div className="nav-dropdown"><button className="desktop-nav-link" type="button"><span>Programs</span><Icon className="text-base">expand_more</Icon></button><div className="dropdown-panel"><a href="#programs">Family Initiatives</a><a href="#programs">Community Building</a><a href="#programs">Careers & Fellowships</a></div></div>
            <div className="nav-dropdown"><button className="desktop-nav-link" type="button"><span>Get Involved</span><Icon className="text-base">expand_more</Icon></button><div className="dropdown-panel"><a href="/donate">Donate</a><a href="/partner">Partnership</a><a href="/volunteer">Volunteer</a></div></div>
          </nav>
          <div className="flex items-center gap-2 sm:gap-4"><a className="donate-nav-button" href="/donate"><Icon filled>favorite</Icon><span className="hidden xs:inline">Donate Now</span><span className="xs:hidden">Donate</span></a><button aria-expanded={mobileMenuOpen} aria-label={mobileMenuOpen ? 'Close mobile menu' : 'Open mobile menu'} className="mobile-menu-toggle lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} type="button"><Icon className="text-2xl">{mobileMenuOpen ? 'close' : 'menu'}</Icon></button></div>
        </div>
        {mobileMenuOpen && <nav aria-label="Mobile navigation" className="mobile-menu lg:hidden">
          <a className="mobile-menu-link mobile-menu-current" href="#home" onClick={closeMobileMenu}>Home</a><a className="mobile-menu-link" href="/about" onClick={closeMobileMenu}>About Us</a><a className="mobile-menu-link" href="/blog" onClick={closeMobileMenu}>Blog & Stories</a><a className="mobile-menu-link" href="#impact" onClick={closeMobileMenu}>Our Impacts</a>
          <div className="mobile-accordion"><button aria-expanded={mobileProgramsOpen} onClick={() => setMobileProgramsOpen(!mobileProgramsOpen)} type="button">Key Programs<Icon>{mobileProgramsOpen ? 'expand_less' : 'expand_more'}</Icon></button>{mobileProgramsOpen && <div className="mobile-accordion-content"><a href="#programs" onClick={closeMobileMenu}>Family Initiatives</a><a href="#programs" onClick={closeMobileMenu}>Community Building</a><a href="#programs" onClick={closeMobileMenu}>Careers & Fellowships</a></div>}</div>
          <div className="mobile-accordion"><button aria-expanded={mobileInvolvedOpen} onClick={() => setMobileInvolvedOpen(!mobileInvolvedOpen)} type="button">Get Involved<Icon>{mobileInvolvedOpen ? 'expand_less' : 'expand_more'}</Icon></button>{mobileInvolvedOpen && <div className="mobile-accordion-content"><a href="/donate" onClick={closeMobileMenu}>Donate</a><a href="/partner" onClick={closeMobileMenu}>Partnership</a><a href="/volunteer" onClick={closeMobileMenu}>Volunteer</a></div>}</div>
          <a className="mobile-donate-link" href="/donate" onClick={closeMobileMenu}><Icon filled>favorite</Icon>Make a Donation Now</a>
        </nav>}
      </header>

      <main>
        <section className="home-hero" id="home"><div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12 md:py-16 lg:py-20"><div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-7 space-y-4 sm:space-y-6"><div className="hero-kicker"><span className="hero-kicker-dot" /><span>Registered Non-Profit NGO in Nigeria • Audited & Transparent</span></div><h1 className="hero-title">Creating Hope.<br className="hidden sm:inline" /> Empowering Lives.<br /><span>Building Brighter Futures.</span></h1><p className="hero-description">Ometere Hope Alive Foundation partners with Nigerian grassroots communities to champion girl-child leadership, holistic youth education, elderly dignity, and resilient community wellbeing.</p><div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2"><a className="hero-primary-action" href="/donate"><Icon filled>volunteer_activism</Icon>Donate Now</a><a className="hero-secondary-action" href="/get-involved">Get Involved<Icon>arrow_forward</Icon></a></div>
            <div className="hero-stats"><div><strong><AnimatedStat value={100} suffix="%" /></strong><span>Accountability</span></div><i /><div><strong><AnimatedStat value={42} suffix="+" /></strong><span>Schools Adopted</span></div><i /><div><strong><AnimatedStat value={35} suffix="+" /></strong><span>Communities</span></div></div>
          </div>
          <div className="lg:col-span-5 relative mt-6 lg:mt-0"><div className="hero-photo"><img alt="Students attending an Ometere Hope Alive Foundation school outreach" className="w-full h-72 sm:h-96 lg:h-[480px] object-cover object-center" src="/images/school-outreach-hall.png" /><div className="hero-photo-gradient" /><div className="hero-photo-caption"><span>Community Education Outreach</span><strong>Learning and opportunity for every child</strong></div></div><div className="hero-proof warm-ambient-card"><div><Icon filled>verified</Icon></div><p><strong>Community-led programs</strong><span>Supporting children, families, and communities across Nigeria</span></p></div></div>
        </div></div></section>

        <section className="impact-section" id="impact"><div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-12"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">{impactStats.map((stat) => <article className="stat-card warm-ambient-card" key={stat.title}><div className="stat-card-top"><Icon className={`stat-icon-spin ${stat.tone}`}>{stat.icon}</Icon><span className={`stat-tag ${stat.tone}`}>{stat.tag}</span></div><strong className="stat-number"><AnimatedStat suffix={stat.suffix} value={stat.value} /></strong><h2>{stat.title}</h2><p>{stat.description}</p></article>)}</div></div></section>

        <section className="section-pad bg-surface" id="about"><div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg"><div className="section-intro"><span className="section-pill">Our Foundation & Philosophy</span><h2>Unconditional Dignity, Generational Self-Reliance</h2><p>We reject the outdated narrative of pity. We believe African communities hold the intellect, resilience, and vision to forge their own thriving futures when equipped with fair opportunities.</p></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">{foundationValues.map((value) => <article className="value-card warm-ambient-card" key={value.title}><div><div className={`value-icon ${value.tone}`}><Icon>{value.icon}</Icon></div><h3>{value.title}</h3><p>{value.description}</p></div><div className={`value-footer ${value.tone}`}>{value.footer}<Icon>{value.footerIcon}</Icon></div></article>)}</div>
          <div className="mission-quote"><Icon>format_quote</Icon><blockquote>“Empowerment is not charity; it is unlocking the extraordinary potential already alive in every community.”</blockquote><p>— Executive Director & Board of Trustees, Ometere Hope Alive Foundation</p><a className="mission-founder-link" href="/about">Meet our founder <Icon>arrow_forward</Icon></a></div>
        </div></section>

        <section className="section-pad bg-surface-container-low" id="programs"><div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg"><div className="programs-heading"><div><span className="section-pill section-pill-amber">Strategic Interventions</span><h2>Our Key Pillars of Transformation</h2><p>Targeted initiatives designed for generational impact across Nigeria.</p></div><a href="/donate">Support all programs<Icon>north_east</Icon></a></div><div className="program-grid">{programs.map((program) => <ProgramCard key={program.title} program={program} />)}</div></div></section>

        <section className="story-section" id="stories"><div className="story-glow" /><div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg relative z-10"><div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg items-center"><div className="lg:col-span-5"><div className="story-photo"><img alt="Young people and community members at an Ometere Hope Alive Foundation outreach" className="w-full h-[460px] object-cover object-center" loading="lazy" src="/images/youth-community-outreach.png" /><div className="story-photo-label"><span>Community Outreach</span><strong>Growing Hope Together</strong></div></div></div><div className="lg:col-span-7 story-copy"><div className="story-pill"><Icon filled>star</Icon>Community Voices • Local Action</div><h2>“When communities come together, brighter futures become possible.”</h2><p>Ometere Hope Alive Foundation works with local communities to support children, young people, and families through education, outreach, and opportunities to thrive.</p><p>Our programs are grounded in partnership: listening to community priorities, working alongside local leaders, and building practical support that can make a lasting difference.</p><div className="flex flex-wrap items-center gap-space-md"><a className="story-primary-link" href="/get-involved">Join the Movement<Icon>volunteer_activism</Icon></a><a className="story-more-link" href="#programs">Explore Our Programs<Icon>arrow_forward</Icon></a></div></div></div></div></section>

        <section className="section-pad bg-surface" id="get-involved"><div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg"><div className="section-intro"><span className="section-pill">Join the Movement</span><h2>Three Ways to Champion Hope</h2><p>Give your time, support community-led programs, or work with us as a partner.</p><a className="story-more-link" href="/get-involved">Explore all ways to get involved<Icon>arrow_forward</Icon></a></div><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">{waysToHelp.map((way) => <article className="help-card warm-ambient-card" key={way.title}><div><div className={`value-icon ${way.tone}`}><Icon filled={way.icon === 'volunteer_activism'}>{way.icon}</Icon></div><span className={`help-label ${way.tone}`}>{way.label}</span><h3>{way.title}</h3><p>{way.description}</p></div><a className={`help-action ${way.tone}`} href={way.href}>{way.action}</a></article>)}</div></div></section>

        <section className="section-pad bg-surface-container-low"><div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg"><div className="section-intro"><span className="section-pill">Mutual Respect & Proof</span><h2>Voices of Community</h2><p>Genuine reflections from beneficiaries, school administrators, and field leaders.</p></div><div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">{testimonials.map((item) => <article className="testimonial-card warm-ambient-card" key={item.name}><div><div aria-label="5 out of 5 stars" className="testimonial-stars">{Array.from({ length: 5 }, (_, index) => <Icon filled key={index}>star</Icon>)}</div><p className="testimonial-quote">{item.quote}</p></div><div className="testimonial-person"><div className={`testimonial-avatar ${item.tone}`}>{item.initials}</div><div><h3>{item.name}</h3><p>{item.role}</p></div></div></article>)}</div></div></section>

        <section className="section-pad bg-surface-container-low"><div className="max-w-7xl mx-auto px-margin md:px-margin-md lg:px-margin-lg"><div className="section-intro"><span className="section-pill section-pill-green">Grassroots Moments</span><h2>Fieldwork in Action Across Nigeria</h2><p>Glimpses of daily perseverance, celebration, and genuine human connection.</p></div><div className="gallery-grid">{gallery.map((item) => <figure className={`gallery-tile ${item.featured ? 'gallery-featured' : ''}`} key={item.caption}><img alt={item.alt} loading="lazy" src={item.image} /><div className="gallery-overlay" /><figcaption><span>{item.label}</span><strong>{item.caption}</strong></figcaption></figure>)}</div></div></section>

        <section className="section-pad bg-surface" id="donate"><div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16"><div className="donation-panel donation-handoff"><div className="donation-copy"><span className="donation-pill"><Icon filled>favorite</Icon>Support Community-Led Work</span><h2>Your support can help build a brighter future.</h2><p>Choose OPay transfer, request a secure Paystack payment account, or learn about monthly automatic giving. We’ll explain the next steps before any payment is made.</p><a className="hero-primary-action" href="/donate">Explore ways to donate<Icon>arrow_forward</Icon></a></div><div className="accountability-note"><Icon>verified_user</Icon><div><h3>Give safely and transparently</h3><p>Payment processing is not connected yet. No funds are collected on this website.</p></div></div></div></div></section>
      </main>

      <footer className="site-footer" id="contact"><div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-10 sm:py-16"><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10"><div className="sm:col-span-2 space-y-4"><div className="flex items-center gap-3"><span aria-hidden="true" className="brand-emblem footer-emblem">OH</span><span className="footer-brand">Ometere Hope Alive Foundation</span></div><p className="footer-description">A Nigerian non-governmental organization dedicated to empowering vulnerable girls, uplifting students through inclusive education, and ensuring dignified care for our elderly.</p><div className="footer-registration"><p><strong>Secretariat:</strong> Nigeria</p><p><strong>Phone:</strong> <a href="tel:+2348082623300">+234 808 262 3300</a></p></div></div><div><h2>Organization</h2><ul><li><a href="/about">About Us</a></li><li><a href="/about#philosophy">Our Philosophy</a></li><li><a href="#impact">Impact</a></li><li><a href="/get-involved">Get Involved</a></li></ul></div><div><h2>Key Programs</h2><ul><li><a href="#programs">Family Initiatives</a></li><li><a href="#programs">Community Building</a></li><li><a href="#programs">Careers & Fellowships</a></li><li><a href="/donate">Donate & Support</a></li></ul></div></div><div className="footer-bottom"><div className="footer-policy-links"><a href="#contact">Privacy Policy</a><a href="#contact">Terms of Service</a><a href="#impact">Financial Transparency & Audits</a><a href="#contact">Whistleblower Policy</a></div><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} type="button">Back to Top<Icon>north</Icon></button></div><p className="copyright">© {new Date().getFullYear()} Ometere Hope Alive Foundation. All rights reserved.</p></div></footer>
    </div>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/$/, '')
  if (path === '/about') return <AboutPage />
  if (path === '/blog') return <BlogPage />
  if (['/get-involved', '/volunteer', '/partner', '/donate'].includes(path)) return <GetInvolvedPage />
  return <HomePage />
}

export default App