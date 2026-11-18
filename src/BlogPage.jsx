import { useEffect, useMemo, useState } from 'react'
import './BlogPage.css'

const articles = [
  {
    slug: 'education-beyond-the-classroom',
    category: 'Education',
    title: 'Education that reaches beyond the classroom',
    excerpt: 'A child’s opportunity to learn depends on more than a place at a desk. Here are practical ways families, schools, and partners can help learning continue.',
    image: '/images/school-outreach-hall.png',
    alt: 'Students gathered for a community education outreach',
    readTime: '5 min read',
    featured: true,
    paragraphs: [
      'A supportive learning environment is built from many small, connected things: a safe place to study, books that are ready to use, an adult who notices when a learner is falling behind, and encouragement to keep asking questions. When one of these pieces is missing, a child may need extra support to stay engaged.',
      'Families and schools can begin with a simple conversation. Ask learners what makes attending and completing schoolwork difficult. Work with teachers to identify practical needs, agree on a manageable next step, and check in regularly. Listening first helps support respond to the learner rather than assumptions about what they need.',
      'Community groups and sponsors can help by supporting learning materials, tutoring, school readiness, and safe spaces for study. The most useful contribution is one shaped with educators and families, with clear expectations and a way to understand whether it is helping.',
    ],
    takeaways: ['Ask learners and teachers what is getting in the way.', 'Pair materials with encouragement, mentoring, and follow-up.', 'Agree on a clear goal before committing support.'],
  },
  {
    slug: 'girls-confidence-and-leadership',
    category: 'Girls & Young Women',
    title: 'Make room for girls to lead',
    excerpt: 'Confidence grows when girls are trusted with meaningful opportunities, supportive mentors, and the space to share their ideas.',
    image: '/images/childrens-day-outreach.png',
    alt: 'Children and families gathered at a community event',
    readTime: '4 min read',
    paragraphs: [
      'Leadership is not reserved for a few naturally outspoken people. It can be practiced through everyday chances to make decisions, solve problems, speak in a group, and see an idea through. Girls benefit when these opportunities are offered consistently and their contributions are taken seriously.',
      'Mentors can help by asking open questions, sharing useful feedback, and making introductions to new experiences. A good mentor does not decide a young person’s path for her; she helps her explore options and build the confidence to choose for herself.',
      'Schools and community organizations can make participation more accessible by setting clear group expectations, inviting quieter voices into discussions without pressure, and celebrating collaboration as well as individual achievement. Ask girls what would help them feel safe and included, then act on what they say.',
    ],
    takeaways: ['Offer real responsibilities, not only symbolic roles.', 'Make mentoring consistent and guided by the young person’s goals.', 'Create welcoming spaces where every participant can contribute.'],
  },
  {
    slug: 'community-led-projects-that-last',
    category: 'Community Partnership',
    title: 'What helps a community project last?',
    excerpt: 'Long-term progress starts with shared priorities, local ownership, and an honest plan for what happens after launch day.',
    image: '/images/community-workshop.png',
    alt: 'Community members and foundation partners at a workshop',
    readTime: '6 min read',
    paragraphs: [
      'A project is more likely to remain useful when the people who will live with its results help shape it from the start. That means making time to hear different perspectives, including people who are often left out of planning, and agreeing together on which need to address first.',
      'Before activities begin, partners can clarify roles, resources, decision-making, and how progress will be reviewed. A modest plan with responsibilities everyone understands is more valuable than ambitious promises without a clear owner. Make room for local knowledge and adapt when circumstances change.',
      'After launch, keep communication open. Share what is working, what is delayed, and what has been learned. A project’s success is not only the moment it opens; it is whether the community can use, maintain, and shape it over time.',
    ],
    takeaways: ['Set priorities with the community, not just for it.', 'Agree on responsibilities and maintenance before launch.', 'Share progress honestly and make adjustments together.'],
  },
  {
    slug: 'dignified-support-for-older-people',
    category: 'Elder Care',
    title: 'Care that protects dignity as well as wellbeing',
    excerpt: 'Thoughtful elder support begins with respect: ask what matters to each person and make room for their choices, relationships, and voice.',
    image: '/images/field-seminar.png',
    alt: 'Community partners gathered during a foundation event',
    readTime: '4 min read',
    paragraphs: [
      'Practical support can make a difference, but the way it is offered matters too. Older people should be treated as individuals with preferences, knowledge, and agency—not as a single group with identical needs. Whenever possible, ask directly what kind of help is welcome.',
      'A respectful check-in can include listening without rushing, explaining available options clearly, and asking permission before sharing someone’s story or photograph. For health-related concerns, connect people with qualified care providers rather than trying to replace professional advice.',
      'Communities can strengthen wellbeing through reliable connections: family contact, neighbor visits, accessible information, and referral pathways to local services. Small acts of consistency help people feel included while preserving their independence and privacy.',
    ],
    takeaways: ['Ask before offering help, taking photos, or sharing personal details.', 'Support choice and independence wherever possible.', 'Refer health concerns to qualified professionals.'],
  },
  {
    slug: 'volunteering-with-purpose',
    category: 'Volunteering',
    title: 'Volunteer with purpose: start by listening',
    excerpt: 'The most helpful volunteer contribution is not always the biggest one. It is the one that matches a community’s priorities and can be delivered reliably.',
    image: '/images/youth-community-outreach.png',
    alt: 'Young people and community members at an outreach gathering',
    readTime: '5 min read',
    paragraphs: [
      'Before signing up for a project, learn what the host organization actually needs. A short conversation can clarify the role, time commitment, skills required, safeguarding expectations, and who will support you while you serve.',
      'Bring humility as well as expertise. Volunteers are guests in someone else’s community, and local people understand their context best. Share skills when invited, follow agreed processes, and avoid making promises on behalf of an organization or community.',
      'Reliability matters. If you commit to a schedule, communicate early if plans change. After the activity, ask for feedback and reflect on what you learned. Responsible volunteering is based on mutual respect, not a desire to be seen as a rescuer.',
    ],
    takeaways: ['Confirm the role, time, and safeguarding guidance first.', 'Follow local leadership and avoid promises you cannot keep.', 'Be dependable, open to feedback, and respectful of privacy.'],
  },
  {
    slug: 'giving-with-accountability',
    category: 'Giving & Impact',
    title: 'Questions to ask before supporting a cause',
    excerpt: 'Thoughtful giving begins with clear questions about purpose, accountability, community involvement, and how you will hear about progress.',
    image: '/images/foundation-partners.png',
    alt: 'Foundation partners gathered at a community event',
    readTime: '5 min read',
    paragraphs: [
      'Before making a contribution, understand what the organization is asking you to support. Is the request for a specific activity or general operating costs? What outcome is it intended to contribute to, and over what period? Clear answers help you decide whether the work aligns with your priorities.',
      'Ask how local communities participate in planning and how the organization handles questions or concerns. You can also ask what updates donors should expect and how the organization will share challenges as well as successes. Responsible reporting should help supporters understand the work without compromising people’s privacy.',
      'If you are considering a larger or ongoing partnership, agree on communication, responsibilities, and any restrictions before funds are transferred. A respectful partnership allows organizations to do the work they are best placed to do while keeping supporters informed.',
    ],
    takeaways: ['Clarify the purpose and timeframe of a contribution.', 'Ask how community priorities and feedback shape the work.', 'Agree on reporting and communication expectations in advance.'],
  },
]

