import React from "react";

const BannerTwo = () => {
  const hashTag = '#'
  return (
    <section id="banner-two" className="banner-two text-center">
      <div className="container grid">
        <div className="banner-two-left">
          <img src="images/banner-2-img.png" alt="" />
        </div>
        <div className="banner-two-right">
          <p className="lead text-white">
            When you are young and healthy, it never occurs to you that in a
            single second your whole life could change.
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
      </div>
    </section>
  );
};

export default BannerTwo;
