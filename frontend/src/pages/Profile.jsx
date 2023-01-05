import React from "react";
import { BsGithub } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import { AiTwotoneStar, AiFillSafetyCertificate } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";
import challenger_badge from "../assets/challenger_badge.png";
import coder_badge from "../assets/coder_badge.png";
import champion_badge from "../assets/champion_badge.png";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaCodepen,
} from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { CgWebsite } from "react-icons/cg";
import ChallengeContext from "../context/ChallengeContext";
import { Link } from "react-router-dom";
const Profile = () => {
  const { userSolutions, getUserSolutions } = useContext(ChallengeContext);

  const user = JSON.parse(sessionStorage.getItem("user"));
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/profile/" + user.id)
      .then((res) => {
        setProfile(res.data.data);
        getUserSolutions(res.data.data._id);
        console.log(userSolutions);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className=" px-4">
      <div className="max-w-[1300px] mx-auto">
        <div className="bg-base-200 sm:p-10 p-4 flex gap-8 md:flex-row flex-col justify-center mb-8">
          {
            <img
              src={user.photos[0].value}
              alt="profile_img"
              className=" md:w-72 w-full object-cover "
            />
          }
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-raleway text-primary-content font-bold flex gap-3 items-center">
              {user.displayName}
              <a
                href="https://github.com/prasannakarki77"
                target="_blank"
                rel="noreferrer"
                className=" hover:scale-110 transition-all"
              >
                <BsGithub />
              </a>
            </h1>
            <p className=" text-base font-medium mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              habitant sapien leo sodales tellus molestie arcu consectetur.
              Neque, metus leo fames habitasse fames facilisis gravida. Orci,
              bibendum quisque malesuada nulla elit quam leo.
            </p>

            {/* <div className="stats shadow max-w-lg mb-4 ">
              <div className="stat sm:p-2 md:p-6 ">
                <div className="stat-title sm:text-base text-xs text font-bold">
                  Badges
                </div>
                <div className="stat-value md:text-2xl text-base sm:text-lg flex items-center gap-2">
                  2 <HiBadgeCheck size={25} className=" text-accent " />
                </div>
              </div>
              <div className="stat sm:p-2 md:p-6 ">
                <div className="stat-title sm:text-base text-xs  font-bold">
                  Stars
                </div>
                <div className="stat-value md:text-2xl text-base sm:text-lg flex items-center gap-2">
                  20 <AiTwotoneStar size={25} className="text-orange-500" />
                </div>
              </div>
              <div className="stat sm:p-2 md:p-6 ">
                <div className="stat-title sm:text-base text-xs font-bold">
                  Certificates
                </div>
                <div className="stat-value md:text-2xl text-base sm:text-lg flex items-center gap-2">
                  1{" "}
                  <AiFillSafetyCertificate
                    size={25}
                    className=" text-green-400 "
                  />
                </div>
              </div>
              <div className="stat sm:p-2 md:p-6 ">
                <div className="stat-title sm:text-base text-xs  font-bold">
                  Upvotes
                </div>
                <div className="stat-value md:text-2xl text-base sm:text-lg flex items-center gap-2">
                  10 <TiArrowSortedUp size={25} className="text-secondary" />
                </div>
              </div>
            </div> */}
            <div className="stats shadow">
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <HiBadgeCheck size={35} className=" text-accent " />
                </div>
                <div className="stat-title"> Badges</div>
                <div className="stat-value">
                  {profile?.stats?.badges.length}
                </div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <AiTwotoneStar size={35} className="text-orange-500" />
                </div>
                <div className="stat-title">Stars</div>
                <div className="stat-value">{profile?.stats?.stars}</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <AiFillSafetyCertificate
                    size={35}
                    className=" text-green-400 "
                  />
                </div>
                <div className="stat-title">Certificates</div>
                <div className="stat-value">
                  {profile?.stats?.certificates.length}
                </div>
              </div>
              <div className="stat">
                <div className="stat-figure text-secondary">
                  <TiArrowSortedUp size={35} className="text-secondary" />
                </div>
                <div className="stat-title">Upvotes</div>
                <div className="stat-value">{profile?.stats?.upvotes}</div>
              </div>
            </div>
            <div className=" flex gap-4 text-primary-content items-center">
              <a
                href="https://github.com/prasannakarki77"
                target="_blank"
                rel="noreferrer"
                className=" hover:scale-110 transition-all text-2xl"
              >
                {" "}
                <FaFacebookSquare />{" "}
              </a>
              <a
                href="https://github.com/prasannakarki77"
                target="_blank"
                rel="noreferrer"
                className=" hover:scale-110 transition-all text-2xl"
              >
                <FaCodepen />{" "}
              </a>
              <a
                href="https://github.com/prasannakarki77"
                target="_blank"
                rel="noreferrer"
                className=" hover:scale-110 transition-all text-2xl"
              >
                {" "}
                <FaTwitterSquare />{" "}
              </a>
              <a
                href="https://github.com/prasannakarki77"
                target="_blank"
                rel="noreferrer"
                className=" hover:scale-110 transition-all text-2xl"
              >
                {" "}
                <FaLinkedin />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className=" flex gap-6 items-start flex-col md:flex-row">
          <div className=" md:w-72 w-full ">
            <div className="bg-base-200 p-7 mb-8 ">
              <h1 className="font-cubano text-xl flex items-center gap-2 mb-5">
                Certificates{" "}
                <AiFillSafetyCertificate
                  className="  text-green-400 "
                  size={26}
                />
              </h1>
              <p>No certificates yet</p>
            </div>
            <div className="bg-base-200 p-7 ">
              <h1 className="font-cubano text-xl flex items-center gap-2 mb-5">
                Badges <HiBadgeCheck className=" text-accent " size={26} />
              </h1>
              <p className="flex gap-1 flex-wrap">
                {profile?.stats?.badges.map((badge) => (
                  <>
                    <img
                      src={
                        (badge === "challenger" && challenger_badge) ||
                        (badge === "coder" && coder_badge) ||
                        (badge === "champion" && champion_badge)
                      }
                      alt="point"
                      width={80}
                    />
                  </>
                ))}
              </p>
            </div>
          </div>
          <div className="bg-base-200 sm:p-7 p-4 w-full ">
            <h1 className="font-cubano text-xl flex items-center gap-2 mb-5">
              Solutions{" "}
            </h1>
            <div className="flex flex-col gap-4">
              {userSolutions.length > 0 &&
                userSolutions.map((solution) => (
                  <Link to={`/solution/${solution.challengeId._id}`}>
                    <div className="bg-base-100 sm:p-8 p-4 rounded flex gap-4 justify-between lg:flex-row flex-col border border-base-100 hover:border-white transition-all ">
                      <div className="flex flex-col justify-between">
                        <div className=" mb-4 font-poppins ">
                          <p className="  text-base sm:text-lg font-bold text-primary-content mb-3">
                            {solution.title}
                          </p>
                          <p className=" text-sm sm:text-base">
                            {solution.description}
                          </p>
                        </div>
                        <div className="flex  gap-2">
                          {" "}
                          <span className="flex items-center px-3 rounded-lg bg-[#455A64] text-primary-content">
                            {solution.upvotes}{" "}
                            <TiArrowSortedUp className=" text-base " />
                          </span>
                          <span className="flex items-center px-3 gap-1 rounded-lg bg-[#455A64] text-primary-content">
                            {solution.feedback.length}{" "}
                            <MdRateReview className=" text-base " />
                          </span>
                        </div>
                      </div>

                      <div className=" md:max-w-xs md:min-w-[250px] w-full lg:mx-0 mx-auto ">
                        <img
                          src={`http://localhost:5000/${solution.challengeId.image}`}
                          alt="challenge_img"
                        />
                        <p className="font-cubano text-sm flex justify-between mt-3">
                          #{solution.challengeId.number}{" "}
                          {solution.challengeId.challenge}
                          <span>
                            <CgWebsite
                              className="text-primary-content"
                              size={20}
                            />
                          </span>
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
