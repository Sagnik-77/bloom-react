import React from "react";
import "./Hero.css";
export default function Hero() {
  return (
    <div className="hero-section">
      <h1 className="hero-title">
        Take care of your plant <span>Smartly</span>.
      </h1>
      <p className="subtitle">Get yourself something special</p>

      <div className="heroBtn">
        <button className="btn-manual">Download Manual</button>
        <button className="btn-pricing">Download Pricing</button>
      </div>
      <div className="notice">
        <h3 className="notice-title">
          <span>Warning!</span> This site is in test mode; any change or
          submission via 'form' is currently not possible. Full version will be
          available shortly.
        </h3>
      </div>
    </div>
  );
}
