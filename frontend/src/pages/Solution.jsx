import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ChallengeContext from "../context/ChallengeContext";
import UserContext from "../context/UserContext";
import { Link } from "react-router-dom";
import { CgWebsite } from "react-icons/cg";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { MdRateReview } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { format } from "timeago.js";
const Solution = () => {
  const { id } = useParams();
  const { profile } = useContext(UserContext);
  const {
    getSolution,
    solution,
    getChallenge,
    challenge,
    upvote,
    downvote,
    alreadyUpvoted,
  } = useContext(ChallengeContext);
  const [upvoteAction, setUpvoteAction] = useState();

  useEffect(() => {
    if (profile._id !== undefined) {
      getSolution(profile?._id, id);
    }
    getChallenge(id);
  }, [profile, upvoteAction, alreadyUpvoted]);

  const handleUpvote = () => {
    setUpvoteAction(true);
    upvote(solution._id, profile._id);
  };

  const handleDownvote = () => {
    setUpvoteAction(false);
    downvote(solution._id, profile._id);
  };

  return (
    <div className=" sm:px-8 p-2  mx-auto flex items-start gap-6 sm:flex-row flex-col">
      <div className=" bg-base-300 md:max-w-[350px] sm:max-w-[280px] p-4 md:p-8 flex flex-col gap-4 rounded shadow-2xl max-w-full">
        <Link to={"/challenge/" + id}>
          <div className="flex justify-between items-center  mb-2 ">
            <h1 className="font-cubano text-lg text-primary-content">
              #{challenge?.number} {challenge?.challenge}
            </h1>
            <CgWebsite className="text-primary-content" size={20} />
          </div>

          <div className="overflow-hidden rounded ">
            <img
              src={`http://localhost:5000/${challenge?.image}`}
              alt="challenge_img"
              className="hover:scale-105 transition-all  "
            />
          </div>
        </Link>
        <div className="flex justify-end gap-2">
          {" "}
          <span className="flex items-center px-3 rounded-lg bg-[#455A64] text-primary-content">
            {solution?.upvotes.length} <TiArrowSortedUp size={30} />
          </span>
          <span className="flex items-center px-3 gap-1 rounded-lg bg-[#455A64] text-primary-content">
            {solution?.feedback.length} <MdRateReview size={20} />
          </span>
        </div>
        {alreadyUpvoted ? (
          <button
            className="btn btn-primary capitalize text-base w-full flex items-center gap-1 font-bold justify-center"
            onClick={handleDownvote}
          >
            {" "}
            <TiArrowSortedDown size={30} /> 1
          </button>
        ) : (
          <button
            className="btn btn-primary capitalize text-base w-full flex items-center gap-1 font-bold justify-center"
            onClick={handleUpvote}
          >
            {" "}
            <TiArrowSortedUp size={30} /> Upvote
          </button>
        )}

        <button className="btn btn-primary capitalize text-base w-full flex items-center gap-1 font-bold justify-center">
          {" "}
          <MdRateReview size={20} /> Feedback
        </button>
      </div>
      <div className="flex-1 flex flex-col gap-6">
        <div className="bg-base-300  w-full  p-4 md:p-8  rounded shadow-2xl">
          <div className=" flex justify-between items-center">
            <div className="avatar flex items-center gap-2">
              <div className="w-10 rounded-full">
                <img
                  src="https://placeimg.com/192/192/people"
                  alt="profile_pic"
                />
              </div>
              <span className=" font-semibold text-lg text-primary-content ">
                {profile?.username}
              </span>
              <span className="font-bold flex items-center gap-1">
                {profile?.stats?.stars} <FaStar color="#FA6900" />{" "}
              </span>
            </div>
            <div className="sm:text-sm  text-xs">
              {format(solution?.createdAt)}
            </div>
          </div>
          <h1 className="text-lg font-bold text-primary-content mt-6">
            {solution?.title}
          </h1>
          <p className="text-base mt-4 text-justify mb-4">
            {solution?.description}
          </p>
          <div className=" bg-base-100 rounded">
            <div className="p-3 flex justify-between items-center">
              <h1 className="text-xl font-bold">Preview</h1>
              <div className=" flex gap-4 justify-end">
                <a href={solution?.demoUrl} target="_blank" rel="noreferrer">
                  <button className="btn btn-secondary capitalize font-bold font-poppins">
                    Demo
                  </button>
                </a>
                <a href={solution?.repoUrl} target="_blank" rel="noreferrer">
                  <button className="btn btn-secondary btn-outline capitalize font-bold font-poppins">
                    Code
                  </button>
                </a>
              </div>
            </div>

            <div>
              <iframe
                title="demo"
                src={solution?.demoUrl}
                className="w-full h-[70vh] mb-5"
              ></iframe>
            </div>
            <div className="carousel w-full">
              {solution?.screenshots.map((image) => (
                <div id={image} className="carousel-item w-full">
                  <img
                    src={`http://localhost:5000/${image}`}
                    className="w-full"
                    alt="solution_img"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
              {solution?.screenshots.map((image, i) => (
                <a href={`#${image}`} className="btn btn-xs">
                  {i + 1}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="bg-base-300 rounded shadow-2xl  p-4 md:p-8">
          <h1 className="text-xl font-bold mb-5 ">Feedbacks</h1>
          <div className="bg-base-100 w-full p-4 my-4 rounded ">
            <div className="flex justify-between items-center">
              <div className="avatar flex items-center gap-2">
                <div className="w-8 rounded-full">
                  <img
                    src="https://placeimg.com/192/192/people"
                    alt="profile_pic"
                  />
                </div>
                <span className=" font-semibold text-base text-primary-content ">
                  prasanna.karki77
                </span>
                <span className="font-bold flex items-center gap-1">
                  10 <FaStar color="#FA6900" />{" "}
                </span>
              </div>
              {/* <div className="flex gap-2 items-center">
                <span className="text-lg font-bold">10</span>{" "}
                <button className="btn-primary btn btn-sm p-2">
                  {" "}
                  <TiArrowSortedUp size={20} />
                </button>
              </div> */}
            </div>
            <p className="bg-[#455A64] p-2 mt-4 rounded-lg text-primary-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus
              amet et, vitae nec, aliquam. Sit congue sit vitae in id
              ullamcorper pharetra malesuada lacus. Pellentesque eget enim ut
              adipiscing sit dictum.
            </p>
            <p className="text-xs mt-2">2020/10/01</p>
            <div className="flex justify-end">
              <button className="btn btn-primary capitalize btn-sm ml-auto">
                Reply
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solution;
