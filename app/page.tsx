import { Nav } from "@/components/Nav";
import { ContactForm } from "@/components/ContactForm";
import { ArrowRight, ArrowUpRight, Check, Cloud, Code, Database, Github, Layers, Linkedin, Mail } from "@/components/Icons";
import { insights, process, projects, proofPoints, services, siteConfig, skillGroups, strengths, testimonials } from "@/data/site";

const iconMap = [Code, Layers, Database, Cloud];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.com",
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    knowsAbout: skillGroups.flatMap((group) => group.skills)
  };

  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-orb orb-one" aria-hidden="true" />
          <div className="hero-orb orb-two" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="availability"><span className="status-dot" />{siteConfig.availability}</div>
              <h1 id="hero-title">Engineering digital products that <span className="gradient-text">work in the real world.</span></h1>
              <p className="hero-lede">{siteConfig.headline} {siteConfig.intro}</p>
              <div className="hero-actions">
                <a className="button primary" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Book a discovery call <ArrowUpRight aria-hidden="true" /></a>
                <a className="button secondary" href="#work">View selected work <ArrowRight aria-hidden="true" /></a>
              </div>
              <div className="social-row" aria-label="Social links">
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
                <a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
                <a href={`mailto:${siteConfig.email}`} aria-label="Email"><Mail /></a>
                <span>{siteConfig.location}</span>
              </div>
            </div>

            <div className="hero-panel" aria-label="Engineering profile">
              <div className="panel-topline"><span>Engineering profile</span><span className="live-pill">Available</span></div>
              <div className="profile-card">
                <div className="profile-monogram">ML</div>
                <div><p className="profile-name">{siteConfig.name}</p><p className="muted">Software engineering · automation · data · cloud</p></div>
              </div>
              <div className="terminal-card" aria-hidden="true">
                <div className="terminal-head"><span/><span/><span/></div>
                <code><span className="code-muted">const</span> engineer = {'{'}<br/>&nbsp;&nbsp;focus: <span className="code-string">"business outcomes"</span>,<br/>&nbsp;&nbsp;builds: [<span className="code-string">"products"</span>, <span className="code-string">"APIs"</span>, <span className="code-string">"automation"</span>],<br/>&nbsp;&nbsp;default: <span className="code-string">"reliable & maintainable"</span><br/>{'}'};</code>
              </div>
              <div className="metric-row"><div><span>01</span><p>Understand the system</p></div><div><span>02</span><p>Remove unnecessary complexity</p></div><div><span>03</span><p>Ship with operational clarity</p></div></div>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Capabilities overview">
          <div className="container proof-grid">
            {proofPoints.map((item) => <div key={item.label} className="proof-item"><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </section>

        <section id="about" className="section-pad">
          <div className="container two-col">
            <div className="section-heading sticky-heading"><span className="eyebrow">About</span><h2>Software is valuable when it improves how the business actually operates.</h2></div>
            <div className="about-content">
              <p className="large-copy">I work at the intersection of software engineering, automation and data. My strongest work starts with a messy operational problem and ends with a system that people can trust, understand and maintain.</p>
              <p>I favour pragmatic architecture: clear interfaces, explicit business rules, observable workflows and the smallest amount of technology needed to solve the problem well. That makes systems easier to change when the business changes.</p>
              <div className="strength-list">
                {strengths.map((strength) => <div key={strength}><Check aria-hidden="true"/><span>{strength}</span></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section-pad section-surface">
          <div className="container">
            <div className="section-heading heading-row"><div><span className="eyebrow">Services</span><h2>Engineering support from ambiguity to production.</h2></div><p>Engagements can cover a focused technical problem, a complete build, or ongoing delivery support.</p></div>
            <div className="services-grid">
              {services.map((service) => <article className="service-card" key={service.number}><div className="service-number">{service.number}</div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></article>)}
            </div>
          </div>
        </section>

        <section className="section-pad" aria-labelledby="skills-title">
          <div className="container">
            <div className="section-heading centered"><span className="eyebrow">Capabilities</span><h2 id="skills-title">A practical stack for building and operating modern systems.</h2><p>Technology choices are driven by the problem, team context and maintainability—not by trend-chasing.</p></div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => { const Icon = iconMap[index]; return <article className="skill-card" key={group.title}><div className="skill-icon"><Icon aria-hidden="true"/></div><h3>{group.title}</h3><div className="chip-set">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div></article>; })}
            </div>
          </div>
        </section>

        <section id="work" className="section-pad work-section">
          <div className="container">
            <div className="section-heading heading-row"><div><span className="eyebrow">Selected work</span><h2>Case studies built around operational outcomes.</h2></div><p>No inflated vanity metrics. These examples focus on the problem, engineering decisions and concrete change in the workflow.</p></div>
            <div className="project-list">
              {projects.map((project, index) => <article className={`project-card accent-${project.accent}`} key={project.id}>
                <div className="project-visual" aria-hidden="true"><div className="visual-grid"/><div className="project-index">0{index + 1}</div><div className="visual-window"><span/><span/><span/><div className="visual-line wide"/><div className="visual-line"/><div className="visual-line mid"/><div className="visual-blocks"><i/><i/><i/></div></div></div>
                <div className="project-content"><span className="eyebrow">{project.eyebrow}</span><h3>{project.title}</h3><p className="project-summary">{project.summary}</p><dl><div><dt>Challenge</dt><dd>{project.challenge}</dd></div><div><dt>Solution</dt><dd>{project.solution}</dd></div><div><dt>Result</dt><dd>{project.result}</dd></div></dl><div className="chip-set project-tech">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
              </article>)}
            </div>
          </div>
        </section>

        <section id="process" className="section-pad">
          <div className="container">
            <div className="section-heading centered"><span className="eyebrow">Process</span><h2>Structured enough to reduce risk. Lightweight enough to keep moving.</h2></div>
            <div className="process-grid">
              {process.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section-pad section-surface" aria-labelledby="testimonials-title">
          <div className="container">
            <div className="section-heading heading-row"><div><span className="eyebrow">Client proof</span><h2 id="testimonials-title">Trust should be specific and verifiable.</h2></div><p>The cards below are intentionally marked placeholders. Replace them with real quotations only after permission from the client or manager.</p></div>
            <div className="testimonial-grid">
              {testimonials.map((item, index) => <figure className="testimonial-card placeholder-card" key={index}><div className="placeholder-label">Proof placeholder</div><blockquote>“{item.quote}”</blockquote><figcaption><span>{item.name}</span><small>{item.role}</small></figcaption></figure>)}
            </div>
          </div>
        </section>

        <section id="insights" className="section-pad">
          <div className="container">
            <div className="section-heading heading-row"><div><span className="eyebrow">Insights</span><h2>Thinking beyond the implementation.</h2></div><p>Use this section for articles that demonstrate engineering judgement to buyers and hiring managers.</p></div>
            <div className="insight-grid">
              {insights.map((post) => <a className="insight-card" href={post.href} key={post.title}><span>{post.category}</span><h3>{post.title}</h3><p>{post.summary}</p><div>Read insight <ArrowRight aria-hidden="true"/></div></a>)}
            </div>
          </div>
        </section>

        <section className="booking-section section-pad">
          <div className="container booking-card">
            <div><span className="eyebrow">Start a conversation</span><h2>Have a technical problem that needs a clear path forward?</h2><p>A discovery call is for defining the problem, constraints and next useful step. No sales theatre.</p></div>
            <a className="button primary light-button" href={siteConfig.bookingUrl} target="_blank" rel="noreferrer">Schedule 30 minutes <ArrowUpRight aria-hidden="true"/></a>
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="container contact-grid">
            <div className="section-heading"><span className="eyebrow">Contact</span><h2>Send the problem, not a polished brief.</h2><p>Include the current situation, what you want to change and any important constraints. I can work from ambiguity.</p><div className="contact-details"><a href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true"/>{siteConfig.email}</a><span>{siteConfig.location} · Remote-friendly</span></div></div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid"><div><a className="brand footer-brand" href="#top"><span className="brand-mark">ML</span><span className="brand-copy"><span>{siteConfig.name}</span><small>{siteConfig.role}</small></span></a><p>Building reliable software for real business problems.</p></div><div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#work">Work</a><a href="#contact">Contact</a></div><div className="footer-social"><a href={siteConfig.social.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight/></a><a href={siteConfig.social.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight/></a></div></div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} {siteConfig.name}</span><span>Designed for clarity, speed and trust.</span></div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
