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
            <p className="footer-tagline">AI consulting, training, and development for small business.</p>
            <p className="footer-locations">Phoenix, AZ · Houston, TX · Serving clients virtually</p>
          </div>
          <div className="footer-nav">
            <div className="footer-nav-col">
              <div className="footer-nav-heading">Services</div>
              <Link href="/#services">AI Business Audit</Link>
              <Link href="/#services">AI Training</Link>
              <Link href="/#services">Custom Development</Link>
              <Link href="/#services">Ongoing Support</Link>
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
