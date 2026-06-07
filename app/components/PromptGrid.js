"use client";
import { useState } from "react";

const PROMPTS = [
  {
    category: "Operations & Admin",
    title: "Write a Standard Operating Procedure",
    prompt: `You are a business process specialist. Create a clear, step-by-step Standard Operating Procedure (SOP) for the following process: [describe the process].

Include:
- Purpose and scope (1–2 sentences)
- Who this applies to
- Step-by-step instructions (numbered, one action per step)
- Who is responsible for each step
- What to do if something goes wrong

Write it so a new employee could follow it on their first day without asking for help.`,
  },
  {
    category: "Operations & Admin",
    title: "Summarize a Meeting into Action Items",
    prompt: `Below are notes or a transcript from a meeting. Please:

1. Write a 3-sentence executive summary of what was discussed
2. List every action item with: what needs to be done, who owns it, and the deadline (if mentioned)
3. Flag any unresolved questions or decisions that still need follow-up

Meeting notes:
[paste your notes or transcript here]`,
  },
  {
    category: "Operations & Admin",
    title: "Create a Weekly Status Report Template",
    prompt: `Create a professional weekly status report template for a [team or department name] at a [type of business].

The report should include sections for:
- Highlights from this week (3–5 bullets)
- Progress toward key goals or projects
- Blockers or items needing attention
- Top priorities for next week

Keep it concise — it should take no more than 10 minutes to fill out and 3 minutes to read.`,
  },
  {
    category: "Operations & Admin",
    title: "Draft a New Hire Onboarding Checklist",
    prompt: `Create a comprehensive onboarding checklist for a new [job title] joining our team.

Include tasks for:
- Day 1: system access, introductions, and basic orientation
- Week 1: role-specific training, tool setup, and first meetings
- Month 1: goals review, culture integration, and key relationships

Format as a checklist with checkboxes. Include the responsible party (new hire, manager, IT, HR) and a brief description for each task.`,
  },
  {
    category: "Operations & Admin",
    title: "Turn Rough Notes into a Professional Email",
    prompt: `Here are my rough notes for an email I need to send:

[paste your bullet points or rough notes here]

Rewrite this as a professional, clear email. The tone should be [professional / friendly / direct — choose one]. Keep it concise. Include a clear subject line and one specific call to action at the end.`,
  },
  {
    category: "IT & Systems",
    title: "Write Plain-English Technical Documentation",
    prompt: `You are a technical writer who specializes in making complex IT processes understandable to non-technical audiences.

Here is the technical process I need documented:
[describe the process or paste your technical notes]

Please write:
1. A plain-English overview (2–3 sentences, no jargon)
2. A step-by-step guide that a non-technical employee can follow
3. A FAQ with the 3 most common questions about this process
4. A "what to do if something goes wrong" section with escalation steps`,
  },
  {
    category: "IT & Systems",
    title: "Create a Troubleshooting Guide",
    prompt: `Create a user-friendly troubleshooting guide for the following common issue: [describe the issue].

Format it as:
1. How to identify the problem (symptoms to look for)
2. Step-by-step troubleshooting (ordered from simplest fix to most complex)
3. When to escalate to IT support
4. How to prevent the issue in the future

Write for someone who is not technical. Use simple language and avoid acronyms unless explained.`,
  },
  {
    category: "IT & Systems",
    title: "Draft a Vendor Evaluation Rubric",
    prompt: `Create a vendor evaluation rubric for selecting a [type of software or tool] for our business.

Score each vendor 1–5 across these dimensions:
- Core functionality and feature fit
- Ease of use and team adoption
- Security and compliance standards
- Integration with our existing systems
- Pricing and total cost of ownership
- Quality of support and documentation

Format as a comparison table. Include a notes column and a final weighted score row.`,
  },
  {
    category: "IT & Systems",
    title: "Write a System Change Communication",
    prompt: `Write an internal communication announcing the following system or process change:

Change being made: [describe the change]
Effective date: [date]
Who is affected: [team / department / all staff]

The communication should:
- Explain what is changing and why, in plain language
- State clearly what employees need to do (if anything)
- Address the 2–3 most likely concerns
- Provide a contact name for questions

Tone: clear, reassuring, and professional. Assume the audience is not technical.`,
  },
  {
    category: "IT & Systems",
    title: "Build a Data Backup & Recovery Checklist",
    prompt: `Create a comprehensive data backup and recovery checklist for a small-to-mid-sized business.

Include:
- Daily, weekly, and monthly backup tasks
- What should be backed up: files, databases, email, system configurations
- Where backups should be stored: on-site, cloud, and offsite
- How to verify backups are working correctly
- A step-by-step recovery procedure for the most common failure scenarios

Format as a checklist with checkboxes. Include who is responsible for each item.`,
  },
];

const CATEGORIES = ["All", "Operations & Admin", "IT & Systems"];

export default function PromptGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const filtered =
    activeCategory === "All"
      ? PROMPTS
      : PROMPTS.filter((p) => p.category === activeCategory);

  async function handleCopy(prompt, index) {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch {
      // clipboard not available — silently fail
    }
  }

  return (
    <>
      <div className="prompt-filters">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`prompt-filter-btn${activeCategory === cat ? " active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="prompt-grid">
        {filtered.map((prompt, i) => (
          <div key={i} className="prompt-card">
            <div className="prompt-card-header">
              <span className="prompt-badge">{prompt.category}</span>
              <button
                className={`prompt-copy-btn${copiedIndex === i ? " copied" : ""}`}
                onClick={() => handleCopy(prompt, i)}
              >
                {copiedIndex === i ? "Copied!" : "Copy"}
              </button>
            </div>
            <div className="prompt-card-title">{prompt.title}</div>
            <p className="prompt-card-text">{prompt.prompt}</p>
          </div>
        ))}
      </div>
    </>
  );
}
