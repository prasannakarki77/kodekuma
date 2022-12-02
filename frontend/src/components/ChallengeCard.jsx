import React from "react";
import { Link } from "react-router-dom";
import challenge_img from "../assets/challenge_img.png";
import styled from "styled-components";
import { css } from "styled-components";
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
        <div className=" ml-auto capitalize font-poppins">
          <ChallengeLevel level={difficulty}> {difficulty}</ChallengeLevel>
        </div>
        <h2 className="card-title font-cubano text-primary-content tracking-wider">
          #{number} {challenge}
        </h2>
        <p className=" mb-5 font-semibold ">{desc}</p>
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

const ChallengeLevel = styled.div`
  display: inline-block;
  text-transform: capitalize;
  border-radius: 29px;
  padding: 7px 13px;
  background: ${({ level }) =>
    (level === "beginner" && "#5DB355") ||
    (level === "intermediate" && "#721792") ||
    (level === "advanced" && "#3C7154") ||
    (level === "expert" && "#C51717")};
  color: #fff;
  font-weight: 500;
  font-size: 14px;
`;

export default ChallengeCard;
