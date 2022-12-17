import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChallengeContext from "../context/ChallengeContext";
import web_challenge from "../assets/web-challenge.svg";
import point_icon from "../assets/star.svg";
import { CgFigma } from "react-icons/cg";
import { FaCloudUploadAlt } from "react-icons/fa";
import axios from "axios";
import UserContext from "../context/UserContext";
import { toast } from "react-toastify";
import start_coding from "../assets/start_coding.svg";
const Challenge = () => {
  const { id } = useParams();
  const {
    ChallengeLevel,
    startChallenge,
    challengeStarted,
    setChallengeStarted,
    checkIfStarted,
  } = useContext(ChallengeContext);
  const [challenge, setChallenge] = useState({});
  const [requirements, setRequirements] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get("http://localhost:5000/challenge/get_challenge/" + id)
      .then((res) => {
        console.log(res.data.data[0]);
        setChallenge(res.data.data[0]);
        setRequirements(res.data.data[0].requirements);

        console.log(res.data.data[0]._id);
        checkIfStarted(res.data.data[0]._id, user.id);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [user]);

  const startChallengeHandler = () => {
    if (user.length === 0) {
      toast.warning(" Please Sign In with github. ", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    startChallenge(challenge._id, user.id);
    setLoading(true);
    setTimeout(() => setChallengeStarted(true), 2000);
    console.log(showModal);
    setTimeout(() => setShowModal(true), 2000);
  };

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
          {challengeStarted ? (
            <>
              {" "}
              <a href={challenge.figma_link} target="_blank" rel="noreferrer">
                <button className="w-full  btn gap-2  btn-secondary font-poppins text-sm uppercase font-black tracking-wide mb-5">
                  <CgFigma size={20} /> Figma Design
                </button>
              </a>
              <button className="w-full  btn gap-2  btn-accent btn-outline font-poppins text-sm uppercase font-black tracking-wide">
                <FaCloudUploadAlt size={20} /> Submit solution
              </button>
            </>
          ) : (
            <button
              className={` ${
                loading ? "loading" : ""
              } font-cubano text-base w-full btn  hover:bg-green-600  tracking-widest leading-5 bg-challenge  text-white sm:mb-0 `}
              onClick={() => startChallengeHandler()}
            >
              Start challenge
            </button>
          )}
        </div>
        <input
          type="checkbox"
          id="my-modal-4"
          className="modal-toggle"
          checked={showModal}
        />
        <label
          htmlFor="my-modal-4"
          className="modal cursor-pointer"
          onClick={() => setShowModal(false)}
        >
          <label className="modal-box relative" htmlFor="">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <img src={start_coding} alt="start_coding" />
          </label>
        </label>
      </div>
    </div>
  );
};

export default Challenge;
