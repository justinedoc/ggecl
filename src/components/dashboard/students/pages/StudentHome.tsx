import React, { useEffect, useState } from "react"; 
import { Calendar } from "@/components/ui/calendar";
import { LucidePaintbrush } from "lucide-react";

const StudentHome = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [progress, setProgress] = useState(0); 

    useEffect(() => {
        const timer = setTimeout(() => {
            setProgress(50); 
        }, 500); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="p-8">
            <div className="flex flex-col gap-3 mb-10">
                <p className="text-4xl text-gray-800 dark:text-gray-200 font-bold">Hello Joshua</p>
                <p className="text-gray-700 dark:text-gray-300">Ready to learn today?</p>
            </div>

            <div className="flex flex-row gap-4 items-start">
                <div>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border shadow-md dark:shadow-gray-800"
                    />
                </div>

                <div className="border border-gray-200 dark:border-gray-700 flex flex-col gap-3 p-4 rounded-lg shadow-md dark:shadow-gray-800 min-w-[250px]">
                    <p className="text-gray-800 dark:text-gray-200">Recent Enrolled Courses</p>
                    <div className="border border-gray-200 dark:border-gray-700 flex flex-col gap-3 p-4 rounded-md">
                        <LucidePaintbrush size={30} className="text-gray-800 dark:text-gray-200 bg-gray-200 p-2 rounded-sm text-4xl" />
                        <p className="text-gray-800 dark:text-gray-200">Product Design Course</p>
                        
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div 
                                className="bg-blue-500 h-full rounded-full transition-all duration-1000"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400">
                            <span className="text-blue-600 font-bold">{progress}/100</span> <span>progress</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <div className="">
                    <p className="">Hours Spent</p>
                    <div className=""></div>
                </div>
                <div className=""></div>
                <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-md dark:shadow-gray-800 w-max">
  <p className="text-md font-bold text-gray-800 dark:text-gray-200 mb-3">To do List</p>

  <div className="space-y-2 w-max">
    {[...Array(4)].map((_, index) => (
      <div key={index} className="flex items-center gap-6 border-b border-gray-300 dark:border-gray-700 px-4 py-2 w-max">
        <input 
          type="checkbox" 
          id={`task-${index}`} 
          className="w-4 h-4 appearance-none border border-gray-400 dark:border-gray-600 rounded-md checked:bg-blue-600 checked:border-transparent cursor-pointer transition" 
        />
        <label htmlFor={`task-${index}`} className="flex flex-col text-sm cursor-pointer">
          <span className="text-gray-800 dark:text-gray-200 font-medium">Human Interaction Design</span>
          <span className="text-gray-600 dark:text-gray-400 text-xs">Tuesday, 30 June 2024</span>
        </label>
      </div>
    ))}
  </div>
</div>


            </div>
            <div className=""></div>
        </div>
    );
};

export default StudentHome;
