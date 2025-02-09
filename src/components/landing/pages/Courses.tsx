import Navbar from "../_components/Navbar";
import { FaFilter, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { tempCourseData } from "../_components/CoursesList";
import SearchBar from "../../ui/SearchBar";
import CourseBox from "../_components/CourseBox";
import Footer from "./Footer";
import { useState } from "react";

const Courses = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  

  return (
    <>
      <div className="bg-white text-gray-800 dark:text-gray-100 dark:bg-gray-900">
        <Navbar showNav />

        <main className="md:py-5 md:px-10 px-5 py-2">
          <header className="flex justify-between items-center my-7">
            <h1 className="sect md:text-3xl text-2xl mb-5 font-bold">Explore Courses</h1>
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
              
              <div className="ratings mt-5">
                {["Choose Ratings", "Number of Chapters", "Price", "Category"].map((title, index) => (
                  <div key={index} className="border-b border-gray-700 py-2">
                    <button 
                      className="flex justify-between items-center w-full text-left py-2" 
                      onClick={() => toggleAccordion(index)}
                    >
                      {title}
                      {openAccordion === index ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                    {openAccordion === index && (
                      <div className="mt-2 px-2">
                        {index === 0 && (
                          <>
                            <label className="block">⭐⭐⭐⭐⭐</label>
                            <label className="block">⭐⭐⭐⭐</label>
                            <label className="block">⭐⭐⭐</label>
                            <label className="block">⭐⭐</label>
                            <label className="block">⭐</label>
                          </>
                        )}
                        {index === 1 && (
                          <>
                            <label className="block"><input type="checkbox" /> 1-10</label>
                            <label className="block"><input type="checkbox" /> 10-15</label>
                            <label className="block"><input type="checkbox" /> 1-10</label>
                            <label className="block"><input type="checkbox" /> 10-15</label>
                            <label className="block"><input type="checkbox" /> 1-10</label>
                            <label className="block"><input type="checkbox" /> 10-15</label>
                          </>
                        )}
                        {index === 2 && (
                          <>
                            <label className="block"><input type="checkbox" /> $100</label>
                            <label className="block"><input type="checkbox" /> $150</label>
                            <label className="block"><input type="checkbox" /> $100</label>
                            <label className="block"><input type="checkbox" /> $150</label>
                            <label className="block"><input type="checkbox" /> $100</label>
                            <label className="block"><input type="checkbox" /> $150</label>
                          </>
                        )}
                        {index === 3 && (
                          <>
                            <label className="block">Web Development</label>
                            <label className="block">App Development</label>
                            <label className="block">Web Development</label>
                            <label className="block">App Development</label>
                            <label className="block">Web Development</label>
                            <label className="block">App Development</label>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
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
