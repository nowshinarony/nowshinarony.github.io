const About = () => {
  return (
    <section className="px-6 py-16 max-w-6xl mx-auto">
      <div className="flex flex-col-reverse md:flex-row items-start gap-12">
        
        <div className="md:w-2/3 text-left">

          {/* Intro Line */}
          <h1 className="text-xl md:text-3xl font-semibold mb-10">
            <div className="leading-relaxed">
              Hi, I'm Nowshin, a UX Practitioner currently based in Victoria, BC
            </div>
          </h1>

          {/* Text About Me */}
          <p className="mb-4 text-gray-700 leading-relaxed">
            About 3 years ago, I moved from Bangladesh to Canada to pursue a
            Master’s in Computer Science at the University of Victoria — a path
            that led me to UX research and design.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            My first real-world experience came through launching INSPIRE with
            IBM, a UX focused program supporting women in STEM. That’s when it
            clicked: great design starts with understanding real people.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Since then, I’ve worked as a UX researcher, collaborated on 7
            studies, published 5 papers, and completed a thesis on what makes
            software inclusive.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            More recently, I worked at the BC Government, where I designed for
            real-world complexity, working closely with product owners, users,
            and developers to improve internal tools used by staff every day.
            Whether it was reducing redundancy or streamlining complex
            workflows, I focused on creating designs that were both effective
            for users and practical for the development team.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            But it's not just about the work. For me, it's about keeping that
            human touch in technology, making sure it’s inclusive, empathetic,
            and, well, just plain nice to use. As technology keeps evolving, I’m
            all in on finding ways to leverage them to make even more of a
            difference.
          </p>

          <p className="mb-4 text-gray-700 leading-relaxed">
            Today, I’m focused on designing inclusive, empathetic, and practical
            digital experiences. And, I’m always looking for ways to grow,
            learn, and make an impact.
          </p>
        </div>

        {/* Right image column */}
        <div className="md:w-1/3 mt-4">
          <img
            src="/myphoto.jpg"
            alt="Nowshin Nawar Arony"
            className="rounded-[2rem] shadow-lg w-full max-w-xs mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
