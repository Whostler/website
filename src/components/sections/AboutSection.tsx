import { companyContent } from "@/content/company";

export function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-heading">
      <div className="container about-panel">
        <div>
          <p className="eyebrow">
            <span></span> Why Whostler
          </p>
          <h2 id="about-heading">{companyContent.aboutHeading}</h2>
        </div>
        <div className="about-copy">
          {companyContent.aboutParagraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <blockquote className="mission">{companyContent.mission}</blockquote>
          <a className="text-link" href="#contact">
            Tell us what you are building <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="principles">
          {companyContent.whyDifferentiators.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
