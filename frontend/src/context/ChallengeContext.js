import axios from "axios";
import { useState } from "react";
import { createContext } from "react";
import styled from "styled-components";
const ChallengeContext = createContext();

export const ChallengeProvider = ({ children }) => {
  const [challengeStarted, setChallengeStarted] = useState(false);
  const [solutionExists, setSolutionExists] = useState(false);
  const [challenge, setChallenge] = useState();
  const [solution, setSolution] = useState();
  const [badge, setBadge] = useState("");

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

  const checkIfStarted = (challengeId, userId) => {
    axios
      .get(
        `http://localhost:5000/challenge/check_if_started/${userId}/${challengeId}`
      )
      .then((res) => {
        if (res.status === 200) {
          console.log(true);
          setChallengeStarted(true);
        }
      })
      .catch((e) => {
        console.log(e);
        setChallengeStarted(false);
      });
  };
  const checkIfSolutionSubmitted = (challengeId, userId) => {
    console.log(challengeId);
    console.log(userId);
    axios
      .get(`http://localhost:5000/solution/get/${userId}/${challengeId}`)
      .then((res) => {
        console.log(res);
        if (res.status === 200 && res.data.data !== null) {
          console.log(res);
          setSolutionExists(true);
        } else {
          setSolutionExists(false);
        }
      })
      .catch((e) => {
        console.log(e);
        setSolutionExists(false);
      });
  };

  // Solution submit
  const updateChallengeStatus = (challengeId, userId) => {
    axios
      .put(
        `http://localhost:5000/challenge/status_update/${userId}/${challengeId}`
      )
      .then((res) => {
        console.log(res.status);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const rewardBadges = () => {
    let stars;
    let badge;
    let userId;
    const user = JSON.parse(sessionStorage.getItem("user"));
    axios
      .get("http://localhost:5000/user/profile/" + user.id)
      .then((res) => {
        stars = res.data.data.stats.stars;
        userId = res.data.data._id;

        if (stars === 5) {
          badge = "coder";
        }
        if (stars === 45) {
          badge = "challenger";
        }
        if (stars >= 75) {
          badge = "champion";
        }
        console.log("badge");
        console.log(badge);
        if (badge !== undefined) {
          axios
            .put(`http://localhost:5000/user/reward_badge/${userId}/${badge}`)
            .then((res) => {
              if (res.status === 200) {
                console.log("badge", badge);
                setBadge(badge);
                return badge;
              }
              setBadge("");
            })
            .catch((e) => {
              console.log(e);
            });
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const rewardStars = (userId, stars) => {
    axios
      .put(`http://localhost:5000/user/reward_stars/${userId}/${stars}`)
      .then((res) => {
        console.log(res.status);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getSolution = (userId, challengeId) => {
    axios
      .get(`http://localhost:5000/solution/get/${userId}/${challengeId}`)
      .then((res) => {
        if (res.status === 200 && res.data.data !== null) {
          console.log(res.data.data);
          setSolution(res.data.data);
          return res.data.data;
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const getChallenge = (challengeId) => {
    axios
      .get("http://localhost:5000/challenge/get_challenge/" + challengeId)
      .then((res) => {
        console.log(res.data.data[0]);
        setChallenge(res.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const value = {
    ChallengeLevel,
    startChallenge,
    checkIfStarted,
    checkIfSolutionSubmitted,
    challengeStarted,
    setChallengeStarted,
    updateChallengeStatus,
    rewardStars,
    rewardBadges,
    solutionExists,
    badge,
    getSolution,
    solution,
    challenge,
    getChallenge,
  };
  return (
    <ChallengeContext.Provider value={value}>
      {children}
    </ChallengeContext.Provider>
  );
};

export default ChallengeContext;
