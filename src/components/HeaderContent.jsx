import React from "react";

const HeaderContent = () => {
  const hashTag = "#";
  return (
    <div className="header-inner text-white text-center">
      <div className="container grid">
        <div className="header-inner-left">
          <h1>
            your most trusted
            <br />
            <span>health partner</span>
          </h1>
          <p className="lead">the best match services for you</p>
          <p className="text text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
            nulla odit esse necessitatibus corporis voluptatem?
          </p>
          <div className="btn-group">
            <a href={hashTag} className="btn btn-white">
              Learn More
            </a>
            <a href={hashTag} className="btn btn-light-blue">
              Sign In
            </a>
          </div>
        </div>
        <div className="header-inner-right">
          <img src="images/header.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeaderContent;
