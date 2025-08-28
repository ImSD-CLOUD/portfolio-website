import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="section-dark py-32 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div className="flex flex-col justify-between">
          <div>
            <h2 className="text-6xl font-extrabold uppercase tracking-tight font-[Oswald] mb-8">
              Let's Connect
            </h2>
            <p className="text-lg text-gray-300 mb-2">
              Say hello at{" "}
              <a
                href="mailto:sarupsarup66@gmail.com"
                className="text-lime-300 underline"
              >
                sarupsarup66@gmail.com
              </a>
            </p>
            <p className="text-lg text-gray-300 mb-6">
              For more info, here’s my{" "}
              <a
                href="/Resume_Swarup_Das.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-300 hover:underline"
              >
                resume
              </a>
            </p>

            {/* Social Icons */}
            <div className="flex gap-6 text-2xl mb-12">
              <a
                href="https://www.linkedin.com/in/swarup-das-17bb03202/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-300 hover:text-lime-200"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/ImSD-CLOUD"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lime-300 hover:text-lime-200"
              >
                <FaGithub />
              </a>
            </div>
          </div>

          {/* Copyright aligned bottom */}
          <p className="text-gray-500 text-sm">© 2025 Swarup Das</p>
        </div>

        {/* Right Side (Form) */}
        {!submitted ? (
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="space-y-6"
          >
            {/* Required hidden input for Netlify */}
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-[#1a1a1a] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-[#1a1a1a] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full bg-[#1a1a1a] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full bg-[#1a1a1a] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lime-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-lime-300 text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-200 transition"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-10 bg-[#1a1a1a] rounded-xl">
            <h3 className="text-2xl font-bold text-lime-300 mb-4">
              🎉 Thank you!
            </h3>
            <p className="text-gray-400">
              Your message has been successfully submitted. I’ll get back to you soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
