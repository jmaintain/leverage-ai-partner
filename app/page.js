import Link from "next/link";
import Reveal from "./components/Reveal";

const BOOK_URL = "/book";

export default function HomePage() {
  return (
    <main>
      {/* 1. HERO */}
      <section className="hero">
        <div className="container hero-stagger">
          <div className="eyebrow eyebrow-green">The AI Tools Assessment</div>
          <h1 className="hero-headline">
            You don&apos;t need more AI. You need the right three tools.
          </h1>
          <p className="hero-subhead">
            One 45-minute conversation about how your business actually runs. Within 48 hours, a report prescribing the 3–7 tools that reclaim 5+ hours of your week — and a 4-day plan to make them stick.
          </p>
          <div className="hero-cta">
            <Link href={BOOK_URL} className="btn-primary">Book the Assessment — $999</Link>
            <Link href="#how" className="btn-ghost">How it works</Link>
          </div>
          <div className="hero-trust">
            <span className="hero-dot" />
            Based in Phoenix, AZ &amp; Houston, TX &nbsp;·&nbsp; Serving clients virtually
          </div>
        </div>
      </section>

      {/* 2. GUARANTEE STRIP */}
      <Reveal as="section" className="guarantee-strip-section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="guarantee-strip">
            <div className="guarantee-badge">The Guarantee</div>
            <p className="guarantee-text">
              If your assessment identifies fewer than <strong>5 reclaimable hours per week</strong>, you get a full refund. We can make that promise because we haven&apos;t missed yet — in any business with real payroll, the hours are there.
            </p>
          </div>
        </div>
      </Reveal>

      {/* 3. HOW IT WORKS */}
      <Reveal as="section" id="how" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow eyebrow-green">How it works</div>
          <h2 className="section-heading">Three steps. One week. No jargon.</h2>
          <div className="steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-title">Discover</div>
              <p className="step-body">
                A 45-minute recorded interview about how your business actually runs — where time leaks, what software you pay for but barely open, and what only you can do that really shouldn&apos;t require you.
              </p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-title">Prescribe</div>
              <p className="step-body">
                Within 48 hours you get the report: 3–7 specific tools — one per problem, not a comparison chart — with real pricing, setup effort, hours reclaimed, and a 4-day quick-start plan.
              </p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-title">Review</div>
              <p className="step-body">
                A recorded walkthrough call — you keep the recording and transcript as team training material. Leave with total clarity: run the plan yourself, or have us implement it with your $999 credited in full.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 4. WHAT'S IN THE REPORT */}
      <Reveal as="section" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow">What&apos;s in the report</div>
          <h2 className="section-heading">A prescription, not a survey.</h2>
          <div className="report">
            <ul className="report-list">
              <li className="report-item">
                <span className="report-check"><Check /></span>
                <div>
                  <div className="report-item-title">Executive summary</div>
                  <div className="report-item-body">Half a page, no jargon. What we heard, what we found, what it&apos;s worth, and where to start.</div>
                </div>
              </li>
              <li className="report-item">
                <span className="report-check"><Check /></span>
                <div>
                  <div className="report-item-title">Effort vs. impact matrix</div>
                  <div className="report-item-body">Every recommendation plotted — quick wins, big bets, and what to skip. Yes, we tell you what to skip.</div>
                </div>
              </li>
              <li className="report-item">
                <span className="report-check"><Check /></span>
                <div>
                  <div className="report-item-title">3–7 tool prescriptions</div>
                  <div className="report-item-body">One specific tool per problem, with current pricing and setup effort — including the software you already pay for but underuse.</div>
                </div>
              </li>
              <li className="report-item">
                <span className="report-check"><Check /></span>
                <div>
                  <div className="report-item-title">4-day quick-start plan</div>
                  <div className="report-item-body">Day-by-day instructions to have your first tools running within the week — no waiting on us.</div>
                </div>
              </li>
              <li className="report-item">
                <span className="report-check"><Check /></span>
                <div>
                  <div className="report-item-title">The math</div>
                  <div className="report-item-body">Hours reclaimed × what your hour is worth, against what the tools cost. The arithmetic is shown, not asserted.</div>
                </div>
              </li>
            </ul>

            <div className="mockup">
              <div className="mockup-top">
                <span className="mockup-label">AI Tools Assessment · Sample</span>
                <span className="mockup-pill">48 HR</span>
              </div>
              <div className="mockup-title">Top prescriptions</div>
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
                    <div className="mockup-finding-name">Meeting notes → action items</div>
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
                <div className="mockup-quickwin-label">Day 1 of your quick-start</div>
                <div className="mockup-quickwin-value">Set up email triage first — highest return, lowest setup effort.</div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 5. WHAT'S INCLUDED */}
      <Reveal as="section" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow eyebrow-green">Included with every assessment</div>
          <h2 className="section-heading" style={{ fontSize: "clamp(22px, 2.6vw, 32px)" }}>
            The report is the start, not the whole deliverable.
          </h2>
          <div className="support-grid">
            <div className="support-card">
              <div className="support-card-icon"><PromptIcon /></div>
              <div className="support-card-title">Custom Prompt Pack</div>
              <p className="support-card-body">
                3–5 ready-to-use prompts built specifically for your business and the pain points you named — not generic templates. Delivered with the report.
              </p>
            </div>
            <div className="support-card">
              <div className="support-card-icon"><RecordingIcon /></div>
              <div className="support-card-title">Recording &amp; Transcript</div>
              <p className="support-card-body">
                The full review call is recorded and yours to keep — most clients share it with their team as training material for the rollout.
              </p>
            </div>
            <div className="support-card">
              <div className="support-card-icon"><SupportIcon /></div>
              <div className="support-card-title">90 Days of Office Hours</div>
              <p className="support-card-body">
                One emailed question per month for 90 days after delivery. Hit a snag during rollout? You&apos;re not on your own.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 6. WHO IT'S FOR */}
      <Reveal as="section" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow">Who it&apos;s for</div>
          <h2 className="section-heading">Built for owners still in the weeds.</h2>
          <div className="fit-grid">
            <ul className="fit-list">
              <li className="fit-item">
                <span className="fit-bullet"><Check /></span>
                <span>You run an owner-operated business — roughly $500K–$5M in revenue, 3–25 employees.</span>
              </li>
              <li className="fit-item">
                <span className="fit-bullet"><Check /></span>
                <span>You&apos;re still doing day-to-day operations yourself, and your week disappears into tasks that shouldn&apos;t need you.</span>
              </li>
              <li className="fit-item">
                <span className="fit-bullet"><Check /></span>
                <span>You&apos;re paying for software — maybe even AI subscriptions — that nobody on the team actually opens.</span>
              </li>
              <li className="fit-item">
                <span className="fit-bullet"><Check /></span>
                <span>You want a specific prescription, not another webinar or a &quot;Top 10 AI Tools&quot; listicle.</span>
              </li>
            </ul>

            <div>
              <p className="body-text">
                The assessment works because businesses this size have real, findable hours hiding in email, admin, scheduling, and follow-up — and an owner with the authority to act on the plan the same week.
              </p>
              <p className="body-text" style={{ marginTop: 16 }}>
                An honest note: if you&apos;re a solopreneur or an enterprise, this probably isn&apos;t the right fit — and we&apos;ll tell you that up front rather than take the fee. The guarantee only means something if we qualify who we work with.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* 7. AFTER THE ASSESSMENT */}
      <Reveal as="section" id="after" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow eyebrow-green">After the assessment</div>
          <h2 className="section-heading">Two ways to run the plan.</h2>
          <div className="services-grid-4">
            <div className="service-card-v2">
              <div className="service-card-header">
                <span className="service-card-num">A</span>
                <span className="service-card-tag">Included</span>
              </div>
              <div className="service-title-v2">Do it yourself</div>
              <p className="service-body-v2">
                The report is built to stand alone. The 4-day quick-start plan gets your first tools running within the week, the prompt pack covers your named pain points, and office hours have your back for 90 days. A real path — no pressure, no drip campaign.
              </p>
            </div>

            <div className="service-card-v2">
              <div className="service-card-header">
                <span className="service-card-num">B</span>
                <span className="service-card-tag service-tag-green">$999 credited</span>
              </div>
              <div className="service-title-v2">We implement it for you</div>
              <p className="service-body-v2">
                We set up, customize, and train your team on everything in your report — from a quick-wins setup to the full roadmap. Your entire $999 assessment fee is credited toward any implementation. Scoped and quoted at your review call.
              </p>
              <a href="mailto:hello@leverageaipartner.com" className="service-link">Ask about implementation →</a>
            </div>
          </div>

          <div className="concierge-band">
            <div className="concierge-copy">
              <div className="eyebrow eyebrow-green">The ongoing option</div>
              <h3 className="concierge-heading">AI Concierge — your standing AI department, without the hire.</h3>
              <p className="concierge-body">
                For businesses that want a partner, not a project. Two working calls a month where we build live, unlimited async access between them, and a quarterly review that cuts the tools you&apos;re paying for but not using.
              </p>
            </div>
            <ul className="concierge-list">
              <li><span className="fit-bullet"><Check /></span> Two 45-minute working calls per month — we build live</li>
              <li><span className="fit-bullet"><Check /></span> Unlimited async access, answered within 12 business hours</li>
              <li><span className="fit-bullet"><Check /></span> Everything we build, you keep — skills, prompts, automations</li>
              <li><span className="fit-bullet"><Check /></span> Quarterly tool rationalization — we cut what you don&apos;t use</li>
              <li className="concierge-cap"><span className="fit-bullet"><Check /></span> Capped at 6 clients — two working calls per client is the quality ceiling, so the roster stays small</li>
            </ul>
          </div>
        </div>
      </Reveal>

      {/* 8. TOOLS */}
      <Reveal as="section" className="section" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="container">
          <div className="eyebrow eyebrow-green">Tool-agnostic, on purpose</div>
          <h2 className="section-heading">You don&apos;t need 47 tools. You need the right ones.</h2>
          <p className="body-text" style={{ marginTop: 16, marginBottom: 48, maxWidth: 600 }}>
            We prescribe whatever fits your business — including the software you already pay for. Deep fluency in the Anthropic and OpenAI ecosystems, plus the automation platforms that glue everything together.
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

      {/* 9. TEAM */}
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

      {/* 10. CTA FOOTER */}
      <Reveal as="section" id="book" className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="cta-close">
            <div className="eyebrow eyebrow-green">Ready to start?</div>
            <h2 className="cta-close-heading">Find your five hours.</h2>
            <p className="cta-close-body">
              One 45-minute conversation. A report prescribing the exact tools that fit your business. A 4-day plan to put them to work. And if we can&apos;t find you 5 reclaimable hours a week, you don&apos;t pay.
            </p>
            <div className="cta-close-row">
              <Link href={BOOK_URL} className="btn-primary">Book the Assessment</Link>
              <a href="mailto:hello@leverageaipartner.com" className="btn-ghost">Or email us directly</a>
              <span className="cta-price">
                <strong>$999</strong> · report in 48 hours · refund-backed
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

function PromptIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2.5" y="2.5" width="15" height="15" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M6 7.5l2.5 2.5L6 12.5M10.5 12.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function RecordingIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <rect x="2" y="4" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M14 8.5l4-2.5v8l-4-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
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
