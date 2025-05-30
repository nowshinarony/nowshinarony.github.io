import SectionContainer from "../components/SectionContainer";

const ALC = () => {
  return (
    <section className="py-12">
      <SectionContainer>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            UX Work for BC Government
          </h1>
          <img
            src="/alc-images/ALCLogo.svg"
            alt="ALC Logo"
            className="w-16 md-w-28"
          />
        </div>

        <div className="space-y-1 text-gray-700 text-base leading-relaxed">
          <p>
            <strong>Ministry:</strong> Ministry of Water, Land and Resource
            Stewardship (WLRS)
          </p>
          <p>
            <strong>Division:</strong> Natural Resource Information and Digital
            Services Division (NRIDS)
          </p>
          <p>
            <strong>Team:</strong> Development & Digital Services (DDS)
          </p>
          <p>
            <strong>Project:</strong> Agricultural Land Commission (ALC)
          </p>
        </div>

        <p className="mt-6 text-gray-700 leading-relaxed">
          As the UX Practitioner on the Agricultural Land Commission (ALC)
          project, I worked on their internal staff system and the external
          user-facing portal.
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          My work involved developing artifacts and designs on Figma to simplify
          complex workflows, improve usability, and ensure all designs aligned
          with technical constraints and business goals. I followed WCAG 2.1
          guidelines to ensure accessibility for all users.
        </p>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">What is ALC?</h2>
        <p className="mt-6 text-gray-700 leading-relaxed">
          <strong>Less than 5% of B.C.'s land</strong> is suitable for farming.
          The Agricultural Land Commission (ALC) of British Columbia manages
          land use across the province’s Agricultural Land Reserve (ALR),
          safeguarding these areas from urban development and other
          non-agricultural uses.
        </p>

        <figure className="text-center my-10">
          <img
            src="/alc-images/ALR-map.avif"
            alt="BC's Protected Farm Lands from 1973 to 2014"
            className="mx-auto w-96 py-8"
          />
          <figcaption className="mt-2 text-sm text-gray-600 italic">
            <a
              href="https://watershedsentinel.ca/article/bc-protected-farm-land-changes/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Image source:
              watershedsentinel.ca/article/bc-protected-farm-land-changes/
            </a>
          </figcaption>
        </figure>

        <p className="mt-6 text-gray-700 leading-relaxed">
          Through the ALC portal, landowners submit applications for things like
          subdividing farmland, building homes, or requesting non-farm uses.
        </p>

        <p className="mt-6 text-gray-700 leading-relaxed">
          These applications are reviewed by staff using an internal system to
          ensure agricultural land is protected and used responsibly. Because
          these decisions directly affect food security, land development, and
          environmental policy, the system plays a critical role in balancing
          public and private interests.
        </p>
      </SectionContainer>

      {/*  Working with a Cross-Functional Agile Team*/}
      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">
          Working with a Cross-Functional Agile Team
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-2/3">
            <p className="mt-6 text-gray-700 leading-relaxed">
              As the sole UX practitioner, I collaborated closely with the
              Product Owner to understand goals and priorities, and with
              Developers to ensure my designs were technically feasible and
              aligned with Angular Material. This close collaboration helped me
              translate user needs into scalable, dev-friendly solutions.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <img
              src="/alc-images/collab-work.avif"
              alt="Three people discussing"
              className="mx-auto w-1/2"
            />
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default ALC;
