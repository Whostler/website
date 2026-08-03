import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container footer-main">
        <div>
          <img src="/whostler-logo.png" alt="Whostler Services" />
          <p>{siteConfig.footerStatement}</p>
        </div>
        <div>
          <small>Navigate</small>
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <small>Contact</small>
          <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
          {siteConfig.contact.github ? (
            <a
              href={siteConfig.contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          ) : null}
          {siteConfig.contact.linkedin ? (
            <a
              href={siteConfig.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          ) : null}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} {siteConfig.name}</span>
        <span>Systems, thoughtfully engineered.</span>
      </div>
    </footer>
  );
}
