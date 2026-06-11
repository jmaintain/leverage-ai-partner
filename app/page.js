import Link from "next/link";
import Reveal from "./components/Reveal";

const BOOK_URL = "/book";

export default function HomePage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="hero">
        <div className="container hero-stagger">
          <div className="eyebrow eyebrow-green">AI Consulting · Automation · Development</div>
          <h1 className="hero-headline">
            We build AI into the way your business actually works.
          </h1>
          <p className="hero-subhead">
            From finding your biggest automation wins to shipping custom agents — we&apos;re the partner you call when you&apos;re ready to stop doing things manually.
          </p>
          <div className="hero-cta">
            <Link href={BOOK_URL} className="btn-primary">Book an Assessment — $497</Link>
            <Link href="#services" className="btn-ghost">See all services</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-dot" />
            Based in Phoenix, AZ &amp; Houston, TX &nbsp;·&nbsp; Serving clients virtually
          </div>
        </div>
      </section>

      {/* 2. SERVICES */}
      <Reveal as="section" id="services" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow eyebrow-green">What we do</div>
          <h2 className="section-heading">Four ways we help you win with AI.</h2>
          <div className="services-grid-4">
            <div className="service-card-v2">
              <div className="service-card-header">
                <span className="service-card-num">01</span>
                <span className="service-card-tag service-tag-green">From $497</span>
              </div>
              <div className="service-title-v2">AI Business Assessment</div>
              <p className="service-body-v2">
                The fastest way to find your biggest automation wins. A structured discovery call, a custom 48-hour report mapping your opportunities by effort and impact, and a walkthrough call so you know exactly where to start.
              </p>
              <Link href={BOOK_URL} className="service-link">Book your assessment →</Link>
            </div>

            <div className="service-card-v2">
              <div className="service-card-header">
                <span className="service-card-num">02</span>
                <span className="service-card-tag service-tag-green">From $297</span>
              </div>
              <div className="service-title-v2">Missed Call Recovery</div>
              <p className="service-body-v2">
                Most service businesses lose jobs before they ever answer the phone. We audit your missed calls, identify the revenue slipping through the cracks, and configure a voice agent that follows up automatically — so no lead goes cold when your crew is in the field.
              </p>
              <a href="mailto:hello@leverageaipartner.com" className="service-link">See how it works →</a>
            </div>

            <div className="service-card-v2">
              <div className="service-card-header">
                <span className="service-card-num">03</span>
                <span className="service-card-tag">Flat-fee projects</span>
              </div>
              <div className="service-title-v2">Custom AI Development</div>
              <p className="service-body-v2">
                Agents, automations, and purpose-built apps designed around your exact workflows. We build fast — vibe-coded and production-ready — with clear deliverables and no drawn-out timelines. If you can describe the problem, we can ship the solution.
              </p>
              <a href="mailto:hello@leverageaipartner.com" className="service-link">Start a project →</a>
            </div>

            <div className="service-card-v2">
              <div className="service-card-header">
                <span className="service-card-num">04</span>
                <span className="service-card-tag">Monthly retainer</span>
              </div>
              <div className="service-title-v2">Ongoing Support</div>
              <p className="service-body-v2">
                A retainer partner who keeps your AI systems tuned, updated, and scaling as your business grows. New integrations, team onboarding, performance reviews, and rapid-response help when something needs adjusting.
              </p>
              <a href="mailto:hello@leverageaipartner.com" className="service-link">Learn more →</a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 3. HOW IT WORKS */}
      <Reveal as="section" id="how" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow eyebrow-green">How the assessment works</div>
          <h2 className="section-heading">Three steps. No jargon.</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-title">Discover</div>
              <p className="step-body">
                A structured discovery call. We learn how your business actually runs — where time leaks, what tools you already pay for, and what&apos;s eating your week.
              </p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-title">Analyze</div>
              <p className="step-body">
                Within 48 hours you get a custom report mapping exactly where AI can give you hours and dollars back — ranked by effort vs. impact.
              </p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-title">Act</div>
              <p className="step-body">
                A walkthrough call to go through the findings. You leave with a clear plan — run it yourself, or we build it for you.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 4. TEAM */}
      <Reveal as="section" id="team" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow eyebrow-green">Who we are</div>
          <h2 className="section-heading">Two engineers. No hype.</h2>
          <p className="body-text" style={{ marginTop: 16 }}>
            We&apos;re not vendors or resellers. We come from deep IT and systems backgrounds, which means we understand the environments AI has to actually live in — and we&apos;ll tell you honestly what will work and what won&apos;t.
          </p>
          <div className="bios">
            <div className="bio">
              <div className="bio-top">
                <div className="bio-avatar">
                  <img src="/professional_headshot.jpg" alt="Jermaine Williams" className="bio-avatar-img" />
                </div>
                <div>
                  <div className="bio-name">Jermaine Williams</div>
                  <div className="bio-meta">Phoenix, AZ · Virtual</div>
                  <div className="bio-role">AI Engineer &amp; Consultant</div>
                </div>
              </div>
              <p className="bio-body">
                Jermaine brings a practitioner&apos;s perspective to AI — grounded in years of enterprise IT and systems operations. He designs agentic workflows and automation strategies that fit how your environment actually runs, not how a vendor demo says it should.
              </p>
            </div>

            <div className="bio">
              <div className="bio-top">
                <div className="bio-avatar">
                  <img src="/bdavis-headshot.jpeg" alt="Brandon Davis" className="bio-avatar-img" />
                </div>
                <div>
                  <div className="bio-name">Brandon Davis</div>
                  <div className="bio-meta">Houston, TX · Virtual</div>
                  <div className="bio-role">AI Engineer &amp; Consultant</div>
                </div>
              </div>
              <p className="bio-body">
                Brandon is a systems engineer with over a decade of experience in endpoint and mobile device management. That user-first mindset carries directly into how he approaches AI: the goal isn&apos;t the implementation, it&apos;s whether the people on the other end find it useful.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 5. LEX TEASER */}
      <Reveal as="section" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="lex-teaser">
            <div>
              <div className="eyebrow">Not ready to book?</div>
              <h2 className="lex-teaser-heading">Chat with Lex.</h2>
              <p className="lex-teaser-body">
                Lex finds your first AI quick win in a 2-minute chat — no pressure, no tech skills required.
              </p>
              <Link href="/chat" className="btn-primary" style={{ marginTop: 24, display: "inline-flex" }}>
                Chat with Lex →
              </Link>
            </div>
            <div className="lex-teaser-preview" aria-hidden="true">
              <div className="lex-teaser-bubble">Where does your team spend the most time?</div>
              <div className="lex-teaser-options">
                <div className="lex-teaser-opt">Email &amp; communication</div>
                <div className="lex-teaser-opt">Admin &amp; documentation</div>
                <div className="lex-teaser-opt">IT &amp; systems</div>
                <div className="lex-teaser-opt">Client work &amp; delivery</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 6. CTA FOOTER */}
      <Reveal as="section" id="book" className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="cta-close">
            <div className="eyebrow eyebrow-green">Ready to start?</div>
            <h2 className="cta-close-heading">Find out where the hours are hiding.</h2>
            <p className="cta-close-body">
              The AI Business Assessment is the fastest way to get a specific, actionable plan. A discovery call, a custom report in 48 hours, and a walkthrough so you know exactly what to do next.
            </p>
            <div className="cta-close-row">
              <Link href={BOOK_URL} className="btn-primary">Book your Assessment</Link>
              <a href="mailto:hello@leverageaipartner.com" className="btn-ghost">Or email us directly</a>
              <span className="cta-price">
                <strong>$497</strong> · delivered in 48 hours
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </main>
  );
}
