import { motion } from "framer-motion";

export default function Certificates() {
  const certs = [
    {
      title: "AWS Certified Cloud Practitioner",
      pdf: "/certificates/AWS Certified Cloud Practitioner certificate.pdf",
    },
    {
      title: "Database MSSQL Admin",
      pdf: "/certificates/MSSQL certificate.pdf",
    },
    {
      title: "Data Analyst Associate (Power BI)",
      pdf: "/certificates/Power Bi Certificate.pdf",
    },
    {
      title: "MTA: Windows Server 2016 Administration Fundamentals (98-365)",
      pdf: "/certificates/Windows Certificate.pdf",
    },
  ];

  return (
    <section
      id="certificates"
      className="section-dark py-32 border-t border-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          className="text-6xl font-extrabold uppercase tracking-tight font-[Oswald] mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Certificates
        </motion.h2>

        {/* Certificate Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certs.map((cert, idx) => (
            <motion.a
              key={idx}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#1a1a1a] p-6 rounded-lg 
                         hover:shadow-lg hover:shadow-lime-300/50 
                         transition text-center cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold font-[Nunito] text-lime-300">
                {cert.title}
              </h3>
              <p className="text-gray-400 mt-2">📄 Click to view PDF</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
