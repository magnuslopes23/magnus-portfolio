import { Nav } from "@/components/Nav";
import { ContactForm } from "@/components/ContactForm";
import { ProjectVisual } from "@/components/ProjectVisual";
import { ArrowRight, ArrowUpRight, Check, Github } from "@/components/Icons";
import { projects, proofPoints, services, siteConfig, skillGroups, strengths, workProcess } from "@/data/site";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://magnus-lopes.netlify.app",
    sameAs: [siteConfig.social.github],
    knowsAbout: skillGroups.flatMap((group) => group.skills)
  };

  return (
    <>
      <Nav />
      <main id="top">
        <section className="hero section-pad" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="availability"><span className="status-dot" />{siteConfig.availability}</div>
              <h1 id="hero-title">Software that removes manual work and makes operations <span className="gradient-text">easier to scale.</span></h1>
              <p className="hero-lede">{siteConfig.intro}</p>
              <div className="hero-actions">
                <a className="button primary" href="#work">View selected work <ArrowRight aria-hidden="true" /></a>
                <a className="button secondary" href="#contact">Start a conversation</a>
              </div>
              <div className="hero-meta">
                <span>Automation</span><span>Data systems</span><span>Internal tools</span><span>APIs</span>
              </div>
            </div>

            <div className="hero-evidence" aria-label="Engineering focus">
              <div className="evidence-kicker">What I work on</div>
              <div className="evidence-list">
                <div><span>01</span><strong>Manual workflows</strong><p>Turn repetitive operational work into controlled automation.</p></div>
                <div><span>02</span><strong>Disconnected data</strong><p>Build pipelines and reporting flows that are easier to trust.</p></div>
                <div><span>03</span><strong>Internal systems</strong><p>Create tools and integrations around real business processes.</p></div>
              </div>
              <a className="text-link" href={siteConfig.social.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight aria-hidden="true" /></a>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Capabilities overview">
          <div className="container proof-grid">
            {proofPoints.map((item) => <div key={item.label} className="proof-item"><strong>{item.value}</strong><span>{item.label}</span></div>)}
          </div>
        </section>

        <section id="work" className="section-pad work-section">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="eyebrow">Selected work</span><h2>Proof before promises.</h2></div>
              <p>Representative systems focused on operational problems, engineering decisions and the resulting workflow improvement.</p>
            </div>

            <div className="project-list">
              {projects.map((project, index) => (
                <article className={`project-card accent-${project.accent}`} key={project.id}>
                  <ProjectVisual id={project.id} index={index} title={project.title} />
                  <div className="project-content">
                    <span className="eyebrow">{project.eyebrow}</span>
                    <h3>{project.title}</h3>
                    <p className="project-summary">{project.summary}</p>
                    <dl>
                      <div><dt>Challenge</dt><dd>{project.challenge}</dd></div>
                      <div><dt>Approach</dt><dd>{project.solution}</dd></div>
                      <div><dt>Outcome</dt><dd>{project.result}</dd></div>
                    </dl>
                    <div className="chip-set">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section-pad">
          <div className="container">
            <div className="section-heading split-heading">
              <div><span className="eyebrow">How I can help</span><h2>Three ways to engage.</h2></div>
              <p>Start with the business problem. The technical shape comes after the constraints are understood.</p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="section-pad section-surface">
          <div className="container about-grid">
            <div className="section-heading">
              <span className="eyebrow">About</span>
              <h2>I work where software meets operations.</h2>
              <p className="about-lede">My strongest work starts with a process that is manual, fragile or hard to reason about and ends with a system that people can operate with confidence.</p>
            </div>
            <div className="about-body">
              <p>I favour pragmatic architecture: explicit business rules, clear interfaces, observable workflows and the smallest amount of technology needed to solve the problem well.</p>
              <div className="strength-list">
                {strengths.map((strength) => <div key={strength}><Check aria-hidden="true" /><span>{strength}</span></div>)}
              </div>
            </div>
          </div>

          <div className="container skills-wrap">
            <div className="skills-label">Technology</div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="chip-set">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad process-section">
          <div className="container">
            <div className="section-heading compact-heading">
              <span className="eyebrow">Working process</span>
              <h2>Understand first. Build second.</h2>
            </div>
            <div className="process-grid">
              {workProcess.map((item) => (
                <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad contact-section">
          <div className="container contact-shell">
            <div className="contact-copy">
              <span className="eyebrow">Start a conversation</span>
              <h2>Have a manual process, disconnected system or technical problem?</h2>
              <p>Send the problem as it exists today. A polished brief is not required.</p>
              <div className="contact-meta">
                <span>{siteConfig.location} · Remote-friendly</span>
                <a href={siteConfig.social.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" />GitHub</a>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <span>© {new Date().getFullYear()} {siteConfig.name}</span>
          <span>{siteConfig.role} · Ireland</span>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </>
  );
}
