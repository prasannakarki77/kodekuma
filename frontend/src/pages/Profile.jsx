import React from "react";
import { BsGithub } from "react-icons/bs";
import { HiBadgeCheck } from "react-icons/hi";
import { AiTwotoneStar, AiFillSafetyCertificate } from "react-icons/ai";
import { TiArrowSortedUp } from "react-icons/ti";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaLinkedin,
  FaCodepen,
} from "react-icons/fa";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
const Profile = () => {
  // const { user } = useContext(UserContext);

  const user = JSON.parse(localStorage.getItem("user"));
  // const profile = JSON.parse(localStorage.getItem("profile"));
  const [profile, setProfile] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/profile/" + user.id)
      .then((res) => {
        setProfile(res.data.data);
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
                <div className="stat-value">{profile?.stats?.badges}</div>
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
                <div className="stat-value">{profile?.stats?.certificates}</div>
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
        <div className=" flex gap-6 items-start">
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
              <p>No badges yet</p>
            </div>
          </div>
          <div className="bg-base-200 p-7 w-full ">
            <h1 className="font-cubano text-xl flex items-center gap-2 mb-5">
              Solutions{" "}
            </h1>
            <p>No solution available.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
