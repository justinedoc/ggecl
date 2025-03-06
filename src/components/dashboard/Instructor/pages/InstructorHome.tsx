import React from "react";
import {
  FaPlayCircle,
  FaCheckSquare,
  FaAward,
  FaUserCircle,
  FaCreditCard,
  FaLayerGroup,
  FaStar,
} from "react-icons/fa";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import profileImg from "@/assets/images/Frame 427319048.png";

const recentActivity = [
  {
    user: "Kevin",
    action: "commented on your lecture",
    course: "What is UI in Figma?",
    time: "Just now",
  },
  {
    user: "John",
    action: "gave a 5-star rating",
    course: "2021 UI/UX design with Figma",
    time: "5 mins ago",
  },
  {
    user: "Sraboni",
    action: "purchased your course",
    course: "2021 UI/UX design with Figma",
    time: "6 mins ago",
  },
];

const revenueData = [
  { date: "Aug 01", revenue: 750000 },
  { date: "Aug 7", revenue: 75000 },
  { date: "Aug 9", revenue: 750000 },
  { date: "Aug 12", revenue: 51749 },
  { date: "Aug 20", revenue: 650000 },
  { date: "Aug 31", revenue: 800000 },
];

const profileViews = [
  { day: "Mon", views: 500 },
  { day: "Tue", views: 700 },
  { day: "Wed", views: 400 },
  { day: "Thu", views: 900 },
  { day: "Fri", views: 650 },
  { day: "Sat", views: 800 },
  { day: "Sun", views: 750 },
];

