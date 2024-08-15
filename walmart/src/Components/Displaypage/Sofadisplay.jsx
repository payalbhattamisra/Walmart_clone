import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Navbar/Header";
import { NavLink } from "react-router-dom";
import "./Sofadisplay.css";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./Experience"; // Adjust the import path as necessary

const Sofadisplay = () => {
  const images = [
    "./img/ch1.jpg",
    "./img/ch2.png",
    "https://i.downloadatoz.com/app_img/20220615/82/51/56/1655264263.jpg",
    "./img/ch3.png",
    "https://i5.walmartimages.com/asr/e30fcc11-d84e-4153-8ea8-ac6f89aa7c2c.d8829c641590ad319c6c4a16e2155db5.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

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
          BestOffice Mesh Chair, Ergonomic Adjustable, Back Support, Rolling
          Swivel, Black for Women & Men.
        </h2>
        <p className="rescopmo">Best seller</p>
        <div className="dleft">
          <div className="pics">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(index)}
                className={currentImageIndex === index ? "active" : ""}
              />
            ))}
          </div>
          <div className="mainimg">
            {currentImageIndex === 2 ? (
              <Canvas shadows camera={{ position: [0, 0, 5], fov: 30 }}>
                <color attach="background" args={["#232323"]} />
                <Experience />
              </Canvas>
            ) : (
              <img src={images[currentImageIndex]} alt="Main Display" />
            )}
            <button>
              <i className="fa-solid fa-heart"></i>
            </button>
            <button>
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </button>
            <button onClick={handlePrevClick}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button onClick={handleNextClick}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </div>
        </div>
        <div className="dright">
          <p className="bekarcomp"> Best seller</p>
          <NavLink className="bekarcomp">Homall</NavLink>
          <h2 className="bekarcomp">
            BestOffice Mesh Chair, Ergonomic Adjustable, Back Support, Rolling
            Swivel, Black for Women & Men.
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
