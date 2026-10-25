import { educations } from "@/utils/data/educations";
import { BsMortarboardFill } from "react-icons/bs";

function Education() {
  return (
    <div id="education" className="my-12 lg:my-16">
      <p className="section-label">Education</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-8" style={{ color: "var(--ink)" }}>Education</h2>
      <div className="grid grid-cols-1 gap-5">
        {educations.map((edu) => (
          <div key={edu.id} className="card p-6 flex items-center gap-5">
            <div className="icon-btn !w-14 !h-14 shrink-0" style={{ color: "var(--accent-deep)" }}>
              <BsMortarboardFill size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>{edu.title}</h3>
              <p className="text-sm mt-1" style={{ color: "var(--ink-soft)" }}>{edu.institution}</p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-xs font-semibold" style={{ color: "var(--accent-deep)" }}>{edu.duration}</p>
              <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>{edu.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
