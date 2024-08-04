import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>All Departments</h4>
              <ul>
                <li>
                  <NavLink to="/">about us</NavLink>
                </li>
                <li>
                  <NavLink to="/">our services</NavLink>
                </li>
                <li>
                  <NavLink to="/">privacy policy</NavLink>
                </li>
                <li>
                  <NavLink to="/">affiliate program</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>get help</h4>
              <ul>
                <li>
                  <NavLink to="/">FAQ</NavLink>
                </li>
                <li>
                  <NavLink to="/">shipping</NavLink>
                </li>
                <li>
                  <NavLink to="/">returns</NavLink>
                </li>
                <li>
                  <NavLink to="/">order status</NavLink>
                </li>
                <li>
                  <NavLink to="/">payment options</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <NavLink to="/">watch</NavLink>
                </li>
                <li>
                  <NavLink to="/">bag</NavLink>
                </li>
                <li>
                  <NavLink to="/">shoes</NavLink>
                </li>
                <li>
                  <NavLink to="/">dress</NavLink>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <NavLink to="/">
                  <i className="fab fa-facebook-f"></i>
                </NavLink>
                <NavLink to="/">
                  <i className="fab fa-twitter"></i>
                </NavLink>
                <NavLink to="/">
                  <i className="fab fa-instagram"></i>
                </NavLink>
                <NavLink to="/">
                  <i className="fab fa-linkedin-in"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="reserved">
          <p>@2024 Walmart.All right Reserved</p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
