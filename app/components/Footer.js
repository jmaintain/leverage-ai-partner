import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <div className="footer-logo">
              <span className="logo-mark">◆</span> Leverage AI Partner
            </div>
            <p className="footer-tagline">The AI Tools Assessment — the right 3 tools, and someone to make them stick.</p>
            <p className="footer-locations">Phoenix, AZ · Houston, TX · Serving clients virtually</p>
          </div>
          <div className="footer-nav">
            <div className="footer-nav-col">
              <div className="footer-nav-heading">Services</div>
              <Link href="/assessment">AI Tools Assessment</Link>
              <Link href="/#after">Implementation</Link>
              <Link href="/#after">AI Concierge</Link>
              <Link href="/prompts">Prompt Library</Link>
            </div>
            <div className="footer-nav-col">
              <div className="footer-nav-heading">Company</div>
              <Link href="/#team">About Us</Link>
              <Link href="/book">Book a Call</Link>
              <a href="mailto:hello@leverageaipartner.com">Contact</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Leverage AI Partner. All rights reserved.</span>
          <a href="mailto:hello@leverageaipartner.com">hello@leverageaipartner.com</a>
        </div>
      </div>
    </footer>
  );
}
