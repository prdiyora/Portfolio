import { seoSkills } from "@/utils/data/skills";
import SkillsMarquee from "./skills-marquee";

function SkillGroup({ title, items, accent }) {
  return (
    <div className="card p-6">
      <h3 className="font-display text-lg font-bold mb-4" style={{ color: accent ? "var(--accent-deep)" : "var(--ink)" }}>{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((s) => <span key={s} className="pill">{s}</span>)}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div id="skills" className="my-12 lg:my-16">
      <p className="section-label">Skills</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-8" style={{ color: "var(--ink)" }}>What I work with</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <SkillGroup title="SEO & Growth" items={seoSkills} accent />
      </div>
      <SkillsMarquee />
    </div>
  );
};

export default Skills;
