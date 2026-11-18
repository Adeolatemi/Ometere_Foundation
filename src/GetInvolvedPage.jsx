import { useEffect, useState } from 'react'
import './GetInvolvedPage.css'

const contactPhone = '+234 808 262 3300'
const contactLink = 'tel:+2348082623300'
const pageTitles = {
  '/get-involved': 'Get Involved | Ometere Hope Alive Foundation',
  '/volunteer': 'Volunteer | Ometere Hope Alive Foundation',
  '/partner': 'Partner With Us | Ometere Hope Alive Foundation',
  '/donate': 'Donate | Ometere Hope Alive Foundation',
}

const involvementOptions = [
  { href: '/volunteer', icon: 'volunteer_activism', eyebrow: 'Give your time', title: 'Volunteer', description: 'Share your skills in education, mentoring, health, technology, communications, or community outreach.', action: 'Explore volunteering', tone: 'green' },
  { href: '/donate', icon: 'favorite', eyebrow: 'Support the work', title: 'Donate', description: 'Tell us how you would like to give. Choose a one-time transfer, a Paystack account request, or a monthly giving plan.', action: 'Ways to donate', tone: 'amber' },
  { href: '/partner', icon: 'handshake', eyebrow: 'Work together', title: 'Partner with us', description: 'Discuss a corporate, institutional, or community partnership built around shared goals and transparent progress.', action: 'Start a partnership', tone: 'green' },
]

function Icon({ children, className = '', filled = false }) {
  return <span aria-hidden="true" className={`material-symbols-outlined${filled ? ' fill-icon' : ''} ${className}`}>{children}</span>
}

function ActionHeader({ current }) {
  return (
    <header className="action-header">
      <div className="action-header-inner">
        <a aria-label="Ometere Hope Alive Foundation home" className="action-brand" href="/">
          <span aria-hidden="true" className="brand-emblem">OH</span>
          <span><strong>Ometere Hope Alive</strong><small>Empowering Generations • Nigeria</small></span>
        </a>
        <nav aria-label="Main navigation" className="action-nav">
          <a href="/">Home</a><a href="/about">About</a><a href="/blog">Blog</a><a aria-current={current === 'get-involved' ? 'page' : undefined} href="/get-involved">Get involved</a>
        </nav>
        <a className="action-header-link" href="/get-involved">All ways to help<Icon>arrow_forward</Icon></a>
      </div>
    </header>
  )
}

function ActionFooter() {
  return (
    <footer className="action-footer">
      <div className="action-content-wrap action-footer-inner">
        <a aria-label="Ometere Hope Alive Foundation home" className="action-brand" href="/"><span aria-hidden="true" className="brand-emblem">OH</span><span><strong>Ometere Hope Alive</strong><small>Empowering Generations • Nigeria</small></span></a>
        <p>Building brighter futures through education, dignity, and community partnership.</p>
        <a href={contactLink}>Speak with our team: {contactPhone}<Icon>call</Icon></a>
        <small>© {new Date().getFullYear()} Ometere Hope Alive Foundation. All rights reserved.</small>
      </div>
    </footer>
  )
}

function PageIntro({ label, title, description }) {
  return <div className="action-page-intro"><span className="action-eyebrow"><Icon>volunteer_activism</Icon>{label}</span><h1>{title}</h1><p>{description}</p></div>
}