const InstructorHome = () => {
  return (
    <div className="whitespace-nowrap p-4">
      {/* Stats Section */}
      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 mt-10 gap-4">
          {/* First Row */}
          <div className="flex flex-row gap-4 items-center border shadow-md border-blue-300 dark:border-blue-600 rounded-md p-3">
            <FaPlayCircle
              className="text-blue-600 bg-blue-200 p-2 rounded-sm"
              size={40}
            />
            <div className="text-gray-700 dark:text-gray-300">
              <p className="text-xl">957</p>
              <p className="text-sm">Enrolled Courses</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center border shadow-md border-purple-300 dark:border-purple-600 rounded-md p-3">
            <FaCheckSquare
              className="text-purple-600 bg-purple-200 p-2 rounded-sm"
              size={40}
            />
            <div className="text-gray-700 dark:text-gray-300">
              <p className="text-xl">957</p>
              <p className="text-sm">Enrolled Courses</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center border shadow-md border-green-300 dark:border-green-600 rounded-md p-3">
            <FaAward
              className="text-green-600 bg-green-200 p-2 rounded-sm"
              size={40}
            />
            <div className="text-gray-700 dark:text-gray-300">
              <p className="text-xl">957</p>
              <p className="text-sm">Enrolled Courses</p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 mt-4 gap-4">
          <div className="flex flex-row gap-4 items-center border shadow-md border-orange-300 dark:border-orange-600 rounded-md p-3">
            <FaUserCircle
              className="text-orange-600 bg-orange-200 p-2 rounded-sm"
              size={40}
            />
            <div className="text-gray-700 dark:text-gray-300">
              <p className="text-xl">957</p>
              <p className="text-sm">Enrolled Courses</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center border shadow-md border-pink-300 dark:border-pink-600 rounded-md p-3">
            <FaCreditCard
              className="text-pink-600 bg-pink-200 p-2 rounded-sm"
              size={40}
            />
            <div className="text-gray-700 dark:text-gray-300">
              <p className="text-xl">957</p>
              <p className="text-sm">Enrolled Courses</p>
            </div>
          </div>
          <div className="flex flex-row gap-4 items-center border shadow-md border-red-300 dark:border-red-600 rounded-md p-3">
            <FaLayerGroup
              className="text-red-600 bg-red-200 p-2 rounded-sm"
              size={40}
            />
            <div className="text-gray-700 dark:text-gray-300">
              <p className="text-xl">957</p>
              <p className="text-sm">Enrolled Courses</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-gray-800 w-full flex flex-col md:flex-row items-center md:justify-between justify-start min-h-32 mt-10 px-6 py-4 gap-6">
        <div className="flex items-center gap-4">
          <img
            src={profileImg}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <p className="text-white font-semibold">Josh Dickson</p>
            <p className="text-gray-400 text-sm">jodicksonjoshua@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto">
          <p className="text-gray-400">1/4 steps</p>
          <div className="bg-gray-700 rounded min-h-5 w-60 relative overflow-hidden">
            <span className="bg-green-500 absolute min-h-5 top-0 left-0 w-1/4 rounded-l-sm"></span>
          </div>
          <p className="text-gray-200 font-bold">25% Completed</p>
        </div>
        <button className="btn rounded-md px-4 py-2 text-white">
          Edit Biography
        </button>
      </div>

      {/* Dashboard Charts and Analytics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {/* Recent Activity */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          {recentActivity.map((activity, index) => (
            <div key={index} className="border-b py-2">
              <p className="text-sm">
                <span className="font-semibold">{activity.user}</span>{" "}
                {activity.action}{" "}
                <span className="text-blue-500">{activity.course}</span>
              </p>
              <p className="text-xs text-gray-400">{activity.time}</p>
            </div>
          ))}
        </div>

        {/* Revenue Chart */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold">Revenue</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={revenueData}>
              <XAxis dataKey="date" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Profile Views */}
        <div className="bg-white dark:bg-gray-900 shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold">Profile Views</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={profileViews}>
              <XAxis dataKey="day" stroke="#888" />
              <YAxis stroke="#888" />
              <Tooltip />
              <Bar dataKey="views" fill="#22c55e" />
            </BarChart>
          </ResponsiveContainer>
          <p className="mt-2 text-gray-500 font-semibold text-center">
            $7,443 earned
          </p>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-2 md:gap-4 w-full justify-between">
          {/* Overall Course Rating */}
          <div className="mt-6 bg-white dark:bg-gray-900 shadow-md p-4 rounded-md w-full">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                Overall Course Rating
              </h3>
              <span className="text-gray-500 text-sm">This week</span>
            </div>

            <div className="bg-gray-100 dark:bg-gray-800 rounded-md p-4 mt-3 flex flex-col items-center justify-start">
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                4.6
              </p>
              <div className="flex text-yellow-500 mt-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="text-gray-400" />
              </div>
              <p className="text-gray-500 text-sm">Overall Rating</p>
            </div>

            <div className="mt-4 space-y-2">
              {/* 5 Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "56%" }}
                  ></div>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  56%
                </span>
              </div>

              {/* 4 Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-400" />
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "37%" }}
                  ></div>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  37%
                </span>
              </div>

              {/* 3 Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-400" />
                  <FaStar className="text-gray-400" />
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "8%" }}
                  ></div>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  8%
                </span>
              </div>

              {/* 2 Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar />
                  <FaStar className="text-gray-400" />
                  <FaStar className="text-gray-400" />
                  <FaStar className="text-gray-400" />
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "1%" }}
                  ></div>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  1%
                </span>
              </div>

              {/* 1 Star Rating */}
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-500">
                  <FaStar />
                  <FaStar className="text-gray-400" />
                  <FaStar className="text-gray-400" />
                  <FaStar className="text-gray-400" />
                  <FaStar className="text-gray-400" />
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "0.5%" }}
                  ></div>
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  &lt;1%
                </span>
              </div>
            </div>
          </div>
          {/* Course Overview */}
          <div className="mt-10 bg-white dark:bg-gray-900 shadow-md p-4 rounded-md">
            <h3 className="text-lg font-semibold">Course Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={revenueData}>
                <XAxis dataKey="date" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#6366f1"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorHome;
