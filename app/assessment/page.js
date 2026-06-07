import Link from "next/link";

export const metadata = {
  title: "AI Business Assessment · Leverage AI Partner",
  description:
    "The AI Business Assessment: a 45-minute call, a custom report in 48 hours, and a follow-up walkthrough. Flat $497.",
};

const BOOK_URL = "/book";

export default function AssessmentPage() {
  return (
    <main className="assessment-wrap">
      <div className="container">
        <div className="eyebrow eyebrow-green">The AI Business Assessment</div>
        <h1 className="hero-headline" style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}>
          A clear, specific plan for where AI fits in your business.
        </h1>
        <p className="hero-subhead">
          One flat-fee engagement. No retainer. No upsell pressure. You leave with a report you can act on — with or without us.
        </p>

        <div className="assessment-panel">
          <div className="assessment-row">
            <div className="assessment-label">Discovery call</div>
            <div className="assessment-value">45 min · Zoom</div>
          </div>
          <div className="assessment-row">
            <div className="assessment-label">Custom report</div>
            <div className="assessment-value">Delivered in 48 hrs</div>
          </div>
          <div className="assessment-row">
            <div className="assessment-label">Walkthrough call</div>
            <div className="assessment-value">30 min · Zoom</div>
          </div>
          <div className="assessment-row">
            <div className="assessment-label">Investment</div>
            <div className="assessment-value" style={{ color: "var(--color-accent-green)" }}>
              $497 flat
            </div>
          </div>
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <Link href={BOOK_URL} className="btn-primary">Book your 45-min assessment call</Link>
          <Link href="/" className="btn-ghost">Back to overview</Link>
        </div>
      </div>
    </main>
  );
}
