import Navbar from "../_components/Navbar";
import { FaFilter } from "react-icons/fa";
import { tempCourseData } from "../_components/CoursesList";
import SearchBar from "../../ui/SearchBar";
import CourseBox from "../_components/CourseBox";
import Footer from "./Footer";

const Courses = () => {
  return (
    <>
      <div className="bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-900">
        <Navbar showNav />

        <main className="md:py-5 md:px-10 px-5 py-2">
          <header className="flex justify-between items-center my-7">
            <h1 className="sect md:text-3xl text-2xl mb-5 font-bold">
              Explore Courses
            </h1>

            <SearchBar />
          </header>

          {/* Main Content Grid */}
          <div className="grid grid-cols-12 gap-8 my-5">
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
                  <option value="5">
                    <input type="checkbox" name="" id="one" />{" "}
                    <label htmlFor="one">1-10</label>
                  </option>
                  <option value="4">
                    <input type="checkbox" name="" id="one" />{" "}
                    <label htmlFor="one">10-15</label>
                  </option>
                  <option value="3">
                    <input type="checkbox" name="" id="one" />{" "}
                    <label htmlFor="one">15-20</label>
                  </option>
                  <option value="2">
                    <input type="checkbox" name="" id="one" />{" "}
                    <label htmlFor="one">20-25</label>
                  </option>
                </select>
                <select
                  name="ratings"
                  className="bg-gray-100 dark:bg-gray-800 px-5 mt-5 py-2 rounded-lg w-full outline-none"
                >
                  <option selected>Price</option>
                  <option value="5">
                    <input type="checkbox" name="" id="one" />{" "}
                    <label htmlFor="one">$100</label>
                  </option>
                  <option value="4">
                    <input type="checkbox" name="" id="one" />{" "}
                    <label htmlFor="one">$150</label>
                  </option>
                  <option value="3">
                    <input type="checkbox" name="" id="one" />{" "}
                    <label htmlFor="one">$200</label>
                  </option>
                  <option value="2">
                    <input type="checkbox" name="" id="one" />{" "}
                    <label htmlFor="one">$250</label>
                  </option>
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
            <div className="col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tempCourseData.map((course) => (
                <CourseBox key={course.id} course={course} />
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Courses;
