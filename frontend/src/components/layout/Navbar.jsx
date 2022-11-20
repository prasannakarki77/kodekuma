import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { GiBearFace } from "react-icons/gi";
import { MdVideoSettings, MdLeaderboard } from "react-icons/md";
import { RiCodeBoxFill } from "react-icons/ri";
import logo from "../../assets/logo.svg";
const Navbar = () => {
  const login = () => {
    window.open("http://localhost:5000/auth/github", "_self");
  };
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <nav className="navbar mb-12 shadow-sm bg-base-200 text-neutral-content py-2 ">
      <div className=" w-full mx-auto flex justify-between items-center">
        <div className="flex items-center px-2 mx-0 sm:mx-2 sm:w-[170px]  w-[60px] ">
          <img src={logo} alt="logo" className="w-13" />
          <Link
            to="/"
            className="md:text-lg pl-2 sm:text-base hidden sm:block  align-middle font-cubano tracking-wider text-amber-500"
          >
            KodeKuma
          </Link>
        </div>
        <div className=" px-2 mx-2 flex-1 justify-center items-center text-center">
          <Link
            to="/"
            className="btn btn-ghost btn-md rounded-btn font-cubano text-lg  tracking-wider"
          >
            <MdVideoSettings className="text-2xl " />{" "}
            <span className="md:text-lg  sm:text-base hidden sm:block ml-2">
              Resources
            </span>
          </Link>
          <Link
            to="/about"
            className="btn btn-ghost btn-md rounded-btn font-cubano text-lg  tracking-wider"
          >
            <RiCodeBoxFill className="text-2xl " />{" "}
            <span className="md:text-lg  sm:text-base hidden sm:block ml-2 ">
              Challenges
            </span>
          </Link>
          <Link
            to="/about"
            className="btn btn-ghost  btn-md rounded-btn font-cubano text-lg  tracking-wider"
          >
            <MdLeaderboard className="text-2xl " />{" "}
            <span className="md:text-lg  sm:text-base hidden sm:block ml-2">
              Leaderboard
            </span>
          </Link>
        </div>

        <div className="x-2 mx-0 sm:mx-2  sm:w-[170px]  w-[60px]">
          <div className="flex justify-end">
            <button className="btn sm:btn-outline btn-ghost" onClick={login}>
              <span className="sm:inline hidden font-bold font-poppins  capitalize ">
                Sign In
              </span>{" "}
              <FaGithub className="inline sm:pl-2 pl-0 sm:text-3xl text-2xl" />
            </button>
            <button className="btn sm:btn-outline btn-ghost" onClick={logout}>
              <span className="sm:inline hidden font-bold font-poppins  capitalize ">
                Logout
              </span>{" "}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
