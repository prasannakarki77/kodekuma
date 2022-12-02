import React from "react";
import { Link } from "react-router-dom";
import challenge_img from "../assets/challenge_img.png";
const ChallengeCard = ({ challengeItem, number }) => {
  const {
    _id,
    challenge,
    image,
    desc,
    requirements,
    difficulty,
    points,
    type,
    figma_link,
  } = challengeItem;
  return (
    <div className="card  sm:w-80  md:w-96 lg:w-[500px] bg-base-300 shadow-xl rounded-none mb-9">
      <figure>
        <img
          src={`http://localhost:5000/${image}`}
          alt="Shoes"
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <div className="badge badge-success ml-auto capitalize">
          {difficulty}
        </div>
        <h2 className="card-title font-cubano text-primary-content tracking-wider">
          #{number} {challenge}
        </h2>
        <p className=" mb-5">{desc}</p>
        <Link>
          {" "}
          <button className="font-cubano text-base w-full btn hover:bg-green-600  tracking-widest leading-5 bg-challenge  text-white sm:mb-0 ">
            Start challenge
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ChallengeCard;
