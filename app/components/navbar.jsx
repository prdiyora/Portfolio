"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const SECTIONS = ["about", "experience", "skills", "projects", "education", "achievements", "contact"];

function Navbar() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -60% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const cls = (id) => "nav-link" + (active === id ? " active" : "");

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <div className="nav-sticky sticky top-0 z-50 -mx-5 sm:-mx-10 px-5 sm:px-10">
        <nav className="flex flex-wrap items-center justify-between py-3 gap-x-3 gap-y-2">
          <Link href="/" className="font-display text-2xl font-bold shrink-0" style={{ color: "var(--ink)" }}>
            Priyank<span style={{ color: "var(--accent)" }}>.</span>
          </Link>
          <a href="#contact" className="btn-primary !py-2 !px-4 !text-sm shrink-0 order-2 md:order-3">Contact</a>
          <ul className="order-3 md:order-2 w-full md:w-auto flex flex-wrap items-center justify-center gap-1 card !rounded-full px-2 py-1.5 !shadow-none md:flex-nowrap">
            <li className="shrink-0"><Link className={cls("about")} href="/#about">About</Link></li>
            <li className="shrink-0"><Link className={cls("experience")} href="/#experience">Experience</Link></li>
            <li className="shrink-0"><Link className={cls("skills")} href="/#skills">Skills</Link></li>
            <li className="shrink-0"><Link className={cls("projects")} href="/#projects">Projects</Link></li>
            <li className="shrink-0"><Link className={cls("education")} href="/#education">Education</Link></li>
            <li className="shrink-0"><Link className={cls("achievements")} href="/#achievements">Awards</Link></li>
            <li className="shrink-0"><Link className={cls("contact")} href="/#contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
