import React from "react";
import { useEffect } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import ChallengeCard from "./ChallengeCard";
import axios from "axios";
import { useState } from "react";
const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/challenge/get_challenges").then((res) => {
      setChallenges(res.data.data);
      console.log(res.data.data);
    });
  }, []);
  return (
    <div>
      <div className=" flex justify-center flex-col mb-14 ">
        <h2 className="font-cubano text-xl text-center mb-5">
          Challenge Progress
        </h2>
        <div className="font-cubano   mx-auto mb-9">
          <span className=" rounded-full p-3 text-lg bg-challenge text-primary-content mr-3  ">
            #1
          </span>
          <span className="  rounded-full p-3 text-lg bg-[#455A64] text-primary-content mr-3 ">
            #2
          </span>
          <span className=" rounded-full p-3 text-lg bg-[#455A64] text-primary-content mr-3  ">
            #3
          </span>
          <span className="  rounded-full p-3 text-lg bg-[#455A64] text-primary-content">
            #4
          </span>
        </div>
        <div className="text-xl text-center mb-7 font-bold">1/4 completed</div>
        <div className=" text-center ">
          <button className="btn gap-2 text-xl  btn-disabled font-poppins btn-outline  ">
            <AiFillSafetyCertificate className=" text-3xl " />
            Get Certificate
          </button>
        </div>
      </div>
      <div className="flex justify-between flex-wrap ">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge._id}
            challengeItem={challenge}
           
          />
        ))}
      </div>
    </div>
  );
};

export default ChallengeList;
