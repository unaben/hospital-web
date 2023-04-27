import React from "react";
import { data } from "../data/data";

const Packages = () => {
  return (
    <section id="package-service" className="package-service py text-center">
      <div className="container">
        <div className="package-service-head text-white">
          <h2>Package Service</h2>
          <p className="text text-lg">Best service package for you</p>
        </div>
        <div className="package-service-inner grid">
          {data.packages.map((data, index) => {
            return (
              <div key={index} className="package-service-item bg-white">
                <div className="icon flex">
                  <i className={data.icon}></i>
                </div>
                <h3>{data.title}</h3>
                <p className="text text-sm">{data.descriptionText}</p>
                <a href={data.path} className="btn btn-blue">
                  {data.tagText}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Packages;
