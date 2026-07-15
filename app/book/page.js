import Link from "next/link";
import Reveal from "../components/Reveal";
import ZcalEmbed from "../components/ZcalEmbed";

export const metadata = {
  title: "Book the AI Tools Assessment · Leverage AI Partner",
  description:
    "Book your 45-minute AI Tools Assessment. Within 48 hours, get a report prescribing the 3–7 tools that reclaim 5+ hours of your week — guaranteed, or it's free.",
};

export default function BookPage() {
  return (
    <main className="book-wrap">

      {/* HERO */}
      <section className="book-hero container">
        <div className="eyebrow eyebrow-green">The AI Tools Assessment</div>
        <h1 className="book-headline">
          Stop guessing. Start with the right three tools.
        </h1>
        <p className="book-subhead">
          One 45-minute call. Within 48 hours, a report prescribing the 3–7 tools that reclaim 5+ hours of your week — with a 4-day plan to make them stick. If we can’t find 5 reclaimable hours, it’s free.
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
            What if you had a prescription — the exact tools for your business, not the next guy’s?
          </h2>
          <p className="book-prose-single">
            Not another generic “Top 10 AI Tools” listicle. A report prescribing 3–7 specific tools — one per problem, with real pricing and setup effort — plus a 4-day quick-start plan. And it’s backed by a guarantee: if the assessment identifies fewer than 5 reclaimable hours per week, you get a full refund.
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
              <div className="book-stat-num">$999</div>
              <div className="book-stat-label">Flat fee · refund-backed</div>
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
              <div className="book-deliverable-title">The Assessment Report</div>
              <p className="book-deliverable-body">
                Delivered within 48 hours. 3–7 tool prescriptions with real pricing and setup effort, an effort-vs-impact matrix, the ROI math shown in full, and a 4-day quick-start plan.
              </p>
            </div>
          </div>
          <div className="book-deliverable">
            <div className="book-deliverable-num">03</div>
            <div>
              <div className="book-deliverable-title">Review Call — Recorded, Yours to Keep</div>
              <p className="book-deliverable-body">
                We walk through your report together and make sure you know exactly how to execute. The recording and transcript are yours — most clients share them with their team as training material.
              </p>
            </div>
          </div>
          <div className="book-deliverable">
            <div className="book-deliverable-num">04</div>
            <div>
              <div className="book-deliverable-title">Prompt Pack + 90 Days of Office Hours</div>
              <p className="book-deliverable-body">
                A custom prompt pack built for your named pain points, delivered with the report. Then one emailed question per month for 90 days — you’re not on your own during rollout.
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
              <div className="book-step-title">We walk through it together (review call)</div>
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
