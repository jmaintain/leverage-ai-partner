import LexChat from "../components/LexChat";

export const metadata = {
  title: "Chat with Lex · Leverage AI Partner",
  description:
    "Find your first AI quick win in a 2-minute chat. Lex asks 4 quick questions and puts together a personalized action plan — no pressure, no tech skills required.",
};

export default function ChatPage() {
  return (
    <main className="lex-wrap">
      <div className="container">
        <div className="lex-hero">
          <div className="eyebrow eyebrow-green">Find your quick win</div>
          <h1 className="lex-headline">Chat with Lex.</h1>
          <p className="lex-subhead">
            Answer 4 quick questions. Lex identifies your highest-leverage AI opportunity and puts together a personalized action plan — no pressure, no tech skills required.
          </p>
        </div>
        <LexChat />
      </div>
    </main>
  );
}
