import { useState, type FormEvent } from "react";
import { siteConfig } from "@/config/site";
import {
  CONTACT_CONSTRAINTS,
  SERVICE_OPTIONS,
  validateContactPayload,
} from "@/lib/validation/contact";
import type { ContactErrors } from "@/lib/validation/contact";

type FormStatus = "idle" | "submitting" | "success" | "unconfigured" | "error";

const INITIAL_VALUES = {
  name: "",
  email: "",
  company: "",
  service: "",
  budget: "",
  message: "",
  consent: false,
  honeypot: "",
};

const BUDGET_OPTIONS = [
  "Under $5k",
  "$5k–$15k",
  "$15k–$50k",
  "$50k+",
  "Prefer not to say",
];

function buildMailtoHref(values: typeof INITIAL_VALUES): string {
  const subject = `Project inquiry — ${values.service || "Whostler Services"}`;
  const body = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Company: ${values.company || "Not provided"}`,
    `Service: ${values.service || "Not selected"}`,
    values.budget ? `Budget range: ${values.budget}` : "",
    "",
    values.message,
  ]
    .filter(Boolean)
    .join("\n");
  return `mailto:${siteConfig.contact.email}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [values, setValues] = useState(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  const setField = <K extends keyof typeof INITIAL_VALUES>(
    field: K,
    value: (typeof INITIAL_VALUES)[K],
  ) => {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = validateContactPayload({
      ...values,
      consent: values.consent === true,
    });

    if (!result.ok) {
      setErrors(result.errors);
      const firstField = (
        ["name", "email", "company", "service", "message", "consent"] as const
      ).find((field) => result.errors[field]);
      if (firstField) {
        document.getElementById(`contact-${firstField}`)?.focus();
      }
      return;
    }

    // Honeypot: real users never fill this hidden field. Swallow silently.
    if (result.data.honeypot) {
      setStatus("success");
      return;
    }

    setErrors({});
    setStatus("submitting");

    if (!siteConfig.contact.endpoint) {
      setStatus("unconfigured");
      return;
    }

    try {
      const response = await fetch(siteConfig.contact.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (response.ok) {
        setValues(INITIAL_VALUES);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          Name
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={CONTACT_CONSTRAINTS.nameMax}
            value={values.name}
            onChange={(event) => setField("name", event.target.value)}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            placeholder="Your name"
          />
        </label>
        <label>
          Work email
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={CONTACT_CONSTRAINTS.emailMax}
            value={values.email}
            onChange={(event) => setField("email", event.target.value)}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            placeholder="you@company.com"
          />
        </label>
      </div>

      <div className="form-row">
        <label>
          Company or organization
          <input
            id="contact-company"
            name="company"
            type="text"
            autoComplete="organization"
            maxLength={CONTACT_CONSTRAINTS.companyMax}
            value={values.company}
            onChange={(event) => setField("company", event.target.value)}
            aria-invalid={errors.company ? true : undefined}
            aria-describedby={errors.company ? "contact-company-error" : undefined}
            placeholder="Optional"
          />
        </label>
        <label>
          Service interest
          <select
            id="contact-service"
            name="service"
            required
            value={values.service}
            onChange={(event) => setField("service", event.target.value)}
            aria-invalid={errors.service ? true : undefined}
            aria-describedby={errors.service ? "contact-service-error" : undefined}
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        Project summary
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          minLength={CONTACT_CONSTRAINTS.messageMin}
          maxLength={CONTACT_CONSTRAINTS.messageMax}
          value={values.message}
          onChange={(event) => setField("message", event.target.value)}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          placeholder="What are you building, improving, or trying to solve?"
        />
      </label>

      <label>
        Optional budget range
        <select
          id="contact-budget"
          name="budget"
          value={values.budget}
          onChange={(event) => setField("budget", event.target.value)}
        >
          <option value="">Prefer not to share</option>
          {BUDGET_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="form-consent">
        <input
          id="contact-consent"
          name="consent"
          type="checkbox"
          required
          checked={values.consent}
          onChange={(event) => setField("consent", event.target.checked)}
          aria-invalid={errors.consent ? true : undefined}
          aria-describedby={errors.consent ? "contact-consent-error" : undefined}
        />
        <span>
          I consent to Whostler Services contacting me about this inquiry.
          Consent can be withdrawn at any time.
        </span>
      </label>

      <div className="form-honeypot" aria-hidden="true">
        <label>
          Company website
          <input
            tabIndex={-1}
            autoComplete="off"
            value={values.honeypot}
            onChange={(event) => setField("honeypot", event.target.value)}
          />
        </label>
      </div>

      {errors.name ? (
        <p id="contact-name-error" className="form-error" role="alert">
          {errors.name}
        </p>
      ) : null}
      {errors.email ? (
        <p id="contact-email-error" className="form-error" role="alert">
          {errors.email}
        </p>
      ) : null}
      {errors.company ? (
        <p id="contact-company-error" className="form-error" role="alert">
          {errors.company}
        </p>
      ) : null}
      {errors.service ? (
        <p id="contact-service-error" className="form-error" role="alert">
          {errors.service}
        </p>
      ) : null}
      {errors.message ? (
        <p id="contact-message-error" className="form-error" role="alert">
          {errors.message}
        </p>
      ) : null}
      {errors.consent ? (
        <p id="contact-consent-error" className="form-error" role="alert">
          {errors.consent}
        </p>
      ) : null}

      <button
        className="button submit-button"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send project context"}{" "}
        <span aria-hidden="true">↗</span>
      </button>
      <p className="form-meta">
        By submitting, you agree that we may use these details to respond to your
        inquiry.
      </p>

      {status === "success" ? (
        <p className="form-status form-status--success" role="status">
          Thank you — your inquiry has been received. We will respond at the
          email you provided.
        </p>
      ) : null}
      {status === "unconfigured" ? (
        <div className="form-status form-status--warning" role="status">
          <p>
            Contact delivery is not configured yet, so this form does not send
            messages. Email us directly instead:
          </p>
          <a className="button" href={buildMailtoHref(values)}>
            Email {siteConfig.contact.email}
          </a>
        </div>
      ) : null}
      {status === "error" ? (
        <p className="form-status form-status--error" role="alert">
          Something went wrong and your message was not sent. Your information
          was preserved — please try again.
        </p>
      ) : null}
    </form>
  );
}
