import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-5 gap-3">
      <Link href="/" className="font-display text-2xl font-bold shrink-0" style={{ color: "var(--ink)" }}>
        Priyank<span style={{ color: "var(--accent)" }}>.</span>
      </Link>
      <ul className="flex items-center gap-1 card !rounded-full px-2 py-1.5 !shadow-none overflow-x-auto max-w-[52vw] md:max-w-none" style={{scrollbarWidth:"none"}}>
        <li><Link className="nav-link" href="/#about">About</Link></li>
        <li><Link className="nav-link" href="/#experience">Experience</Link></li>
        <li><Link className="nav-link" href="/#skills">Skills</Link></li>
        <li><Link className="nav-link" href="/#projects">Projects</Link></li>
        <li><Link className="nav-link" href="/#education">Education</Link></li>
        <li><Link className="nav-link" href="/#contact">Contact</Link></li>
      </ul>
      <a href="#contact" className="btn-primary !py-2 !px-4 !text-sm shrink-0">Contact</a>
    </nav>
  );
}

export default Navbar;
