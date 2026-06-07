"use client";
import { useEffect } from "react";

export default function ZcalEmbed() {
  useEffect(() => {
    if (document.querySelector('script[src="https://static.zcal.co/embed/v1/embed.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="zcal-inline-widget">
      <a href="https://zcal.co/i/e8rGW1ab">AI Tools Assessment Discovery Call - Schedule a meeting</a>
    </div>
  );
}
