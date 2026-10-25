const TOOLS = [
  { name: "Semrush", logo: "/logos/semrush.svg" },
  { name: "Ahrefs", logo: "/logos/ahrefs.png" },
  { name: "Google Search Console", logo: "/logos/google-search-console.svg" },
  { name: "Google Analytics 4", logo: "/logos/google-analytics.svg" },
  { name: "Screaming Frog", logo: "/logos/screaming-frog.png" },
  { name: "Looker Studio", logo: "/logos/looker-studio.svg" },
];

function SkillsMarquee() {
  const row = [...TOOLS, ...TOOLS];
  return (
    <div className="marquee" aria-label="SEO tools I work with">
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={`${t.name}-${i}`} className="marquee-item" aria-hidden={i >= TOOLS.length}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={t.logo} alt="" width={20} height={20} loading="lazy" />
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SkillsMarquee;
