import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const links = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Courses",
    path: "/courses",
  },
  {
    title: "Live Sessions",
    path: "/live-sessions",
  },
  {
    title: "Community",
    path: "/community",
  },
  {
    title: "Contact",
    path: "/contact",
  },
];

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav
      className="sticky top-0 left-0 w-full bg-white dark:bg-gray-900 dark:border-b-2 z-50 transition-all duration-300 ease-in-out py-2"
      style={{
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            <img
              src={
                darkMode
                  ? "src/assets/images/LOGO.png"
                  : "src/assets/images/LOGO-dark.png"
              }
              alt="Logo"
              width={60}
            />
          </Link>

          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <Link
                to={link.path}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-150 font-bold"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button className="font-bold hover:text-white text-gray-700 dark:text-gray-300 border bg-transparent hover:bg-[#123354] transition duration-300 border-cyan-900 rounded-md md:block hidden">
                Login
              </Button>
            </Link>
            <Link to="/signup">
              <Button className="hidden md:block text-white font-bold rounded-md btn">
                Get Started
              </Button>
            </Link>

            <button
              onClick={() => setDarkMode((current) => !current)}
              className="p-2 rounded-full text-gray-800 dark:text-gray-300 dark:bg-gray-800 bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            <button
              onClick={() => setMenuOpen((cur) => !cur)}
              className="md:hidden p-2 text-gray-800 dark:text-white"
            >
              {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 flex flex-col p-5 gap-4">
          {links.map((link) => (
            <Link
              to={link.path}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500 font-bold"
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}

          <Link to="/login">
            <Button className="w-full font-bold hover:text-white text-gray-700 dark:text-gray-300 border-2 bg-transparent hover:bg-[#123354] transition duration-300 border-cyan-900 rounded-md">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button className="w-full text-white font-bold rounded-md btn">
              Get Started
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
