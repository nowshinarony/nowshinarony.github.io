import SectionContainer from "../components/SectionContainer";

const ALC = () => {
  return (
    <section className="py-12 fade-slide  bg-white dark:bg-black  text-gray-700 dark:text-gray-100">
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

        <div className="space-y-1 text-gray-700 dark:text-gray-100 text-base leading-relaxed">
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

        <p className="mt-6  text-gray-700 dark:text-gray-100 leading-relaxed">
          As the UX Practitioner on the Agricultural Land Commission (ALC)
          project, I worked on their internal <strong>application tracking system</strong> and the external
          user-facing <strong>application portal</strong>.
        </p>

        <p className="mt-6  text-gray-700 dark:text-gray-100 leading-relaxed">
          My work involved developing artifacts and designs on Figma to simplify
          complex workflows, improve usability, and ensure all designs aligned
          with technical constraints and business goals. I followed WCAG 2.1
          guidelines to ensure accessibility for all users.
        </p>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">What is ALC?</h2>
        <p className="mt-6  text-gray-700 dark:text-gray-100 leading-relaxed">
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
          <figcaption className="mt-2 text-sm text-gray-600 dark:text-gray-100 italic">
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

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          Through the ALC portal, landowners submit applications for things like
          subdividing farmland, building homes, or requesting non-farm uses.
        </p>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
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
            <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
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
              alt="Illustration of two people reviewing data and charts on a large screen, symbolizing working together, with icons representing statistics and collaboration."
              className="mx-auto w-1/2"
            />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">
          How I approach and solve the UX problems
        </h2>

        <img
          src="/alc-images/method.png"
          alt="My Methodology"
          className="mx-auto w-2/3 py-8"
        />

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          As part of the ALC team, I contributed to multiple features to improve
          the ALC system. Below, I outline a case study that is one of several
          works I have delivered.
        </p>
      </SectionContainer>

      {/* Case Study Begins */}
      <SectionContainer>
        <h1 className="text-3xl md:text-4xl font-bold">
          Example Case Study with ALC
        </h1>
        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          This case study showcases how I designed a new end-to-end digital
          workflow for the Compliance & Enforcement (C&E) team at ALC. Before
          this, C&E officers were not using the ALC system at all. I integrated
          their existing disconnected tools into ALC, delivering a centralized,
          intuitive solution that could replace outdated processes.
        </p>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">
          Who is the Compliance and Enforcement (C&E) team?
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-2/3">
            <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
              The C&E team at ALC ensure that land within the Agricultural Land
              Reserve (ALR) is used appropriately by investigating complaints,
              conducting inspections, and enforcing regulations.
            </p>

            <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
              <strong>C&E team:</strong> 6 officers, 1 intake technician, and 1
              supervisor
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <img
              src="/alc-images/CE.png"
              alt="Illustration of two people standing beside a large legal document with a courthouse icon, holding an eraser and a pencil, with a justice scale above."
              className="mx-auto w-[80%]"
            />
          </div>
        </div>
      </SectionContainer>

      {/* User Persona */}
      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">User Persona</h2>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          I began with a user persona to build empathy and ensure the designs
          were grounded in real user behaviors and frustrations. This helped
          align the product vision with the users’ mental models and daily
          constraints.
        </p>

        <img
          src="/alc-images/Persona.png"
          alt="User Persona"
          className="mx-auto w-[70%] py-8"
        />
      </SectionContainer>

      {/* Journey Map */}
      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">Journey Map</h2>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          To identify key pain points, I created a journey map outlining each
          step officers take after a site visit. It became clear that the most
          time-consuming and error-prone part was logging evidence. Officers had
          to switch between systems and re-enter the same data in multiple
          places. This insight shaped my focus on streamlining data entry and
          reducing cognitive overload.
        </p>

        <img
          src="/alc-images/JourneyMap.png"
          alt="Journey Map"
          className="mx-auto w-[90%] py-8"
        />
      </SectionContainer>

      {/* Problem Statement */}
      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">Problem Statement</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-2/3">
            <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
              C&E officers are already responsible for critical tasks like land
              inspections, enforcement actions, and ensuring proper land use.
            </p>

            <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
              However, the tools meant to support their work have added more
              complexity rather than reducing it.
            </p>

            <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
              With 928 active files and a 141% spike in enforcement actions in
              2023–2024, the current setup no longer scales. Officers spend more
              time recording work than on their actual tasks.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <img
              src="/alc-images/ProblemStatement.png"
              alt="Illustration of a stressed office worker holding their head at a cluttered desk, surrounded by tall stacks of paperwork, a laptop, and notification icons for email, voicemail, and calls."
              className="mx-auto w-full"
            />
          </div>
        </div>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">
          They juggle between multiple disconnected systems:
        </h2>

        <ul className="list-disc mt-8 pl-6 text-gray-700 dark:text-gray-100 space-y-6">
          <li>
            <strong>NRIS (Natural Resource Inspection System):</strong>
            <br />A shared, province-wide platform intended to standardize
            inspection and compliance documentation across natural resource
            ministries. While originally built to support inter-agency
            collaboration, it has become cumbersome and unintuitive for ALC
            specific needs.
          </li>
          <li>
            <strong>LAN Folder:</strong> <br />
            Used to manually store complaint related photos, files and
            documents.
          </li>
          <li>
            <strong>Microsoft Word Document:</strong> <br />A running activity
            log for each complaint in a Word document, where each row captures a
            new action or update.
          </li>
          <li>
            <strong>Microsoft Access Database:</strong> <br />A running activity
            log for each complaint in a Word document, where each row captures a
            new action or update.
          </li>
        </ul>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">Need Statement</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-2/3">
            <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
              Therefore, there is a clear need for a simplified, user-friendly
              system that brings together all aspects of the C&E workflow into
              one place.
            </p>

            <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
              By reducing tool-switching and redundant data entry, officers can
              focus on timely response, better compliance enforcement, and
              upholding land protection regulations.
            </p>
          </div>

          <div className="md:w-1/3 flex justify-center">
            <img
              src="/alc-images/need.png"
              alt="Illustration of a person interacting with a visual interface showing three connected screens: a profile page, a photo gallery, and add-content screen, symbolizing user interface design or content organization."
              className="mx-auto w-full"
            />
          </div>
        </div>
      </SectionContainer>

      {/* Task Flow */}
      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">Task Flow</h2>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          To meet this need, I mapped out how officers interact with complaints.
          A key finding from the journey map was an entry point used to log
          daily actions taken on a file, officers refer to this as the
          “Chronology Entry.” Understanding this flow helped me design a
          clearer, more intuitive UI that reflects how they actually work.
        </p>

        <img
          src="/alc-images/flow.png"
          alt="Flow diagram"
          className="mx-auto"
        />
      </SectionContainer>

      {/* Wireframes */}
      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">Wireframe</h2>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          Using the task flow as a guide, I created wireframes in Figma to
          visualize each step in the complaint handling process. These
          wireframes helped drive collaborative sessions with the PO and
          officers, helping us validate ideas and adjust flows early on.
        </p>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          Here I present some samples of the several wireframes..
        </p>

        <img
          src="/alc-images/w1.png"
          alt="Image of Wireframe 1"
          className="mx-auto py-10 w-[60%]"
        />

        <img
          src="/alc-images/w2.png"
          alt="Image of Wireframe 2"
          className="mx-auto py-10 w-[60%]"
        />

        <img
          src="/alc-images/w3.png"
          alt="Image of Wireframe 3"
          className="mx-auto py-10 w-[60%]"
        />
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">Hi-fidelity Designs</h2>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          I translated the wireframes into polished, dev-ready designs.
          Throughout this project, I tackled over 30 design tickets.
        </p>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">
          Design System Alignment
        </h2>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          All designs were created using Angular Material components to align
          with the development stack, reduce custom code, and ensure a
          consistent user experience. I reused components like input fields and
          buttons, and followed spacing, color, and layout standards from the
          design system.
        </p>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          In addition, I created new reusable Figma components such as a header,
          side navigation bar, C&E action buttons and pop-up modal designs.
        </p>
      </SectionContainer>

      {/* Component I designed */}
      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">
          New Components I Added
        </h2>

        <img
          src="/alc-images/bannerCE.png"
          alt="Image of three banner components"
          className="mx-auto py-10 w-[80%]"
        />

        <img
          src="/alc-images/modal_buttons.png"
          alt="Image of three banner components"
          className="mx-auto py-4"
        />
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">What I Designed</h2>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          Over the course of this project, I tackled 30+ design tickets, each
          aimed at unifying and simplifying C&E workflows. Rather than listing
          every ticket, here’s how I approached the work by problem area:
        </p>
      </SectionContainer>

      {/* Hi-fi images */}
      <SectionContainer>
        <h3 className="text-xl md:text-2xl font-bold">
          1. Creating & Managing C&E Files
        </h3>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          The system begins with entering a complaint. I designed screens for
          creating, saving, editing, and assigning files. These actions
          previously required folders, Word docs, and Access updates. Now,
          everything starts and stays in one place.
        </p>

        <img
          src="/alc-images/CreateManage1.png"
          alt="Image Hi-Fidelity Images for Creating and Managing Compliants"
          className="mx-auto w-[90%] py-8"
        />

        <img
          src="/alc-images/CreateManage2.png"
          alt="Image Hi-Fidelity Images for Assigning Compliants"
          className="mx-auto w-[90%] py-8"
        />
      </SectionContainer>

      <SectionContainer>
        <h3 className="text-xl md:text-2xl font-bold">
          2. Chronology Tracking
        </h3>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          Previously tracked in Word, the Chronology is now a structured,
          expandable log within each complaint file. Officers can add entries,
          upload documents, and view a clear timeline. No more manual tracking!
        </p>

        <img
          src="/alc-images/Chronology.png"
          alt="Image Hi-Fidelity Images Chronology"
          className="mx-auto w-[90%] py-8"
        />

        <img
          src="/alc-images/AddInspection.png"
          alt="Image Hi-Fidelity Images Adding C&E Action - Inspection"
          className="mx-auto w-[90%] py-8"
        />

        <img
          src="/alc-images/C&EAction.png"
          alt="Image Hi-Fidelity Images Viewing and Filtering All C&E Actions"
          className="mx-auto w-[90%] py-8"
        />
      </SectionContainer>

      <SectionContainer>
        <h3 className="text-xl md:text-2xl font-bold">
          3. Searching & Organizing Complaints
        </h3>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          To help officers find what they need faster, I also added images tab,
          advanced search, and tagging features. These allow officers to quickly
          locate complaints, filter by status or assignment, and reassign files
          without digging through folders.
        </p>

        <img
          src="/alc-images/Search_Organize.png"
          alt="Image Hi-Fidelity Images of Search Feature and Images Tabs"
          className="mx-auto w-[60%] py-8"
        />
      </SectionContainer>

      <SectionContainer>
        <h3 className="text-xl md:text-2xl font-bold">
          4. Linking Across Systems
        </h3>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          To reduce toggling, I added the ability to link complaints to related
          application types like Notice of Intent. Officers can now see the full
          context of a case without leaving the system.
        </p>

        <img
          src="/alc-images/Linking.png"
          alt="Image Hi-Fidelity Images Linking Complaints with ALC Application files"
          className="mx-auto w-full py-8"
        />
      </SectionContainer>

      {/* Iteration */}
      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">Iterations</h2>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          I conducted several rounds of iteration for each hi-fi prototype
          screen. Some required minor tweaks, while others involved complete
          redesigns. On average, screens went through 5–6 iterations based on
          user feedback, product needs, and developer input. Sharing early
          versions with developers also helped surface technical constraints,
          which allowed me to adjust designs for smoother implementation.
        </p>
      </SectionContainer>

      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">Conclusion</h2>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          This redesigned workflow is now in development and will launch in Fall
          2025. Once live, it’s expected to cut logging time in half, reduce
          tool-switching, and allow officers to focus on what matters most,
          protecting BC’s agricultural land.
        </p>

        <p className="mt-6 text-gray-700 dark:text-gray-100 leading-relaxed">
          During a user testing session, one officer said, "I can’t wait to
          start using this system!”
        </p>
      </SectionContainer>

      {/* Skills I Strengthened */}

      <SectionContainer>
        <h2 className="text-2xl md:text-3xl font-bold">
          Skills I Strengthened during my time with ALC
        </h2>

        <ul className="list-disc mt-8 pl-6 text-gray-700 dark:text-gray-100 space-y-6">
          <li>
            <strong>Collaboration:</strong> From day one, I collaborated with
            the Product Owner and developers to align designs with technical
            constraints and user realities.
          </li>
          <li>
            <strong>Rapid Iteration:</strong> With over 30 screens delivered in
            under a month, I learned how to design quickly without sacrificing
            clarity or user experience.
          </li>

          <li>
            <strong>User-Centered Communication:</strong> I facilitated
            discussions using wireframes and prototypes, helping non-design
            stakeholders visualize ideas and give meaningful feedback.
          </li>

          <li>
            <strong>Systems Thinking:</strong> I had to understand and reimagine
            a workflow that spanned multiple legacy tools, departments, and
            technical constraints
          </li>
        </ul>
      </SectionContainer>

      <p className="italic px-20 mt-12 text-blue-700 leading-relaxed">
          Working on this project showed me the real impact of design in
          government systems. I wasn't just creating cleaner screens, I was
          helping frontline officers spend less time wrestling with outdated
          tools and more time doing meaningful work.
        </p>


    </section>
  );
};

export default ALC;
