import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-content">
      <div className="page-content-inner">
        <div className="eyebrow">404</div>
        <h1 className="page-content-title">That page isn't here.</h1>
        <p className="page-content-body">
          The link you followed is broken or the page has moved. Head back to the home page — that's where everything lives anyway.
        </p>
        <Link href="/" className="btn-primary">Back to home</Link>
      </div>
    </main>
  );
}
