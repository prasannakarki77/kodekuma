import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { MdRateReview } from "react-icons/md";
import { FaStar, FaFileCode } from "react-icons/fa";
import { ChallengeLevel } from "./ChallengeLevel";
import { Link } from "react-router-dom";
const SolutionCard = ({ solution }) => {
  return (
    <div className=" rounded-lg overflow-hidden max-w-sm bg-base-300 ">
      <div className=" relative ">
        <img
          src="https://www.w3schools.com/css/img_forest.jpg"
          alt="solution_img"
          className=" brightness-75 z-10 h-52 w-full object-cover "
        />
        <h1 className="font-cubano text-base text-primary-content absolute bottom-1 left-4 z-20 flex justify-between w-[90%]  ">
          <span>Doorhub Challenge</span>
          <ChallengeLevel level={"beginner"}> beginner</ChallengeLevel>
        </h1>
      </div>
      <div className=" p-4 flex flex-col gap-4 ">
        <div className=" flex justify-between">
          <div className="avatar flex items-center gap-2">
            <div className=" w-7 rounded-full">
              <img
                src="https://placeimg.com/192/192/people"
                alt="profile_pic"
              />
            </div>
            <span className=" font-semibold text-base text-primary-content ">
              prasanna
            </span>
            <span className="font-bold flex items-center gap-1 text-sm">
              2 <FaStar color="#FA6900" />{" "}
            </span>
          </div>
          <div className="flex justify-end gap-2">
            {" "}
            <span className="flex items-center px-1 rounded-lg bg-[#455A64] text-primary-content">
              1 <TiArrowSortedUp size={30} />
            </span>
            <span className="flex items-center px-1 gap-1 rounded-lg bg-[#455A64] text-primary-content">
              2 <MdRateReview size={20} />
            </span>
          </div>
        </div>

        <h1 className="text-primary-content font-bold">
          Doorhub challenge completed
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue purus
          egestas a commodo sit proin morbi. Sed sagittis eget netus nibh id
          ullamcorper diam
        </p>
        <Link to={`/solution/`}>
          <button className="w-full  btn gap-2  btn-primary  font-poppins text-sm uppercase font-black tracking-wide">
            <FaFileCode size={20} /> View solution
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SolutionCard;
