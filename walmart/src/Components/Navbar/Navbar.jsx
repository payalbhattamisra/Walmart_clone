import { NavLink } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navl">
          <div className="process">
            <img src="https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png" alt="" />
            <p>How do you want to your items ?</p>
            <button><i className="fa-solid fa-chevron-down"></i></button>
          </div>
          <div className="location">
            <i className="fa-solid fa-location-dot"></i>
            <p>Scramento 95829</p>
          </div>
          <div className="home">
          <i className="fa-solid fa-house"></i>
            <p>Scramento Supercenter</p>
          </div>
        </div>

        <div className="navr">
        <NavLink to="/deals">Deals</NavLink>
        <NavLink to="/grocery">Grocery & Essentials</NavLink>
        <NavLink to="/easter">Easter</NavLink>
        <NavLink to="/style">Walmart Style</NavLink>
        <NavLink to="/baby-days">Baby Days</NavLink>

        </div>
      </div>
    </>
  )
}

export default Navbar