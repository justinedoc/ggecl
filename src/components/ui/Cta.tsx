import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Cta() {
  return (
    <div className="reveal dark:bg-gray-900 bg-white text-gray-800 dark:text-white transition-all duration-500 ease-in-out h-full pt-10 align-middle items-center text-center">
      <h1 className="md:text-4xl text-3xl mb-10 font-bold">Learn anything, anytime, anywhere.</h1>
      <p className="px-2 mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis, dolorem debitis odio expedita iusto officiis praesentium veniam aspernatur quis!</p>
      <div className="flex w-full justify-center">
        <button className="text-white px-8 py-3 rounded-md text-2xl btn">Get Started</button>
        <Link to="/" className="flex items-center text-gray-800 dark:text-gray-100 dark:hover:text-gray-400 hover:text-gray-600 transition-all duration-500 ease-in-out ml-5">
          <span className="mr-2">Learn More</span> <FaArrowRight />
        </Link>
      </div>
<br /><br />
<section className="flex flex-col items-center bg-gray-900 dark:bg-white py-16 px-4 relative">
<div className="absolute inset-0 bg-blue-500/20 -top-10 right-0 w-72 h-72 rounded-full blur-2xl"></div>
      <h1 className="text-xl md:text-2xl bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white p-3 px-6 rounded-full font-bold mb-6">
        How to Start
      </h1>

      <p className="text-gray-300 dark:text-gray-800 text-center max-w-2xl mb-10 leading-relaxed">
        Begin your journey with our easy steps. Learn, explore, and grow with the best courses designed for your success.
      </p>

      <div className="flex md:flex-nowrap flex-wrap justify-center gap-6 w-full max-w-6xl">
        {[
          { img: "/src/assets/images/img1.png", title: "Sign Up", desc: "Create your account to get started." },
          { img: "/src/assets/images/img2.png", title: "Choose a Course", desc: "Select from a variety of courses." },
          { img: "/src/assets/images/img3.png", title: "Start Learning", desc: "Engage with interactive content." },
          { img: "/src/assets/images/img4.png", title: "Get Certified", desc: "Complete courses and earn certificates." },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 transition dark:bg-gray-100 text-white dark:text-gray-900 rounded-xl shadow-lg p-6 w-full sm:w-1/2 lg:w-1/4 text-center flex flex-col items-center hover:scale-102"
          >
            <div className="relative flex justify-center items-center w-24 h-24 mb-4">
              <div className="absolute inset-0 bg-blue-800/20 rounded-full blur-2xl"></div>
              <img src={item.img} alt={item.title} className="relative z-10 w-20 h-20 object-contain" />
            </div>
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-400 dark:text-gray-700 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Cta;
