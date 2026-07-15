import Link from "next/link";
import PromptGrid from "../components/PromptGrid";

export const metadata = {
  title: "AI Prompt Library · Leverage AI Partner",
  description:
    "Free, copy-ready AI prompts for business operations, admin, and IT workflows. Built for business teams — click to copy, paste into ChatGPT or Claude.",
};

export default function PromptsPage() {
  return (
    <main className="prompts-wrap">
      <section className="prompts-hero container">
        <div className="eyebrow eyebrow-green">Prompt Library</div>
        <h1 className="prompts-headline">Copy-ready prompts for your team.</h1>
        <p className="prompts-subhead">
          Built for operations, admin, and IT workflows. Click any prompt to copy it, then paste it directly into ChatGPT, Claude, or any AI tool you use.
        </p>
      </section>

      <section className="section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <PromptGrid />
      </section>

      <section className="section container" style={{ borderTop: "1px solid var(--color-border)" }}>
        <div className="cta-close">
          <div className="eyebrow eyebrow-green">Want more than prompts?</div>
          <h2 className="cta-close-heading">Get a prompt pack built for your business.</h2>
          <p className="cta-close-body">
            These are generic on purpose — the AI Tools Assessment includes a custom prompt pack built around your actual pain points, plus the 3–7 tool prescriptions that reclaim 5+ hours of your week. Guaranteed, or it&apos;s free.
          </p>
          <div className="cta-close-row">
            <Link href="/book" className="btn-primary">Book the Assessment — $999</Link>
            <Link href="/resources" className="btn-ghost">Back to resources</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
