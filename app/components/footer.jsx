import Link from 'next/link';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { personalData } from "@/utils/data/personal-data";

function Footer() {
  return (
    <footer className="mx-auto px-5 sm:px-10 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[82rem] pb-8">
      <div className="card !shadow-none p-6 md:p-8" style={{ background: "var(--cream-deep)" }}>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-display text-2xl font-bold" style={{ color: "var(--ink)" }}>{personalData.name}</p>
            <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>{personalData.designation}</p>
          </div>
          <a href="#" className="btn-secondary !py-2 !px-4 !text-sm">Back to top</a>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-5" style={{ borderTop: "1px solid var(--line)" }}>
          <div className="flex items-center gap-3">
            <Link target="_blank" href={personalData.github} className="icon-btn !w-9 !h-9" aria-label="GitHub"><BsGithub size={16} /></Link>
            <Link target="_blank" href={personalData.linkedIn} className="icon-btn !w-9 !h-9" aria-label="LinkedIn"><BsLinkedin size={16} /></Link>
            <Link href={`mailto:${personalData.email}`} className="icon-btn !w-9 !h-9" aria-label="Email"><MdOutlineEmail size={16} /></Link>
            <Link target="_blank" href={personalData.leetcode} className="icon-btn !w-9 !h-9" aria-label="LeetCode"><SiLeetcode size={16} /></Link>
          </div>
          <p className="text-xs" style={{ color: "var(--muted)" }}>© 2026 {personalData.name} · Surat, India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
