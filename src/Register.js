import React from "react";
import "./Register.css";
import arduino from "./arduino(2).png";
import gmail from "./gmail(1).png";

export default function Register() {
  return (
    <div className="register-section">
      <div className="register-icon">
        <img className="arduino" src={arduino} alt="ardunio-icon" />
        <img className="gmail" src={gmail} alt="gmail-icon" />
      </div>

      <div className="register-note">
        <p className="note">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          placeat molestiae provident repellendus! Quas est dolor fugit
          repellendus! <a href className="popuplink">Terms and Conditions</a>
        </p>

        {/* <div className="popupbox">
          <div className="popupboxcontent">
            <h2 className="popuptitle">Terms and Conditions</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
              beatae.
            </p>
            <a onClick={closePopup} href="#" className="popupclose">&times; </a>
          </div>
        </div> */}
      </div>
    </div>
  );
}
