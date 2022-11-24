import React from "react";
import { BiLinkExternal } from "react-icons/bi";
const ResourceCard = ({ resource }) => {
  const { name, link, desc, tags } = resource;
  return (
    <div className="card w-full bg-base-300 shadow-xl mb-6 sm:w-96 hover:-translate-y-1 transition-all ">
      <figure>
        <img
          src="https://global.discourse-cdn.com/freecodecamp/optimized/4X/8/6/e/86e217d033a69a07c2270779df20f1b4e53defe8_2_690x387.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <a
          className="card-title link link-hover js "
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name} <BiLinkExternal />
        </a>
        <p>{desc}</p>
        <div className="card-actions justify-end">
          {tags.map((tag) => (
            <div className="badge badge-outline">{tag}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;
