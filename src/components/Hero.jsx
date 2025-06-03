const Hero = () => {
  return (
    <section className="w-full px-6 py-16 text-center fade-slide bg-white text-gray-800 dark:bg-black dark:text-gray-100">
      <h1 className="text-xl md:text-3xl font-semibold mb-10">
        <div className="leading-relaxed">
          UX Practitioner simplifying complex enterprise systems into clean,<br/>
           intuitive experiences — built for developers, designed for impact.
        </div>
      </h1>

      <p className="max-w-3xl mx-auto text-md md:text-lg">
        <div className="leading-loose">
          I specialize in transforming complex processes into intuitive designs
          through research, rapid iteration, and close collaboration with
          cross-functional teams.
        </div>
      </p>

      <h1 className="text-xl md:text-3xl font-semibold mt-32">
        <div className="leading-relaxed">
          Take a look at my work
        </div>
      </h1>
    </section>
  );
};

export default Hero;
