export default function sitemap() {
  const base = "https://www.leverageaipartner.com";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/book`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/resources`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/prompts`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/assessment`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];
}
