import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isDark, setIsDark] = useState(() => {
    // Check local storage or default to false
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-black">
      <div className="w-full px-8 py-3 flex justify-between items-center">
        {/* Profile photo and name */}
        <a href="/" className="flex items-center">
          <img
            src="/myphoto.jpg"
            alt="Nowshin's Photo"
            className="w-10 h-10 rounded-full mr-3"
          />

          <span className="transition duration-300 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-gray-800 hover:text-transparent dark:text-white dark:hover:text-transparent">
            Nowshin Nawar Arony
          </span>
        </a>

        {/* Right Side Items */}

        <div className="hidden md:flex space-x-16">
          {/* Dark mode button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-700 dark:text-white" />
            )}
          </button>

          {/* Menu Items */}
          <Link
            to="/about"
            className="transition duration-300 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-gray-800 hover:text-transparent dark:text-white dark:hover:text-transparent"
          >
            About
          </Link>
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
            className="transition duration-300 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-gray-800 hover:text-transparent dark:text-white dark:hover:text-transparent"
          >
            Linkedin
          </a>
          <a
            href="https://github.com/nowshinarony"
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-gray-800 hover:text-transparent dark:text-white dark:hover:text-transparent"
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
            <XMarkIcon className="h-6 w-6 text-gray-700 dark:text-white" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-gray-700 dark:text-white" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center">
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-4 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? (
              <SunIcon className="h-6 w-6 text-yellow-400" />
            ) : (
              <MoonIcon className="h-6 w-6 text-gray-700 dark:text-white" />
            )}
          </button>

          <Link
            to="/about"
            className="block transition duration-300 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-gray-800 hover:text-transparent dark:text-white dark:hover:text-transparent"
          >
            About
          </Link>
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
            className="block transition duration-300 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-gray-800 hover:text-transparent dark:text-white dark:hover:text-transparent"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/nowshinarony"
            target="_blank"
            rel="noopener noreferrer"
            className="block transition duration-300 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-gray-800 hover:text-transparent dark:text-white dark:hover:text-transparent"
          >
            GitHub
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
