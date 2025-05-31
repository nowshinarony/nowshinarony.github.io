import { Link } from "react-router-dom";

const WorkPreview = () => {
  return (
    <section className="w-full px-6 text-center">
      <div className="flex justify-center fade-slide">
        <Link to="/alc">
          <img
            src="./ALCS-Cover.png"
            alt="UX work for the Government of BC Cover Photo"
            className="w-full max-w-sm md:max-w-lg mx-auto rounded shadow-md
                     transition-transform duration-300 ease-out hover:scale-105"
          />
        </Link>
      </div>
    </section>
  );
};

export default WorkPreview;
