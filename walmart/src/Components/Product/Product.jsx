import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Navbar/Header';
import './Product.css';
import { NavLink } from 'react-router-dom';

const products = [
  { id: 1, name: "Homall Convertible Sectional Sofa Couch, Modern Linen Fabric L-Shaped Couch 3-Seat Sofa.", image: "https://i5.walmartimages.com/seo/Homall-Convertible-Sectional-Sofa-Couch-Modern-Linen-Fabric-L-Shaped-Couch-3-Seat-Reversible-Chaise-Small-Living-Room-Apartment-Space-Dark-Gray_580e12a9-825b-4586-87df-e275ea527e67.78b035bcf5754d1e6b0f1aa872ff576a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", price: "$499.99", reviews: "⭐⭐⭐⭐☆ (4.5)" },
  { id: 2, name: "JUSTLET Sectional Sofa with Ottoman, Small L Shaped Free Combination Furniture Sets.", image: "https://i5.walmartimages.com/seo/JUSTLET-Sectional-Sofa-with-Ottoman-Small-L-Shaped-Free-Combination-Corduroy-Couch-Furniture-Sets-for-Living-Room-Beige_3520e8a8-dc82-4ff2-bf5c-1b5eb0acd6a2.d68b1659f9ea323f4f24a11835b14be1.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", price: "$399.99", reviews: "⭐⭐⭐⭐☆ (4.0)" },
  // Add more products as needed
  { id: 3, name: "Zinus 76 Harmony Indoor Fabric Sofa, Dark Gray.", image: "https://i5.walmartimages.com/seo/Zinus-Harmony-Indoor-Fabric-Sofa-Dark-Gray_6e34aeaa-bb0e-41cc-84aa-d9c11458daca.8d83b4f1c97d5d919f3f5bb36b88fdbc.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$299.99", reviews: "⭐⭐⭐⭐☆ (4.8)" },
  { id: 4, name: "DHP Cooper Reversible Sectional Sofa.", image: "https://i5.walmartimages.com/seo/DHP-Cooper-Reversible-Sectional-Sofa-Green-Velvet_1c79856c-bed4-47a0-81e3-d2b70f9d9ccb.83afe1787bef53e1abf7053037c667b2.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", price: "$199.99", reviews: "⭐⭐⭐⭐☆ (4.2)" },
  { id: 5, name: "COMHOMA Convertible Futon Sofa Bed Upholstered Futon Couch Fabric Sleeper Sofa, Gray.", image: "https://i5.walmartimages.com/seo/COMHOMA-Convertible-Futon-Sofa-Bed-Upholstered-Futon-Couch-Fabric-Sleeper-Sofa-Gray_492b9567-40b6-4f98-8dfe-222ad8667e49.260426d1d61d2db517a2eb335f716bfb.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", price: "$599.99", reviews: "⭐⭐⭐⭐☆ (4.6)" },
  { id: 6, name: "Mayview Ruthie 73 Upholstered Sofa, Charcoal Fabric.", image: "https://i5.walmartimages.com/seo/Mayview-Ruthie-Upholstered-Sofa-Charcoal-Fabric_65940440-5d10-477e-9a67-dc30de76c464.63cb7fe1f738c3e18a98c01a21a97d0e.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$499.99", reviews: "⭐⭐⭐⭐☆ (4.7)" },
  { id: 7, name: "87 Corduroy Sofa,3 Seater Sofa with Extra Deep Seats,Neche Comfy Upholstered Couch for Living Room,2 Pillows,Green.", image: "https://i5.walmartimages.com/seo/87-Corduroy-Sofa-3-Seater-Sofa-with-Extra-Deep-Seats-Neche-Comfy-Upholstered-Couch-for-Living-Room-2-Pillows-Green_15a5f04b-e374-4505-91e5-fe403e4db106.0bc81d68599ca9c2df51ff7ec978e0ef.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$399.99", reviews: "⭐⭐⭐⭐☆ (4.4)" },
  { id: 8, name: "UBesGoo Convertible Sectional Sofa with Chaise L Shaped Couch with Ottoman Reversible 3-Seat Sofa Sectional Couch Sets for Apartment Black.", image: "https://i5.walmartimages.com/seo/UBesGoo-Convertible-Sectional-Sofa-with-Chaise-L-Shaped-Couch-with-Ottoman-Reversible-3-Seat-Sofa-Sectional-Couch-Sets-for-Apartment-Black_893166e7-68b1-4eda-ad5e-783b832e95ec.4c0f3c803907ed122a32afab928e6f17.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$299.99", reviews: "⭐⭐⭐⭐☆ (4.3)" },
  { id: 9, name: "Belffin Velvet Stylish Modern Sectional L Shaped Sofa Couch with Storage Ottoman 4-seat Black.", image: "https://i5.walmartimages.com/seo/Belffin-Velvet-Stylish-Modern-Sectional-L-Shaped-Sofa-Couch-with-Storage-Ottoman-4-seat-Black_c094524a-03e7-4f39-a2b5-bc4dc096e95a.056257517235d9c598fd2555d9469953.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", price: "$199.99", reviews: "⭐⭐⭐⭐☆ (4.5)" },
  { id: 10, name: "Ktaxon Sectional Sofa Set, 110 U-Shaped Chenille Couch, 4 Seat Lounge Sleeper with Double Chaise for Living Room Beige.", image: "https://i5.walmartimages.com/seo/Ktaxon-Sectional-Sofa-Set-110-U-Shaped-Chenille-Couch-4-Seat-Lounge-Sleeper-with-Double-Chaise-for-Living-Room-Beige_1da7d01e-ec18-4684-8956-6190786814dd.649a01a05da4fa9cae0367a2af157391.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$599.99", reviews: "⭐⭐⭐⭐☆ (4.6)" }
];

function Product() {
  return (
    <>
      <div className="product">
        <Header />
        <Navbar />
        <div className="card-container-wrapper">
          {products.map(product => (
            <div key={product.id} className="card-container">
              <div className="image-container">
                <img
                  className="hero-image"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="main-content">
                 
                <p>Our collection promotes balance and calm.</p>
                <div className="price-section">
                  <h2>{product.price}</h2>
                </div>
                <button className="buy-button">Buy Now</button>
                <div className="reviews">
                  <span>{product.reviews}</span>
                </div>
              </div>
              <div className="card-attribute">
                <p>{product.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Product;
