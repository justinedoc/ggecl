import { useState, useEffect, useRef } from "react";
import { FaBell, FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/ui/SearchBar";

const Navbar = () => {
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  const notifRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notifRef.current && !notifRef.current.contains(event.target as Node)
      ) {
        setIsNotifOpen(false);
      }
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dark:bg-gray-900 bg-white text-gray-700 dark:text-gray-200 p-4 flex items-center justify-between">
      <h1 className="text-2xl font-semibold">Dashboard</h1>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <SearchBar />
        </div>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <Button
            variant="ghost"
            className="relative p-2 px-3 text-gray-800 dark:text-gray-300 dark:bg-gray-800 bg-gray-100"
            onClick={() => setIsNotifOpen(!isNotifOpen)}
          >
            <FaBell className="text-xl" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
              3
            </span>
          </Button>

          {/* Notification Popup (Fixed & Above All) */}
          {isNotifOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-36 right-4 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 flex flex-col gap-2"
            >
              <p className="text-sm">🔔 New notification 1</p>
              <hr />
              <p className="text-sm">🔔 New notification 2</p>
              <hr />
              <p className="text-sm">🔔 New notification 3</p>
            </motion.div>
          )}
        </div>

        {/* User Profile & Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <Button
            variant="ghost"
            className="flex items-center space-x-2 p-2 hover:bg-gray-200 focus:bg-gray-200 dark:focus:bg-gray-800 dark:hover:bg-gray-800"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <img src="https://i.pinimg.com/474x/14/88/f3/1488f35bc175631415a048ca5208aa3f.jpg" alt="User" className="w-8 h-8 rounded-full object-cover" />
            <span className="text-sm font-medium md:block hidden">Josh Dickson</span>
            <FaChevronDown className="text-xs" />
          </Button>

          {/* User Dropdown (Fixed & Above All) */}
          {isDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="fixed top-36 right-4 z-50 w-60 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 flex flex-col gap-3 "
            >
              <div className="hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 cursor-pointer p-2 rounded-lg border border-gray-300 dark:border-gray-600">
                <div className="flex items-center gap-2">
                  ⚙ <span>Settings</span>
                </div>
              </div>
              <div className="hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-2 cursor-pointer p-2 rounded-lg">
                <div className="flex items-center gap-2">
                  🔑 <span>Change Password</span>
                </div>
              </div>
              <div className="hover:bg-red-100 dark:hover:bg-[crimson] height-max text-red-600 dark:text-red-400 dark:hover:text-white flex items-center gap-2 cursor-pointer p-2 rounded-lg">
                <div className="flex items-center gap-2">
                  🚪 <span>Logout</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;