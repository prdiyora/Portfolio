import Link from "next/link";

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between py-5 gap-x-3 gap-y-3">
      <Link href="/" className="font-display text-2xl font-bold shrink-0" style={{ color: "var(--ink)" }}>
        Priyank<span style={{ color: "var(--accent)" }}>.</span>
      </Link>
      <a href="#contact" className="btn-primary !py-2 !px-4 !text-sm shrink-0 order-2 md:order-3">Contact</a>
      <ul className="order-3 md:order-2 w-full md:w-auto flex flex-wrap items-center justify-center gap-1 card !rounded-full px-2 py-1.5 !shadow-none md:flex-nowrap" style={{scrollbarWidth:"none"}}>
        <li className="shrink-0"><Link className="nav-link" href="/#about">About</Link></li>
        <li className="shrink-0"><Link className="nav-link" href="/#experience">Experience</Link></li>
        <li className="shrink-0"><Link className="nav-link" href="/#skills">Skills</Link></li>
        <li className="shrink-0"><Link className="nav-link" href="/#projects">Projects</Link></li>
        <li className="shrink-0"><Link className="nav-link" href="/#education">Education</Link></li>
        <li className="shrink-0"><Link className="nav-link" href="/#contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
