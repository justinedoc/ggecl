import { FaSearch } from "react-icons/fa";
// import { motion } from "framer-motion";


function Hero() {
  return (

    <div className="g-5 text-gray-800 dark:text-white flex flex-col align-middle justify-center text-center px-4 md:px-10 h-screen w-full bg-white dark:bg-gray-900 items-center">
      {/* Blurry Background Circles */}
      <div className="absolute -bottom-32 right-0 w-52 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
      <h1 className="font-bold text-4xl md:text-5xl md:px-36 md:mb-10 mb-8 md:leading-[1.4] unreveal">
        Empower your future with the courses designed to
        <span style={{ color: "#2563ea", display:"flex", flexDirection:"column", alignItems:"center", gap:"1rem" }}>
          <p>fit your choice.</p>
          <img src="src/assets/images/sktech.svg" alt="" className="w-56  -mt-5" />
        </span>
        
      </h1>
      <p className="mb-2 font-semibold text-1xl md:px-36 md:leading-[1.1], leading-[1.9] ">
      We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
      </p>
      <div className="relative w-screen max-w-xl px-4 flex items-center justify-center -mb-10 mt-10">
  <input
    type="text"
    placeholder="Search..."
    className="w-full pl-5 pr-4 py-3 bg-slate-200 text-lg border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
  />
  <button className="absolute right-8 top-5 text-gray-800">
    <span className="w-6 h-6">
      <FaSearch />
    </span>
  </button>
</div>
<div className="absolute top-50 right-5 spinning-container">
  <img src="src/assets/images/circle2.png" alt="" className="w-20 h-20 spinning-image" />
</div>
    </div>
  );
}

export default Hero;
