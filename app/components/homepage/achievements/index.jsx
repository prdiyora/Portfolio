function PlaceholderVisual() {
  return (
    <div className="ach-photo" aria-hidden="true">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="9" r="5" />
        <path d="M8.5 13.5 7 21l5-2.6L17 21l-1.5-7.5" />
      </svg>
      <span>Original photo coming soon</span>
    </div>
  );
}

const PLACEHOLDERS = [
  { id: 1, title: "Certificates" },
  { id: 2, title: "Awards & Recognition" },
];

function Achievements() {
  return (
    <div id="achievements" className="my-12 lg:my-16">
      <p className="section-label">Achievements</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-8" style={{ color: "var(--ink)" }}>Achievements & recognition</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {PLACEHOLDERS.map((a) => (
          <div key={a.id} className="card p-6 flex items-center gap-5">
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>{a.title}</h3>
              <p className="text-sm mt-2" style={{ color: "var(--muted)" }}>Photos and details will be added here shortly.</p>
            </div>
            <PlaceholderVisual />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
