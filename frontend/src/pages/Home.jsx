import React from "react";
import hero_image from "../assets/hero-image.svg";
import { CgWebsite } from "react-icons/cg";
import { GoDeviceMobile } from "react-icons/go";
import { BsUiChecks } from "react-icons/bs";
import { FaDesktop, FaStar } from "react-icons/fa";
import { HiBadgeCheck } from "react-icons/hi";
import { MdLeaderboard } from "react-icons/md";
import html from "../assets/tech-logo/html.svg";
import css from "../assets/tech-logo/css.svg";
import react from "../assets/tech-logo/react.svg";
import js from "../assets/tech-logo/js.svg";
import angular from "../assets/tech-logo/angular.svg";
import vue from "../assets/tech-logo/vue.svg";
import c from "../assets/tech-logo/c++.svg";
import kotlin from "../assets/tech-logo/kotlin.svg";
import java from "../assets/tech-logo/java.svg";
import python from "../assets/tech-logo/python.svg";
import flutter from "../assets/tech-logo/flutter.svg";
import figma from "../assets/tech-logo/figma.svg";
import go from "../assets/tech-logo/go.svg";
import dotnet from "../assets/tech-logo/dotnet.svg";
import xd from "../assets/tech-logo/xd.svg";

const Home = () => {
  const techList = [
    html,
    css,
    js,
    react,
    angular,
    vue,
    python,
    java,
    kotlin,
    flutter,
    c,
    go,
    dotnet,
    figma,
    xd,
  ];
  return (
    <div className="p-2">
      <h1 className="text-center font-cubano sm:text-2xl text-xl text-primary-content max-w-lg mx-auto mb-12">
        Practice software development skills through{" "}
        <span className="green-gradient">challenges</span>{" "}
      </h1>
      <div className="mb-24">
        <div className="flex justify-between items-center max-w-6xl mx-auto sm:flex-row flex-col-reverse">
          <p className="md:max-w-lg font-poppins   sm:text-xl md:text-2xl font-bold text-primary-content text-justify sm:leading-7  md:leading-10 p-5 ">
            <span className="font-cubano text-amber-500 tracking-wider  ">
              kodekuma
            </span>{" "}
            is a platform for anyone who wants to become a{" "}
            <span className=" text-orange-500 ">software developer</span>. Build
            real life projects and applications to enhance your development
            skills.
          </p>
          <img src={hero_image} alt="hero_image" className=" w-2/4 max-w-md " />
        </div>
      </div>
      <div className="divider mb-20"></div>
      <div className="flex justify-between items-center text-primary-content max-w-7xl mx-auto mb-24 flex-wrap sm:flex-nowrap ">
        <div className="sm:w-56 w-40 flex flex-col justify-center items-center p-4 bg-blue-600 rounded-2xl sm:h-44 h-36 mb-5 ">
          <CgWebsite className="text-7xl mb-3" />
          <p className="text-center sm:text-xl text-lg font-bold">
            Web Development
          </p>
        </div>
        <div className="sm:w-56 w-40 flex flex-col justify-center items-center p-4 bg-green-500 rounded-2xl sm:h-44 h-36 mb-5">
          <GoDeviceMobile className="text-7xl mb-3" />
          <p className="text-center sm:text-xl text-lg font-bold">
            Mobile Application
          </p>
        </div>
        <div className="sm:w-56 w-40 flex flex-col justify-center items-center p-4 bg-purple-800 rounded-2xl sm:h-44 h-36 mb-5">
          <BsUiChecks className="text-7xl mb-3" />
          <p className="text-center sm:text-xl text-lg font-bold">
            UX/UI Design
          </p>
        </div>
        <div className="sm:w-56 w-40 flex flex-col justify-center items-center p-4 bg-red-600 rounded-2xl sm:h-44 h-36 mb-5">
          <FaDesktop className="text-7xl mb-3" />
          <p className="text-center sm:text-xl text-lg font-bold">
            Desktop Application
          </p>
        </div>
      </div>

      <h1 className="text-center font-cubano sm:text-2xl text-xl text-primary-content max-w-lg mx-auto mb-12 ">
        How to get started ?
      </h1>
      <div className=" max-w-2xl mx-auto mb-12">
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-300  rounded-box mb-3"
        >
          <div className="collapse-title sm:text-xl text-lg font-medium font-cubano text-warning ">
            1. Go to challenges
          </div>
          <div className="collapse-content text-base font-poppins ">
            <p>
              Select your preferred domain from the available options - web,
              mobile app, UX/UI design and desktop app{" "}
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-300  rounded-box mb-3"
        >
          <div className="collapse-title sm:text-xl text-lg font-medium font-cubano text-warning ">
            2. Select and start a challenge
          </div>
          <div className="collapse-content text-base font-poppins ">
            <p>
              Choose a challenge according to your skills level. There are four
              difficulty levels ie. beginner, intermediate, advanced and expert.
              You will get a figma design link when you start a challenge
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-300  rounded-box mb-3"
        >
          <div className="collapse-title sm:text-xl text-lg font-medium font-cubano text-warning ">
            3. Read the requirements and start coding
          </div>
          <div className="collapse-content text-base font-poppins ">
            <p>
              Read the challenge requirements carefully. Use Git and Github for
              storage and version control.
            </p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow border border-base-300 bg-base-300  rounded-box mb-3"
        >
          <div className="collapse-title sm:text-xl text-lg font-medium font-cubano text-warning ">
            3. Submit your solution
          </div>
          <div className="collapse-content text-base font-poppins ">
            <p>
              Submit the solution only if you have fulfilled all the
              requirements. Submission must include the repository url and a
              live demo (if availlable).
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center font-cubano sm:text-2xl text-xl text-primary-content max-w-xl mx-auto mb-20 ">
        Complete challenges to earn badges{" "}
        <HiBadgeCheck className="inline -translate-y-1 text-green-400 " /> and
        stars <FaStar className="inline -translate-y-1 text-orange-400 " /> and
        climb up the{" "}
        <MdLeaderboard className="inline -translate-y-1 text-secondary " />{" "}
        leaderboard
      </h1>
      <div className="divider mb-20"></div>
      <h1 className="text-center font-cubano sm:text-2xl text-xl text-primary-content max-w-2xl mx-auto mb-24 ">
        Practice languages, frameworks and tools
      </h1>
      <div class="grid grid-cols-5 gap-2 place-items-center h-56 mb-12">
        {techList.map((tech) => (
          <div>
            <img src={tech} alt={`${tech}__logo`} className=" w-12 h-12" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
