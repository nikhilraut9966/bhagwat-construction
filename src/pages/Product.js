import React from "react";
import { useNavigate } from "react-router-dom";  // ✅ import navigate hook
import "./Product.css";

import cementImage from "../assets/images/cement.png"; 
import steelImage from "../assets/images/steel.png";
import bricksImage from "../assets/images/bricks.png";
import tilesImage from "../assets/images/tiles.png";
import PaintImage from "../assets/images/Paint.png";
import sandImage from "../assets/images/sand.png";
import FurnitureImage from "../assets/images/Furniture.jpg";
import popImage from "../assets/images/pop.png";

const products = [
  {
    id: 1,
    name: "Cement",
    description: "High-quality cement for strong and durable construction.",
    image: cementImage,
  },
  {
    id: 2,
    name: "Steel",
    description: "Premium grade steel for reinforced concrete structures.",
    image: steelImage,
  },
  {
    id: 3,
    name: "Bricks",
    description: "Durable bricks for walls and building foundations.",
    image: bricksImage,
  },
  {
    id: 4,
    name: "Tiles",
    description: "Stylish tiles for flooring, walls, and decoration.",
    image: tilesImage,
  },

  {
    id: 5,
    name: "Sand",
    description: "Quality sand for your home make Strong",
    image: sandImage,
  },

  {
    id: 6,
    name: "Paint",
    description: "Paint make your house as a dream",
    image: PaintImage,
  },

  {
    id: 7,
    name: "Furniture",
    description: "Beautiful home never miss furniture",
    image: FurnitureImage,
  },

  {
    id: 8,
    name: "POP",
    description: "Having high class POP design for your choice",
    image: popImage,
  },



];

const Product = () => {
  const navigate = useNavigate();

  // ✅ function to go to ProductDetails page
  const handleViewDetails = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product-section">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <div className="product-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <button
                className="btn-buy"
                onClick={() => handleViewDetails(product.id)} // ✅ working click
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
