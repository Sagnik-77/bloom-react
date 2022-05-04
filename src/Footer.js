import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Get All of Your Plant Data by Sending Us an Email
        </p>
        <p className="footer-subscription-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Voluptatibus, velit?
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
          </form>
          <div className="button">
            <input type="submit" value="Send Email" className="btn-email" />
          </div>
        </div>
      </section>
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Videos</h2>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
          </div>
        </div>
      </div>
      <small class="website-rights">bloom © 2022</small>
    </div>
  );
}
