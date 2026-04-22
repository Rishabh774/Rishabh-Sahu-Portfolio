import React from "react";
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/profile2.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-[8vw] py-24 md:py-32 text-white"
    >
      {/* LEFT - Text */}
      <div className="md:w-1/2 flex flex-col justify-center md:pr-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Hi, I'm <span className="text-purple-500">Rishabh Sahu</span>
        </h1>

        <TypeAnimation
          sequence={["Frontend Developer", 2000, "Full Stack Learner", 2000]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-3xl lg:text-4xl text-purple-400"
          repeat={Infinity}
        />

        <p className="mt-6 text-gray-400 leading-relaxed text-base md:text-lg lg:text-xl">
          Hi, I'm Rishabh, a Full Stack Developer in the making. I am passionate
          about creating modern, responsive, and user-friendly web applications.
          I enjoy building clean, efficient code and bringing ideas to life on
          the web, while continuously learning and improving my skills in both
          frontend and backend development.
        </p>

        {/* Resume Download Button */}
        <div className="mt-8">
          <a
            href="/RishabhSahuResume.pdf" 
            download="Rishabh_Sahu_Resume.pdf"
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-lg transition-all duration-300 shadow-lg inline-block"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* RIGHT - Profile Image */}
      <Tilt className="mb-12 md:mb-0 md:w-1/2 flex justify-center">
        <img
          src={profileImage}
          alt="profile"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-purple-500 shadow-lg"
        />
      </Tilt>
    </section>
  );
};

export default About;