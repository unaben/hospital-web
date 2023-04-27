/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

const Contacts = () => {
  return (
    <section id="contact" className="contact py">
      <div className="container grid">
        <div className="contact-left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2384.6268289831164!2d-6.214682984112116!3d53.29621947996855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486709e0c9c80f8f%3A0x92f408d10f2277c2!2sREVO!5e0!3m2!1sen!2snp!4v1636264848776!5m2!1sen!2snp"
            alt=""
            width="600"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
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
}

export default Contacts