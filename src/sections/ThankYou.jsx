export default function ThankYou() {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#0E1013] text-white px-6">
      <h1 className="text-5xl md:text-6xl font-extrabold text-lime-300 mb-6">
        🎉 Thank You!
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-10 text-center max-w-xl">
        Your message has been successfully submitted. I’ll get back to you as soon as possible.
      </p>
      <a
        href="/"
        className="bg-lime-300 text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-200 transition"
      >
        Go Back
      </a>
    </section>
  );
}
