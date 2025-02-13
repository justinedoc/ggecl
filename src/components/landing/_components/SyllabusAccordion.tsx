import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaClock } from "react-icons/fa";

interface SyllabusItem {
  title: string;
  topics: string[];
  time: string;
}

const syllabusData: SyllabusItem[] = [
  { title: "Introduction to UX Design", topics: ["What is UX?", "History of UX", "UX vs UI", "Importance of UX"], time: "1 hour" },
  { title: "User Research", topics: ["Understanding Users", "Conducting Surveys", "User Personas", "Competitor Analysis"], time: "1 hour" },
  { title: "Prototyping & Wireframing", topics: ["Low-fidelity Prototypes", "Wireframing Basics", "Usability Testing", "Usability Testing"], time: "1 hour" },
  { title: "Advanced UX Strategies", topics: ["A/B Testing", "Accessibility in UX", "Emotional Design", "Future of UX"], time: "1 hour" },
];

const SyllabusAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto border-green-500 mt-10">
      <div className="space-y-5 border border-gray-400 dark:border-gray-700 rounded-md">
        {syllabusData.map((module, index) => (
          <div key={index} className="border-b border-gray-300 dark:border-gray-700 p-4 w-full shadow-sm ">
            <button
              className="flex justify-between items-center w-full text-lg md:text-xl font-semibold text-gray-800 dark:text-gray-200 gap-20 h-5"
              onClick={() => toggleAccordion(index)}
            >
              <div className="flex items-center gap-3">
                {openIndex === index ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-gray-500" />}
                <span>{module.title}</span>
              </div>
              <div className="text-sm md:text-base text-gray-500 flex items-center gap-2">
                <span>{module.topics.length} Lessons</span>
                <FaClock />
                <span>{module.time}</span>
              </div>
            </button>
            {openIndex === index && (
              <ul className="pl-8 mt-3 text-gray-600 dark:text-gray-300 text-base md:text-lg">
                {module.topics.map((topic, idx) => (
                  <li key={idx} className="py-1">• {topic}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SyllabusAccordion;