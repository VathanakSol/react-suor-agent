export default function Footer() {
  const year = new Date().getFullYear();

  const linkGroups = [
    { title: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
    { title: "Company", links: ["About", "Careers", "Blog", "Press Kit"] },
    { title: "Resources", links: ["Documentation", "Help Center", "Community", "Status"] },
  ];

  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Top: brand + newsletter */}
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">Suor</span>
            <p className="footer-tagline">
              Build beautiful web experiences with modern tools and clean code.
            </p>
          </div>

          <form className="footer-newsletter" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email">Stay in the loop</label>
            <div className="newsletter-row">
              <input
                id="newsletter-email"
                type="email"
                placeholder="you@example.com"
                aria-label="Email address"
              />
              <button type="submit">Subscribe</button>
            </div>
          </form>
        </div>

        {/* Middle: link columns */}
        <nav className="footer-links" aria-label="Footer navigation">
          {linkGroups.map((group) => (
            <div key={group.title} className="footer-col">
              <h4>{group.title}</h4>
              <ul>
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>&copy; {year} Suor. All rights reserved.</p>
          <div className="footer-socials">
            <a href="#" aria-label="GitHub">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.15c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.34.95.1-.74.4-1.25.72-1.53-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11.04 11.04 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.59.24 2.76.12 3.05.74.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.66.41.36.77 1.05.77 2.13v3.16c0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
              </svg>
            </a>
            <a href="#" aria-label="Twitter / X">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.41l-5.8-7.58-6.64 7.58H.47l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3l13.31 17.41z"/>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/>
              </svg>
            </a>
            <a href="#" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
