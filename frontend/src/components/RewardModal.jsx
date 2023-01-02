import React from "react";
import Confetti from "react-confetti";
import point_icon from "../assets/star.svg";
import challenger_badge from "../assets/challenger_badge.png";
import coder_badge from "../assets/coder_badge.png";
import champion_badge from "../assets/champion_badge.png";
import { useContext } from "react";
import ChallengeContext from "../context/ChallengeContext";
import { HiBadgeCheck } from "react-icons/hi";
import { FaStar } from "react-icons/fa";
const RewardModal = ({ showModal, stars }) => {
  const { badge } = useContext(ChallengeContext);

  return (
    <div>
      <input
        type="checkbox"
        id="my-modal-4"
        className="modal-toggle"
        checked={showModal}
      />
      <label htmlFor="my-modal-4" className="modal cursor-pointer ">
        <Confetti />
        <label
          className="modal-box relative flex flex-col gap-4 justify-center items-cente z-30 "
          htmlFor=""
        >
          {badge !== "" ? (
            <p className="flex justify-center">
              <img
                src={
                  (badge === "challenger" && challenger_badge) ||
                  (badge === "coder" && coder_badge) ||
                  (badge === "champion" && champion_badge)
                }
                alt="point"
                width={150}
              />
            </p>
          ) : (
            <p className="text-center flex items-center justify-center gap-2 ">
              <span className=" text-[60px] font-poppins font-bold">
                {stars}
              </span>{" "}
              <img src={point_icon} alt="point" height={50} width={50} />{" "}
            </p>
          )}

          <h1 className="text-3xl text-center font-cubano mt-4">
            {" "}
            👏 Congratulations 👏
          </h1>
          {badge !== "" ? (
            <h1 className="font-poppins text-lg text-center font-bold">
              You've received {stars}{" "}
              <FaStar className="inline -translate-y-[0.18rem] text-orange-400 " />{" "}
              stars and {badge}{" "}
              <HiBadgeCheck className="inline  text-green-400 " size={20} />{" "}
              badge
            </h1>
          ) : (
            <h1 className="font-poppins text-lg text-center font-bold">
              You've received {stars} stars for completing this challenge.
            </h1>
          )}
          <h2 className=" text-center mb-3 ">Great Job! Keep on Coding 👍</h2>
          <button
            className="btn-primary font-cubano px-3 py-2 "
            onClick={() => window.location.replace("/challenges")}
          >
            Go to Solution
          </button>
        </label>
      </label>
    </div>
  );
};

export default RewardModal;
