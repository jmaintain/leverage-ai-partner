"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <Link href="/" className="logo" style={{ color: "var(--color-text-primary)" }}>
          <span className="logo-mark">◆</span> Leverage AI Partner
        </Link>
        <div className="nav-links">
          <Link href="/#services" className="nav-link">Services</Link>
          <Link href="/#team" className="nav-link">About</Link>
          <Link href="/resources" className="nav-link">Resources</Link>
          <a href="https://zcal.co/i/e8rGW1ab" className="btn-primary" style={{ padding: "10px 20px", fontSize: 14 }}>
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}
