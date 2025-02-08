import Navbar from "./Navbar";
import { FaFilter } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const AllCourses = () => {
  const courses = [
    {
      id: 1,
      title: "UI/UX Design Masterclass",
      rating: 4.8,
      description: "Learn UI/UX Adobe XD.",
      image: "src/assets/images/f1.png",
      duration: "22 Total Hours. 155 Lectures.",
      amount: "$149.99",
    },
    {
      id: 2,
      title: "Graphic Design Essentials",
      rating: 4.5,
      description: "Master Photoshop, Illustrator.",
      image: "src/assets/images/f1.png",
      duration: "22 Total Hours. 155 Lectures.",
      amount: "$149.99",
    },
    {
      id: 3,
      title: "Web Design with Figma",
      rating: 4.7,
      description: "Create modern Figma.",
      image: "src/assets/images/f1.png",
      duration: "22 Total Hours. 155 Lectures.",
      amount: "$149.99",
    },
    {
      id: 4,
      title: "Motion Graphics & Animation",
      rating: 4.6,
      description: "Learn After Effects.",
      image: "src/assets/images/f1.png",
      duration: "22 Total Hours. 155 Lectures.",
      amount: "$149.99",
    },
  ];

  return (
    <div className="bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-900">
      <Navbar />

      <main className="md:py-5 md:px-10 px-5 py-2">
        <div>
          <h1 className="sect md:text-3xl text-2xl mb-5 font-bold">
            Design Courses
          </h1>
          <h2 className="text-xl mb-5">All Development Courses</h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Filter Section */}
          <div className="col-span-3">
            <button className="flex items-center gap-4 border border-gray-700 rounded-lg px-4 py-2 w-max">
              <FaFilter />
              <span className="-mt-1">Filter</span>
            </button>
            <div className="ratings">
              <select
                name="ratings"
                className="bg-gray-100 dark:bg-gray-800 px-5 mt-5 py-2 rounded-lg w-full outline-none"
              >
                <option selected>Choose Ratings</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="2">⭐⭐</option>
                <option value="1">⭐</option>
              </select>
              <select
                name="ratings"
                className="bg-gray-100 dark:bg-gray-800 px-5 mt-5 py-2 rounded-lg w-full outline-none"
              >
                <option selected>Munber of Chapter</option>
                <option value="5"><input type="checkbox" name="" id="one" /> <label htmlFor="one">1-10</label></option>
                <option value="4"><input type="checkbox" name="" id="one" /> <label htmlFor="one">10-15</label></option>
                <option value="3"><input type="checkbox" name="" id="one" /> <label htmlFor="one">15-20</label></option>
                <option value="2"><input type="checkbox" name="" id="one" /> <label htmlFor="one">20-25</label></option>
              </select>
              <select
                name="ratings"
                className="bg-gray-100 dark:bg-gray-800 px-5 mt-5 py-2 rounded-lg w-full outline-none"
              >
                <option selected>Price</option>
                <option value="5"><input type="checkbox" name="" id="one" /> <label htmlFor="one">$100</label></option>
                <option value="4"><input type="checkbox" name="" id="one" /> <label htmlFor="one">$150</label></option>
                <option value="3"><input type="checkbox" name="" id="one" /> <label htmlFor="one">$200</label></option>
                <option value="2"><input type="checkbox" name="" id="one" /> <label htmlFor="one">$250</label></option>
              </select>
              <select
                name="ratings"
                className="bg-gray-100 dark:bg-gray-800 px-5 mt-5 py-2 rounded-lg w-full outline-none"
              >
                <option selected>Category</option>
                <option value="5">Web Development</option>
                <option value="4">App Developmet</option>
                <option value="3">UI?/UX Designer</option>
                <option value="2">Data Analysis</option>
                <option value="1">Cyber Security</option>
              </select>
            </div>
          </div>

          {/* Courses Section */}
          <div className="col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-100 dark:bg-gray-900 border-blue-600 rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {course.description}
                  </p>
                  <div className="flex items-center mt-2">
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <FaStar className="text-yellow-400" />
                    <span className="ml-1 text-sm font-medium">
                      {course.rating}
                    </span>
                  </div>
                  <p className="ml-1 text-sm font-medium">{course.duration}</p>
                  <p className="ml-1 text-2xl font-medium">{course.amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AllCourses;
