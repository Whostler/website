import { processSteps } from "@/content/process";

const stepLabels = [
  "Understand",
  "Assess",
  "Define",
  "Design",
  "Plan",
  "Build",
  "Validate",
  "Deploy",
  "Document",
  "Operate",
];

export function ApproachSection() {
  return (
    <section className="section approach" id="approach" aria-labelledby="approach-heading">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">
            <span></span> Engineering approach
          </p>
          <h2 id="approach-heading">Clarity at every layer.</h2>
          <p>
            We turn ambiguity into a controlled technical path, with decisions
            that remain legible after delivery. The process adapts to project
            size, risk, budget, and existing infrastructure.
          </p>
        </div>
        <ol className="steps">
          {processSteps.map((step, index) => (
            <li key={step.number}>
              <span aria-hidden="true">{step.number}</span>
              <small>{stepLabels[index]}</small>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
