import React from "react";
import { BiLinkExternal } from "react-icons/bi";
const ResourceCard = () => {
  return (
    <div className="card w-full bg-base-300 shadow-xl mb-6 sm:w-96 ">
      <figure>
        <img
          src="https://global.discourse-cdn.com/freecodecamp/optimized/3X/7/f/7f87f7949b64a12f1e5feb7ff9d2ac4ae83383ad_2_1024x469.jpeg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <a
          className="card-title link link-hover js "
          href="https://www.freecodecamp.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freecodecamp <BiLinkExternal />
        </a>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget
          hendrerit lectus tellus egestas. Id interdum pellentesque sed sed
          fringilla urna. Rhoncus, sit fringilla quis amet.
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">HTML</div>
          <div className="badge badge-outline">CSS</div>
          <div className="badge badge-outline">JS</div>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
