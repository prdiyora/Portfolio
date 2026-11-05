"use client";

import { useState } from "react";
import { experiences } from "@/utils/data/experience";

function Experience() {
  const [selected, setSelected] = useState(0);
  const exp = experiences[selected];

  const renderPoints = (points) => (
    <ul className="mt-4 space-y-2.5">
      {points.map((p, i) => (
        <li key={i} className="text-sm leading-6 flex gap-2" style={{ color: "var(--ink-soft)" }}>
          <span style={{ color: "var(--accent)" }}>-</span>{p}
        </li>
      ))}
    </ul>
  );

  const renderTools = (tools) => (
    <div className="flex flex-wrap gap-2 mt-5 pt-4" style={{ borderTop: "1px dashed var(--line)" }}>
      {tools.map((t) => <span key={t} className="pill">{t}</span>)}
    </div>
  );

  return (
    <div id="experience" className="my-12 lg:my-16">
      <p className="section-label">Experience</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-8" style={{ color: "var(--ink)" }}>Where I've worked</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex md:flex-col gap-2 md:w-64 shrink-0 overflow-x-auto md:overflow-visible" style={{ scrollbarWidth: "none" }}>
          {experiences.map((e, i) => (
            <button
              key={e.id}
              onClick={() => setSelected(i)}
              className={`exp-tab text-left shrink-0 md:shrink ${i === selected ? "exp-tab-active" : ""}`}
            >
              <span className="flex items-center gap-2">
                <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{e.company}</span>
                {/present/i.test(e.duration) && <span className="now-badge">Now</span>}
              </span>
              <span className="block text-xs mt-0.5" style={{ color: "var(--muted)" }}>{e.duration}</span>
            </button>
          ))}
        </div>
        <div className="card p-6 md:p-8 flex-1">
          {exp.roles ? (
            <>
              <h3 className="font-display text-xl md:text-2xl font-bold" style={{ color: "var(--ink)" }}>
                {exp.company}
              </h3>
              <p className="text-sm mt-1.5 font-medium" style={{ color: "var(--muted)" }}>{exp.duration} · {exp.location}</p>
              <div className="mt-5 space-y-6">
                {exp.roles.map((role, i) => (
                  <div
                    key={i}
                    className={i > 0 ? "pt-5" : ""}
                    style={i > 0 ? { borderTop: "1px dashed var(--line)" } : {}}
                  >
                    <h4 className="font-display text-base md:text-lg font-bold" style={{ color: "var(--ink)" }}>
                      {role.title}
                    </h4>
                    <p className="text-xs mt-1 font-medium" style={{ color: "var(--accent-deep)" }}>{role.duration}</p>
                    {renderPoints(role.points)}
                    {renderTools(role.tools)}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <h3 className="font-display text-xl md:text-2xl font-bold" style={{ color: "var(--ink)" }}>
                {exp.title} <span style={{ color: "var(--accent-deep)" }}>@ {exp.company}</span>
              </h3>
              <p className="text-sm mt-1.5 font-medium" style={{ color: "var(--muted)" }}>{exp.duration} · {exp.location}</p>
              {renderPoints(exp.points)}
              {renderTools(exp.tools)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
