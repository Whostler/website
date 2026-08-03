import { companyContent } from "@/content/company";

export function HeroSection() {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-heading">
      <div className="grid-backdrop" aria-hidden="true"></div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span></span> Production systems / engineered carefully
          </p>
          <h1 id="hero-heading">
            Backend systems
            <br />
            engineered for <em>production.</em>
          </h1>
          <p className="hero-lede">{companyContent.heroCopy}</p>
          <div className="hero-actions">
            <a className="button" href="#contact">
              Start a technical conversation <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link" href="#services">
              Explore capabilities <span aria-hidden="true">↓</span>
            </a>
          </div>
          <ul className="trust-list" aria-label="Core qualities">
            {companyContent.heroSignals.map((signal, index) => (
              <li key={signal}>
                <b>{String(index + 1).padStart(2, "0")}</b> {signal}
              </li>
            ))}
          </ul>
        </div>

        <div className="system-map" aria-label="System architecture illustration">
          <div className="map-topline">
            <span>WHOSTLER / SYSTEM VIEW</span>
            <span className="status">● CONFIGURED</span>
          </div>
          <div className="map-field">
            <div className="map-line line-a"></div>
            <div className="map-line line-b"></div>
            <div className="map-line line-c"></div>
            <div className="node node-client">
              <small>Entry</small>
              <strong>Client</strong>
              <span>HTTPS</span>
            </div>
            <div className="node node-api">
              <small>Core</small>
              <strong>API Gateway</strong>
              <span>Authenticated</span>
            </div>
            <div className="node node-data">
              <small>State</small>
              <strong>Data Layer</strong>
              <span>Encrypted</span>
            </div>
            <div className="node node-agent">
              <small>Intelligence</small>
              <strong>Agent Runtime</strong>
              <span>Guardrailed</span>
            </div>
            <div className="map-pulse p1"></div>
            <div className="map-pulse p2"></div>
            <div className="map-pulse p3"></div>
          </div>
          <div className="map-footer">
            <span>REST + GRAPHQL</span>
            <span>OBSERVABLE</span>
            <span>DOCUMENTED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
