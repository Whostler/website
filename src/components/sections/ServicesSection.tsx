import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <section className="section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">
              <span></span> Capabilities
            </p>
            <h2 id="services-heading">
              Infrastructure for what
              <br />
              your product becomes next.
            </h2>
          </div>
          <p>
            Focused technical work across the layers that determine reliability,
            performance, and long-term maintainability.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.id}>
              <div className="card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i aria-hidden="true">↗</i>
              </div>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
              <p className="card-caps">{service.capabilities.slice(0, 5).join(" · ")}</p>
              {service.note ? <p className="card-note">{service.note}</p> : null}
              <div className="card-line"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