function InvolvementHub() {
  const [selectedOption, setSelectedOption] = useState('')
  const selected = involvementOptions.find((option) => option.href === selectedOption)

  return (
    <main className="action-main">
      <section className="action-hero">
        <div className="action-content-wrap">
          <PageIntro label="Be part of the change" title={<>Many hands.<br /><em>One hopeful future.</em></>} description="There is more than one way to strengthen community-led work. Choose how you would like to take part and we’ll guide you to the next step." />
          <div className="involvement-picker">
            <label htmlFor="involvement-choice">How would you like to get involved?</label>
            <div className="involvement-picker-controls">
              <select id="involvement-choice" onChange={(event) => setSelectedOption(event.target.value)} value={selectedOption}>
                <option value="">Choose an option</option>
                {involvementOptions.map((option) => <option key={option.href} value={option.href}>{option.title}</option>)}
              </select>
              <a aria-disabled={!selected} className={!selected ? 'action-button action-button-disabled' : 'action-button'} href={selected?.href ?? '#involvement-options'} onClick={(event) => { if (!selected) event.preventDefault() }}>{selected ? selected.action : 'Choose an option'}<Icon>arrow_forward</Icon></a>
            </div>
            <p>Each option opens its own page, so you can see the right details before deciding.</p>
          </div>
        </div>
      </section>
      <section className="action-options-section" id="involvement-options">
        <div className="action-content-wrap">
          <div className="action-section-heading"><span className="action-eyebrow">Choose your next step</span><h2>Three ways to make a difference</h2></div>
          <div className="involvement-options-grid">{involvementOptions.map((option) => <article className={`involvement-option-card ${option.tone}`} key={option.href}>
            <div className={`involvement-option-icon ${option.tone}`}><Icon filled={option.icon === 'favorite'}>{option.icon}</Icon></div><span className="involvement-option-eyebrow">{option.eyebrow}</span><h3>{option.title}</h3><p>{option.description}</p><a href={option.href}>{option.action}<Icon>arrow_forward</Icon></a>
          </article>)}</div>
        </div>
      </section>
      <section className="action-reassurance"><div className="action-content-wrap action-reassurance-inner"><Icon>support_agent</Icon><div><h2>Have a question before you begin?</h2><p>Speak with the Foundation team about the best way to contribute.</p></div><a href={contactLink}>Call {contactPhone}<Icon>arrow_forward</Icon></a></div></section>
    </main>
  )
}

function VolunteerForm() {
  const [submitted, setSubmitted] = useState(false)
  const submitForm = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="action-main action-form-main">
      <div className="action-content-wrap">
        <a className="action-back-link" href="/get-involved"><Icon>arrow_back</Icon>All ways to get involved</a>
        <div className="action-form-layout">
          <div className="action-form-aside"><PageIntro label="Volunteer with Ometere" title={<>Offer your skills.<br /><em>Grow hope together.</em></>} description="Tell us a little about yourself and the kind of contribution you have in mind. We’ll use this information to understand what role may be a good fit." />
            <div className="action-aside-note"><Icon>diversity_3</Icon><div><strong>Thoughtful, community-first service</strong><p>Volunteers work alongside local teams and follow agreed guidance, schedules, and safeguarding practices.</p></div></div>
            <p className="action-contact-note">Questions? Call <a href={contactLink}>{contactPhone}</a>.</p>
          </div>
          <form className="action-form-card" onSubmit={submitForm}>
            <div className="action-form-title"><span>Volunteer interest form</span><p>Fields marked with * are required.</p></div>
            <div className="action-field-grid">
              <label>Full name *<input autoComplete="name" name="name" placeholder="Your name" required /></label>
              <label>Email address *<input autoComplete="email" name="email" placeholder="you@example.com" required type="email" /></label>
              <label>Phone number *<input autoComplete="tel" name="phone" placeholder="+234..." required type="tel" /></label>
              <label>City or state *<input autoComplete="address-level2" name="location" placeholder="Where are you based?" required /></label>
              <label className="action-field-full">How would you like to help? *<select defaultValue="" name="area" required><option disabled value="">Choose an area</option><option>Teaching and learning support</option><option>Mentoring and girls’ leadership</option><option>Health and elder care</option><option>Technology and digital skills</option><option>Community outreach and events</option><option>Communications, fundraising, or administration</option><option>Other skills</option></select></label>
              <label>Availability<select defaultValue="" name="availability"><option value="">Select availability</option><option>Weekdays</option><option>Weekends</option><option>Occasional events</option><option>Remote / flexible</option></select></label>
              <label>Relevant experience<input name="experience" placeholder="Optional" /></label>
              <label className="action-field-full">Tell us a little more<textarea name="message" placeholder="Your interests, skills, or questions" rows="4" /></label>
            </div>
            <label className="action-consent"><input required type="checkbox" /><span>I agree that the Foundation may contact me about this volunteer enquiry. *</span></label>
            <button className="action-button action-form-submit" type="submit">Send volunteer enquiry<Icon>arrow_forward</Icon></button>
            <p className="action-form-disclaimer">This form is a front-end demonstration. It does not transmit or store personal information yet.</p>
            {submitted && <div className="action-form-status" role="status"><Icon>info</Icon><p>Your details were validated in this page, but the form is not connected to a submission service. Nothing was sent or saved. Please call <a href={contactLink}>{contactPhone}</a> to register your interest.</p></div>}
          </form>
        </div>
      </div>
    </main>
  )
}

