import axios from "axios";
import { createContext } from "react";
import styled from "styled-components";
const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const ChallengeLevel = styled.div`
    display: inline-block;
    text-transform: capitalize;
    border-radius: 29px;
    padding: 7px 13px;
    font-family: Poppins, sans-serif;
    background: ${({ level }) =>
      (level === "beginner" && "#5DB355") ||
      (level === "intermediate" && "#721792") ||
      (level === "advanced" && "#3C7154") ||
      (level === "expert" && "#C51717")};
    color: #fff;
    font-weight: 500;
    font-size: 14px;
    @media (max-width: 600px) {
      font-size: 10px;
    }
  `;


// start a new challenge
  const startChallenge = (challengeId, userId) => {
    const data = {
      challengeId: challengeId,
      userId: userId,
    };
    console.log(data);
    axios
      .post("http://localhost:5000/challenge/start_challenge", data)
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  };

// Check if the challenge has already been started

  const checkIfStarted = (challengeId, userID)=>{
    
  }

  const value = {
    ChallengeLevel,
    startChallenge,
  };
  return (
    <ChallengeContext.Provider value={value}>
      {children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeContext;