const categories = ['All topics', ...new Set(articles.map((article) => article.category))]

function Icon({ children, filled = false }) {
  return <span aria-hidden="true" className={`material-symbols-outlined${filled ? ' fill-icon' : ''}`}>{children}</span>
}

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All topics')
  const [search, setSearch] = useState('')
  const [selectedArticle, setSelectedArticle] = useState(() => {
    const slug = new URLSearchParams(window.location.search).get('article')
    return articles.find((article) => article.slug === slug) ?? null
  })

  useEffect(() => {
    const syncArticleFromUrl = () => {
      const slug = new URLSearchParams(window.location.search).get('article')
      setSelectedArticle(articles.find((article) => article.slug === slug) ?? null)
    }
    window.addEventListener('popstate', syncArticleFromUrl)
    return () => window.removeEventListener('popstate', syncArticleFromUrl)
  }, [])

  useEffect(() => {
    const previousTitle = document.title
    document.title = selectedArticle
      ? `${selectedArticle.title} | Ometere Hope Alive Foundation`
      : 'Blog & Community Insights | Ometere Hope Alive Foundation'
    window.scrollTo({ top: 0, behavior: 'instant' })
    return () => { document.title = previousTitle }
  }, [selectedArticle])

  const filteredArticles = useMemo(() => {
    const query = search.trim().toLowerCase()
    return articles.filter((article) => {
      const matchesCategory = activeCategory === 'All topics' || article.category === activeCategory
      const matchesSearch = !query || `${article.title} ${article.excerpt} ${article.category} ${article.takeaways.join(' ')}`.toLowerCase().includes(query)
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, search])

  const openArticle = (article) => {
    setSelectedArticle(article)
    window.history.pushState({ blogArticle: article.slug }, '', `/blog?article=${article.slug}`)
  }

  const returnToArticles = () => {
    setSelectedArticle(null)
    window.history.pushState({}, '', '/blog')
  }

  return (
    <div className="blog-page">
      <header className="blog-header">
        <div className="blog-header-inner">
          <a aria-label="Ometere Hope Alive Foundation home" className="blog-brand" href="/">
            <span aria-hidden="true" className="brand-emblem">OH</span>
            <span><strong>Ometere Hope Alive</strong><small>Empowering Generations • Nigeria</small></span>
          </a>
          <nav aria-label="Main navigation" className="blog-nav">
            <a href="/">Home</a><a href="/about">About</a><a aria-current="page" className="active" href="/blog">Blog</a><a href="/#programs">Programs</a>
          </nav>
          <a className="blog-header-cta" href="/get-involved">Get involved<Icon>arrow_forward</Icon></a>
        </div>
      </header>

      <main>
        {selectedArticle ? (
          <article className="blog-article-view">
            <div className="blog-content-wrap">
              <button className="blog-back-link" onClick={returnToArticles} type="button"><Icon>arrow_back</Icon>All articles</button>
              <div className="blog-article-heading"><span className="blog-category-label">{selectedArticle.category}</span><h1>{selectedArticle.title}</h1><p>{selectedArticle.excerpt}</p><span className="blog-read-time"><Icon>schedule</Icon>{selectedArticle.readTime}</span></div>
              <img className="blog-article-image" src={selectedArticle.image} alt={selectedArticle.alt} />
              <div className="blog-article-body">
                {selectedArticle.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                <aside className="blog-takeaways"><h2><Icon>lightbulb</Icon>Ideas to take forward</h2><ul>{selectedArticle.takeaways.map((item) => <li key={item}><Icon>check_circle</Icon>{item}</li>)}</ul></aside>
                <p className="blog-editorial-note">These articles offer general community development perspectives. They are not a substitute for professional medical, legal, or financial advice.</p>
              </div>
              <div className="blog-article-footer"><span>Want to help turn ideas into action?</span><a href="/get-involved">Explore ways to get involved<Icon>arrow_forward</Icon></a></div>
            </div>
          </article>
        ) : (
          <>
            <section className="blog-hero">
              <div className="blog-content-wrap blog-hero-inner">
                <div className="blog-hero-copy"><span className="blog-eyebrow"><Icon>auto_stories</Icon>Ideas, stories & practical guides</span><h1>Learn together.<br /><em>Build a brighter future.</em></h1><p>Thoughtful reads on education, community partnership, dignity, and ways to create lasting opportunities—rooted in the belief that progress is strongest when people shape it together.</p><a className="blog-hero-link" href="#latest-articles">Explore the articles<Icon>south</Icon></a></div>
                <div className="blog-hero-feature"><img src="/images/school-community-gathering.png" alt="Students and community members gathered for an education event" /><div className="blog-hero-feature-caption"><span>Featured guide</span><strong>Education that reaches beyond the classroom</strong></div></div>
              </div>
            </section>

            <section className="blog-listing" id="latest-articles">
              <div className="blog-content-wrap">
                <div className="blog-listing-heading"><div><span className="blog-section-kicker">The Ometere journal</span><h2>Useful ideas for stronger communities</h2><p>Explore practical perspectives for families, volunteers, partners, and people who care about community-led change.</p></div><label className="blog-search"><Icon>search</Icon><span className="sr-only">Search articles</span><input aria-label="Search articles" onChange={(event) => setSearch(event.target.value)} placeholder="Search topics..." type="search" value={search} /></label></div>
                <div aria-label="Filter articles by topic" className="blog-category-filters" role="group">{categories.map((category) => <button aria-pressed={activeCategory === category} className={activeCategory === category ? 'selected' : ''} key={category} onClick={() => setActiveCategory(category)} type="button">{category}</button>)}</div>
                {filteredArticles.length ? <div className="blog-card-grid">{filteredArticles.map((article) => <article className={`blog-card${article.featured ? ' blog-card-featured' : ''}`} key={article.slug}>
                  <div className="blog-card-image"><img loading="lazy" src={article.image} alt={article.alt} /><span>{article.category}</span></div>
                  <div className="blog-card-copy"><div className="blog-card-meta"><span><Icon>schedule</Icon>{article.readTime}</span><span>Practical guide</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><button onClick={() => openArticle(article)} type="button">Read article<Icon>arrow_forward</Icon></button></div>
                </article>)}</div> : <div className="blog-empty-state"><Icon>search_off</Icon><h3>No articles found</h3><p>Try a different search term or choose another topic.</p><button onClick={() => { setSearch(''); setActiveCategory('All topics') }} type="button">Clear filters</button></div>}
              </div>
            </section>

            <section className="blog-invitation"><div className="blog-content-wrap blog-invitation-inner"><div><span className="blog-section-kicker">Good work grows through partnership</span><h2>Bring your ideas and energy to the work.</h2><p>Whether you have time, specialist skills, or a partnership idea, there is more than one way to support community-led progress.</p></div><a href="/get-involved">Get involved<Icon>arrow_forward</Icon></a></div></section>
          </>
        )}
      </main>

      <footer className="blog-footer"><div className="blog-content-wrap blog-footer-inner"><a aria-label="Ometere Hope Alive Foundation home" className="blog-brand" href="/"><span aria-hidden="true" className="brand-emblem">OH</span><span><strong>Ometere Hope Alive</strong><small>Empowering Generations • Nigeria</small></span></a><p>Building brighter futures through education, dignity, and community partnership.</p><a className="blog-footer-home" href="/">Return to home<Icon>arrow_forward</Icon></a><small>© {new Date().getFullYear()} Ometere Hope Alive Foundation. All rights reserved.</small></div></footer>
    </div>
  )
}

export default BlogPage
