import { experiences } from "@/utils/data/experience";

function Experience() {
  return (
    <div id="experience" className="my-12 lg:my-16">
      <p className="section-label">Experience</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-8" style={{ color: "var(--ink)" }}>Where I've worked</h2>
      <div className="relative ml-2" style={{ borderLeft: "2px solid var(--line)" }}>
        {experiences.map((exp) => (
          <div key={exp.id} className="relative pl-8 pb-10 last:pb-0">
            <span className="timeline-dot"></span>
            <div className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>{exp.title}</h3>
                <span className="text-xs font-semibold" style={{ color: "var(--accent-deep)" }}>{exp.duration}</span>
              </div>
              <p className="text-sm mt-1 font-medium" style={{ color: "var(--accent)" }}>{exp.company} · {exp.location}</p>
              <ul className="mt-3 space-y-2">
                {exp.points.map((p, i) => (
                  <li key={i} className="text-sm leading-6 flex gap-2" style={{ color: "var(--ink-soft)" }}>
                    <span style={{ color: "var(--accent)" }}>-</span>{p}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tools.map((t) => <span key={t} className="pill">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
