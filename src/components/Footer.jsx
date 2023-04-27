import React from "react";

const Footer = () => {
  const hashTag = "#";
  return (
    <div className="container">
      <div className="footer-inner text-white py grid">
        <div className="footer-item">
          <h3 className="footer-head">about us</h3>
          <div className="icon">
            <img src="images/new-logo.png" width="10px" height="20px" alt="" />
          </div>
          <p className="text text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            saepe incidunt fugiat optio corporis ea!
          </p>
          <address>
            Smart Clinic <br />
            118 WestBury Rd, Edgbaston West <br />
            Birmingham, B18 4DD <br />
            West Midlands <br />
            United Kingdom
          </address>
        </div>

        <div className="footer-item">
          <h3 className="footer-head">tags</h3>
          <ul className="tags-list flex">
            <li>medical care</li>
            <li>emergency</li>
            <li>therapy</li>
            <li>surgery</li>
            <li>medication</li>
            <li>nurse</li>
          </ul>
        </div>

        <div className="footer-item">
          <h3 className="footer-head">Quick Links</h3>
          <ul>
            <li>
              <a href={hashTag} className="text-white">
                Our Services
              </a>
            </li>
            <li>
              <a href={hashTag} className="text-white">
                Our Plan
              </a>
            </li>
            <li>
              <a href={hashTag} className="text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href={hashTag} className="text-white">
                Appointment Schedule
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-item">
          <h3 className="footer-head">make an appointment</h3>
          <p className="text text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, omnis.
          </p>
          <ul className="appointment-info">
            <li>08:00 AM - 12:00 PM</li>
            <li>01:00 PM - 06:00 PM</li>
            <li>07:00 PM - 11:00 PM</li>
            <li>
              <i className="fas fa-envelope"></i>
              <span>smartclinic@online.com</span>
            </li>
            <li>
              <i className="fas fa-phone"></i>
              <span>+44 7478-2834-010</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-links">
        <ul className="flex">
          <li>
            <a href={hashTag} className="text-white flex">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href={hashTag} className="text-white flex">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href={hashTag} className="text-white flex">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
