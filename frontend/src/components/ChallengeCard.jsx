import React from "react";
import { Link } from "react-router-dom";
import challenge_img from "../assets/challenge_img.png";
const ChallengeCard = () => {
  return (
    <div className="card  sm:w-80  md:w-96 lg:w-[500px] bg-base-300 shadow-xl rounded-none mb-9">
      <figure>
        <img src={challenge_img} alt="Shoes" className="w-full" />
      </figure>
      <div className="card-body">
        <div className="badge badge-success ml-auto">Beginner</div>
        <h2 className="card-title font-cubano text-primary-content tracking-wider">
          #1 DOORHUB challenge
        </h2>
        <p className=" mb-5">
          Build a landing page for a food delivery service where a user can
          order food for delivery.
        </p>
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
