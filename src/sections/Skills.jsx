import { 
  ServerStackIcon, 
  CloudIcon, 
  ChartBarIcon, 
  DevicePhoneMobileIcon, 
  ShieldCheckIcon, 
  CpuChipIcon, 
  PresentationChartBarIcon,
  CubeIcon,
  CommandLineIcon 
} from "@heroicons/react/24/outline";

export default function Skills() {
  const skills = [
    { name: "Windows Administration", icon: ServerStackIcon },
    { name: "VMware ESXi", icon: PresentationChartBarIcon },
    { name: "AWS", icon: CloudIcon },
    { name: "M365", icon: DevicePhoneMobileIcon },
    { name: "Azure AD", icon: ShieldCheckIcon },
    { name: "SCCM", icon: CpuChipIcon },
    { name: "Power BI", icon: ChartBarIcon },
    { name: "Docker", icon: CubeIcon },
    { name: "Terraform", icon: CommandLineIcon },
  ];

  return (
    <section id="skills" className="section-dark py-20 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:grid md:grid-cols-2 md:gap-12">
        {/* Heading */}
        <h2 className="text-6xl font-extrabold uppercase tracking-tight font-[Oswald] mb-8 md:mb-0">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <skill.icon className="h-12 w-12 text-gray-200 mb-4" />
              <p className="text-lime-300 font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
