import LexChat from "../components/LexChat";

export const metadata = {
  title: "Get Your AI Quick Win · Leverage AI Partner",
  description:
    "Answer 4 quick questions and get a personalized AI action plan with a ready-to-use prompt — no email required.",
};

export default function ChatPage() {
  return (
    <main className="lex-wrap">
      <div className="container">
        <div className="lex-hero">
          <div className="eyebrow eyebrow-green">Free · No email required</div>
          <h1 className="lex-headline">Get your AI quick win.</h1>
          <p className="lex-subhead">
            Answer 4 quick questions. We&apos;ll identify your highest-leverage AI opportunity and give you a ready-to-use prompt so you can act on it today.
          </p>
        </div>
        <LexChat />
      </div>
    </main>
  );
}
