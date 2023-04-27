/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";

const Contacts = () => {
  return (
    <section id="contact" className="contact py">
      <div className="container grid">
        <div className="contact-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.067702449464!2d-1.9001395235013612!3d52.477909872050205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc896c750ee5%3A0x9da3f5ae36c39f33!2sNew%20Street%20Station%2C%20East%20Mews%2C%20Birmingham%20B2%204PY!5e0!3m2!1sen!2suk!4v1682590781171!5m2!1sen!2suk"
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-right text-white text-center bg-blue">
          <div className="contact-head">
            <h3 className="lead">Contact Us</h3>
            <p className="text text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga.
            </p>
          </div>
          <form>
            <div className="form-element">
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
              />
            </div>
            <div className="form-element">
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
              />
            </div>
            <div className="form-element">
              <textarea
                rows="5"
                placeholder="Your Message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-white btn-submit">
              <i className="fas fa-arrow-right"></i> Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
