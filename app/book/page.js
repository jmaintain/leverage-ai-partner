import Link from "next/link";
import Reveal from "../components/Reveal";
import ZcalEmbed from "../components/ZcalEmbed";

export const metadata = {
  title: "Book Your AI Assessment · Leverage AI Partner",
  description:
    "Book your 45-minute AI Business Assessment. Walk away with a custom roadmap showing exactly where AI fits in your business.",
};

export default function BookPage() {
  return (
    <main className="book-wrap">

      {/* HERO */}
      <section className="book-hero container">
        <div className="eyebrow eyebrow-green">AI Business Assessment</div>
        <h1 className="book-headline">
          Stop guessing. Start automating the right things.
        </h1>
        <p className="book-subhead">
          One 45-minute call. A custom report in 48 hours. A clear, prioritized plan built around your actual business — not a generic AI checklist.
        </p>
      </section>

      {/* PROBLEM */}
      <Reveal as="section" className="section book-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="book-two-col">
          <div>
            <div className="eyebrow">The Problem</div>
            <h2 className="book-section-heading">You know AI could help. You just don't know where to start.</h2>
          </div>
          <div className="book-prose">
            <p>
              You've bookmarked 47 tools. You've watched the YouTube tutorials. You've sat through the webinars. But you're still doing everything manually — because you can't figure out where AI actually fits <em>in your specific business</em>.
            </p>
            <p>
              Every week, you're bleeding 10+ hours on tasks that should take minutes. Following up with leads. Formatting documents. Answering the same questions. Scheduling the same things. Again and again.
            </p>
            <p>
              Meanwhile, your competitors are quietly automating while you're drowning in admin work.
            </p>
          </div>
        </div>
      </Reveal>

      {/* OPPORTUNITY */}
      <Reveal as="section" className="section book-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="book-opportunity-card">
          <div className="eyebrow eyebrow-green">The Opportunity</div>
          <h2 className="book-section-heading" style={{ maxWidth: 680 }}>
            What if you had a clear, prioritized roadmap — built for your business, not the next guy's?
          </h2>
          <p className="book-prose-single">
            Not another generic "Top 10 AI Tools" listicle. A custom implementation plan that identifies exactly which workflows to automate first, which tools to use, and how to do it without disrupting how your team already works. Something you can start executing this week.
          </p>
          <div className="book-stat-row">
            <div className="book-stat">
              <div className="book-stat-num">45 min</div>
              <div className="book-stat-label">Discovery call</div>
            </div>
            <div className="book-stat">
              <div className="book-stat-num">48 hrs</div>
              <div className="book-stat-label">Custom report delivered</div>
            </div>
            <div className="book-stat">
              <div className="book-stat-num">$497</div>
              <div className="book-stat-label">Flat fee, no retainer</div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* LOOM VIDEO PLACEHOLDER */}
      <Reveal as="section" className="section book-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="eyebrow">See it in action</div>
        <h2 className="book-section-heading">Watch a quick walkthrough</h2>
        <div className="book-video-placeholder">
          <div className="book-video-inner">
            <div className="book-video-icon">▶</div>
            <p className="book-video-label">Video walkthrough coming soon</p>
          </div>
        </div>
      </Reveal>

      {/* WHAT YOU GET */}
      <Reveal as="section" className="section book-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="eyebrow eyebrow-green">What's included</div>
        <h2 className="book-section-heading">Everything you need to move fast — nothing you don't.</h2>
        <div className="book-deliverables">
          <div className="book-deliverable">
            <div className="book-deliverable-num">01</div>
            <div>
              <div className="book-deliverable-title">45-Min Discovery Call</div>
              <p className="book-deliverable-body">
                We go deep on how your business actually runs. Where time leaks, what tools you already pay for, what's eating your week, and where the biggest leverage points are hiding.
              </p>
            </div>
          </div>
          <div className="book-deliverable">
            <div className="book-deliverable-num">02</div>
            <div>
              <div className="book-deliverable-title">Custom AI Roadmap Report</div>
              <p className="book-deliverable-body">
                Delivered within 48 hours. A prioritized, step-by-step implementation plan specific to your workflows — including which tools to use, what to automate first, and realistic time savings you can expect.
              </p>
            </div>
          </div>
          <div className="book-deliverable">
            <div className="book-deliverable-num">03</div>
            <div>
              <div className="book-deliverable-title">30-Min Walkthrough Call</div>
              <p className="book-deliverable-body">
                We walk through your report together, answer questions, and make sure you know exactly how to execute — whether you work with us going forward or run it yourself.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* NEXT STEPS */}
      <Reveal as="section" className="section book-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="eyebrow">Next steps</div>
        <h2 className="book-section-heading">Here's exactly what happens after you book.</h2>
        <div className="book-steps">
          <div className="book-step">
            <div className="book-step-dot" />
            <div>
              <div className="book-step-title">You pick a time below</div>
              <p className="book-step-body">Choose a slot that works for you. You'll get a confirmation and a short intake form so I can come prepared.</p>
            </div>
          </div>
          <div className="book-step">
            <div className="book-step-dot" />
            <div>
              <div className="book-step-title">We meet on Zoom (45 min)</div>
              <p className="book-step-body">No prep required on your end. I'll ask the questions. You just show up and talk about your business.</p>
            </div>
          </div>
          <div className="book-step">
            <div className="book-step-dot" />
            <div>
              <div className="book-step-title">You receive your report (48 hrs)</div>
              <p className="book-step-body">A custom document lands in your inbox — prioritized recommendations, specific tools, and a clear starting point.</p>
            </div>
          </div>
          <div className="book-step">
            <div className="book-step-dot" />
            <div>
              <div className="book-step-title">We walk through it together (30 min)</div>
              <p className="book-step-body">We review the plan, answer your questions, and make sure you leave with complete clarity on what to do next.</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* TESTIMONIALS PLACEHOLDER */}
      <Reveal as="section" className="section book-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="eyebrow">What clients say</div>
        <h2 className="book-section-heading">Results from real businesses.</h2>
        <div className="book-testimonials">
          <div className="book-testimonial book-testimonial-placeholder">
            <p className="book-testimonial-quote">Testimonial coming soon.</p>
            <div className="book-testimonial-author">— Client Name, Business</div>
          </div>
          <div className="book-testimonial book-testimonial-placeholder">
            <p className="book-testimonial-quote">Testimonial coming soon.</p>
            <div className="book-testimonial-author">— Client Name, Business</div>
          </div>
          <div className="book-testimonial book-testimonial-placeholder">
            <p className="book-testimonial-quote">Testimonial coming soon.</p>
            <div className="book-testimonial-author">— Client Name, Business</div>
          </div>
        </div>
      </Reveal>

      {/* CALENDAR */}
      <Reveal as="section" id="calendar" className="section book-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="eyebrow eyebrow-green">Book your call</div>
        <h2 className="book-section-heading">Pick a time that works for you.</h2>
        <p className="book-prose-single" style={{ marginBottom: 40 }}>
          45 minutes. Zoom. No prep required — just show up ready to talk about your business.
        </p>
        <div className="book-calendar-wrap">
          <ZcalEmbed />
        </div>
      </Reveal>

      <div className="container" style={{ paddingBottom: 80, borderTop: "1px solid var(--color-border)", paddingTop: 40 }}>
        <Link href="/" className="btn-ghost">← Back to overview</Link>
      </div>

    </main>
  );
}
