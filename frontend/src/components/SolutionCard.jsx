import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { MdRateReview } from "react-icons/md";
import { FaStar, FaFileCode } from "react-icons/fa";
import { ChallengeLevel } from "./ChallengeLevel";
import { Link } from "react-router-dom";
const SolutionCard = ({ solution }) => {
  console.log(solution);
  return (
    <div className=" rounded-lg overflow-hidden max-w-sm bg-base-300 ">
      <div className=" relative ">
        <img
          src={`http://localhost:5000/${solution.challengeId.image}`}
          alt="solution_img"
          className=" brightness-75 z-10 h-52 w-full object-cover "
        />
        <h1 className="font-cubano text-base text-primary-content absolute bottom-1 left-4 z-20 flex justify-between w-[90%]  ">
          <span>{solution.challengeId.challenge}</span>
          <ChallengeLevel level={"beginner"}>
            {" "}
            {solution.challengeId.difficulty}
          </ChallengeLevel>
        </h1>
      </div>
      <div className=" p-4 flex flex-col gap-4 ">
        <div className=" flex justify-between">
          <div className="avatar flex items-center gap-2">
            <div className=" w-7 rounded-full">
              <img src={solution.userId.profileImg} alt="profile_pic" />
            </div>
            <span className=" font-semibold text-base text-primary-content ">
              {solution.userId.username}
            </span>
            <span className="font-bold flex items-center gap-1 text-sm">
              {solution.userId.stats.stars} <FaStar color="#FA6900" />{" "}
            </span>
          </div>
          <div className="flex justify-end gap-2">
            {" "}
            <span className="flex items-center px-1 rounded-lg bg-[#455A64] text-primary-content">
              {solution.upvotes.length}
              <TiArrowSortedUp size={30} />
            </span>
            <span className="flex items-center px-1 gap-1 rounded-lg bg-[#455A64] text-primary-content">
              {solution.feedback.length}
              <MdRateReview size={20} />
            </span>
          </div>
        </div>

        <h1 className="text-primary-content font-bold">{solution.title}</h1>
        <p className="text-sm">{solution.description}</p>
        <Link to={`/solution/${solution.challengeId._id}`}>
          <button className="w-full  btn gap-2  btn-primary  font-poppins text-sm uppercase font-black tracking-wide">
            <FaFileCode size={20} /> View solution
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
