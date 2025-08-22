import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function About() {
  return (
    <section id="about" className="section-dark py-20">
      <div className="max-w-7xl mx-auto px-6 md:grid md:grid-cols-2 md:gap-12">
        {/* Left side title */}
        <h2 className="text-6xl font-extrabold uppercase tracking-tight font-[Oswald] mb-8 md:mb-0">
          ABOUT ME
        </h2>

        {/* Right side content */}
        <div>
          <p className="text-2xl font-bold tracking-wide mb-6 font-[Nunito] leading-snug">
            Experienced Windows Administrator with 3 years of hands-on expertise
            in managing and supporting Windows Server environments.
          </p>
          <p className="text-gray-400 mb-6 font-[Inter] leading-relaxed">
            Proficient in VMware ESXi for virtualization, Active Directory for
            user and access management, and Microsoft 365 for cloud-based
            collaboration tools. Skilled in troubleshooting, patch management,
            and system performance optimization. Additionally, familiar with AWS
            services, providing a strong foundation in cloud infrastructure. A
            dependable IT professional with a focus on system reliability,
            security, and operational efficiency.
          </p>

          {/* Download Resume Button */}
          <div className="flex flex-wrap items-center gap-4">
            <a
  href="/Resume_Swarup_Das.pdf"
  download="Swarup_Das_Resume.pdf"
  className="group relative inline-flex items-center px-6 py-3 rounded-full bg-lime-300 text-black font-semibold overflow-hidden transition-all duration-300 hover:bg-lime-200"
>
  {/* Text always centered, shifts only when icon is visible */}
  <span className="flex-1 text-center transition-transform duration-300 group-hover:-translate-x-3">
    DOWNLOAD RESUME
  </span>

  {/* Icon container — hidden until hover */}
  <span className="w-0 overflow-hidden group-hover:w-10 transition-all duration-300 flex items-center justify-center">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ml-2 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
      <ArrowDownTrayIcon className="h-4 w-4" />
    </span>
  </span>
</a>




            
          </div>
        </div>
      </div>
    </section>
  );
}
