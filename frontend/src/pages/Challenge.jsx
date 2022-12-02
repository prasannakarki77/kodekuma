import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import ChallengeContext from "../context/ChallengeContext";
import web_challenge from "../assets/web-challenge.svg";
const Challenge = () => {
  const { challengeId } = useParams();
  const { ChallengeLevel } = useContext(ChallengeContext);
  return (
    <div className=" max-w-[1152px] mx-auto px-4">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <h1 className=" font-cubano text-primary-content tracking-wider md:text-3xl sm:text-xl text-lg mr-3">
            #1 Doorhub Challenge{" "}
          </h1>{" "}
          <ChallengeLevel level={"beginner"}>Beginner</ChallengeLevel>
        </div>
        <img
          src={web_challenge}
          alt="challenge_type_icon"
          className=" h-14 w-14 object-contain sm:block hidden"
        />
      </div>
      <div>
        <iframe
          title="s"
          width="100%"
          height="530"
          src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/file/wQEWc9QvjXjJwAUT9MmlbI/kodekuma?node-id=0%3A1&t=fV4rz8GkzWN6fqXE-1"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
};

export default Challenge;
