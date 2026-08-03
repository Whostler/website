import { technologyGroups } from "@/content/technologies";

export function TechnologiesSection() {
  return (
    <section className="section" id="technologies" aria-labelledby="technologies-heading">
      <div className="container tech-layout">
        <div className="section-heading">
          <p className="eyebrow">
            <span></span> Technical range
          </p>
          <h2 id="technologies-heading">
            A modern stack.
            <br />
            A pragmatic mindset.
          </h2>
          <p>
            Tools are selected for fit, maturity, and operational value. No stack
            is treated as a religion.
          </p>
        </div>
        <div className="tech-matrix">
          {technologyGroups.map((group) => (
            <div className="tech-row" key={group.id}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
