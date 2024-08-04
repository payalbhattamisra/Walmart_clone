import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <h2>Walmart</h2>
          <img
            className="logoimg"
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
            alt=""
          />
        </div>
        <div className="department">
        <i className="fa-solid fa-star"></i>
        <p>Departments</p>
        </div>
        <div className="services">
        <i className="fa-solid fa-star"></i>
        <p>Services</p>
        </div>
        <div className="search">
          <input type="text" />
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="favitem">
            <i className="fa-solid fa-heart"></i>
            <p>My items</p>
        </div>
        <div className="account">
            <i className="fa-solid fa-user"></i>
            <p>Account</p>
        </div>
        <div className="cart">
            <p className="prioductnos"></p>
        <i className="fa-solid fa-cart-shopping"></i>
        <p className="tcost"></p>
        </div>
      </div>
    </>
  );
};

export default Header;
