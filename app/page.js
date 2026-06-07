import Link from "next/link";
import Reveal from "./components/Reveal";

const BOOK_URL = "/book";

export default function HomePage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="hero">
        <div className="container hero-stagger">
          <div className="eyebrow eyebrow-green">AI Consulting · Training · Development</div>
          <h1 className="hero-headline">
            We build AI into the way your business actually works.
          </h1>
          <p className="hero-subhead">
            From finding your biggest automation wins to training your team and shipping custom agents — we&apos;re the partner you call when you&apos;re ready to leverage AI.
          </p>
          <div className="hero-cta">
            <Link href={BOOK_URL} className="btn-primary">Start with an AI Audit — $497</Link>
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
              <div className="service-title-v2">AI Business Audit</div>
              <p className="service-body-v2">
                The fastest way to find your biggest automation wins. A 45-minute discovery call, a custom 48-hour report mapping your opportunities by effort and impact, and a walkthrough call to make sure you know exactly what to do first.
              </p>
              <Link href={BOOK_URL} className="service-link">Book your audit →</Link>
            </div>

            <div className="service-card-v2">
              <div className="service-card-header">
                <span className="service-card-num">02</span>
                <span className="service-card-tag">Custom pricing</span>
              </div>
              <div className="service-title-v2">AI Training &amp; Workshops</div>
              <p className="service-body-v2">
                Hands-on sessions that teach your team to use AI tools in their actual daily work — not a generic overview. We build the curriculum around the tools you already pay for and the workflows your team runs every day.
              </p>
              <a href="mailto:hello@leverageaipartner.com" className="service-link">Get in touch →</a>
            </div>

            <div className="service-card-v2">
              <div className="service-card-header">
                <span className="service-card-num">03</span>
                <span className="service-card-tag">Flat-fee projects</span>
              </div>
              <div className="service-title-v2">Custom AI Development</div>
              <p className="service-body-v2">
                Purpose-built agents, automations, and GPTs designed around your specific workflows — not generic chatbots. Scoped engagements with clear deliverables, shipped in focused sprints so you see results fast.
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
          <div className="eyebrow eyebrow-green">How the audit works</div>
          <h2 className="section-heading">Three steps. No jargon.</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-title">Discover</div>
              <p className="step-body">
                45-minute Zoom call. We learn how your business actually runs — where time leaks, what tools you already pay for, and what&apos;s eating your week.
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
                Follow-up call to walk through the findings. You leave with a clear quick-win plan — run it yourself, or we build it for you.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 4. WHAT'S IN THE REPORT */}
      <Reveal as="section" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow">What&apos;s in the report</div>
          <h2 className="section-heading">Specific opportunities. Ranked. With a plan.</h2>
          <div className="report">
            <ul className="report-list">
              <li className="report-item">
                <span className="report-check"><Check /></span>
                <div>
                  <div className="report-item-title">Executive summary</div>
                  <div className="report-item-body">One page, no jargon. What we found, what it&apos;s worth, what to do first.</div>
                </div>
              </li>
              <li className="report-item">
                <span className="report-check"><Check /></span>
                <div>
                  <div className="report-item-title">Effort vs. impact matrix</div>
                  <div className="report-item-body">Every opportunity plotted. Quick wins vs. long plays, at a glance.</div>
                </div>
              </li>
              <li className="report-item">
                <span className="report-check"><Check /></span>
                <div>
                  <div className="report-item-title">Recommended tools</div>
                  <div className="report-item-body">Specific products, pricing, and why they fit your stack — usually Microsoft 365 or Google Workspace.</div>
                </div>
              </li>
              <li className="report-item">
                <span className="report-check"><Check /></span>
                <div>
                  <div className="report-item-title">Quick-win action plan</div>
                  <div className="report-item-body">Step-by-step tasks to capture your first wave of time savings — executable immediately.</div>
                </div>
              </li>
            </ul>

            <div className="mockup">
              <div className="mockup-top">
                <span className="mockup-label">AI Audit Report · Sample</span>
                <span className="mockup-pill">48 HR</span>
              </div>
              <div className="mockup-title">Top opportunities identified</div>
              <div className="mockup-sub">Ranked by estimated weekly time reclaimed.</div>

              <div className="mockup-findings">
                <div className="mockup-finding">
                  <span className="mockup-finding-num">01</span>
                  <div className="mockup-finding-content">
                    <div className="mockup-finding-name">Email triage &amp; response drafts</div>
                    <div className="mockup-finding-save">~4.5 hrs / week</div>
                  </div>
                </div>
                <div className="mockup-finding">
                  <span className="mockup-finding-num">02</span>
                  <div className="mockup-finding-content">
                    <div className="mockup-finding-name">Proposal &amp; document drafting</div>
                    <div className="mockup-finding-save">~2.5 hrs / week</div>
                  </div>
                </div>
                <div className="mockup-finding">
                  <span className="mockup-finding-num">03</span>
                  <div className="mockup-finding-content">
                    <div className="mockup-finding-name">Client intake → CRM hand-off</div>
                    <div className="mockup-finding-save">~1.5 hrs / week</div>
                  </div>
                </div>
              </div>

              <div className="mockup-quickwin">
                <div className="mockup-quickwin-label">Week 1 quick win</div>
                <div className="mockup-quickwin-value">Start with email triage — highest ROI, lowest setup effort.</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 5. WHO IT'S FOR */}
      <Reveal as="section" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow">Who we work with</div>
          <h2 className="section-heading">Best fit: businesses wearing too many hats.</h2>
          <div className="fit-grid">
            <ul className="fit-list">
              <li className="fit-item">
                <span className="fit-bullet"><Check /></span>
                <span>You have a small-to-mid-sized team and you&apos;re paying for time you don&apos;t have.</span>
              </li>
              <li className="fit-item">
                <span className="fit-bullet"><Check /></span>
                <span>You&apos;re curious about AI but don&apos;t have time to research it yourself.</span>
              </li>
              <li className="fit-item">
                <span className="fit-bullet"><Check /></span>
                <span>You want a specific plan — not another generic AI webinar.</span>
              </li>
              <li className="fit-item">
                <span className="fit-bullet"><Check /></span>
                <span>Your team needs real training — not vendor marketing dressed up as education.</span>
              </li>
            </ul>

            <div>
              <p className="body-text">
                If your team runs repeatable processes and you&apos;re spending time on things that shouldn&apos;t require your attention, there&apos;s almost always leverage hiding in how you work — and we know how to find it.
              </p>
              <p className="body-text" style={{ marginTop: 16 }}>
                We work with businesses across a range of industries. What matters more than the sector is how your team operates day-to-day and where your time is going.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 6. TOOLS WE TEACH */}
      <Reveal as="section" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow eyebrow-green">Tools we teach &amp; implement</div>
          <h2 className="section-heading">You don&apos;t need 47 tools. You need the right ones.</h2>
          <p className="body-text" style={{ marginTop: 16, marginBottom: 48, maxWidth: 600 }}>
            We focus on a curated set of tools that actually deliver for small and mid-sized teams — and we know how to make them work together.
          </p>
          <div className="tools-grid">
            <div className="tool-card">
              <div className="tool-icon" style={{ background: "#10a37f" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.826 19.9a4.497 4.497 0 0 1-6.226-1.596zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.843-3.371 2.019-1.168a.076.076 0 0 1 .072 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.402-.679zm2.032-3.043l-.142-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.218V6.886a.08.08 0 0 1 .032-.067l4.753-2.742a4.5 4.5 0 0 1 6.678 4.66zm-12.66 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" fill="white"/>
                </svg>
              </div>
              <div className="tool-name">ChatGPT</div>
              <div className="tool-desc">Writing, research &amp; everyday AI tasks</div>
            </div>

            <div className="tool-card">
              <div className="tool-icon" style={{ background: "#c96442" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M17.3 8.34c.23-.7.31-1.45.22-2.18a4.87 4.87 0 0 0-8.27-2.8 4.15 4.15 0 0 0-5.54 5.26 4.87 4.87 0 0 0 .64 9.55 4.15 4.15 0 0 0 7.75.87A4.87 4.87 0 0 0 20.9 14.9a4.15 4.15 0 0 0-3.6-6.56z" fill="white" opacity=".9"/>
                </svg>
              </div>
              <div className="tool-name">Claude</div>
              <div className="tool-desc">Deep analysis, drafting &amp; complex reasoning</div>
            </div>

            <div className="tool-card">
              <div className="tool-icon" style={{ background: "#ff4a00" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 0a12 12 0 1 0 0 24A12 12 0 0 0 12 0zm0 4.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm3 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm3 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-3 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm6 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-3 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z" fill="white"/>
                </svg>
              </div>
              <div className="tool-name">Zapier</div>
              <div className="tool-desc">No-code workflow automation</div>
            </div>

            <div className="tool-card">
              <div className="tool-icon" style={{ background: "#1e1e1e" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.19v6.954L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.284V9.1l-1.215-.14c-.093-.514.234-.933.748-.98z" fill="white"/>
                </svg>
              </div>
              <div className="tool-name">Notion AI</div>
              <div className="tool-desc">Knowledge management &amp; documentation</div>
            </div>

            <div className="tool-card">
              <div className="tool-icon" style={{ background: "#2563eb" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="white"/>
                </svg>
              </div>
              <div className="tool-name">Fathom</div>
              <div className="tool-desc">AI meeting notes &amp; action item capture</div>
            </div>

            <div className="tool-card">
              <div className="tool-icon" style={{ background: "#6d28d9" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="tool-name">Make</div>
              <div className="tool-desc">Advanced multi-step automation pipelines</div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 7. TEAM */}
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
                  <div className="bio-role">AI Engineer & Consultant</div>
                </div>
              </div>
              <p className="bio-body">
                Jermaine brings a practitioner&apos;s perspective to AI — grounded in years of enterprise IT and systems operations. He designs agentic workflows and automation strategies that fit how your environment actually runs, not how a vendor demo says it should. His background in technology infrastructure means the solutions he builds integrate cleanly with what you already have.
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
                  <div className="bio-role">AI Engineer & Consultant</div>
                </div>
              </div>
              <p className="bio-body">
                Brandon is a systems engineer with over a decade of experience in endpoint and mobile device management — the kind of work that sits at the intersection of technology and the people who actually have to use it. That user-first mindset carries directly into how he approaches AI: the goal isn&apos;t the implementation, it&apos;s whether the people on the other end find it useful. He builds solutions that fit how your team already works, so adoption happens naturally rather than by force.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 7. LEARNING & SUPPORT CALLOUT */}
      <Reveal as="section" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow">Training &amp; support</div>
          <h2 className="section-heading" style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}>
            We don&apos;t just build it and leave. We make sure your team can own it.
          </h2>
          <div className="support-grid">
            <div className="support-card">
              <div className="support-card-icon"><WorkshopIcon /></div>
              <div className="support-card-title">Live Virtual Workshops</div>
              <p className="support-card-body">
                Focused online sessions where your team learns to use AI tools in context — built around your actual workflows, not generic examples. Run live over Zoom, no travel required.
              </p>
            </div>
            <div className="support-card">
              <div className="support-card-icon"><LearnIcon /></div>
              <div className="support-card-title">Guided Learning Tracks</div>
              <p className="support-card-body">
                Multi-session virtual programs for teams rolling out new AI tools. We build the curriculum, run the sessions remotely, and make sure adoption actually sticks.
              </p>
            </div>
            <div className="support-card">
              <div className="support-card-icon"><SupportIcon /></div>
              <div className="support-card-title">Ongoing Virtual Support</div>
              <p className="support-card-body">
                Monthly access to both engineers via call or async — for questions, tune-ups, new integrations, and troubleshooting as your AI and IT environment evolves.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 8. LEX TEASER */}
      <Reveal as="section" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="lex-teaser">
            <div>
              <div className="eyebrow">Not ready to book?</div>
              <h2 className="lex-teaser-heading">Chat with Lex.</h2>
              <p className="lex-teaser-body">
                Lex finds your first AI quick win in a 2-minute chat — then puts together a personalized action plan. No pressure, no tech skills required.
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

      {/* 9. CTA FOOTER */}
      <Reveal as="section" id="book" className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="cta-close">
            <div className="eyebrow eyebrow-green">Ready to start?</div>
            <h2 className="cta-close-heading">Find out where the hours are hiding.</h2>
            <p className="cta-close-body">
              The AI Business Audit is the fastest way to get a specific, actionable plan. 45 minutes with us, a custom report in 48 hours, and a walkthrough call to make sure you know exactly what to do next.
            </p>
            <div className="cta-close-row">
              <Link href={BOOK_URL} className="btn-primary">Book your AI Audit</Link>
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

function Check() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
      <path d="M1.5 5.2L4 7.5L8.5 2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WorkshopIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 17h6M10 14v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6 7.5h8M6 10.5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function LearnIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M10 3L2 7l8 4 8-4-8-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M2 7v5M6 9v4.5c0 1.38 1.79 2.5 4 2.5s4-1.12 4-2.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 2.5v5M10 12.5v5M2.5 10h5M12.5 10h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
