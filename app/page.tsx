const Arrow = () => <span aria-hidden="true">↗</span>;

const Check = () => (
  <span className="check" aria-hidden="true">
    ✓
  </span>
);

const previewLooks = [
  { name: "Soft crop", className: "look-crop" },
  { name: "Textured bob", className: "look-bob" },
  { name: "Long layers", className: "look-layers" },
  { name: "Curly fringe", className: "look-curl" },
  { name: "Modern shag", className: "look-shag" },
  { name: "Sleek lob", className: "look-lob" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="HairX home">
          Hair<span>X</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#for-salons">For salons</a>
          <a href="#privacy">Privacy</a>
          <a href="#company">Company</a>
        </nav>
        <a className="header-cta" href="#experience">
          Meet HairX <Arrow />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">The salon consultation, reimagined</p>
          <h1>A better consultation starts before the chair.</h1>
          <p className="hero-lede">
            HairX helps customers explore personalized hairstyle directions on
            a salon tablet, then sends their favorites to a stylist as one
            clear consultation.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#how-it-works">
              See how it works <Arrow />
            </a>
            <a className="text-link" href="#for-salons">
              Built for modern salons <span aria-hidden="true">↓</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="HairX experience summary">
            <span>One photo</span>
            <i aria-hidden="true" />
            <span>Six directions</span>
            <i aria-hidden="true" />
            <span>One shared vision</span>
          </div>
        </div>

        <div className="hero-visual" id="experience" aria-label="HairX app preview">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="tablet">
            <div className="tablet-camera" />
            <div className="tablet-screen">
              <div className="app-topbar">
                <span className="app-wordmark">HairX</span>
                <span className="step-label">Studio · 02</span>
              </div>
              <div className="analysis-note">
                <span className="analysis-dot" />
                <p>
                  <small>Your profile</small>
                  Oval shape · medium density
                </p>
              </div>
              <div className="preview-grid">
                {previewLooks.map((look, index) => (
                  <div
                    className={`preview-card ${index === 2 ? "selected" : ""}`}
                    key={look.name}
                  >
                    <div className={`hair-portrait ${look.className}`}>
                      <span className="face" />
                      <span className="hair" />
                    </div>
                    <span>{look.name}</span>
                    {index === 2 && <Check />}
                  </div>
                ))}
              </div>
              <div className="consult-card">
                <div>
                  <small>Consultation card</small>
                  <strong>Long, airy layers</strong>
                </div>
                <span className="consult-count">1 look</span>
              </div>
            </div>
          </div>
          <div className="floating-note note-one">
            <span className="note-icon">✦</span>
            <p>
              <small>Made for you</small>
              Six tailored directions
            </p>
          </div>
          <div className="floating-note note-two">
            <span className="note-check">✓</span>
            <p>
              <small>Ready for your stylist</small>
              Consultation sent
            </p>
          </div>
        </div>
      </section>

      <section className="manifesto" aria-label="HairX mission">
        <p className="section-index">01 — The idea</p>
        <p className="manifesto-copy">
          Great hair begins with being understood. HairX turns inspiration into
          a shared language—so customers can show what they mean and stylists
          can start with clarity.
        </p>
      </section>

      <section className="steps section-pad" id="how-it-works">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A two-screen customer journey</p>
            <h2>From a quick photo to a confident conversation.</h2>
          </div>
          <p>
            Designed for the waiting area, HairX keeps the experience simple,
            calm, and focused on the consultation—not the technology.
          </p>
        </div>

        <div className="step-grid">
          <article className="step-card step-photo">
            <span className="step-number">01</span>
            <div className="step-visual camera-visual">
              <div className="face-mesh">
                <span className="mesh-face" />
                <span className="mesh-line line-a" />
                <span className="mesh-line line-b" />
                <span className="mesh-line line-c" />
              </div>
              <span className="focus-corner corner-one" />
              <span className="focus-corner corner-two" />
              <span className="camera-shutter" />
            </div>
            <div className="step-copy">
              <p className="eyebrow">Capture</p>
              <h3>A photo, with permission.</h3>
              <p>
                Clear guidance and an explicit consent step keep customers in
                control. The photo is used once and is not kept after the
                session.
              </p>
            </div>
          </article>

          <article className="step-card step-explore">
            <span className="step-number">02</span>
            <div className="step-visual mini-grid-visual">
              {previewLooks.slice(0, 6).map((look, index) => (
                <span className={index === 4 ? "active" : ""} key={look.name}>
                  <i className={`mini-hair ${look.className}`} />
                </span>
              ))}
            </div>
            <div className="step-copy">
              <p className="eyebrow">Explore</p>
              <h3>Ideas that feel personal.</h3>
              <p>
                HairX presents six hairstyle directions informed by the
                customer&apos;s face shape, hair density, and styling goals.
              </p>
            </div>
          </article>

          <article className="step-card step-share">
            <span className="step-number">03</span>
            <div className="step-visual share-visual">
              <div className="paper-card card-back" />
              <div className="paper-card card-front">
                <small>Consultation · #014</small>
                <div className="paper-row">
                  <span className="paper-thumb" />
                  <p>
                    <strong>Long layers</strong>
                    <small>Keep movement, soften shape</small>
                  </p>
                </div>
                <div className="paper-question">How would this work with my texture?</div>
                <span className="sent-stamp">Sent ✓</span>
              </div>
            </div>
            <div className="step-copy">
              <p className="eyebrow">Share</p>
              <h3>One clear consultation.</h3>
              <p>
                Chosen looks and questions arrive together, giving the stylist
                useful context before the customer reaches the chair.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="salon-section section-pad" id="for-salons">
        <div className="salon-copy">
          <p className="eyebrow light">For salons &amp; stylists</p>
          <h2>More than a preview. A better way to begin.</h2>
          <p>
            HairX connects the customer&apos;s waiting-area experience to a focused
            request inbox for the salon team. No disconnected screenshots. No
            guessing what “just a little different” means.
          </p>
          <div className="salon-features">
            <div>
              <span>01</span>
              <p>
                <strong>A calmer consultation</strong>
                Start with selected looks and real questions already in view.
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>A smarter waiting area</strong>
                Turn idle time into a guided, branded customer experience.
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>A clearer daily pulse</strong>
                Keep requests, services, kiosks, and performance in one place.
              </p>
            </div>
          </div>
        </div>

        <div className="dashboard-shell" aria-label="HairX salon dashboard preview">
          <div className="dash-sidebar">
            <span className="dash-logo">HX</span>
            <span className="dash-nav active" />
            <span className="dash-nav" />
            <span className="dash-nav" />
            <span className="dash-nav" />
          </div>
          <div className="dash-content">
            <div className="dash-header">
              <div>
                <small>Monday, August 3</small>
                <strong>Good morning, North &amp; Co.</strong>
              </div>
              <span className="dash-avatar">NW</span>
            </div>
            <div className="metric-row">
              <div>
                <small>Sessions today</small>
                <strong>18</strong>
                <span>+12%</span>
              </div>
              <div>
                <small>Consultations</small>
                <strong>7</strong>
                <span>4 new</span>
              </div>
              <div>
                <small>Looks explored</small>
                <strong>42</strong>
                <span>2.3 / session</span>
              </div>
            </div>
            <div className="request-list">
              <div className="request-title">
                <strong>Consultation requests</strong>
                <small>Today</small>
              </div>
              {[
                ["Amelia R.", "Long layers", "New"],
                ["Jordan K.", "Soft crop", "Viewed"],
                ["Morgan L.", "Textured bob", "Accepted"],
              ].map(([name, look, status], index) => (
                <div className="request-row" key={name}>
                  <span className={`request-thumb thumb-${index}`} />
                  <p>
                    <strong>{name}</strong>
                    <small>{look}</small>
                  </p>
                  <span className={`status status-${index}`}>{status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="privacy-section section-pad" id="privacy">
        <div className="privacy-heading">
          <p className="section-index">02 — Privacy by design</p>
          <h2>The photo helps create the moment. It doesn&apos;t become the product.</h2>
        </div>
        <div className="privacy-grid">
          <article>
            <span>01</span>
            <h3>Consent comes first</h3>
            <p>
              Customers review a plain-language privacy prompt and actively
              consent before a preview is generated.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Photos are ephemeral</h3>
            <p>
              The customer photo is used for the current experience and is
              designed to be deleted when the session ends.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>No customer CRM</h3>
            <p>
              HairX does not turn the kiosk into a contact-harvesting flow. A
              customer name is optional; contact details are not collected.
            </p>
          </article>
          <article>
            <span>04</span>
            <h3>Only useful context remains</h3>
            <p>
              Generated looks and derived styling attributes may be retained
              to support the consultation the customer chose to send.
            </p>
          </article>
        </div>
      </section>

      <section className="quote-section">
        <div className="quote-mark" aria-hidden="true">“</div>
        <blockquote>
          Technology should make a stylist&apos;s expertise easier to access—not
          replace the human conversation that makes a great salon experience.
        </blockquote>
        <p>Qiaochun Wei · Founder, HairX LLC</p>
      </section>

      <section className="company-section section-pad" id="company">
        <div>
          <p className="eyebrow">About HairX</p>
          <h2>Building a more thoughtful bridge between inspiration and expertise.</h2>
        </div>
        <div className="company-copy">
          <p>
            HairX LLC is developing HairX, a salon consultation platform for
            customers, stylists, and modern shop teams. The company is founded
            by <strong>Qiaochun Wei</strong> and based in Canton, Ohio.
          </p>
          <address>
            <span>HairX LLC</span>
            <span>6545 Market Ave N Ste 100</span>
            <span>Canton, OH</span>
          </address>
        </div>
      </section>

      <section className="legal-section section-pad" id="legal">
        <div>
          <p className="eyebrow">Website notice</p>
          <h2>Clear expectations, from the start.</h2>
        </div>
        <div className="legal-copy">
          <p>
            HairX previews are illustrative consultation aids. They are not a
            guarantee of a specific salon result and do not replace a stylist&apos;s
            professional judgment about hair condition, texture, suitability,
            or service requirements.
          </p>
          <p>
            This site describes a product in development. Features,
            availability, pricing, and integrations may change before release.
            Last updated August 3, 2026.
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <a className="footer-wordmark" href="#top">
            Hair<span>X</span>
          </a>
          <p>See the idea. Share the vision. Start with clarity.</p>
          <a className="back-top" href="#top">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 HairX LLC. All rights reserved.</p>
          <p>Founded by Qiaochun Wei · Canton, Ohio</p>
          <div>
            <a href="#privacy">Privacy</a>
            <a href="#legal">Notice</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
