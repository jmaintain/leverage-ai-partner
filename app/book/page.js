import Link from "next/link";
import Reveal from "../components/Reveal";
import ZcalEmbed from "../components/ZcalEmbed";

export const metadata = {
  title: "Book Your AI Assessment · Leverage AI Partner",
  description:
    "Book your AI Business Assessment. A structured discovery call, a custom report in 48 hours, and a walkthrough call. $497 flat.",
};

export default function BookPage() {
  return (
    <main className="book-wrap">

      {/* HERO */}
      <section className="book-hero container">
        <div className="eyebrow eyebrow-green">AI Business Assessment — $497</div>
        <h1 className="book-headline">
          A clear map of your automation opportunities.
        </h1>
        <p className="book-subhead">
          A structured discovery call, a custom report in 48 hours, and a walkthrough call so you know exactly where to start.
        </p>
      </section>

      {/* WHAT YOU GET */}
      <Reveal as="section" className="section book-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="eyebrow eyebrow-green">What&apos;s included</div>
        <h2 className="book-section-heading">Everything you need. Nothing you don&apos;t.</h2>
        <div className="book-deliverables">
          <div className="book-deliverable">
            <div className="book-deliverable-num">01</div>
            <div>
              <div className="book-deliverable-title">Discovery Call</div>
              <p className="book-deliverable-body">
                We go deep on how your business actually runs — where time leaks, what tools you already pay for, and where the biggest leverage points are hiding.
              </p>
            </div>
          </div>
          <div className="book-deliverable">
            <div className="book-deliverable-num">02</div>
            <div>
              <div className="book-deliverable-title">Custom Report · 48 hrs</div>
              <p className="book-deliverable-body">
                A prioritized implementation plan specific to your workflows — which tools to use, what to automate first, and realistic time savings you can expect.
              </p>
            </div>
          </div>
          <div className="book-deliverable">
            <div className="book-deliverable-num">03</div>
            <div>
              <div className="book-deliverable-title">Walkthrough Call</div>
              <p className="book-deliverable-body">
                We walk through your report together and answer questions. You leave with complete clarity on what to do next — whether you work with us or run it yourself.
              </p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* NEXT STEPS */}
      <Reveal as="section" className="section book-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="eyebrow">Next steps</div>
        <h2 className="book-section-heading">Here&apos;s exactly what happens after you book.</h2>
        <div className="book-steps">
          <div className="book-step">
            <div className="book-step-dot" />
            <div>
              <div className="book-step-title">Pick a time below</div>
              <p className="book-step-body">Choose a slot that works. You&apos;ll get a confirmation and a short intake form so we can come prepared.</p>
            </div>
          </div>
          <div className="book-step">
            <div className="book-step-dot" />
            <div>
              <div className="book-step-title">Meet on Zoom</div>
              <p className="book-step-body">No prep required. We&apos;ll ask the questions — you just show up and talk about your business.</p>
            </div>
          </div>
          <div className="book-step">
            <div className="book-step-dot" />
            <div>
              <div className="book-step-title">Receive your report</div>
              <p className="book-step-body">A custom document lands in your inbox within 48 hours — prioritized recommendations, specific tools, and a clear starting point.</p>
            </div>
          </div>
          <div className="book-step">
            <div className="book-step-dot" />
            <div>
              <div className="book-step-title">Walk through it together</div>
              <p className="book-step-body">We review the plan, answer your questions, and make sure you leave knowing exactly what to do next.</p>
            </div>
          </div>
        </div>
      </Reveal>

      {/* CALENDAR */}
      <Reveal as="section" id="calendar" className="section book-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="eyebrow eyebrow-green">Book a call</div>
        <h2 className="book-section-heading">Pick a time that works for you.</h2>
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
