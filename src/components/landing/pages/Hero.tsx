// import { FaSearch } from "react-icons/fa";
import StudentHero from "@/components/ui/StudentHero";
import sktech from "@/assets/images/sktech.svg"; // Import images properly
import circle2 from "@/assets/images/circle2.png";
import "./styles.css";

function Hero() {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-white w-full">
      {/* Left Side: Text & Search */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
        {/* Blurry Background Circle */}
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>


        <h1 className="font-bold text-3xl mt-5 md:text-5xl leading-tight md:leading-snug">
          Empower your future with courses designed to
          <span className="text-blue-600 flex flex-col items-center md:items-start mt-2">
            <p>fit your choice.</p>
            <img src={sktech} alt="Decorative Sketch" className="w-44 md:w-56 -mt-3" />
          </span>
        </h1>

        <p className="text-md font-bold md:text-xl leading-[2]">
          We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
        </p>

        {/* Search Bar */}
        {/* <div className="relative w-full max-w-md mx-auto md:mx-0">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-5 pr-12 py-3 bg-slate-200 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
          />
          <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-800">
            <FaSearch size={20} />
          </button>
        </div> */}
      </div>

      {/* Right Side: StudentHero */}
      <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0 md:ml-10">
        <StudentHero />
      </div>

      {/* Floating Spinning Image */}
      <div className="absolute md:top-24 md:right-28 top-2/4 right-14 animate-spin-slow">
        <img src={circle2} alt="Spinning Design" className="w-24 h-24 md:w-28 md:h-28" />
      </div>
    </div>
  );
}

export default Hero;
