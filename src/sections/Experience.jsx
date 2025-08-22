export default function Experience() {
  const experiences = [
    {
      role: "Windows Administrator",
      company: "Wipro (Abbott Laboratories Project)",
      period: "Nov 2021 — Jan 2025",
      details: [
        "Configuration and management of VMware ESXi hosts and vCenter Server.",
        "Creation and administration of virtual machines, templates, and snapshots.",
        "Resource management including CPU, memory, storage, and disk allocation.",
        "Implementation of vMotion, Replication, DRS, and HA for seamless operations.",
        "Active Directory administration: user and group management, GPO implementation, domain controller maintenance.",
        "Microsoft 365 administration including user licenses, Exchange Online, and Teams configuration.",
        "Patch management, system monitoring, performance analysis, and capacity planning.",
        "Diagnosing and resolving technical issues related to Windows and VMware.",
      ],
    },
  ];

  return (
    <section id="experience" className="section-dark py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:grid md:grid-cols-2 md:gap-12">
        {/* Left side title */}
        <h2 className="text-6xl font-extrabold uppercase tracking-tight font-[Oswald] mb-12 md:mb-0">
          My Experience
        </h2>

        {/* Right side timeline */}
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx}>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold tracking-wide font-[Nunito] text-white">
                  {exp.role}
                </h3>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <p className="text-lime-300 mb-4">{exp.company}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {exp.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
