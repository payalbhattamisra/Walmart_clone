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

        <button className="department">
        <i className="fa-solid fa-users"></i>
          <p>Departments</p>
        </button>

        <button className="services">
        <i className="fa-solid fa-briefcase"></i>
          <p>Services</p>
        </button>

        <div className="search">
          <input
            type="text"
            placeholder="Search everything at Walmart onlina and in store"
          />
          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <button className="favitem">
          <i className="fa-solid fa-heart"></i>
          <div>
            <p>Reorder</p>
            <p>My items</p>
          </div>
        </button>

        <button className="account">
          <i className="fa-solid fa-user"></i>
          <div>
            <p>Sign in</p>
            <p>Account</p>
          </div>
        </button>

        <button className="cart">
          <p className="prioductnos">0</p>
          <i className="fa-solid fa-cart-shopping"></i>
          <p className="tcost">$000</p>
        </button>
      </div>
    </>
  );
};

export default Header;
