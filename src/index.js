import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Header from "./Header";
import Hero from "./Hero";
import Product from "./Product";
import Order from "./Order";
import Register from "./Register";
import SignUp from "./Signup";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Hero />
    <Product />
    <Order />
    <Register />
    <SignUp />
    <Footer />
  </React.StrictMode>
);
