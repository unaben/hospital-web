import React from "react";
import { data } from "../data/data";

const Services = () => {
  return (
    <section id="services" className="services py">
      <div className="container">
        <div className="section-head text-center">
          <h2 className="lead">The Best Doctor gives the least medicines</h2>
          <p className="text text-lg">
            A perfect way to show your hospital services
          </p>
          <div className="line-art flex">
            <div></div>
            <img src="images/4-dots.png" alt="" />
            <div></div>
          </div>
        </div>
        <div className="services-inner text-center grid">
          {data.services.map((service, index) => {
            return (
              <article key={index} className="service-item">
                <div className="icon">
                  <img src={service.image} alt="" />
                </div>
                <h3>{service.title}</h3>
                <p className="text text-sm">{service.descriptionText}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
