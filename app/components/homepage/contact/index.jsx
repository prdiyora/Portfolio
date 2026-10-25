import { personalData } from "@/utils/data/personal-data";
import ContactForm from "./contact-form";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail, MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-20">
      <div className="card px-6 py-10 md:px-12 text-center">
        <p className="section-label">Contact</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mt-2" style={{ color: "var(--ink)" }}>Reach me directly</h2>
        <p className="max-w-lg mx-auto mt-4 text-sm md:text-base" style={{ color: "var(--muted)" }}>
          Send a message below and it reaches me directly, or use email. I'm open to SEO roles, freelance projects and collaborations.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8 text-left">
          <a href={`mailto:${personalData.email}`} className="card !shadow-none p-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform" style={{ textDecoration: "none" }}>
            <span className="icon-btn shrink-0" style={{ color: "var(--accent-deep)" }}><MdOutlineEmail size={18} /></span>
            <span className="min-w-0">
              <span className="block text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>Email</span>
              <span className="block text-sm font-medium break-all" style={{ color: "var(--ink)" }}>{personalData.email}</span>
            </span>
          </a>
          <a href={`tel:${personalData.phone.replace(/\s/g, '')}`} className="card !shadow-none p-4 flex items-center gap-3 hover:-translate-y-0.5 transition-transform" style={{ textDecoration: "none" }}>
            <span className="icon-btn shrink-0" style={{ color: "var(--accent-deep)" }}><MdOutlinePhone size={18} /></span>
            <span>
              <span className="block text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>Phone</span>
              <span className="block text-sm font-medium" style={{ color: "var(--ink)" }}>{personalData.phone}</span>
            </span>
          </a>
          <div className="card !shadow-none p-4 flex items-center gap-3">
            <span className="icon-btn shrink-0" style={{ color: "var(--accent-deep)" }}><MdOutlineLocationOn size={18} /></span>
            <span>
              <span className="block text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>Location</span>
              <span className="block text-sm font-medium" style={{ color: "var(--ink)" }}>{personalData.address}</span>
            </span>
          </div>
        </div>
        <ContactForm />
        <div className="flex items-center justify-center gap-3 mt-8">
          <Link href={personalData.linkedIn} target="_blank" className="icon-btn" aria-label="LinkedIn"><BsLinkedin size={18} /></Link>
          <Link href={personalData.github} target="_blank" className="icon-btn" aria-label="GitHub"><BsGithub size={18} /></Link>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
