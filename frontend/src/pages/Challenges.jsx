import React from "react";
import { CgWebsite } from "react-icons/cg";
import { GoDeviceMobile } from "react-icons/go";
import { BsUiChecks } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import mobile_challenge from "../assets/mobile-challenge.svg";
import web_challenge from "../assets/web-challenge.svg";
import ui_challenge from "../assets/ui-challenge.svg";
import desktop_challenge from "../assets/desktop-challenge.svg";
import { Link } from "react-router-dom";
const Challenges = () => {
  return (
    <div className="p-2">
      <h1 className="font-cubano text-primary-content  mb-8  text-xl sm:text-3xl flex items-center justify-center ">
        Challenges
      </h1>
      <div className="bg-base-300  p-3 sm:p-5 rounded-xl max-w-6xl mx-auto  pb-8 sm:pb-8 mb-8">
        <div>
          <h1 className=" font-cubano text-primary-content mb-10   text-lg sm:text-2xl flex items-center ">
            <CgWebsite className=" mr-2 text-3xl " />
            <span>
              <span className="blue-gradient">Web development</span> challenges
            </span>
          </h1>
          <div className=" flex flex-col sm:flex-row sm:justify-between ">
            <img
              src={web_challenge}
              alt="web-challenges"
              className=" sm:mb-0 mb-5 max-h-60  sm:max-h-full "
            />
            <div className=" max-w-3xl ml-0  sm:ml-4">
              <p className=" text-primary-content text-base sm:text-lg font-semibold mb-6 text-justify ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                odio nibh aliquam morbi porta nulla nunc pellentesque non.
                Sodales erat tellus quam pretium consequat eget imperdiet.
                Sagittis, id tellus, et diam malesuada lectus nulla lobortis ut.
              </p>
              <ul className=" list-disc ml-5 mb-7 ">
                <li className="text-base sm:text-lg font-semibold">
                  Frontend , backend and fullstack incorporated challenges.
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Practice HTML, CSS, JS, along with different libraries and
                  frameworks
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Work with APIs and backend technologies to complete difficult
                  challenges.
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Build your portfolio projects to become a professional web
                  developer.
                </li>
              </ul>
              <Link to="/web_challenges">
                {" "}
                <button className="font-cubano text-base sm:text-lg w-full btn hover:bg-green-600  tracking-widest leading-5 bg-challenge  text-white sm:mb-0 ">
                  View Challenges
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-300  p-3 sm:p-5 rounded-xl max-w-6xl mx-auto  pb-8 sm:pb-8 mb-8">
        <div>
          <h1 className=" font-cubano text-primary-content    mb-10   text-lg sm:text-2xl flex items-center ">
            <GoDeviceMobile className=" mr-2 text-3xl " />
            <span>
              <span className="green-gradient">Mobile App Development</span>{" "}
              challenges
            </span>
          </h1>
          <div className=" flex flex-col sm:flex-row sm:justify-between ">
            <img
              src={mobile_challenge}
              alt="web-challenges"
              className=" sm:mb-0 mb-5 max-h-60  sm:max-h-full "
            />
            <div className=" max-w-3xl ml-0  sm:ml-4">
              <p className=" text-primary-content text-base sm:text-lg font-semibold mb-6 text-justify ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                odio nibh aliquam morbi porta nulla nunc pellentesque non.
                Sodales erat tellus quam pretium consequat eget imperdiet.
                Sagittis, id tellus, et diam malesuada lectus nulla lobortis ut.
              </p>
              <ul className=" list-disc ml-5 mb-7 ">
                <li className="text-base sm:text-lg font-semibold">
                  Frontend , backend and fullstack incorporated challenges.
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Practice Kotlin/Flutter/Swift to develop mobile applications
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Work with APIs and backend technologies to complete difficult
                  challenges.
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Build your portfolio projects professional mobile app
                  developer.
                </li>
              </ul>
              <Link>
                {" "}
                <button className="font-cubano text-base sm:text-lg w-full btn hover:bg-green-600  tracking-widest leading-5 bg-challenge  text-white sm:mb-0 ">
                  View Challenges
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-300  p-3 sm:p-5 rounded-xl max-w-6xl mx-auto  pb-8 sm:pb-8 mb-8">
        <div>
          <h1 className=" font-cubano text-primary-content    mb-10   text-lg sm:text-2xl flex items-center ">
            <BsUiChecks className=" mr-2 text-3xl " />
            <span>
              <span className="purple-gradient">UX/UI Design </span> challenges
            </span>
          </h1>
          <div className=" flex flex-col sm:flex-row sm:justify-between ">
            <img
              src={ui_challenge}
              alt="web-challenges"
              className=" sm:mb-0 mb-5 max-h-60  sm:max-h-full "
            />
            <div className=" max-w-3xl ml-0  sm:ml-4">
              <p className=" text-primary-content text-base sm:text-lg font-semibold mb-6 text-justify ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                odio nibh aliquam morbi porta nulla nunc pellentesque non.
                Sodales erat tellus quam pretium consequat eget imperdiet.
                Sagittis, id tellus, et diam malesuada lectus nulla lobortis ut.
              </p>
              <ul className=" list-disc ml-5 mb-7 ">
                <li className="text-base sm:text-lg font-semibold">
                  Software UI/UX design recreation challenges
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Practice Figma, Adobe XD, Photoshop to design applications
                  prototypes
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Work with APIs and backend technologies to complete difficult
                  challenges.
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Build your portfolio projects to become a professional mobile
                  app developer.
                </li>
              </ul>
              <Link>
                {" "}
                <button className="font-cubano text-base sm:text-lg w-full btn hover:bg-green-600  tracking-widest leading-5 bg-challenge  text-white sm:mb-0 ">
                  View Challenges
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-base-300  p-3 sm:p-5 rounded-xl max-w-6xl mx-auto  pb-8 sm:pb-8 mb-8">
        <div>
          <h1 className=" font-cubano text-primary-content    mb-10   text-lg sm:text-2xl flex items-center ">
            <FaDesktop className=" mr-2 text-3xl " />
            <span>
              <span className="red-gradient">desktop App Development </span>{" "}
              challenges
            </span>
          </h1>
          <div className=" flex flex-col sm:flex-row sm:justify-between ">
            <img
              src={desktop_challenge}
              alt="web-challenges"
              className=" sm:mb-0 mb-5 max-h-60  sm:max-h-full "
            />
            <div className=" max-w-3xl ml-0  sm:ml-4">
              <p className=" text-primary-content text-base sm:text-lg font-semibold mb-6 text-justify ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                odio nibh aliquam morbi porta nulla nunc pellentesque non.
                Sodales erat tellus quam pretium consequat eget imperdiet.
                Sagittis, id tellus, et diam malesuada lectus nulla lobortis ut.
              </p>
              <ul className=" list-disc ml-5 mb-7 ">
                <li className="text-base sm:text-lg font-semibold">
                  Software UI/UX design recreation challenges
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Practice HTML, CSS, JS, along with different libraries and
                  frameworks
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Work with APIs and backend technologies to complete difficult
                  challenges.
                </li>
                <li className="text-base sm:text-lg font-semibold">
                  Build your portfolio projects to become a professional web
                  developer.
                </li>
              </ul>
              <Link>
                {" "}
                <button className="font-cubano text-base sm:text-lg w-full btn hover:bg-green-600  tracking-widest leading-5 bg-challenge  text-white sm:mb-0 ">
                  View Challenges
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
