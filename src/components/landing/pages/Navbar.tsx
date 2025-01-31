import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
// import "src/public/LOGO.png"

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
      <nav className="fixed w-full bg-white dark:bg-gray-900 dark:border-b-2 z-50 transition-all duration-500 ease-in-out py-2" style={{ minHeight: "90px", alignItems: "center", alignContent: "center" }}>
        {/* Blurry Background Circles */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
            <img src={darkMode ? "src/assets/images/LOGO.png" : "src/assets/images/LOGO-dark.png"} alt="Logo" width={70} />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 font-bold">
              Home
            </Link>
            <Link to="/courses" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 font-bold">
              Courses
            </Link>
            <Link to="/live" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 font-bold">
              Live Sessions
            </Link>
            <Link to="/community" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 font-bold">
              Community
            </Link>
            <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-500 font-bold">
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Login / Sign Up */}
            <Link to="/" className="font-bold text-gray-700 dark:text-gray-300">Login</Link>
            <Link to="/login" className="hidden md:block text-white px-5 py-3 rounded-md btn">
            Get Started
            </Link>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-gray-800 dark:text-gray-300 dark:bg-gray-800 bg-gray-200 dark:hover:bg-gray-700"
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>

            

            {/* Mobile Menu Button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-2 text-gray-800 dark:text-white">
              {menuOpen ? <FaTimes size={24}/> : <FaBars size={24}/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 py-4 space-y-4 text-left self-baseline justify-start px-5" >
          <Link to="/" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 font-bold" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/courses" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 font-bold" onClick={() => setMenuOpen(false)}>
            Courses
          </Link>
          <Link to="/live" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 font-bold" onClick={() => setMenuOpen(false)}>
            Live Sessions
          </Link>
          <Link to="/community" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 font-bold" onClick={() => setMenuOpen(false)}>
            Community
          </Link>
          <Link to="/contact" className="block text-gray-700 dark:text-gray-300 hover:text-blue-500 font-bold" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
          <Link to="/login" className="block text-white px-4 py-4 rounded mx-auto w-50 btn">
          Get Started
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
