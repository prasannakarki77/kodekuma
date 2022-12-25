import React from "react";
import { Link } from "react-router-dom";
import { HiCheckCircle } from "react-icons/hi";
import { FaCloudUploadAlt } from "react-icons/fa";
const SolutionSubmit = () => {
  return (
    <div className=" p-4 max-w-7xl mx-auto flex items-start gap-6 sm:flex-row flex-col ">
      <div className=" bg-base-300 md:max-w-[350px] sm:max-w-[280px] p-4 md:p-8  rounded shadow-2xl max-w-full">
        <Link>
          <h1 className="font-cubano text-lg mb-2 text-primary-content">
            #1 Doorhub challenge
          </h1>
          <div className="overflow-hidden rounded ">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
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
        <form className="flex flex-col gap-4">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="Enter title"
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              className="textarea h-24"
              placeholder="Enter a brief description"
            ></textarea>
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Screenshots</span>
            </label>
            <input
              type="file"
              className="file-input w-full max-w-xs"
              multiple
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Demo</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="https:/demo/..."
            />
          </div>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">GitHub Repository</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              placeholder="https://github.com/..."
            />
          </div>
          <div className="flex justify-end">
            <button className="btn gap-2  btn-accent font-poppins text-sm capitalize mt-4 w-full md:w-auto  ">
              <FaCloudUploadAlt size={20} /> Submit Solution
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SolutionSubmit;
