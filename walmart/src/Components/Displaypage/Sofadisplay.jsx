import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Navbar/Header";
import { NavLink } from "react-router-dom";
import "./Sofadisplay.css";

const Sofadisplay = () => {
  return (
    <>
      <Header />
      <Navbar />
      <div className="sdisplay">
        <div className="rescopmo stars">
          <NavLink>Homall</NavLink>
          <p>
            ★★★☆☆<NavLink>(30.1)941</NavLink>
          </p>
        </div>
        <h2 className="rescopmo">
          Homall Convertible Sectional Sofa Couch, Modern Linen Fabric L-Shaped
          Couch 3-Seat Sofa Sectional with Reversible Chaise for Small Living
          Room, Apartment and Small Space, Dark Gray
        </h2>
        <p className="rescopmo">Best seller</p>
        <div className="dleft">
          <div className="pics">
            <img
              src="https://i5.walmartimages.com/seo/Homall-Convertible-Sectional-Sofa-Couch-Modern-Linen-Fabric-L-Shaped-Couch-3-Seat-Reversible-Chaise-Small-Living-Room-Apartment-Space-Dark-Gray_580e12a9-825b-4586-87df-e275ea527e67.78b035bcf5754d1e6b0f1aa872ff576a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
              alt=""
            />
            <img
              src="https://i5.walmartimages.com/asr/b9efe314-bb73-40cf-8367-d7f13ffc613e.71353f46cc3af39ee2562443eea25d86.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt=""
            />
            <img
              src="https://i5.walmartimages.com/asr/e38be54a-4965-4132-9983-dfec04af8ac1.76bdb2ff95146de46c870d5937598168.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt=""
            />
            <img
              src="https://i5.walmartimages.com/asr/8d01c293-30f2-4c98-9f73-5421e4628dd2.16502b6abc7a5315cdf9b3a8f70c4943.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt=""
            />
            <img
              src="https://i5.walmartimages.com/asr/e30fcc11-d84e-4153-8ea8-ac6f89aa7c2c.d8829c641590ad319c6c4a16e2155db5.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
              alt=""
            />
          </div>
          <div className="mainimg">
            <img
              src="https://i5.walmartimages.com/seo/Homall-Convertible-Sectional-Sofa-Couch-Modern-Linen-Fabric-L-Shaped-Couch-3-Seat-Reversible-Chaise-Small-Living-Room-Apartment-Space-Dark-Gray_580e12a9-825b-4586-87df-e275ea527e67.78b035bcf5754d1e6b0f1aa872ff576a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF"
              alt=""
            />
            <button>
              <i className="fa-solid fa-heart"></i>
            </button>
            <button>
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </button>
            <button>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="dright">
          <p className="bekarcomp"> Best seller</p>
          <NavLink className="bekarcomp">Homall</NavLink>
          <h2 className="bekarcomp">
            Homall Convertible Sectional Sofa Couch, Modern Linen Fabric
            L-Shaped Couch 3-Seat Sofa Sectional with Reversible Chaise for
            Small Living Room, Apartment and Small Space, Dark Gray
          </h2>

          <p className="bekarcomp">
            ★★★☆☆<NavLink>(30.1)941 reviews</NavLink>
          </p>
          <h2 className="bekarcomp">Now $189.99</h2>
          <h3 className="bekarcomp">
            As low as $18/mo <span>with</span> Affirm{" "}
            <NavLink>Learn more</NavLink>{" "}
          </h3>
          <p className="bekarcomp">
            Price when purchased online <button>i</button>
          </p>
          <div className="addbtn">
          <p>$169.99</p>
            <button>Add to cart</button>
            <button>
              <i className="fa-solid fa-vr-cardboard"></i>
            </button>
          </div>
          <div className="colors">
            <p>Actual colors: Gray</p>
            <div className="cbtns">
              <div className="cbtn">
                <button>
                  <div></div>
                </button>
                <p>$169.99</p>
              </div>
              <div className="cbtn">
                <button>
                  <div></div>
                </button>
                <p>$169.99</p>
              </div>
              <div className="cbtn">
                <button>
                  <div></div>
                </button>
                <p>$189.99</p>
              </div>
              <div className="cbtn">
                <button>
                  <div></div>
                </button>
                <p>$169.99</p>
              </div>
              <div className="cbtn">
                <button>
                  <div></div>
                </button>
                <p>$169.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sofadisplay;
