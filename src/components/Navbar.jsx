import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="w-full px-8 py-3 flex justify-between items-center">
        {/* Profile photo and name */}
        <a href="/" className="flex items-center">
          <img
            src="/myphoto.jpg"
            alt="Nowshin's Photo"
            className="w-10 h-10 rounded-full mr-3"
          />

          <span className="text-gray-800 text-base">Nowshin Nawar Arony</span>
        </a>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-16">
          <Link to="/about">About</Link>
          {/* <a
            href="https://youtu.be/XP_RAhnS1e8?si=4sP49BpVGB1hYGJi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Intro Video
          </a> */}
          <a
            href="https://www.linkedin.com/in/nna01/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/nowshinarony"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>

        {/* Hamburger Menu - visible only on mobile */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="h-6 w-6 text-gray-700" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <Link to="/about" className="text-gray-800">About</Link>
          {/* <a
            href="https://youtu.be/XP_RAhnS1e8?si=4sP49BpVGB1hYGJi"
            className="block text-gray-800"
          >
            Intro Video
          </a> */}
          <a
            href="https://www.linkedin.com/in/nna01/"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-800"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nowshinarony"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-gray-800"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
