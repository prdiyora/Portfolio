import { projectsData } from "@/utils/data/projects-data";
import Link from "next/link";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  return (
    <div id="projects" className="my-12 lg:my-16">
      <p className="section-label">Projects</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-8" style={{ color: "var(--ink)" }}>Things I've built</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projectsData.map((project) => (
          <div key={project.id} className="card p-6 flex flex-col transition-transform duration-300 hover:-translate-y-1">
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-display text-xl font-bold" style={{ color: "var(--ink)" }}>{project.name}</h3>
              <span className="text-[0.7rem] uppercase tracking-wider font-semibold mt-1 shrink-0" style={{ color: "var(--accent)" }}>{project.role}</span>
            </div>
            <p className="text-sm leading-6 mt-3 flex-1" style={{ color: "var(--ink-soft)" }}>{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tools.map((t) => <span key={t} className="pill">{t}</span>)}
            </div>
            {(project.code || project.demo) && (
              <div className="flex gap-3 mt-5 pt-4" style={{ borderTop: "1px solid var(--line)" }}>
                {project.code && (
                  <Link href={project.code} target="_blank" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--accent-deep)" }}>
                    <FaCode size={14} /> Code
                  </Link>
                )}
                {project.demo && (
                  <Link href={project.demo} target="_blank" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: "var(--accent-deep)" }}>
                    <FaExternalLinkAlt size={12} /> Live
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
