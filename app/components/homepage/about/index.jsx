import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16">
      <p className="section-label">About</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold mt-2 mb-8" style={{ color: "var(--ink)" }}>Who am I?</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
        <div>
          <p className="text-justify text-sm lg:text-base mb-5 leading-7" style={{ color: "var(--ink-soft)" }}>
            {personalData.description}
          </p>
          <p className="text-justify text-sm lg:text-base leading-7" style={{ color: "var(--ink-soft)" }}>
            {personalData.description2}
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src={personalData.profile}
            width={340}
            height={340}
            alt="Priyank Diyora"
            className="rounded-2xl transition-all duration-700 hover:scale-105"
            style={{ border: "1px solid var(--line)", boxShadow: "0 20px 45px -25px rgba(28,25,23,0.4)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
