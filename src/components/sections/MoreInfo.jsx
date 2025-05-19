import { useState } from "react";
import { courses, experiences } from "@/data/moreInfo";
import { FaChevronDown } from "react-icons/fa";

export const MoreInfo = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (index) => setActiveIndex(activeIndex === index ? null : index);

  return (
    <section
      id="more"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 px-6 py-16"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          More Info
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Coursework
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-800 dark:text-gray-300">
              {courses.map((course, i) => (
                <li key={i} className="hover:text-blue-500 transition">{course}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Experience
            </h3>
            <ul className="space-y-4">
              {experiences.map((exp, i) => (
                <li key={i} className="border-b border-gray-300 dark:border-gray-600 pb-4">
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900 dark:text-white hover:text-blue-500 transition"
                  >
                    {exp.title}
                    <FaChevronDown
                      className={`ml-2 transform transition-transform ${
                        activeIndex === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeIndex === i && (
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {exp.details}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
