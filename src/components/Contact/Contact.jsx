import React from "react";
import "./style.scss";

const Contact = () => {
  return (
    <div className="contact-full">
      <div className="overlay">
        <div className="content">
          <h2 data-aos="fade-up">Contact us</h2>
          <p data-aos="fade-up">
            We want to hear from you! Whether you have a question about our
            technology, want to build something, or you are interested in
            collaborating with us, or setup a pilot, tell us your story.
          </p>
          <p>Let us know how we can help.</p>
          <form action="" method="post" className="contact-form">
            <div data-aos="fade-right">
              {" "}
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Enter your Name" />
            </div>
            <div data-aos="fade-left">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your Email"
              />
            </div>
            <div data-aos="fade-left">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="6"
              ></textarea>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
