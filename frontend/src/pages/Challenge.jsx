import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChallengeContext from "../context/ChallengeContext";
import web_challenge from "../assets/web-challenge.svg";
import point_icon from "../assets/star.svg";
import { CgFigma } from "react-icons/cg";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
const Challenge = () => {
  const { id } = useParams();
  const { ChallengeLevel } = useContext(ChallengeContext);
  const [challenge, setChallenge] = useState({});
  const [requirements, setRequirements] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/challenge/get_challenge/" + id)
      .then((res) => {
        console.log(res.data.data[0]);
        setChallenge(res.data.data[0]);
        setRequirements(res.data.data[0].requirements);
      });
  }, []);
  return (
    <div className=" max-w-[1152px] mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h1 className=" font-cubano text-primary-content tracking-wider md:text-2xl sm:text-xl text-lg mr-3">
            #{challenge.number} {challenge.challenge}
          </h1>{" "}
          <ChallengeLevel level={challenge.difficulty}>
            {challenge.difficulty}
          </ChallengeLevel>
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
        src={`https://www.figma.com/embed?embed_host=share&url=${challenge.figma_link}`}
        allowFullScreen
      ></iframe>
      <div className="flex items-center justify-end my-5 ">
        <span className="font-cubano  text-3xl  text-primary-content">
          {challenge.points}
        </span>{" "}
        <img src={point_icon} alt="point" />{" "}
      </div>
      <div className="flex justify-between items-baseline sm:flex-row flex-col font-raleway font-bold sm:mr-2 mr-0 mb-24">
        <div className="  text-lg sm:text-xl  ">
          <p className=" mb-4 ">
            {" "}
            <span className="text-primary-content">Challenge - </span>{" "}
            {challenge.desc}
          </p>
          <p className="text-primary-content">Requirements</p>
          <ul className=" list-disc ml-5 mb-7 ">
            {requirements.map((requirement) => (
              <li className="text-base sm:text-lg font-semibold">
                {requirement}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-base-200 sm:px-11 px-4 py-7  min-w-full sm:min-w-[320px] sm:w-[490px] text-base">
          <ol className="list-decimal text-primary-content mb-5">
            <li className="mb-3 ml-4">Read the challenge requirements</li>
            <li className="mb-3 ml-4">Start the challenge</li>
            <li className="mb-3 ml-4">Check figma design and start coding</li>
            <li className="mb-3 ml-4">Submit the solution</li>
          </ol>
          {/* <button className="font-cubano text-base w-full btn loading hover:bg-green-600  tracking-widest leading-5 bg-challenge  text-white sm:mb-0 ">
            Start challenge
          </button> */}
          <a href={challenge.figma_link} target="_blank" rel="noreferrer">
            <button className="w-full  btn gap-2  btn-secondary font-poppins text-sm uppercase font-black tracking-wide mb-5">
              <CgFigma size={20} /> Figma Design
            </button>
          </a>
          <button className="w-full  btn gap-2  btn-accent btn-outline font-poppins text-sm uppercase font-black tracking-wide">
            <FaCloudUploadAlt size={20} /> Submit solution
          </button>
        </div>
      </div>
    </div>
  );
};

export default Challenge;
