import Link from "next/link";

export const metadata = {
  title: "The AI Tools Assessment · Leverage AI Partner",
  description:
    "The AI Tools Assessment: a 45-minute interview, a 48-hour report prescribing 3–7 tools that reclaim 5+ hours per week, a recorded review call, a custom prompt pack, and 90 days of office hours. $999, refund-backed.",
};

const BOOK_URL = "/book";

export default function AssessmentPage() {
  return (
    <main className="assessment-wrap">
      <div className="container">
        <div className="eyebrow eyebrow-green">The AI Tools Assessment</div>
        <h1 className="hero-headline" style={{ fontSize: "clamp(36px, 5.5vw, 64px)" }}>
          The right 3 tools — and someone to make them stick.
        </h1>
        <p className="hero-subhead">
          One flat-fee engagement. No retainer, no pressure. You leave with a prescription you can act on — with or without us. If we find fewer than 5 reclaimable hours per week, you get a full refund.
        </p>

        <div className="assessment-panel">
          <div className="assessment-row">
            <div className="assessment-label">Discovery interview</div>
            <div className="assessment-value">45 min · Zoom · recorded</div>
          </div>
          <div className="assessment-row">
            <div className="assessment-label">Assessment report</div>
            <div className="assessment-value">3–7 tool prescriptions · delivered in 48 hrs</div>
          </div>
          <div className="assessment-row">
            <div className="assessment-label">Review call</div>
            <div className="assessment-value">Recorded — you keep the recording &amp; transcript</div>
          </div>
          <div className="assessment-row">
            <div className="assessment-label">Custom prompt pack</div>
            <div className="assessment-value">3–5 prompts built for your business</div>
          </div>
          <div className="assessment-row">
            <div className="assessment-label">Office hours</div>
            <div className="assessment-value">One emailed question / month · 90 days</div>
          </div>
          <div className="assessment-row">
            <div className="assessment-label">Investment</div>
            <div className="assessment-value" style={{ color: "var(--color-accent-green)" }}>
              $999 flat · refund-backed
            </div>
          </div>
        </div>

        <div style={{ marginTop: 40, display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
          <Link href={BOOK_URL} className="btn-primary">Book the Assessment</Link>
          <Link href="/" className="btn-ghost">Back to overview</Link>
        </div>
      </div>
    </main>
  );
}
