import React from "react";
import { useState } from "react";

import "./Order.css";

export default function Order() {
  const [data, setData] = useState({
    name: "",
    addr: "",
    type: "",
  });
  const { name, addr, type } = data;

  const handleChange = (e) =>
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/sagnik/google_sheets/ILWagEYpsPuJzXgM?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, addr, type, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setData({ ...data, name: "", addr: "", type: "", eventName: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="order-section">
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="heading">
          Get <span>Your Plant</span> Today!
        </h3>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            autoComplete="off"
            value={name}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="addr">Address</label>
          <input
            type="text"
            className="form-control"
            name="addr"
            autoComplete="off"
            value={addr}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="type">Plant Type</label>
          <input
            type="text"
            className="form-control"
            name="type"
            autoComplete="off"
            value={type}
            onChange={handleChange}
          />
        </div>

        <div className="button">
          <input type="submit" value="Order Now" className="btn-submit" />
        </div>
      </form>
    </div>
  );
}
