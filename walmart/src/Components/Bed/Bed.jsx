import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Navbar/Header';
import './Bed.css';
import { NavLink } from 'react-router-dom';

const products = [
  { id: 1, name: "Serta 10 Cooling Gel Memory Foam Mattress in a Box, Full", image: "https://i5.walmartimages.com/seo/Serta-EZ-Tote-10-Cooling-Gel-Memory-Foam-Mattress-in-a-Box-Full_f392f575-f8a9-4cdf-9422-99f7d0cd30ae.3fcc584b62e639d65a833851f84724ad.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", price: "$319.99", reviews: "⭐⭐⭐⭐☆ (4.5)" },
  { id: 2, name: "4 EVER WINNER Twin Size Bed Frame with Headboard, Black Metal Bed Frame, Heavy Duty, No Box Spring Needed, Black", image: "https://i5.walmartimages.com/seo/4-EVER-WINNER-Twin-Size-Bed-Frame-with-Headboard-Black-Metal-Bed-Frame-Heavy-Duty-No-Box-Spring-Needed-Black_b0a8032c-8a5c-483e-845a-def92fedcd2b.7ce2ac87d33f0a6f23bc0b4c99392d02.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$69.99", reviews: "⭐⭐⭐⭐☆ (4.0)" },
  { id: 3, name: "Homfa Full Size Metal Bed Frame, Upholstered Platform Bed Frame with Velvet Tufted Headboard, Gold & Black", image: "https://i5.walmartimages.com/seo/Homfa-Full-Size-Metal-Bed-Frame-Upholstered-Platform-Bed-Frame-with-Velvet-Tufted-Headboard-Gold-Black_f91e4181-98df-4f10-bb1e-900172246504.a6c55d110f1aa6b4d2c8fcd3f58a2ba6.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$117.99", reviews: "⭐⭐⭐⭐☆ (4.8)" },
  { id: 4, name: "Zinus Figari 39 Bamboo and Metal Platform Bed Frame, Slatted Headboard, Queen", image: "https://i5.walmartimages.com/seo/Zinus-Figari-39-Bamboo-and-Metal-Platform-Bed-Frame-Slatted-Headboard-Queen_7a1df95e-2a08-4a1e-9441-029396f4867d.1edd19d63cbf627ff1c8e369c23caee5.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$70.95", reviews: "⭐⭐⭐⭐☆ (4.6)" },
  { id: 5, name: "Sifurni Queen Size Metal Platform Bed Frame with Vintage Victorian Headboard & Footboard, Black", image: "https://i5.walmartimages.com/seo/Sifurni-Queen-Size-Metal-Platform-Bed-Frame-with-Vintage-Victorian-Headboard-Footboard-Black_481f3829-dfaf-47c6-bc7a-5dfd0a462cce.44e4f5f36428d1d3bf2dac5ef229f990.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$136.99", reviews: "⭐⭐⭐⭐☆ (4.7)" },
  { id: 6, name: "California King Size Floating Bed Frame with LED Lights,Cal King Metal Platform Bed, No Box Spring Needed, Easy to Assemble", image: "https://i5.walmartimages.com/seo/California-King-Size-Floating-Bed-Frame-with-LED-Lights-Cal-King-Metal-Platform-Bed-No-Box-Spring-Needed-Easy-to-Assemble_500b56e5-b215-488c-aa6b-9ca5ca734743.e8e1d29956a88131b58983c453307fef.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", price: "$120.99", reviews: "⭐⭐⭐⭐☆ (4.4)" },
  { id: 7, name: "Dark Walnut Wood Panel Bed in Queen Size", image: "https://i5.walmartimages.com/seo/Dark-Walnut-Wood-Panel-Bed-in-Queen-Size_a3bd4441-facc-4180-8115-c7cab5f143a0.d39acd78db99b56836343c7847125ba7.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$248.99", reviews: "⭐⭐⭐⭐☆ (4.3)" },
  { id: 8, name: "Mr. Kate Daphne Upholstered Bed with Headboard and Modern Platform Frame, Queen, Ivory Velvet", image: "https://i5.walmartimages.com/seo/Mr-Kate-Daphne-Upholstered-Bed-with-Headboard-and-Modern-Platform-Frame-Queen-Ivory-Velvet_11d187e7-8be0-42f1-8a57-6fbae5a1e1a4.c774f7be291ad0ff6a1c40d60718c5a2.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$289.99", reviews: "⭐⭐⭐⭐☆ (4.5)" },
  { id: 9, name: "Bliss Navy Velvet King Bed (3 Boxes)-Color:Navy Velvet,Style:Contemporary", image: "https://i5.walmartimages.com/seo/Bliss-Navy-Velvet-King-Bed-3-Boxes-Color-Navy-Velvet-Style-Contemporary_69b3762a-6a3c-42f0-827a-63d37836831f.9b15746b6cc5084e7276d4638bc4f0c8.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$1275.99", reviews: "⭐⭐⭐⭐☆ (4.2)" },
  { id: 10, name: "ijuicy King Size Platform Bed Frame with 4 Storage Drawers, Upholstered Modern Velvet Bed Frame with Adjustable Headboard(Dark Grey)", image: "https://i5.walmartimages.com/seo/ijuicy-King-Size-Platform-Bed-Frame-with-4-Storage-Drawers-Upholstered-Modern-Velvet-Bed-Frame-with-Adjustable-Headboard-Dark-Grey_1ed5cfdf-de1c-4f3e-a771-092022d89815.aad976445e83463ac985eb72adba32c4.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$265.32", reviews: "⭐⭐⭐⭐☆ (4.2)" },
];
function Bed() {
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

export default Bed;
