import { FaArrowRight } from "react-icons/fa";

import {Link} from "react-router-dom"

function Cta() {
  return (
    <div className="reveal dark:bg-gray-900 bg-white text-gray-800 dark:text-white transition-all duration-500 ease-in-out h-full py-10 align-middle items-center text-center">
      <h1 className="md:text-4xl text-3xl mb-10 font-bold">Learn anything, anytime, anywhere.</h1>
      <p className="px-2 mb-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis, dolorem debitis odio expedita iusto officiis praesentium veniam aspernatur quis!</p>
      <div className="flex w-full justify-center">
          <button className="text-white px-8 py-3 rounded-md text-2xl btn">Get Started</button>
          <Link to="/" className="flex items-center text-gray-800 dark:text-gray-100 dark:hover:text-gray-400 hover:text-gray-600 transition-all duration-500 ease-in-out ml-5"><span className="mr-2">Learn More</span> <FaArrowRight /></Link>
      </div>
      <br /><br />
      <span className="flex flex-col items-center bg-gray-800 dark:bg-white py-10">
  <h1 className="md:text-1xl text-1xl px-7 bg-gray-100 dark:bg-gray-800 p-3 mb-10 font-bold rounded-full w-max text-center">
    How to Start
  </h1>

  <p className="px-2 mb-10 text-gray-200 dark:text-gray-900 text-center">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium nobis, dolorem debitis odio expedita iusto officiis praesentium veniam aspernatur quis!
  </p>

  <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl px-5">
    
    <div className="io rounded-2xl place-items-center relative dark:bg-gray-900 bg-gray-900 p-5">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      <img src="/src/assets/images/img1.png" alt="" className="relative z-10" />
      <h2 className="relative z-10 text-white">Lorem ipsum dolor sit.</h2>
      <p className="relative z-10 text-gray-500 dark:text-gray-500">Lorem ipsum dolor sit amet.</p>
    </div>

    <div className="io rounded-2xl place-items-center relative dark:bg-gray-900 bg-gray-900 p-5">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      <img src="/src/assets/images/img2.png" alt="" className="relative z-10" />
      <h2 className="relative z-10 text-white">Lorem ipsum dolor sit.</h2>
      <p className="relative z-10 text-gray-500 dark:text-gray-500">Lorem ipsum dolor sit amet.</p>
    </div>

    <div className="io rounded-2xl place-items-center relative dark:bg-gray-900 bg-gray-900 p-5">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      <img src="/src/assets/images/img3.png" alt="" className="relative z-10" />
      <h2 className="relative z-10 text-white">Lorem ipsum dolor sit.</h2>
      <p className="relative z-10 text-gray-500 dark:text-gray-500">Lorem ipsum dolor sit amet.</p>
    </div>

    <div className="io rounded-2xl place-items-center relative dark:bg-gray-900 bg-gray-900 p-5">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
      <img src="/src/assets/images/img4.png" alt="" className="relative z-10" />
      <h2 className="relative z-10 text-white">Lorem ipsum dolor sit.</h2>
      <p className="relative z-10 text-gray-500 dark:text-gray-500">Lorem ipsum dolor sit amet.</p>
    </div>

  </div>
</span>
    </div>
  );
}

export default Cta;
