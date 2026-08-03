"use client";

import { FormEvent, useState } from "react";

const services = [
  { n: "01", title: "Cloud Infrastructure", text: "Secure, observable cloud environments designed for resilient production workloads." },
  { n: "02", title: "Backend & APIs", text: "Typed, documented service layers that remain dependable as your product grows." },
  { n: "03", title: "AI Agent Systems", text: "Purpose-built agent workflows with controlled tools, context, guardrails, and evaluation." },
  { n: "04", title: "Systems Integration", text: "Reliable connections between platforms, data sources, webhooks, and operational tools." },
  { n: "05", title: "Blockchain Solutions", text: "Practical on-chain integrations, smart-contract interfaces, and Web3 infrastructure." },
  { n: "06", title: "Technical Support", text: "Diagnosis, maintenance, documentation, and thoughtful improvement of existing systems." },
];

const tech = [
  ["Backend", "Node.js", "TypeScript", "Python", "REST", "GraphQL"],
  ["Cloud & Data", "Cloudflare", "AWS", "PostgreSQL", "Redis", "Docker"],
  ["AI Systems", "LLM APIs", "RAG", "Agents", "Vector Search", "Evaluation"],
  ["Delivery", "CI/CD", "Observability", "Testing", "Security", "Documentation"],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#top" aria-label="Whostler Services home">
            <img src="/whostler-logo.png" alt="Whostler — professional webhost services" />
          </a>
          <button className="menu-button" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
            <span className="sr-only">Toggle navigation</span><i></i><i></i>
          </button>
          <nav id="site-nav" className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
            <a href="#services" onClick={() => setOpen(false)}>Services</a>
            <a href="#approach" onClick={() => setOpen(false)}>Approach</a>
            <a href="#technology" onClick={() => setOpen(false)}>Technology</a>
            <a href="#about" onClick={() => setOpen(false)}>About</a>
            <a className="button button-small" href="#contact" onClick={() => setOpen(false)}>Discuss a project <span>↗</span></a>
          </nav>
        </div>
      </header>

      <section className="hero section" id="top">
        <div className="grid-backdrop" aria-hidden="true"></div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow"><span></span> Production systems / engineered carefully</p>
            <h1>Backend systems<br />engineered for <em>production.</em></h1>
            <p className="hero-lede">Whostler designs and builds the technical foundations behind reliable digital products — from APIs and cloud infrastructure to AI agents and complex integrations.</p>
            <div className="hero-actions">
              <a className="button" href="#contact">Start a technical conversation <span>↗</span></a>
              <a className="text-link" href="#services">Explore capabilities <span>↓</span></a>
            </div>
            <ul className="trust-list" aria-label="Core qualities">
              <li><b>01</b> Production-minded</li><li><b>02</b> Security-conscious</li><li><b>03</b> Clearly documented</li>
            </ul>
          </div>

          <div className="system-map" aria-label="System architecture illustration">
            <div className="map-topline"><span>WHOSTLER / SYSTEM VIEW</span><span className="status">● OPERATIONAL</span></div>
            <div className="map-field">
              <div className="map-line line-a"></div><div className="map-line line-b"></div><div className="map-line line-c"></div>
              <div className="node node-client"><small>ENTRY</small><strong>Client</strong><span>HTTPS</span></div>
              <div className="node node-api"><small>CORE</small><strong>API Gateway</strong><span>Authenticated</span></div>
              <div className="node node-data"><small>STATE</small><strong>Data Layer</strong><span>Encrypted</span></div>
              <div className="node node-agent"><small>INTELLIGENCE</small><strong>Agent Runtime</strong><span>Guardrailed</span></div>
              <div className="map-pulse p1"></div><div className="map-pulse p2"></div><div className="map-pulse p3"></div>
            </div>
            <div className="map-footer"><span>LATENCY <b>48ms</b></span><span>UPTIME <b>99.99%</b></span><span>REGION <b>GLOBAL</b></span></div>
          </div>
        </div>
      </section>

      <section className="section" id="services">
        <div className="container">
          <div className="section-heading split-heading">
            <div><p className="eyebrow"><span></span> Capabilities</p><h2>Infrastructure for what<br />your product becomes next.</h2></div>
            <p>Focused technical work across the layers that determine reliability, performance, and long-term maintainability.</p>
          </div>
          <div className="service-grid">
            {services.map((service) => <article className="service-card" key={service.n}><div className="card-top"><span>{service.n}</span><i>↗</i></div><h3>{service.title}</h3><p>{service.text}</p><div className="card-line"></div></article>)}
          </div>
        </div>
      </section>

      <section className="section approach" id="approach">
        <div className="container">
          <div className="section-heading"><p className="eyebrow"><span></span> Engineering approach</p><h2>Clarity at every layer.</h2><p>We turn ambiguity into a controlled technical path, with decisions that remain legible after delivery.</p></div>
          <ol className="steps">
            <li><span>01</span><div><small>UNDERSTAND</small><h3>Frame the system</h3><p>Goals, constraints, risks, integrations, and the reality of your current stack.</p></div></li>
            <li><span>02</span><div><small>DESIGN</small><h3>Choose deliberately</h3><p>Architecture and delivery plans shaped around the product, not technology fashion.</p></div></li>
            <li><span>03</span><div><small>BUILD</small><h3>Implement in layers</h3><p>Testable increments, observable behavior, and security considered from the start.</p></div></li>
            <li><span>04</span><div><small>OPERATE</small><h3>Ship with confidence</h3><p>Documentation, deployment, monitoring, and a clear operational handoff.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="section" id="technology">
        <div className="container tech-layout">
          <div className="section-heading"><p className="eyebrow"><span></span> Technical range</p><h2>A modern stack.<br />A pragmatic mindset.</h2><p>Tools are selected for fit, maturity, and operational value. No stack is treated as a religion.</p></div>
          <div className="tech-matrix">
            {tech.map(([title, ...items]) => <div className="tech-row" key={title}><h3>{title}</h3><div>{items.map(item => <span key={item}>{item}</span>)}</div></div>)}
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container about-panel">
          <div><p className="eyebrow"><span></span> Why Whostler</p><h2>Engineering that respects the system — and the people who depend on it.</h2></div>
          <div className="about-copy"><p>Whostler is a technical services practice for teams that need sound engineering judgment alongside implementation.</p><p>We favor stable foundations, explicit trade-offs, disciplined delivery, and direct communication. The result is software that is easier to understand, safer to operate, and ready to evolve.</p><a className="text-link" href="#contact">Tell us what you are building <span>↗</span></a></div>
          <div className="principles"><span>Reliable by design</span><span>Backend-first thinking</span><span>Security in context</span><span>Documentation included</span></div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div className="container contact-grid">
          <div className="contact-intro"><p className="eyebrow"><span></span> Start a conversation</p><h2>Bring us the hard technical problem.</h2><p>Share a little context. We will respond with thoughtful questions and a clear next step.</p><div className="contact-note"><small>GOOD STARTING POINTS</small><span>New backend architecture</span><span>Infrastructure modernization</span><span>AI agent implementation</span><span>Complex platform integration</span></div></div>
          <form className="contact-form" onSubmit={submit}>
            <div className="form-row"><label>Name<input required name="name" autoComplete="name" placeholder="Your name" /></label><label>Work email<input required type="email" name="email" autoComplete="email" placeholder="you@company.com" /></label></div>
            <label>Area of interest<select name="interest" defaultValue=""><option value="" disabled>Select a service</option><option>Cloud infrastructure</option><option>Backend & APIs</option><option>AI agent systems</option><option>Systems integration</option><option>Blockchain solutions</option><option>Technical support</option></select></label>
            <label>Project context<textarea required name="message" rows={5} placeholder="What are you building, improving, or trying to solve?"></textarea></label>
            <button className="button submit-button" type="submit">Send project context <span>↗</span></button>
            <p className="form-meta">By submitting, you agree that we may use these details to respond to your inquiry.</p>
            {sent && <p className="success" role="status">Thank you — your project context is ready. Form delivery will be connected during production setup.</p>}
          </form>
        </div>
      </section>

      <footer><div className="container footer-main"><div><img src="/whostler-logo.png" alt="Whostler" /><p>Backend, cloud, AI, and integration systems engineered for production.</p></div><div><small>NAVIGATE</small><a href="#services">Services</a><a href="#approach">Approach</a><a href="#technology">Technology</a><a href="#about">About</a></div><div><small>CONTACT</small><a href="#contact">Project inquiry</a><span>Remote / Worldwide</span></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Whostler Services</span><span>Systems, thoughtfully engineered.</span></div></footer>
    </main>
  );
}
