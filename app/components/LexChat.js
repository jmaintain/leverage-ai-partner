"use client";
import { useState } from "react";
import Link from "next/link";

const QUESTIONS = [
  {
    q: "Are you currently using AI tools in your work?",
    options: [
      { value: "active", label: "Yes — I use ChatGPT, Claude, or similar tools regularly." },
      { value: "dabbling", label: "Occasionally — I've tried a few things but it hasn't stuck." },
      { value: "none", label: "Not yet — I haven't really started with AI." },
    ],
  },
  {
    q: "What best describes your current situation?",
    options: [
      { value: "solo", label: "Solopreneur — it's just me." },
      { value: "small", label: "Small team — 1 to 10 people." },
      { value: "mid", label: "Larger team — more than 10 people." },
      { value: "employee", label: "I'm an employee, not a business owner." },
    ],
  },
  {
    q: "Where does your team spend the most time?",
    options: [
      { value: "comms", label: "Email, meetings, and client communication." },
      { value: "admin", label: "Admin work, reporting, and documentation." },
      { value: "it", label: "IT, systems management, and technical support." },
      { value: "delivery", label: "Client work, projects, and service delivery." },
    ],
  },
  {
    q: "What's your biggest blocker with AI right now?",
    options: [
      { value: "start", label: "I don't know where to start." },
      { value: "results", label: "I've tried things but haven't seen real results." },
      { value: "tools", label: "I'm not sure which tools actually fit my work." },
      { value: "team", label: "I need to get my team on board first." },
    ],
  },
];

const RESULTS = {
  comms: {
    headline: "Your quick win is in email and communication.",
    recs: [
      "Use Claude or ChatGPT to draft, summarize, and respond to emails in a fraction of the time.",
      "Build a small library of reusable prompt templates for your most common outreach — proposals, follow-ups, check-ins.",
      "Use AI to summarize long threads or meeting notes before you respond, so you always go in prepared.",
    ],
    quickwin: "Paste your next long email thread into ChatGPT and ask for a 3-bullet summary. Do it once — you'll wonder how you managed without it.",
  },
  admin: {
    headline: "Your quick win is in admin, reporting, and documentation.",
    recs: [
      "Use AI to turn rough notes into polished SOPs, reports, or client-facing documents in minutes.",
      "Build a weekly status report template and let AI fill in the gaps from your notes.",
      "Automate repetitive document creation with workflow tools connected to AI.",
    ],
    quickwin: "Take your messiest internal document and ask Claude to rewrite it as a clear SOP. It takes 5 minutes and the result will surprise you.",
  },
  it: {
    headline: "Your quick win is in IT documentation and systems support.",
    recs: [
      "Use AI to write plain-English documentation for technical processes your whole team can actually follow.",
      "Build AI-assisted troubleshooting guides that non-technical staff can use without escalating to IT.",
      "Automate routine IT communications — change notices, system updates, and onboarding instructions.",
    ],
    quickwin: "Pick one internal technical process that's poorly documented. Ask Claude to turn your rough notes into a clear step-by-step guide. You'll have a first draft in under 10 minutes.",
  },
  delivery: {
    headline: "Your quick win is in client delivery and project workflows.",
    recs: [
      "Use AI to draft project updates, status reports, and client summaries in a fraction of the time.",
      "Build reusable prompt templates for recurring deliverables — proposals, briefs, scopes of work.",
      "Use AI to prep for client calls by summarizing past notes and surfacing the right questions to ask.",
    ],
    quickwin: "Before your next client call, paste your notes into ChatGPT and ask: 'What are the 3 most important things to address in this meeting?' You'll walk in sharper.",
  },
};

export default function LexChat() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleAnswer(value) {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    setStep(step + 1);
  }

  function handleEmailSubmit(e) {
    e.preventDefault();
    // TODO: wire up email service (Resend, EmailJS, Formspree, etc.)
    console.log("Lex email capture:", email, "Answers:", answers);
    setSubmitted(true);
  }

  const isResult = step >= QUESTIONS.length;
  const result = isResult ? (RESULTS[answers[2]] ?? RESULTS.admin) : null;

  return (
    <div className="lex-card">
      {!isResult ? (
        <>
          <div className="lex-progress">
            <span className="lex-progress-label">Step {step + 1} of {QUESTIONS.length}</span>
            <div className="lex-progress-bar">
              <div
                className="lex-progress-fill"
                style={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>
          <p className="lex-question">{QUESTIONS[step].q}</p>
          <div className="lex-options">
            {QUESTIONS[step].options.map((opt) => (
              <button
                key={opt.value}
                className="lex-option-btn"
                onClick={() => handleAnswer(opt.value)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="lex-result">
          <div className="eyebrow eyebrow-green">Your action plan</div>
          <h2 className="lex-result-headline">{result.headline}</h2>
          <ul className="lex-result-recs">
            {result.recs.map((rec, i) => (
              <li key={i} className="lex-result-rec">{rec}</li>
            ))}
          </ul>
          <div className="lex-result-quickwin">
            <div className="lex-quickwin-label">Your best first step</div>
            <p className="lex-quickwin-text">{result.quickwin}</p>
          </div>

          {!submitted ? (
            <form className="lex-email-form" onSubmit={handleEmailSubmit}>
              <p className="lex-email-label">Want this sent to your inbox?</p>
              <div className="lex-email-row">
                <input
                  type="email"
                  className="lex-email-input"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn-primary">Send it</button>
              </div>
            </form>
          ) : (
            <div className="lex-confirm">
              <span className="lex-confirm-check">✓</span>
              Got it — we&apos;ll send this to <strong>{email}</strong>. Check your inbox shortly.
            </div>
          )}

          <div className="lex-result-cta">
            <p className="lex-result-cta-text">Want a custom plan built around your specific business?</p>
            <Link href="/book" className="btn-primary">Book an AI Audit — $497</Link>
          </div>
        </div>
      )}
    </div>
  );
}
