import { ContactForm } from "@/components/forms/ContactForm";

export function ContactSection() {
  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-grid">
        <div className="contact-intro">
          <p className="eyebrow">
            <span></span> Start a conversation
          </p>
          <h2 id="contact-heading">Bring us the hard technical problem.</h2>
          <p>
            Share a little context. We will respond with thoughtful questions and
            a clear next step.
          </p>
          <div className="contact-note">
            <small>Good starting points</small>
            <span>New backend architecture</span>
            <span>Infrastructure modernization</span>
            <span>AI agent implementation</span>
            <span>Complex platform integration</span>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
