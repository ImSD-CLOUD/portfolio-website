import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Background3D from "../components/Background3D";

export default function Home() {
  const texts = ["HI, I'M", "SWARUP DAS"];
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState(["", ""]);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(300);

  useEffect(() => {
    const handleTyping = () => {
      const currentLine = texts[lineIndex];
      const currentDisplayed = displayedText[lineIndex];

      if (isDeleting) {
        // deleting
        if (currentDisplayed.length > 0) {
          setDisplayedText((prev) => {
            const updated = [...prev];
            updated[lineIndex] = currentLine.substring(
              0,
              currentDisplayed.length - 1
            );
            return updated;
          });
          setTypingSpeed(200);
        } else if (lineIndex > 0) {
          // move up one line to delete
          setLineIndex(lineIndex - 1);
        } else {
          // finished deleting both lines → pause before restart
          setTimeout(() => {
            setIsDeleting(false);
            setLineIndex(0);
          }, 1500); // 1.5s pause
        }
      } else {
        // typing
        if (currentDisplayed.length < currentLine.length) {
          setDisplayedText((prev) => {
            const updated = [...prev];
            updated[lineIndex] = currentLine.substring(
              0,
              currentDisplayed.length + 1
            );
            return updated;
          });
          setTypingSpeed(250);
        } else if (lineIndex < texts.length - 1) {
          // move to next line
          setLineIndex(lineIndex + 1);
        } else {
          // finished typing both lines
          setTimeout(() => setIsDeleting(true), 2000); // pause before deletion
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, lineIndex, isDeleting, typingSpeed]);

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-center text-white"
    >
      {/* 3D Background */}
      <Background3D />

      {/* Foreground text */}
      <div className="relative z-10 px-10 md:px-20">
        <div className="mb-6">
          {displayedText.map((line, idx) => (
            <h1
              key={idx}
              className="text-6xl md:text-8xl font-extrabold uppercase font-[Oswald] leading-tight bg-gradient-to-r from-lime-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent flex items-center"
            >
              {line}
              {idx === lineIndex && (
                <motion.span
                  className="inline-block w-[3px] h-12 bg-lime-300 ml-1"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />
              )}
            </h1>
          ))}
        </div>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-gray-400 font-[Inter] max-w-xl leading-relaxed mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A Windows & Cloud Administrator with experience in managing VMware,
          Active Directory, and Microsoft 365 environments. Skilled in AWS and
          Azure cloud platforms with a focus on security, reliability, and
          scalability.
        </motion.p>
      </div>
    </section>
  );
}
