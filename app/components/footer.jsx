import Link from 'next/link';
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";

function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", background: "var(--cream-deep)" }}>
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[82rem] py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          © 2026 <span className="font-display font-semibold" style={{ color: "var(--ink)" }}>Priyank Diyora</span> · SEO Executive · Surat, India
        </p>
        <div className="flex items-center gap-3">
          <Link target="_blank" href="https://www.linkedin.com/in/priyank-diyora/" className="icon-btn !w-9 !h-9" aria-label="LinkedIn"><BsLinkedin size={16} /></Link>
          <Link target="_blank" href="https://github.com/prdiyora" className="icon-btn !w-9 !h-9" aria-label="GitHub"><BsGithub size={16} /></Link>
          <Link target="_blank" href="https://leetcode.com/u/prdiyora/" className="icon-btn !w-9 !h-9" aria-label="LeetCode"><SiLeetcode size={16} /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
