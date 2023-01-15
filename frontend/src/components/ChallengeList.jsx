import React from "react";
import { useEffect } from "react";
import { AiFillSafetyCertificate } from "react-icons/ai";
import ChallengeCard from "./ChallengeCard";
import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import ChallengeContext from "../context/ChallengeContext";
import UserContext from "../context/UserContext";
const ChallengeList = () => {
  const [challenges, setChallenges] = useState([]);
  const { profile } = useContext(UserContext);
  const { challengeNumbers, getUserSolutions } = useContext(ChallengeContext);
  const [challengeNumberGot, setChallengeNumberGot] = useState(false);
  useEffect(() => {
    setChallengeNumberGot(false);
    axios.get("http://localhost:5000/challenge/get_challenges").then((res) => {
      setChallenges(res.data.data);
      if (profile._id !== undefined) {
        if (getUserSolutions(profile._id)) {
          setChallengeNumberGot(true);
        }
      }
      console.log(challengeNumbers);
      console.log(res.data.data);
    });
  }, [setChallengeNumberGot, profile]);
  return (
    <div>
      <div className=" flex justify-center flex-col mb-14 ">
        <h2 className="font-cubano text-xl text-center mb-5">
          Challenge Progress
        </h2>
        <div className="font-cubano   mx-auto mb-9">
          <span
            className={`rounded-full p-3 text-lg text-primary-content mr-3 ${
              challengeNumbers.includes(1) ? "bg-challenge" : "bg-[#455A64]"
            }`}
          >
            #1
          </span>
          <span
            className={`rounded-full p-3 text-lg text-primary-content mr-3 ${
              challengeNumbers.includes(2) ? "bg-challenge" : "bg-[#455A64]"
            }`}
          >
            #2
          </span>
          <span
            className={`rounded-full p-3 text-lg text-primary-content mr-3 ${
              challengeNumbers.includes(3) ? "bg-challenge" : "bg-[#455A64]"
            }`}
          >
            #3
          </span>
          <span
            className={`rounded-full p-3 text-lg text-primary-content mr-3 ${
              challengeNumbers.includes(4) ? "bg-challenge" : "bg-[#455A64]"
            }`}
          >
            #4
          </span>
        </div>
        <div className="text-xl text-center mb-7 font-bold">
          {challengeNumbers.length}/4 completed
        </div>
        <div className=" text-center ">
          <button className="btn gap-2 text-xl  btn-disabled font-poppins btn-outline  ">
            <AiFillSafetyCertificate className=" text-3xl " />
            Get Certificate
          </button>
        </div>
      </div>
      <div className="flex justify-between flex-wrap ">
        {challenges.map((challenge) => (
          <ChallengeCard key={challenge._id} challengeItem={challenge} />
        ))}
      </div>
    </div>
  );
};

export default ChallengeList;
