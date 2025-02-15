import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-gray-900 text-gray-300">
        <div className="h-72 w-72 bg-pink-900 rounded-full absolute -top-10 blur-3xl -left-10"></div>
        <div className="h-72 w-72 bg-green-900 rounded-full absolute bottom-0 blur-3xl right-0 z-1"></div>
        <img src="src/assets/images/LOGO.png" className="absolute top-10 right-10 md:w-20 md:h-20 w-10 h-10" alt="" />
      <h1 className="text-8xl font-bold text-gray-200 animate-bounce  z-10">404</h1>
      <p className="text-xl mt-4 text-gray-400 z-10">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-blue-600 btn  z-10 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;