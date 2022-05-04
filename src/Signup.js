import React from "react";
import { useState } from "react";

import "./Signup.css";

export default function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    type: "",
    password: "",
  });
  const { name, email, type, password } = data;

  const handleChange = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        // "https://v1.nocodeapi.com/sagnik/google_sheets/wBepzpXVPcgAcjFe?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, type, password, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({
        ...data,
        name: "",
        email: "",
        type: "",
        password: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup-section">
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="signup-title">
          Regsiter <span>Your Plant</span> Here!
        </h3>

        <div className="signup-form-group">
          <label className="label-type" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="signup-form-group">
          <label className="label-type" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            autoComplete="off"
            value={email}
            onChange={handleChange}
          />
        </div>

        <div className="signup-form-group">
          <label className="label-type" htmlFor="type">
            Plant Type
          </label>
          <input
            type="text"
            className="form-control"
            name="type"
            autoComplete="off"
            value={type}
            onChange={handleChange}
          />
        </div>

        <div className="signup-form-group">
          <label className="label-type" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            autoComplete="off"
            value={password}
            onChange={handleChange}
          />
        </div>

        <div className="button">
          <input type="submit" value="Register" className="btn-signup" />
        </div>
      </form>
    </div>
  );
}
