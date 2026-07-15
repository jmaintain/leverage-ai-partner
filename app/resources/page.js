import Link from "next/link";
import FaqAccordion from "../components/FaqAccordion";

export const metadata = {
  title: "Resources · Leverage AI Partner",
  description:
    "Free resources to help your team move faster with AI — a copy-ready prompt library and answers to the most common questions about the AI Tools Assessment.",
};

export default function ResourcesPage() {
  return (
    <main className="resources-wrap">
      <section className="resources-hero container">
        <div className="eyebrow eyebrow-green">Resources</div>
        <h1 className="resources-headline">Tools to help you move faster with AI.</h1>
        <p className="resources-subhead">
          Free resources from our team — no sign-up required.
        </p>
      </section>

      <section className="section resources-cards-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="resources-cards">
          <Link href="/prompts" className="resource-card">
            <div className="resource-card-icon"><PromptsIcon /></div>
            <div className="resource-card-title">Prompt Library</div>
            <p className="resource-card-body">
              Copy-ready AI prompts for operations, admin, and IT workflows. Built for business teams, not developers — click to copy, paste into any AI tool.
            </p>
            <span className="resource-card-link">Browse prompts →</span>
          </Link>
          <Link href="/assessment" className="resource-card">
            <div className="resource-card-icon"><AssessmentIcon /></div>
            <div className="resource-card-title">The AI Tools Assessment</div>
            <p className="resource-card-body">
              What&apos;s included, how it works, and the guarantee — a one-page overview of the assessment: 3–7 tool prescriptions that reclaim 5+ hours of your week, or it&apos;s free.
            </p>
            <span className="resource-card-link">See the details →</span>
          </Link>
        </div>
      </section>

      <section className="section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="eyebrow">Common questions</div>
        <h2 className="section-heading">Answers before you ask.</h2>
        <div style={{ marginTop: 48 }}>
          <FaqAccordion />
        </div>
      </section>

      <section className="section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="cta-close">
          <div className="eyebrow eyebrow-green">Ready to go deeper?</div>
          <h2 className="cta-close-heading">Get a prescription built for your business.</h2>
          <p className="cta-close-body">
            These resources are a starting point. The AI Tools Assessment prescribes the exact 3–7 tools that fit how your business actually runs — and if we can&apos;t find you 5 reclaimable hours a week, it&apos;s free.
          </p>
          <div className="cta-close-row">
            <Link href="/book" className="btn-primary">Book the Assessment — $999</Link>
            <a href="mailto:hello@leverageaipartner.com" className="btn-ghost">Email us</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function AssessmentIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 3C6.58 3 3 6.58 3 11s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 11l2.5 2.5 4.5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PromptsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7 8h8M7 12h6M7 16h4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}