function PartnershipForm() {
  const [submitted, setSubmitted] = useState(false)
  const submitForm = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="action-main action-form-main">
      <div className="action-content-wrap">
        <a className="action-back-link" href="/get-involved"><Icon>arrow_back</Icon>All ways to get involved</a>
        <div className="action-form-layout">
          <div className="action-form-aside"><PageIntro label="Partnership inquiry" title={<>Let’s build impact,<br /><em>together.</em></>} description="We welcome organizations, institutions, and community groups interested in practical, transparent partnerships." />
            <div className="action-aside-note"><Icon>handshake</Icon><div><strong>Start with shared priorities</strong><p>We’ll explore goals, roles, resources, and how progress can be communicated clearly.</p></div></div>
            <p className="action-contact-note">Prefer a conversation? Call <a href={contactLink}>{contactPhone}</a>.</p>
          </div>
          <form className="action-form-card" onSubmit={submitForm}>
            <div className="action-form-title"><span>Partnership inquiry form</span><p>Fields marked with * are required.</p></div>
            <div className="action-field-grid">
              <label>Organization name *<input autoComplete="organization" name="organization" placeholder="Organization or company" required /></label>
              <label>Your name *<input autoComplete="name" name="name" placeholder="Contact person" required /></label>
              <label>Work email *<input autoComplete="email" name="email" placeholder="you@organization.org" required type="email" /></label>
              <label>Phone number<input autoComplete="tel" name="phone" placeholder="+234..." type="tel" /></label>
              <label className="action-field-full">Partnership interest *<select defaultValue="" name="interest" required><option disabled value="">Choose an area</option><option>Program funding or sponsorship</option><option>Education and youth development</option><option>Health and elder care</option><option>Skills, technology, or training</option><option>Community infrastructure</option><option>Staff volunteering or pro bono support</option><option>Other</option></select></label>
              <label className="action-field-full">How would you like to collaborate? *<textarea name="message" placeholder="Share your goals, proposed contribution, or questions" required rows="5" /></label>
            </div>
            <button className="action-button action-form-submit" type="submit">Send partnership inquiry<Icon>arrow_forward</Icon></button>
            <p className="action-form-disclaimer">This form is a front-end demonstration. It does not transmit or store personal information yet.</p>
            {submitted && <div className="action-form-status" role="status"><Icon>info</Icon><p>Your inquiry details were validated in this page, but no information was sent or saved. Please call <a href={contactLink}>{contactPhone}</a> to speak with the Foundation.</p></div>}
          </form>
        </div>
      </div>
    </main>
  )
}

