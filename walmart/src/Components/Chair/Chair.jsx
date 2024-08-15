import React from 'react';
import Navbar from '../Navbar/Navbar';
import Header from '../Navbar/Header';
import './Chair.css';
import { NavLink,useNavigate } from 'react-router-dom';


const products = [
  { id: 1, name: "BestOffice Mesh Chair, Ergonomic Adjustable, Back Support, Rolling Swivel, Black for Women & Men.", image: "https://cdnb.artstation.com/p/assets/images/images/049/742/253/smaller_square/athul-bhagyesh-01.jpg?1653227522", price: "$39.99", reviews: "⭐⭐⭐⭐☆ (4.5)" },
  { id: 2, name: "Better Homes & Gardens Barrel Accent Chair, Gray Linen.", image: "https://i5.walmartimages.com/seo/Better-Homes-Gardens-Barrel-Accent-Chair-Gray-Linen-Fabric-Upholstery-Adult_f01e26c6-6e51-47a7-8bf9-a3009614b465.e5007498d253cbdedfa51de0365c5f92.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$98.99", reviews: "⭐⭐⭐⭐☆ (4.0)" },
  { id: 3, name: "GTRACING GTWD-200 Gaming Chair with Footrest, Height Adjustable Office Swivel Reclining, White", image: "https://i5.walmartimages.com/seo/GTRACING-GTWD-200-Gaming-Chair-with-Footrest-Height-Adjustable-Office-Swivel-Reclining-White_43754c7c-2af5-46c4-8230-d7d14bc7d8b1.20bd7f61d36b5fb9177e86ae804c8b00.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$126.99", reviews: "⭐⭐⭐⭐☆ (4.8)" },
  { id: 4, name: "Canvas Kids' Bean Bag Chair Strut Green - ™", image: "https://i5.walmartimages.com/seo/Canvas-Kids-Bean-Bag-Chair-Strut-Green_e88c6331-f471-45db-b206-1db4dec88255.2f41e86679481726a6acb11aebc76316.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", price: "$65.95", reviews: "⭐⭐⭐⭐☆ (4.6)" },
  { id: 5, name: "BonzyHome Recliners Single Recliner Chairs for Adults, Breathable Fabric Reclining Chair Manual Sofas for Living Room (Apricot)", image: "https://i5.walmartimages.com/seo/BonzyHome-Recliners-Single-Recliner-Chairs-for-Adults-Breathable-Fabric-Reclining-Chair-Manual-Sofas-for-Living-Room-Apricot_350ba52b-98b6-4387-991b-65bd048b3681.374ef0ed637e9f578a66e6aa545d017b.webp?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$259.99", reviews: "⭐⭐⭐⭐☆ (4.7)" },
  { id: 6, name: "Angel Line Windsor Glider and Ottoman, Gray Finish with Dark Gray Cushions", image: "https://i5.walmartimages.com/seo/Angel-Line-Windsor-Glider-and-Ottoman-Gray-Finish-with-Dark-Gray-Cushions_81631f11-843a-4014-b9f0-dd6998ca55ec.d767861494ada3e094bef8e0eb54fb8b.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$139.99", reviews: "⭐⭐⭐⭐☆ (4.4)" },
  { id: 7, name: "MBBMW Modern Upholstered Accent Chair Armchair, Linen Living Room Chair, Single Sofa with Side Pocket and High Resilience Seating , Gray", image: "https://i5.walmartimages.com/seo/EASELAND-Modern-Upholstered-Accent-Chair-Armchair-Linen-Living-Room-Chair-Single-Sofa-with-Side-Pocket-and-High-Resilience-Seating-Gray_be446e60-a7b4-4df9-98bf-589f8ba28629.319fd868ea817072617e39535ae67cb6.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$149.99", reviews: "⭐⭐⭐⭐☆ (4.3)" },
  { id: 8, name: "Dtwnek Rocking Chair, Solid Wood Legs Reading Chair with Fabric Upholstered, Armchair for Living Rooms, Bedrooms, Offices", image: "https://i5.walmartimages.com/seo/Dtwnek-Rocking-Chair-Solid-Wood-Legs-Reading-Chair-with-Fabric-Upholstered-Armchair-for-Living-Rooms-Bedrooms-Offices_74c78288-5545-464a-835c-c76e406a34c9.af074e250f418be83cabf7f4d5d932e0.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$163.99", reviews: "⭐⭐⭐⭐☆ (4.5)" },
  { id: 9, name: "International Caravan Swivel Rocker Chair with Solid Cushion", image: "https://i5.walmartimages.com/seo/International-Caravan-Swivel-Rocker-Chair-with-Solid-Cushion_871f8767-5f3f-43b7-8188-f342f55e8bb8.0204b266b514922dfdb27ab347b673cc.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF", price: "$275.99", reviews: "⭐⭐⭐⭐☆ (4.2)" },
  { id: 10, name: "Bme 360 Swivel Comfy Papasan Chair with Fabric Cushion, Metal Frame, Black Cushion - Black Base", image: "https://i5.walmartimages.com/seo/Bme-Papasan-Chair-Soft-Thick-Density-Fabric-Cushion-Steel-Frame-with-360-Degree-Swivel-Black_38bb9c45-2c6e-4bb3-bb6f-1e318e429803.c2d832e3e02e9b4c033e2582e18ef204.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF", price: "$155.32", reviews: "⭐⭐⭐⭐☆ (4.2)" },
];
function Chair() {
  const navigate = useNavigate();

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
                <button className="buy-button"
                onClick={()=>{
                  if (product.id===1){
                    navigate("/Sofadisplay")
                  }
                }}

                // onClick={() => {
                //   navigate(`/Sofadisplay/${product.id}`); // navigate to a route with the product ID
                // }}
                >Buy Now</button>
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

export default Chair;
