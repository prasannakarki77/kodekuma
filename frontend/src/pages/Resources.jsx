import React from "react";
import ResourceCard from "../components/ResourceCard";
import { CgWebsite } from "react-icons/cg";
import { GoDeviceMobile } from "react-icons/go";
import { BsUiChecks } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
const Resources = () => {
  const [resources, setResources] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/resource/get").then((res) => {
      console.log(res.data);
      setResources(res.data.data);
      console.log(resources);
    });
  }, []);
  return (
    <>
      <div className="my-6 p-5 ">
        <h1 className=" font-cubano text-primary-content text mb-6  text-xl sm:text-2xl flex items-center ">
          <CgWebsite className=" mr-2 text-3xl " />
          <span>
            <span className="blue-gradient">Web development</span> resources
          </span>
        </h1>
        <div className="flex flex-col justify-center items-center sm:justify-between  flex-wrap md:flex-row">
          {resources.map(
            (resource) =>
              resource.type === "web" && <ResourceCard resource={resource} />
          )}
        </div>
      </div>
      <div className="my-6 p-5 ">
        <h1 className=" font-cubano text-primary-content text mb-6 text-xl sm:text-2xl flex items-center ">
          <GoDeviceMobile className=" mr-2 text-3xl " />
          <span>
            <span className="green-gradient">Mobile app development </span>{" "}
            resources
          </span>
        </h1>
        <div className="flex flex-col justify-center items-center sm:justify-between  flex-wrap md:flex-row">
          {resources.map(
            (resource) =>
              resource.type === "mobile" && <ResourceCard resource={resource} />
          )}
        </div>
      </div>
      <div className="my-6 p-5 ">
        <h1 className=" font-cubano text-primary-content text mb-6 text-xl sm:text-2xl flex items-center ">
          <BsUiChecks className=" mr-2 text-3xl " />
          <span>
            <span className="purple-gradient">UX/UI Design </span> resources
          </span>
        </h1>
        <div className="flex flex-col justify-center items-center sm:justify-between  flex-wrap md:flex-row">
          {resources.map(
            (resource) =>
              resource.type === "desktop" && (
                <ResourceCard resource={resource} />
              )
          )}
        </div>
      </div>
      <div className="my-6 p-5 ">
        <h1 className=" font-cubano text-primary-content text mb-6 text-xl sm:text-2xl flex items-center ">
          <FaDesktop className=" mr-2 text-3xl " />
          <span>
            <span className="red-gradient">desktop App Development </span>{" "}
            resources
          </span>
        </h1>
        <div className="flex flex-col justify-center items-center sm:justify-between  flex-wrap md:flex-row">
          {resources.map(
            (resource) =>
              resource.type === "desktop" && (
                <ResourceCard resource={resource} />
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Resources;
