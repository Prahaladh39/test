import orbit from "@/assets/clients/orbit.png";
import jManagement from "@/assets/clients/j-management.png";
import nirvaha from "@/assets/clients/nirvaha.png";
import lnSports from "@/assets/clients/ln-sports.png";
import yrjEv from "@/assets/clients/yrj-ev.png";
import riskGuard from "@/assets/clients/risk-guard.jpg";
import sHatch from "@/assets/clients/s-hatch.png";
import promptTechies from "@/assets/clients/prompt-techies.png";
import studlyf from "@/assets/clients/studlyf.png";

const logos = [
  { src: orbit, alt: "Orbit" },
  { src: jManagement, alt: "J Management Solutions" },
  { src: nirvaha, alt: "Nirvaha" },
  { src: lnSports, alt: "LN Sports Arena" },
  { src: yrjEv, alt: "YRJ EV Bikes" },
  { src: riskGuard, alt: "Risk Guard" },
  { src: sHatch, alt: "S-Hatch" },
  { src: promptTechies, alt: "Prompt Techies" },
  { src: studlyf, alt: "Studlyf" },
];

export function LogoMarquee() {
  // Duplicate the list so the translate-50% loop is seamless.
  const loop = [...logos, ...logos];
  return (
    <div className="relative w-full overflow-hidden group">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {loop.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex items-center justify-center shrink-0 px-8 sm:px-12 h-20 sm:h-24"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              loading="lazy"
              className="max-h-full max-w-[160px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
