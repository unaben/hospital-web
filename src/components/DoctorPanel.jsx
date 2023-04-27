import React from "react";
import { data } from "../data/data";

const DoctorPanel = () => {
  return (
    <section id="doc-panel" className="doc-panel py">
      <div className="container">
        <div className="section-head">
          <h2>Our Doctor Panel</h2>
        </div>
        <div className="doc-panel-inner grid">
          {data.doctorData.map((doctor, index) => {
            return (
              <div key={index} className="doc-panel-item">
                <div className="img flex">
                  <img src={doctor.image} alt="doctorImage" />
                  <div className="info text-center bg-blue text-white flex">
                    <p className="lead">{doctor.name}</p>
                    <p className="text-lg">{doctor.speciality}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DoctorPanel;
