import {
  FaChevronRight,
  FaStar,
  FaStarHalf,
  FaGlobe,
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaTwitter,
  FaMicrosoft,
  FaPlay,
  FaAward,
  FaGraduationCap,
} from "react-icons/fa";
import Navbar from "../_components/Navbar";
import Testimonial from "../pages/Testimonial";
import Footer from "../pages/Footer";
import CoursesList from "../_components/CoursesList";
import { useState } from "react";
import SyllabusAccordion from "../_components/SyllabusAccordion";

const Instructor = () => {
  const [activeTab, setActiveTab] = useState("Description");

  return (
    <div>
      <Navbar />
      <div className="p-6 md:p-10 text-gray-800 dark:text-gray-200 dark:bg-gray-900 flex flex-col">
        <div className="w-full max-w-4xl">
          <div className="flex gap-2 text-sm md:text-base">
            <p className="flex gap-2 items-center">
              <span>Home</span> <FaChevronRight />
            </p>
            <p className="flex gap-2 items-center">
              <span>Categories</span> <FaChevronRight />
            </p>
            <p className="flex gap-2 items-center text-blue-600">
              <span>Introduction to User Design</span>
            </p>
          </div>

          <div className="flex flex-col mt-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-5">
              Introduction to User Experience Design
            </h1>
            <p className="leading-[2] mb-5 text-sm md:text-base w-full md:w-[50%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              exercitationem tempora temporibus quis! Iste, cum. Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Iste, asperiores.
            </p>
            <div className="text-yellow-400 flex md:flex-row flex-col md:items-center gap-2 text-sm md:text-base mb-5">
              <p className="flex items-center gap-1">
                <span>4.5</span>
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </p>
              <span className="text-gray-600 dark:text-gray-300 text-xs md:text-sm">
                (6516266 ratings) | 22 Total Hours. 155 Lectures. All levels
              </span>
            </div>

            <div className="flex items-center gap-2 mt-4 mb-5">
              <img
                src="src/assets/images/f1.png"
                className="rounded-full w-8 h-8 md:w-10 md:h-10 object-cover"
                alt="Instructor"
              />
              <p>
                Created by <span className="text-blue-600">Jocelyn Flores</span>
              </p>
            </div>

            <div className="flex gap-2 items-center mt-4">
              <FaGlobe className="text-xl" />
              <span className="text-sm md:text-base">
                English, Spanish, Italian, German.
              </span>
            </div>
          </div>
        </div>
        <div className="w-full mt-10 md:mt-0 md:w-[70%] mx-auto">
          <div className="bg-gray-50 dark:bg-[#121828] shadow-lg rounded-xl p-4 md:absolute md:top-24 md:right-10 md:w-96">
            <div>
              <img
                src="src/assets/images/f2.png"
                className="h-48 md:h-64 w-full object-cover rounded-lg"
                alt="Course Thumbnail"
              />
            </div>
            <div className="mt-4">
              <p className="flex items-center gap-2">
                <span className="text-2xl font-bold">$49.5</span>
                <span className="text-gray-400 line-through">$99.5</span>
                <span className="text-blue-500 font-bold">50% Off</span>
              </p>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <button className="bg-blue-600 text-white py-2 rounded-md">
                Add To Cart
              </button>
              <button className="border-2 border-gray-800 dark:border-gray-300 dark:text-gray-300 text-gray-800 py-2 rounded-md">
                Buy Now
              </button>
            </div>
            <hr className="my-4" />
            <div className="flex gap-4 justify-center text-2xl text-gray-800 dark:text-gray-400">
              <FaFacebook />
              <FaGithub />
              <FaGoogle />
              <FaTwitter />
              <FaMicrosoft />
            </div>
          </div>
        </div>

        <div className="w-full mx-auto mt-12 items-start justify-items-start justify-start">
          <div className="flex gap-4 justify-center md:justify-start border-b dark:border-gray-700 md:w-[65%] w-full">
            {["Description", "Instructor", "Syllabus", "Reviews"].map((tab) => (
              <button
                key={tab}
                className={`py-2 md:px-4 text-sm md:text-base w-full ${
                  activeTab === tab
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-6 p-4 pl-0">
            {activeTab === "Description" && (
              <div>
                <div>
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-5">
                    Course Description
                  </h2>
                  <p className="w-full md:w-[70%] leading-[2]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus voluptatum consectetur accusantium voluptates
                    cumque, nesciunt, numquam doloremque, quod suscipit
                    voluptate animi facere perspiciatis magni incidunt dolore
                    expedita sit saepe officiis! Quam aliquid quos laudantium
                    porro, quod sit assumenda sunt doloribus!
                  </p>
                </div>
                <div className="mt-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-5">
                    Certification
                  </h2>
                  <p className="w-full md:w-[70%] leading-[2]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus voluptatum consectetur accusantium voluptates
                    cumque, nesciunt, numquam doloremque, quod suscipit
                    voluptate animi facere perspiciatis magni incidunt dolore
                    expedita sit saepe officiis! Quam aliquid quos laudantium
                    porro, quod sit assumenda sunt doloribus!
                  </p>
                </div>
                <hr className="w-full md:w-[70%] mt-6" />
              </div>
            )}
            {activeTab === "Syllabus" && (
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-5">
                  Syllabus
                </h2>
                <SyllabusAccordion />
              </div>
            )}
            {activeTab === "Instructor" && (
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-5">
                  Instructor
                </h1>
                <div className="">
                  <div className="mb-5">
                    <h2 className="text-lg font-bold text-blue-500">
                      Josh Dickson
                    </h2>
                    <p>Software Engineer</p>
                  </div>
                  <div className="flex gap-6 items-center">
                    <img
                      src="src/assets/images/course-cart-img.png"
                      className="w-24 object-cover h-24 rounded-full"
                      alt=""
                    />
                    <div className="flex flex-col gap-3">
                      <p className="flex gap-3 items-conter dark:text-gray-300 text-gray-700">
                        <FaAward />
                        <span className="-mt-[.34rem]">40,000 Reviews</span>
                      </p>
                      <p className="flex gap-3 items-conter dark:text-gray-300 text-gray-700">
                        <FaGraduationCap />
                        <span className="-mt-[.34rem]">500 Students</span>
                      </p>
                      <p className="flex gap-3 items-conter dark:text-gray-300 text-gray-700">
                        <FaPlay />
                        <span className="-mt-[.34rem]">15 Courses</span>
                      </p>
                    </div>
                  </div>
                  <p className="mt-6 text-gray-700 dark:text-gray-300 w-full md:w-[70%] leading-[2]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptas ad id quis ipsa, consequuntur temporibus maxime
                    soluta dicta expedita illo? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Fugiat, sequi. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Quisquam,
                    sapiente?
                  </p>
                </div>
                <hr className="mt-6 mb-4 w-full md:w-[70%]" />
              </div>
            )}
            {activeTab === "Reviews" && (
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-5">
                  Student Reviews
                </h1>
                <div className="flex flex-col gap-12 md:gap-24 md:flex-row">
                  <div className="max-w-72">
                    <div>
                      <p className="flex gap-2 items-center">
                        <FaStar className="text-yellow-400 text-2xl" />{" "}
                        <span className="text-4xl font-bold">4.6</span>
                        <span className="-mb-2">145,50999 Reviews</span>
                      </p>
                    </div>
                    <div className="mt-5 flex flex-col gap-3 max-w-56">
                      <p className="flex gap-2 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                      <p className="flex gap-2 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                      </p>
                      <p className="flex gap-2 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                      </p>
                      <p className="flex gap-2 text-yellow-400">
                        <FaStar />
                        <FaStar />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                      </p>
                      <p className="flex gap-2 text-yellow-400">
                        <FaStar />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                        <FaStar className="text-gray-300" />
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <div className="border rounded-md p-3 md:p-5 gap-10 flex items-start flex-col md:flex-row">
                      <div className="flex gap-4 items-center">
                        <img
                          src="src/assets/images/f1.png"
                          className="w-14 h-14 object-cover rounded-full"
                          alt=""
                        />
                        <p className="font-bold">Josh Dickson</p>
                      </div>
                      <div className="max-w-[30rem] flex flex-col gap-5">
                        <div className="flex gap-2 items-center">
                          <FaStar className="text-yellow-400" />{" "}
                          <span className="font-bold text-lg">5</span>
                          <span className="ml-4">
                            Reviewed on 22nd Febuary, 2025
                          </span>
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Illo, debitis aliquam molestiae neque in
                          voluptas!Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Illo, debitis aliquam molestiae neque
                          in voluptas
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-md p-3 md:p-5 gap-10 flex items-start flex-col md:flex-row">
                      <div className="flex gap-4 items-center">
                        <img
                          src="src/assets/images/f1.png"
                          className="w-14 h-14 object-cover rounded-full"
                          alt=""
                        />
                        <p className="font-bold">Josh Dickson</p>
                      </div>
                      <div className="max-w-[30rem] flex flex-col gap-5">
                        <div className="flex gap-2 items-center">
                          <FaStar className="text-yellow-400" />{" "}
                          <span className="font-bold text-lg">5</span>
                          <span className="ml-4">
                            Reviewed on 22nd Febuary, 2025
                          </span>
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Illo, debitis aliquam molestiae neque in
                          voluptas!Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Illo, debitis aliquam molestiae neque
                          in voluptas
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-md p-3 md:p-5 gap-10 flex items-start flex-col md:flex-row">
                      <div className="flex gap-4 items-center">
                        <img
                          src="src/assets/images/f1.png"
                          className="w-14 h-14 object-cover rounded-full"
                          alt=""
                        />
                        <p className="font-bold">Josh Dickson</p>
                      </div>
                      <div className="max-w-[30rem] flex flex-col gap-5">
                        <div className="flex gap-2 items-center">
                          <FaStar className="text-yellow-400" />{" "}
                          <span className="font-bold text-lg">5</span>
                          <span className="ml-4">
                            Reviewed on 22nd Febuary, 2025
                          </span>
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Illo, debitis aliquam molestiae neque in
                          voluptas!Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Illo, debitis aliquam molestiae neque
                          in voluptas
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-md p-3 md:p-5 gap-10 flex items-start flex-col md:flex-row">
                      <div className="flex gap-4 items-center">
                        <img
                          src="src/assets/images/f1.png"
                          className="w-14 h-14 object-cover rounded-full"
                          alt=""
                        />
                        <p className="font-bold">Josh Dickson</p>
                      </div>
                      <div className="max-w-[30rem] flex flex-col gap-5">
                        <div className="flex gap-2 items-center">
                          <FaStar className="text-yellow-400" />{" "}
                          <span className="font-bold text-lg">5</span>
                          <span className="ml-4">
                            Reviewed on 22nd Febuary, 2025
                          </span>
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Illo, debitis aliquam molestiae neque in
                          voluptas!Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Illo, debitis aliquam molestiae neque
                          in voluptas
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-md p-3 md:p-5 gap-10 flex items-start flex-col md:flex-row">
                      <div className="flex gap-4 items-center">
                        <img
                          src="src/assets/images/f1.png"
                          className="w-14 h-14 object-cover rounded-full"
                          alt=""
                        />
                        <p className="font-bold">Josh Dickson</p>
                      </div>
                      <div className="max-w-[30rem] flex flex-col gap-5">
                        <div className="flex gap-2 items-center">
                          <FaStar className="text-yellow-400" />{" "}
                          <span className="font-bold text-lg">5</span>
                          <span className="ml-4">
                            Reviewed on 22nd Febuary, 2025
                          </span>
                        </div>
                        <div>
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Illo, debitis aliquam molestiae neque in
                          voluptas!Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Illo, debitis aliquam molestiae neque
                          in voluptas
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Testimonial />
      <CoursesList />
      <Footer />
    </div>
  );
};

export default Instructor;