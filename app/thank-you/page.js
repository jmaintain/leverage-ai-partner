import Link from "next/link";

export const metadata = {
  title: "You're booked · Leverage AI Partner",
  description: "Your intro call is confirmed. Here's what happens next.",
};

export default function ThankYouPage() {
  return (
    <main className="page-content">
      <div className="page-content-inner">
        <div className="eyebrow eyebrow-green">You're booked</div>
        <h1 className="page-content-title">Talk soon.</h1>
        <p className="page-content-body">
          Your intro call is confirmed — check your inbox for a calendar invite and a short intake note. We'll come prepared. You'll leave the 45-minute call with a clear sense of what's possible and a report in your hands 48 hours later.
        </p>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <Link href="/" className="btn-ghost">Back to home</Link>
          <a href="mailto:hello@leverageaipartner.com" className="btn-ghost">
            Email us
          </a>
        </div>
      </div>
    </main>
  );
}
