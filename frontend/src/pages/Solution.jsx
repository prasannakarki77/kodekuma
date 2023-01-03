import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ChallengeContext from "../context/ChallengeContext";
import UserContext from "../context/UserContext";

const Solution = () => {
  const { id } = useParams();
  const { profile } = useContext(UserContext);
  const { getSolution, solution } = useContext(ChallengeContext);
  useEffect(() => {
    if (profile._id !== undefined) {
      getSolution(profile?._id, id);
    }
    console.log(solution);
  }, [profile]);
  return <div>{solution?._id}</div>;
};

export default Solution;
