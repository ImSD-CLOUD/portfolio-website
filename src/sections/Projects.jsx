import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

export default function Projects() {
  const projects = [
    {
      title: "Telangana Tourist Report",
      description:
        "Telangana Tourist Report is a data visualization project which has been done using Power BI. It is based on the insights driven from the data of 4 years of total domestic and foreign visitors at each district of Telangana and also how govt can improve the revenue growth for the upcoming years.",
      link: "https://www.novypro.com/project/telangana-tourist-report-power-bi",
      image: "/projects/telangana.PNG",
    },
    {
      title: "Maven Parental Leave Report",
      description:
        "Maven Parental Leave Report is a data visualization project which has been done using Power BI based on the raw data provided by Maven Analytics. It's about overall paternity leave and maternity leave provided by 1600 companies across 186 different industries and key insights that could help to improve the overall leave factor.",
      link: "https://www.novypro.com/project/maven-parental-leave-report-power-bi",
      image: "/projects/maven.PNG",
    },
    {
      title: "AI-Powered Audio Separation App",
      description:
        "A production-ready serverless application using AWS SageMaker to separate vocals and instrumentals from audio tracks via Demucs deep learning model. Architected end-to-end ML pipeline with Docker containerization, asynchronous GPU inference (ml.g4dn.xlarge), and cost-optimized auto-scaling. Built full-stack solution with React frontend and Node.js Lambda functions, integrated via HTTP API Gateway with security best practices (CORS, rate limiting, IAM authentication).",
      link: "https://demucs-audio-separator-app.netlify.app",
      image: "/projects/audio-separator.PNG",
    },
  ];

  return (
    <section
      id="projects"
      className="section-dark py-20 border-t border-gray-700"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-6xl font-extrabold uppercase tracking-tight font-[Oswald] mb-12"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Featured Projects
        </motion.h2>

        <div className="space-y-16">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
            >
              {/* Left - Project Image in Card */}
              <motion.div
                className="bg-[#1a1a1a] pt-32 pb-32 px-10 rounded-lg shadow-md"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-md w-full object-cover"
                />
              </motion.div>

              {/* Right - Project Info */}
              <div>
                <h3 className="text-2xl font-bold tracking-wide font-[Nunito] mt-6">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6">{project.description}</p>
{/* View Project Button */}
<a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
  className="group relative inline-flex items-center px-6 py-3 rounded-full bg-lime-300 text-black font-semibold overflow-hidden transition-all duration-300 hover:bg-lime-200"
>
  {/* Text stays centered, moves left only on hover */}
  <span className="flex-1 text-center transition-transform duration-300 group-hover:-translate-x-3">
    VIEW PROJECT
  </span>

  {/* Icon container — width grows only on hover */}
  <span className="w-0 overflow-hidden group-hover:w-10 transition-all duration-300 flex items-center justify-center">
    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white ml-2 transform scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300">
      <ArrowUpRightIcon className="h-4 w-4" />
    </span>
  </span>
</a>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
