import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ChallengeContext from "../context/ChallengeContext";
import web_challenge from "../assets/web-challenge.svg";
import point_icon from "../assets/star.svg";
import { CgFigma } from "react-icons/cg";
import { FaCloudUploadAlt } from "react-icons/fa";
const Challenge = () => {
  const { challengeId } = useParams();
  const { ChallengeLevel } = useContext(ChallengeContext);
  return (
    <div className=" max-w-[1152px] mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h1 className=" font-cubano text-primary-content tracking-wider md:text-2xl sm:text-xl text-lg mr-3">
            #1 Doorhub Challenge{" "}
          </h1>{" "}
          <ChallengeLevel level={"beginner"}>Beginner</ChallengeLevel>
        </div>
        <img
          src={web_challenge}
          alt="challenge_type_icon"
          className=" h-14 w-14 object-contain sm:block hidden"
        />
      </div>

      <iframe
        className=" sm:h-[530px] h-96 "
        title="s"
        width="100%"
        src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/wQEWc9QvjXjJwAUT9MmlbI/kodekuma?node-id=0%3A1&t=fV4rz8GkzWN6fqXE-1"
        allowfullscreen
      ></iframe>
      <div className="flex items-center justify-end my-5 ">
        <span className="font-cubano  text-3xl  text-primary-content">5</span>{" "}
        <img src={point_icon} alt="point" />{" "}
      </div>
      <div className="flex justify-between items-baseline sm:flex-row flex-col font-raleway font-bold sm:mr-2 mr-0 mb-11">
        <div className="  text-lg sm:text-xl  ">
          <p className=" mb-4 ">
            {" "}
            <span className="text-primary-content">Challenge - </span> Create a
            landing page for a food delivery service providing website called
            Doothub.
          </p>
          <p className="text-primary-content">Requirements</p>
          <ul className=" list-disc ml-5 mb-7 ">
            <li className="text-base sm:text-lg font-semibold">
              Frontend , backend and fullstack incorporated challenges.
            </li>
          </ul>
        </div>
        <div className="bg-base-200 sm:px-11 px-4 py-7  min-w-full sm:min-w-[320px] sm:w-[490px] text-base">
          <ol className="list-decimal text-primary-content mb-5">
            <li className="mb-3 ml-4">Read the challenge requirements</li>
            <li className="mb-3 ml-4">Start the challenge</li>
            <li className="mb-3 ml-4">Check figma design and start coding</li>
            <li className="mb-3 ml-4">Submit the solution</li>
          </ol>
          <button className="w-full  btn gap-2  btn-secondary font-poppins text-sm uppercase font-black tracking-wide mb-5">
            <CgFigma size={20} /> Figma Design
          </button>
          <button className="w-full  btn gap-2  btn-accent btn-outline font-poppins text-sm uppercase font-black tracking-wide">
            <FaCloudUploadAlt size={20} /> Submit solution
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
