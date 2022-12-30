import React from "react";
import { Link, useParams } from "react-router-dom";
import { HiCheckCircle } from "react-icons/hi";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useContext } from "react";
import ChallengeContext from "../context/ChallengeContext";
const SolutionSubmit = () => {
  const { id } = useParams();
  const [challenge, setChallenge] = useState({});
  const user = JSON.parse(sessionStorage.getItem("user"));
  const [challengeId, setChallengeId] = useState(id);
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [demoUrl, setDemoUrl] = useState("");
  const [repoUrl, setRepoUrl] = useState("");
  const [screenshots, setScreenshots] = useState([]);

  const { updateChallengeStatus, rewardStars } = useContext(ChallengeContext);
  useEffect(() => {
    axios
      .get("http://localhost:5000/challenge/get_challenge/" + id)
      .then((res) => {
        console.log(res.data.data[0]);
        setChallenge(res.data.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
    axios
      .get("http://localhost:5000/user/profile/" + user.id)
      .then((res) => {
        setUserId(res.data.data._id);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("demoUrl", demoUrl);
    for (let i = 0; i < screenshots.length; i++) {
      data.append("s_images", screenshots[i]);
    }
    data.append("s_images", screenshots);
    data.append("repoUrl", repoUrl);
    data.append("challengeId", challengeId);
    data.append("userId", userId);

    if (title === "" || description === "" || repoUrl === "") {
      toast.warn("Fill all the required fields!!", {
        theme: "dark",
      });
      return;
    }
    axios
      .post("http://localhost:5000/solution/upload", data)
      .then((res) => {
        if (res.status === 201) {
          toast.success("Solution Submitted", {
            theme: "dark",
          });
          updateChallengeStatus(challengeId, userId);

          rewardStars(userId, challenge.points);
        }
      })
      .catch((e) => {
        console.log(e);
        toast.error("Something went wrong !", {
          theme: "dark",
        });
      });
  };
  return (
    <div className=" p-4 max-w-7xl mx-auto flex items-start gap-6 sm:flex-row flex-col ">
      <div className=" bg-base-300 md:max-w-[350px] sm:max-w-[280px] p-4 md:p-8  rounded shadow-2xl max-w-full">
        <Link to={"/challenge/" + id}>
          <div className="flex justify-between items-center  mb-2 ">
            <h1 className="font-cubano text-lg text-primary-content">
              #{challenge.number} {challenge.challenge}
            </h1>
            <CgWebsite className="text-primary-content" size={20} />
          </div>

          <div className="overflow-hidden rounded ">
            <img
              src={`http://localhost:5000/${challenge.image}`}
              alt="challenge_img"
              className="hover:scale-105 transition-all  "
            />
          </div>
        </Link>
        <div className="">
          <ul className="font-poppins text-sm flex flex-col gap-2 mt-3">
            <li className="flex items-center gap-1 ">
              <HiCheckCircle size={20} className=" text-green-400 " /> Fulfill
              all the challenge requirements{" "}
            </li>
            <li className="flex items-center gap-1 ">
              <HiCheckCircle size={20} className=" text-green-400 " />
              Explain about your approach briefly
            </li>
            <li className="flex items-center gap-1 ">
              <HiCheckCircle size={20} className=" text-green-400 " /> Provide
              live demo url or screenshots
            </li>
            <li className="flex items-center gap-1 ">
              <HiCheckCircle size={20} className=" text-green-400 " /> Github
              repository link is required
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-base-300 flex-1 w-full  p-4 md:p-8  rounded shadow-2xl">
        <h1 className="font-cubano text-lg text-primary-content ">
          {" "}
          Solution Submission
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="Enter title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <label className="label">
              <span className="label-text"></span>
              <span className="label-text-alt ">*required</span>
            </label>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea h-24"
              placeholder="Enter a brief description"
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label className="label">
              <span className="label-text"></span>
              <span className="label-text-alt ">*required</span>
            </label>
          </div>
          <div className="form-control w-full mb-4 ">
            <label className="label">
              <span className="label-text">Screenshots</span>
            </label>
            <input
              type="file"
              className="file-input w-full max-w-xs"
              multiple
              onChange={(e) => setScreenshots(e.target.files)}
            />
          </div>
          <div className="form-control w-full mb-6 ">
            <label className="label">
              <span className="label-text">Demo</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="https:/demo/..."
              onChange={(e) => setDemoUrl(e.target.value)}
            />{" "}
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">GitHub Repository</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="https://github.com/..."
              onChange={(e) => setRepoUrl(e.target.value)}
            />
            <label className="label">
              <span className="label-text"></span>
              <span className="label-text-alt ">*required</span>
            </label>
          </div>
          <div className="flex justify-end">
            <button
              className="btn gap-2  btn-accent font-poppins text-sm capitalize mt-4 w-full md:w-auto  "
              type="submit"
            >
              <FaCloudUploadAlt size={20} /> Submit Solution
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SolutionSubmit;
