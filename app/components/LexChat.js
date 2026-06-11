"use client";
import { useState } from "react";

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
    prompt: `You are a professional business communication assistant. I'm going to paste an email thread below. Please:
1. Summarize the key points in 3 bullets
2. Identify any action items I need to respond to
3. Draft a clear, concise reply I can send or lightly edit

Here is the email thread:
[PASTE YOUR EMAIL THREAD HERE]`,
  },
  admin: {
    headline: "Your quick win is in admin, reporting, and documentation.",
    recs: [
      "Use AI to turn rough notes into polished SOPs, reports, or client-facing documents in minutes.",
      "Build a weekly status report template and let AI fill in the gaps from your notes.",
      "Automate repetitive document creation with workflow tools connected to AI.",
    ],
    quickwin: "Take your messiest internal document and ask Claude to rewrite it as a clear SOP. It takes 5 minutes and the result will surprise you.",
    prompt: `You are a business operations expert. I'm going to give you my rough notes on a process. Please turn them into a clear, step-by-step Standard Operating Procedure (SOP) that anyone on my team can follow.

Format it with:
- A short title and purpose statement
- Numbered steps
- Any important notes or warnings in bold

Here are my rough notes:
[PASTE YOUR NOTES HERE]`,
  },
  it: {
    headline: "Your quick win is in IT documentation and systems support.",
    recs: [
      "Use AI to write plain-English documentation for technical processes your whole team can actually follow.",
      "Build AI-assisted troubleshooting guides that non-technical staff can use without escalating to IT.",
      "Automate routine IT communications — change notices, system updates, and onboarding instructions.",
    ],
    quickwin: "Pick one internal technical process that's poorly documented. Ask Claude to turn your rough notes into a clear step-by-step guide. You'll have a first draft in under 10 minutes.",
    prompt: `You are a technical writer who specializes in making IT processes easy for non-technical staff to understand. I'm going to describe a technical process or system. Please write:
1. A plain-English explanation of what it does and why it matters
2. A step-by-step guide any team member can follow
3. A simple troubleshooting section for the 3 most common issues

Here is the process to document:
[DESCRIBE YOUR PROCESS OR PASTE YOUR NOTES HERE]`,
  },
  delivery: {
    headline: "Your quick win is in client delivery and project workflows.",
    recs: [
      "Use AI to draft project updates, status reports, and client summaries in a fraction of the time.",
      "Build reusable prompt templates for recurring deliverables — proposals, briefs, scopes of work.",
      "Use AI to prep for client calls by summarizing past notes and surfacing the right questions to ask.",
    ],
    quickwin: "Before your next client call, paste your notes into ChatGPT and ask: 'What are the 3 most important things to address in this meeting?' You'll walk in sharper.",
    prompt: `You are a client success expert. I'm going to share my notes from recent interactions with a client. Please:
1. Summarize where we stand on the project in 2-3 sentences
2. List the 3 most important things to address in our next meeting
3. Draft a short, professional status update I can send to the client

Here are my notes:
[PASTE YOUR CLIENT NOTES HERE]`,
  },
};

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  function handleCopy() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <button className="lex-copy-btn" onClick={handleCopy}>
      {copied ? "✓ Copied!" : "Copy prompt"}
    </button>
  );
}

export default function LexChat() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  function handleAnswer(value) {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);
    setStep(step + 1);
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

          <div className="lex-prompt-block">
            <div className="lex-prompt-label">Ready-to-use prompt — paste this into ChatGPT or Claude</div>
            <pre className="lex-prompt-text">{result.prompt}</pre>
            <CopyButton text={result.prompt} />
          </div>

          <div className="lex-result-cta">
            <p className="lex-result-cta-text">Want a custom plan built around your specific business?</p>
            <a href="https://zcal.co/i/e8rGW1ab" className="btn-primary">Book a Call</a>
          </div>
        </div>
      )}
    </div>
  );
}
