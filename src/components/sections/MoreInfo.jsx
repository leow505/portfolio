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
          Experiences and Courseworks
        </h2>

        <div className="grid md:grid-cols-[55%_45%] gap-5">
          {/* Experience */}
          <div className="relative pl-4 border-l-2 border-blue-500">
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              Experience
            </h3>
            <ul className="space-y-8">
              {experiences.map((exp, i) => (
                <li key={i} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[22.5px] top-1.5 w-3 h-3 bg-blue-500 rounded-full border-2 border-white dark:border-gray-900" />

                  <button
                    onClick={() => toggle(i)}
                    className="w-full text-left flex justify-between items-center text-lg font-medium text-gray-900 dark:text-white hover:text-blue-500 transition"
                  >
                    <div>
                      <div>{exp.title}</div>
                      <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{exp.date}</div>
                    </div>
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

          {/* Coursework */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-2">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 dark:text-blue-400">
              Coursework
            </h3>
            <ul className="space-y-2 list-disc list-inside text-gray-800 dark:text-gray-300">
              {courses.map((course, i) => (
                <li key={i} className="hover:text-blue-500 transition">{course}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
