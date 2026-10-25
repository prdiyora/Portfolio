"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const SECTIONS = ["about", "experience", "skills", "projects", "education", "achievements", "contact"];
const LABELS = { about: "About", experience: "Experience", skills: "Skills", projects: "Projects", education: "Education", achievements: "Awards", contact: "Contact" };

function Navbar() {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

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

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const cls = (id) => "nav-link" + (active === id ? " active" : "");

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      <div className="nav-sticky sticky top-0 z-50 -mx-5 sm:-mx-10 px-5 sm:px-10">
        <nav className="relative flex items-center justify-between py-3 gap-x-3" ref={menuRef}>
          <Link href="/" className="font-display text-2xl font-bold shrink-0" style={{ color: "var(--ink)" }} onClick={() => setOpen(false)}>
            Priyank<span style={{ color: "var(--accent)" }}>.</span>
          </Link>
          <ul className="hidden md:flex items-center gap-1 card !rounded-full px-2 py-1.5 !shadow-none">
            {SECTIONS.map((id) => (
              <li key={id} className="shrink-0"><Link className={cls(id)} href={`/#${id}`}>{LABELS[id]}</Link></li>
            ))}
          </ul>
          <div className="flex items-center gap-2 shrink-0">
            <a href="#contact" className="btn-primary !py-2 !px-4 !text-sm">Contact</a>
            <button
              type="button"
              className="icon-btn md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <HiOutlineX size={20} /> : <HiOutlineMenu size={20} />}
            </button>
          </div>
          {open && (
            <ul className="mobile-menu md:hidden card !rounded-2xl p-2">
              {SECTIONS.map((id) => (
                <li key={id}>
                  <Link className={cls(id) + " mobile-menu-link"} href={`/#${id}`} onClick={() => setOpen(false)}>
                    {LABELS[id]}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
