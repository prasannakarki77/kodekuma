import React, { useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { Link, Outlet } from "react-router-dom";
const WebChallenges = () => {
  const [currentTab, setCurrentTab] = useState("challenges");
  const tabHandler = (tab) => setCurrentTab(tab);
  return (
    <div className=" md:px-10 lg:px-20 px-3 ">
      <h1 className="font-cubano mb-10 text-2xl sm:text-3xl text-primary-content flex items-center">
        <CgWebsite className="text-4xl mr-2" />{" "}
        <span>
          {" "}
          <span className="blue-gradient"> Web development </span> challenges
        </span>
      </h1>
      <div className="tabs font-cubano mb-9">
        <Link
          to="/web_challenges/"
          className={`tab tab-bordered   tab-lg ${
            currentTab === "challenges" && "tab-active"
          }  `}
          onClick={() => tabHandler("challenges")}
        >
          Challenges
        </Link>
        <Link
          to="/web_challenges/solutions"
          className={`tab tab-bordered   tab-lg ${
            currentTab === "solutions" && "tab-active"
          }  `}
          onClick={() => tabHandler("solutions")}
        >
          Solutions
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default WebChallenges;
