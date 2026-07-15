"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "What is the AI Tools Assessment?",
    a: "A 45-minute structured interview about how your business actually runs. Within 48 hours you receive a report prescribing 3–7 specific tools that reclaim at least 5 hours of your week, with a 4-day quick-start plan. It includes a recorded review call (you keep the recording and transcript), a custom prompt pack built for your business, and 90 days of email office hours — all for a flat $999.",
  },
  {
    q: "What's the guarantee?",
    a: "If your assessment identifies fewer than 5 reclaimable hours per week, you get a full refund. We can offer that because in any owner-operated business with real payroll, the hours are there — hiding in email, admin, scheduling, and follow-up.",
  },
  {
    q: "Who is this for?",
    a: "Owner-operated businesses, roughly $500K–$5M in revenue with 3–25 employees, where the owner is still in the weeds of day-to-day operations. If you're a solopreneur or an enterprise, we'll tell you honestly that this isn't the right fit and point you in a better direction — the guarantee only works because we qualify who we work with.",
  },
  {
    q: "Do I need to be technical to benefit?",
    a: "Not at all. Most of our clients are operators, owners, and managers — not technical staff. Every recommendation is in plain language with a concrete first step, and the 4-day quick-start plan assumes zero technical background.",
  },
  {
    q: "What tools do you recommend?",
    a: "We're tool-agnostic at the assessment — we prescribe whatever fits, from ChatGPT and Claude to automation platforms like Make and Zapier to vertical software for your industry. We especially look for tools you already pay for but underuse; those recommendations cost you nothing new and are often the fastest wins.",
  },
  {
    q: "What happens after the assessment?",
    a: "Two ways to run the plan. Do it yourself — the report, quick-start plan, prompt pack, and office hours are built to stand alone. Or have us implement it for you: we set up, customize, and train your team on everything in the report, and your full $999 assessment fee is credited toward the implementation.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes — the AI Concierge, our ongoing partnership. Two 45-minute working calls a month where we build live, unlimited async access between calls, and a quarterly review that cuts the tools you're paying for but not using. Everything we build is yours to keep. The roster is capped at 6 clients so quality stays high.",
  },
  {
    q: "How is this different from hiring someone full-time?",
    a: "A full-time AI hire takes months to find and costs six figures annually before you know whether they'll deliver. The assessment gets you a specific, prioritized plan for $999 in under a week — and if you want hands-on help after that, implementation and the Concierge give you two engineers with deep IT backgrounds for a fraction of a single salary.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {FAQS.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="faq-item">
            <button
              className="faq-trigger"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span>{faq.q}</span>
              <span className={`faq-chevron${isOpen ? " open" : ""}`}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <div className={`faq-body${isOpen ? " open" : ""}`}>
              <p className="faq-answer">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
