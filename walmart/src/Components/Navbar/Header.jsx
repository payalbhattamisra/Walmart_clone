import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.toLowerCase() === "sofa") {
      navigate("/product");
    }
    if(searchTerm.toLowerCase()==="chair"){
      navigate("/chair")
    }
    if(searchTerm.toLowerCase()==="bed"){
      navigate("/Bed")
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <h2>Walmart</h2>
          <img
            className="logoimg"
            src="https://i5.walmartimages.com/dfw/4ff9c6c9-d10e/k2-_ef2c8660-96ed-4f64-891d-329fa488c482.v1.png"
            alt="Walmart Logo"
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

        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search everything at Walmart online and in store"
            value={searchTerm}
            onChange={handleSearch}
          />
          <button  className="submitbtn"type="submit">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>

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