function DonationForm() {
  const [method, setMethod] = useState('opay')
  const [submitted, setSubmitted] = useState(false)
  const submitForm = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  const paymentMethods = [
    { id: 'opay', icon: 'account_balance', title: 'OPay bank transfer', description: 'Request verified transfer instructions from our team.' },
    { id: 'paystack', icon: 'payments', title: 'Paystack payment', description: 'Request a secure, transaction-specific payment account.' },
    { id: 'monthly', icon: 'event_repeat', title: 'Monthly automatic giving', description: 'Set up recurring support through a secure authorization flow.' },
  ]
  const guidance = {
    opay: { title: 'OPay transfer', text: 'We do not publish unverified transfer details here. Contact the Foundation to confirm its official account name, number, and bank before sending money.' },
    paystack: { title: 'Paystack payment', text: 'A transaction-specific virtual account or secure checkout must be generated by a live Paystack integration. No account number or payment link is generated on this page.' },
    monthly: { title: 'Monthly automatic giving', text: 'Recurring deductions require a secure Paystack subscription and your explicit authorization. This page does not collect card details or set up automatic charges.' },
  }

  return (
    <main className="action-main action-form-main donation-page-main">
      <div className="action-content-wrap">
        <a className="action-back-link" href="/get-involved"><Icon>arrow_back</Icon>All ways to get involved</a>
        <div className="donation-page-heading"><PageIntro label="Support community-led work" title={<>Give with care.<br /><em>Make your impact count.</em></>} description="Choose how you would like to contribute and share your preferred amount. We’ll help you confirm a secure, verified way to give." /></div>
        <div className="donation-layout">
          <form className="action-form-card donation-form-card-new" onSubmit={submitForm}>
            <div className="action-form-title"><span>Your donation details</span><p>Fields marked with * are required.</p></div>
            <div className="action-field-grid">
              <label>Full name *<input autoComplete="name" name="name" placeholder="Your name" required /></label>
              <label>Email address *<input autoComplete="email" name="email" placeholder="you@example.com" required type="email" /></label>
              <label>Phone number *<input autoComplete="tel" name="phone" placeholder="+234..." required type="tel" /></label>
              <label>Amount (NGN) *<div className="action-amount-input"><span>₦</span><input min="100" name="amount" placeholder="25,000" required type="number" /></div></label>
              <label className="action-field-full">What would you like to support?<select defaultValue="General community programs" name="purpose"><option>General community programs</option><option>Education and girls’ leadership</option><option>Youth skills and livelihoods</option><option>Elder care and wellbeing</option><option>Community infrastructure</option></select></label>
            </div>
            <fieldset className="payment-methods"><legend>Choose a giving method *</legend><div className="payment-method-list">{paymentMethods.map((payment) => <label className={method === payment.id ? 'payment-method selected' : 'payment-method'} key={payment.id}><input checked={method === payment.id} name="payment-method" onChange={() => { setMethod(payment.id); setSubmitted(false) }} type="radio" value={payment.id} /><span className="payment-method-icon"><Icon>{payment.icon}</Icon></span><span className="payment-method-copy"><strong>{payment.title}</strong><small>{payment.description}</small></span><Icon className="payment-method-check">check_circle</Icon></label>)}</div></fieldset>
            <div className="payment-guidance"><Icon>info</Icon><div><strong>{guidance[method].title}</strong><p>{guidance[method].text}</p></div></div>
            <label className="action-consent"><input required type="checkbox" /><span>I understand this form does not process a payment or authorize a debit. *</span></label>
            <button className="action-button action-form-submit" type="submit">Continue with {paymentMethods.find((payment) => payment.id === method)?.title}<Icon>arrow_forward</Icon></button>
            <p className="action-form-disclaimer">Never enter or share your card number, PIN, password, or one-time passcode on this website.</p>
            {submitted && <div className="action-form-status" role="status"><Icon>info</Icon><p>Your donation details were validated, but no payment was made and your information was not sent or saved. To proceed with verified instructions, call <a href={contactLink}>{contactPhone}</a>. {method === 'monthly' ? 'Automatic monthly deductions are not available until secure recurring-payment setup is connected.' : method === 'paystack' ? 'A Paystack account or checkout link must be generated by the Foundation through its secure integration.' : 'Please confirm the official OPay account details directly with the Foundation before transferring.'}</p></div>}
          </form>
          <aside className="donation-trust-panel"><span className="donation-trust-icon"><Icon>verified_user</Icon></span><span className="action-eyebrow">Safe, transparent giving</span><h2>Your confidence matters.</h2><p>We want every supporter to know how to give safely and what happens next.</p><ul><li><Icon>check_circle</Icon>Confirm account details directly with our team.</li><li><Icon>check_circle</Icon>Ask for updates on the program you support.</li><li><Icon>check_circle</Icon>Keep your transaction receipt for your records.</li></ul><div className="donation-contact-box"><strong>Need help completing a gift?</strong><a href={contactLink}><Icon>call</Icon>{contactPhone}</a></div></aside>
        </div>
      </div>
    </main>
  )
}

function GetInvolvedPage() {
  const path = window.location.pathname.replace(/\/$/, '') || '/get-involved'

  useEffect(() => {
    const previousTitle = document.title
    document.title = pageTitles[path] ?? pageTitles['/get-involved']
    window.scrollTo({ top: 0, behavior: 'instant' })
    return () => { document.title = previousTitle }
  }, [path])

  return (
    <div className="action-page">
      <ActionHeader current={path} />
      {path === '/volunteer' ? <VolunteerForm /> : path === '/partner' ? <PartnershipForm /> : path === '/donate' ? <DonationForm /> : <InvolvementHub />}
      <ActionFooter />
    </div>
  )
}

export default GetInvolvedPage
