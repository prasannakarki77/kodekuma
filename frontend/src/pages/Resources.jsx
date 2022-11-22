import React from "react";
import ResourceCard from "../components/ResourceCard";

const Resources = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:justify-between my-8 p-5 flex-wrap md:flex-row">
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
      <ResourceCard />
    </div>
  );
};

export default Resources;
