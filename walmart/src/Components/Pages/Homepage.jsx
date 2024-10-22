import "./Homepage.css";
import { NavLink } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="hompparent">
        <div className="hompdiv1">
          <h2>Floor care for so much less</h2>
          <NavLink to="/deals">Shop now</NavLink>
          <img
            src="https://github.com/B2Kumar03/homepageImage/blob/main/shark-removebg-preview.png?raw=true"
            alt=""
          />
        </div>
        <div className="hompdiv2">
          <h2>Top styles,low Prices</h2>
          <h2>$45</h2>
          <NavLink to="/deals">Shop now</NavLink>
          <img
            src="https://github.com/B2Kumar03/homepageImage/blob/main/woman-removebg-preview.png?raw=true"
            alt=""
          />
        </div>
        <div className="hompdiv3">
          <h2>Let&apos;s play under $25</h2>
          <NavLink to="/deals">Shop now</NavLink>
          <img
            src="https://github.com/B2Kumar03/homepageImage/blob/main/toys-removebg-preview.png?raw=true"
            alt=""
          />
        </div>
        <div className="hompdiv4">
          <img src="./img/home.png" alt="" />
        </div>
        <div className="hompdiv5">
          <div className="hompdiv51">
              <h2>Budget friendly furniture</h2>
              <NavLink to="/deals">Shop now</NavLink>
            <img
              src="https://i5.walmartimages.com/seo/Better-Homes-Gardens-Oaklee-2-Drawer-Nightstand-for-bedroom-Charcoal-Finish_4daaa94e-a1d5-45ec-8893-092a1289c2dd.3e44901795490ec5efab0fc6859d5192.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
              alt=""
            />
          </div>
          <div className="hompdiv52">
            <h2>Up to 40% off</h2>
            <NavLink to="/deals">Shop now</NavLink>
            <img
              src="https://github.com/B2Kumar03/homepageImage/blob/main/lamp-removebg-preview.png?raw=true"
              alt=""
            />
          </div>
        </div>
        <div className="hompdiv6">
          <h2>Enjoy Free Same-day delivery low prices !</h2>
          <p>Apply tearm</p>
          <NavLink to="/deals">Join walmart+</NavLink>
          <img
            src="https://github.com/B2Kumar03/homepageImage/blob/main/walmartlogo.png?raw=true"
            alt=""
          />
        </div>
        <div className="hompdiv7">
          <h2>Save on personal care</h2>
          <NavLink to="/deals">Shop now</NavLink>
          <img
            src="https://github.com/B2Kumar03/homepageImage/blob/main/savingss-removebg-preview.png?raw=true"
            alt=""
          />
        </div>
        <div className="hompdiv8">
          <h2>Apple savings up to $150 off</h2>
          <NavLink to="/deals">Shop now</NavLink>
          <img
            src="https://github.com/B2Kumar03/homepageImage/blob/main/smartphone2-removebg-preview.png?raw=true"
            alt=""
          />
        </div>
        <div className="hompdiv9">
          <img
            src="https://github.com/B2Kumar03/homepageImage/blob/main/wholeContent.png?raw=true"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
