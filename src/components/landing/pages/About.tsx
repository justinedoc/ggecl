import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import aboutImage from "@/assets/images/Asset.png";

const About: React.FC = () => {
  return (
    <section className="dark:bg-white bg-gray-900 dark:text-gray-800 text-white py-20 px-6 md:px-12 relative">
      <div className="absolute -bottom-36 -left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold dark:text-blue-600  text-gray-200">
            About GGECL LMS
          </h2>
          <p className="text-lg text-gray-300 font-semibold dark:text-gray-800">
            Our Learning Management System is designed to empower learners and
            instructors with a seamless, interactive, and effective online
            education experience.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center space-x-3">
              <FaCheckCircle className="dark:text-blue-600 text-blue-400 text-xl" />
              <span className="text-lg">Comprehensive Course Management</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheckCircle className="dark:text-blue-600 text-blue-400 text-xl" />
              <span className="text-lg">Interactive Learning Experience</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheckCircle className="dark:text-blue-600 text-blue-400 text-xl" />
              <span className="text-lg">Live Classes & Video Support</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheckCircle className="dark:text-blue-600 text-blue-400 text-xl" />
              <span className="text-lg">Performance Tracking & Analytics</span>
            </li>
            <li className="flex items-center space-x-3">
              <FaCheckCircle className="dark:text-blue-600 text-blue-400 text-xl" />
              <span className="text-lg">
                Certification Upon Course Completion
              </span>
            </li>
          </ul>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={aboutImage}
            alt="About LMS"
            className="w-full max-w-md md:max-w-lg rounded-lg "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
