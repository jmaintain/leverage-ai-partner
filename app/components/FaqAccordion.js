"use client";
import { useState } from "react";

const FAQS = [
  {
    q: "What is an AI Business Audit?",
    a: "The AI Business Audit is a focused engagement where we learn how your business runs, identify your highest-leverage automation opportunities, and deliver a custom report within 48 hours. It includes a 45-minute discovery call, the written report, and a 30-minute walkthrough call — all for a flat $497.",
  },
  {
    q: "Do I need to be technical to benefit?",
    a: "Not at all. Most of our clients are operators, owners, and managers — not technical staff. We translate everything into plain language and practical next steps you can act on immediately, with or without a technical background.",
  },
  {
    q: "What AI tools do you work with?",
    a: "We work across a broad range — from ChatGPT and Claude to workflow automation platforms like Make, Zapier, and n8n, to enterprise tools within Microsoft 365 and Google Workspace. We recommend based on what already exists in your environment, not what we prefer to sell.",
  },
  {
    q: "How long does the whole process take?",
    a: "The audit is complete within a week: a 45-minute discovery call, a 48-hour report turnaround, and a 30-minute walkthrough. Implementation timelines depend on scope — quick wins can often be running within days of the audit.",
  },
  {
    q: "What happens after the audit?",
    a: "You walk away with a prioritized roadmap you can act on independently. Many clients choose to continue working with us to implement what the report surfaces — through a custom build engagement or an ongoing retainer — but there's no obligation.",
  },
  {
    q: "Can you build custom AI solutions for us?",
    a: "Yes. Custom AI development is one of our core services — agents, automations, GPTs, and workflow integrations built around your specific processes. These are scoped as flat-fee projects with clear deliverables.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "We do. Our retainer support gives you monthly access to both engineers via call or async — for tune-ups, new integrations, team questions, and rapid-response help as your AI and technology environment evolves.",
  },
  {
    q: "How is this different from hiring someone full-time?",
    a: "A full-time AI hire takes months to find and onboard, and costs six figures annually before you know whether they'll deliver. With us, you get two engineers with deep IT and AI backgrounds for a fraction of that cost — and you can start with a single $497 audit to see exactly what's possible before committing to anything.",
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
