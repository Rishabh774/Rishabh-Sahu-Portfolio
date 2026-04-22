import React from "react";
import { education } from "../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0; // even = left, odd = right
          return (
            <div
              key={edu.id}
              className="flex flex-col sm:flex-row items-center mb-20 relative"
            >
              {/* Circle */}
              <div className="absolute left-1/2 transform -translate-x-1/2 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-purple-500 bg-gray-900 flex justify-center items-center shadow-lg">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-full"
                />
              </div>

              {/* Card */}
              <div
                className={`w-full sm:w-1/2 p-8 sm:p-10 bg-gray-900 border border-white rounded-2xl shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-105 mt-28 sm:mt-0 ${
                  isLeft
                    ? "sm:mr-auto sm:text-left sm:pl-6 sm:pr-12"
                    : "sm:ml-auto sm:text-left sm:pl-12 sm:pr-6 sm:order-2"
                }`}
              >
                <div className="flex items-center space-x-4">
                  {/* Image always left inside card */}
                  <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-white">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Text always left aligned */}
                  <div className="flex flex-col justify-between">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {edu.degree}
                    </h3>
                    <h4 className="text-md sm:text-lg text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
