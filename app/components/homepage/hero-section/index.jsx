import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { MdDownload, MdOutlineEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";

const stats = [
  { num: "2+", label: "Years in SEO" },
  { num: "6", label: "Core SEO Tools" },
  { num: "15", label: "Module SEO Course" },
  { num: "2", label: "Projects" },
];

function HeroSection() {
  return (
    <section className="pt-4 pb-10 lg:pt-8 lg:pb-16">
      <div className="card px-5 py-7 md:px-12 md:py-12 text-center relative overflow-hidden">
        <div className="flex justify-center">
          <span className="pill !bg-[#eef7f5]" style={{ borderColor: "#bcd8d3", color: "var(--accent-deep)" }}>
            <span className="inline-block w-2 h-2 rounded-full blink" style={{ background: "var(--accent)" }}></span>
            SEO Executive · Surat, India
          </span>
        </div>

        <p className="section-label mt-4 !text-[0.72rem]">Hi, I'm</p>
        <h1 className="font-display font-bold leading-tight mt-2" style={{ fontSize: "clamp(2rem, 7vw, 4.2rem)", color: "var(--ink)" }}>
          {personalData.name}
        </h1>
        <p className="font-display mt-3" style={{ fontSize: "clamp(0.98rem, 2.4vw, 1.5rem)", color: "var(--accent-deep)", fontWeight: 600 }}>
          {personalData.designation}
        </p>
        <p className="max-w-xl mx-auto mt-3 text-sm md:text-base" style={{ color: "var(--muted)" }}>
          {personalData.tagline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 mt-5">
          {personalData.resume && (
            <Link className="btn-primary" role="button" target="_blank" href={personalData.resume}>
              <MdDownload size={17} />
              <span>View Resume</span>
            </Link>
          )}
          <Link href="#contact" className="btn-secondary">
            <MdOutlineEmail size={17} />
            <span>Get in Touch</span>
          </Link>
          <Link href={personalData.github} target="_blank" className="icon-btn" aria-label="GitHub"><BsGithub size={18} /></Link>
          <Link href={personalData.leetcode} target="_blank" className="icon-btn" aria-label="LeetCode"><SiLeetcode size={18} /></Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 pt-5" style={{ borderTop: "1px solid var(--line)" }}>
          {stats.map((s) => (
            <div key={s.label}>
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="code-window mt-5 max-w-2xl mx-auto">
        <div className="flex flex-row space-x-2 px-4 py-3" style={{ borderBottom: "1px solid #2c2c34" }}>
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
        </div>
        <div className="px-5 py-5 overflow-x-auto">
          <code className="font-mono text-xs md:text-sm leading-6">
            <div><span className="text-pink-400">const</span> <span className="text-white">seoProfile</span> <span className="text-pink-400">=</span> <span className="text-gray-400">{'{'}</span></div>
            <div className="ml-6"><span className="text-white">name:</span> <span className="text-amber-300">'Priyank Diyora'</span><span className="text-gray-400">,</span></div>
            <div className="ml-6"><span className="text-white">focus:</span> <span className="text-gray-400">[</span><span className="text-amber-300">'Technical SEO'</span><span className="text-gray-400">, </span><span className="text-amber-300">'GEO & AEO'</span><span className="text-gray-400">, </span><span className="text-amber-300">'Content'</span><span className="text-gray-400">],</span></div>
            <div className="ml-6"><span className="text-white">tools:</span> <span className="text-gray-400">[</span><span className="text-amber-300">'Semrush'</span><span className="text-gray-400">, </span><span className="text-amber-300">'Ahrefs'</span><span className="text-gray-400">, </span><span className="text-amber-300">'GSC'</span><span className="text-gray-400">, </span><span className="text-amber-300">'GA4'</span><span className="text-gray-400">],</span></div>
            <div className="ml-6"><span className="text-white">aiFirst:</span> <span className="text-orange-400">true</span><span className="text-gray-400">,</span></div>
            <div className="ml-6"><span className="text-green-400">openToWork:</span> <span className="text-orange-400">function</span><span className="text-gray-400">() {'{'}</span> <span className="text-orange-400">return</span> <span className="text-cyan-300">true</span><span className="text-gray-400">; {'}'}</span></div>
            <div><span className="text-gray-400">{'}'};</span></div>
          </code>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
