import Link from "next/link";

export const metadata = {
  title: "Resources · Leverage AI Partner",
  description:
    "Free tools from our team — the Lex quick-win chat and a prompt library for business workflows. No sign-up required.",
};

export default function ResourcesPage() {
  return (
    <main className="resources-wrap">
      <section className="resources-hero container">
        <div className="eyebrow eyebrow-green">Resources</div>
        <h1 className="resources-headline">Free tools to help you move faster.</h1>
        <p className="resources-subhead">
          No sign-up required.
        </p>
      </section>

      <section className="section resources-cards-section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="resources-cards">
          <Link href="/chat" className="resource-card">
            <div className="resource-card-icon"><LexIcon /></div>
            <div className="resource-card-title">Chat with Lex</div>
            <p className="resource-card-body">
              4 quick questions. A personalized AI action plan. Lex identifies your highest-leverage quick win in about 2 minutes — with a specific first step you can take today.
            </p>
            <span className="resource-card-link">Start the chat →</span>
          </Link>
          <Link href="/prompts" className="resource-card">
            <div className="resource-card-icon"><PromptsIcon /></div>
            <div className="resource-card-title">Prompt Library</div>
            <p className="resource-card-body">
              Copy-ready AI prompts for operations, admin, and IT workflows. Built for business teams — click to copy, paste into any AI tool.
            </p>
            <span className="resource-card-link">Browse prompts →</span>
          </Link>
        </div>
      </section>

      <section className="section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="cta-close">
          <div className="eyebrow eyebrow-green">Ready to go deeper?</div>
          <h2 className="cta-close-heading">Get a plan built for your business.</h2>
          <p className="cta-close-body">
            The AI Business Assessment gives you a custom roadmap built around how your team specifically operates — not a generic checklist.
          </p>
          <div className="cta-close-row">
            <a href="https://zcal.co/i/e8rGW1ab" className="btn-primary">Book a Call — $497</a>
            <a href="mailto:hello@leverageaipartner.com" className="btn-ghost">Email us</a>
          </div>
        </div>
      </section>
    </main>
  );
}

function LexIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
      <path d="M11 3C6.58 3 3 6.58 3 11s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8z" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 11h6M11 8v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
