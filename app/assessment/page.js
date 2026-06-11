import Link from "next/link";

export const metadata = {
  title: "AI Business Assessment · Leverage AI Partner",
  description:
    "The AI Business Assessment: a structured discovery call, a custom report in 48 hours, and a walkthrough call. $497 flat.",
};

const BOOK_URL = "/book";

export default function AssessmentPage() {
  return (
    <main className="assessment-wrap">
      <div className="container">
        <div className="eyebrow eyebrow-green">AI Business Assessment</div>
        <h1 className="hero-headline" style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}>
          The fastest way to find your biggest automation wins.
        </h1>
        <p className="hero-subhead">
          A structured discovery call, a custom 48-hour report mapping your opportunities by effort and impact, and a walkthrough call so you know exactly where to start.
        </p>

        <div className="assessment-panel">
          <div className="assessment-row">
            <div className="assessment-label">Discovery call</div>
            <div className="assessment-value">Structured · Zoom</div>
          </div>
          <div className="assessment-row">
            <div className="assessment-label">Custom report</div>
            <div className="assessment-value">Delivered in 48 hrs</div>
          </div>
          <div className="assessment-row">
            <div className="assessment-label">Walkthrough call</div>
            <div className="assessment-value">Zoom</div>
          </div>
          <div className="assessment-row">
            <div className="assessment-label">Investment</div>
            <div className="assessment-value" style={{ color: "var(--color-accent-green)" }}>
              From $497
            </div>
          </div>
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <Link href={BOOK_URL} className="btn-primary">Book your assessment →</Link>
          <Link href="/" className="btn-ghost">Back to overview</Link>
        </div>
      </div>
    </main>
  );
}
