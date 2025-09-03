import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import cementImage from "../assets/images/cement.png";
import steelImage from "../assets/images/steel.png";
import bricksImage from "../assets/images/bricks.png";
import tilesImage from "../assets/images/tiles.png";
import PaintImage from "../assets/images/Paint.png";
import sandImage from "../assets/images/sand.png";
import FurnitureImage from "../assets/images/Furniture.jpg";  // new
import popImage from "../assets/images/pop.png";
import "./ProductDetails.css"; // ✅ Import CSS file

// ✅ Product list
const products = [
  {
    id: 1,
    name: "Cement",
    description: "High-quality cement for strong and durable construction.",
    image: cementImage,
    experience: "Best for foundation and concrete works",
    location: "Available nationwide",
  },
  {
    id: 2,
    name: "Steel",
    description: "Premium grade steel for reinforced concrete structures.",
    image: steelImage,
    experience: "Ideal for beams and reinforcement",
    location: "Available nationwide",
  },
  {
    id: 3,
    name: "Bricks",
    description: "Durable bricks for walls and building foundations.",
    image: bricksImage,
    experience: "Traditional & strong material",
    location: "Available nationwide",
  },
  {
    id: 4,
    name: "Tiles",
    description: "Stylish tiles for flooring, walls, and decoration.",
    image: tilesImage,
    experience: "Available in various styles & designs",
    location: "Available nationwide",
  },
   {
    id: 5,
    name: "Sand",
    description: "High quality river and crushed sand for construction.",
    image: sandImage,
    experience: "Best for plastering and concrete mix",
    location: "Available in select regions",
  },
  {
    id: 6,
    name: "Paint",
    description: "Premium paints for interior and exterior walls.",
    image: PaintImage,
    experience: "Weather-resistant and long-lasting",
    location: "Available nationwide",
  },

   {
    id: 7,
    name: "Furniture",
    description: "Modern and durable furniture for home and office.",
    image: FurnitureImage,
    experience: "Elegant designs with long-lasting quality",
    location: "Available nationwide",
  },
  {
    id: 8,
    name: "POP",
    description: "High-quality finishing materials for interiors and exteriors.",
    image: popImage,
    experience: "Perfect for the final touch in construction",
    location: "Available nationwide",
  },
];

const ProductDetails = () => {
  const { id } = useParams(); // Get product id from URL
  const navigate = useNavigate();

  const product = products.find((p) => p.id === parseInt(id)); // Match product

  if (!product) {
    return (
      <div className="details-section">
        <div className="details-container">
          <h2 className="details-title">Product not found</h2>
          <button onClick={() => navigate("/product")} className="back-btn">
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="details-section">
      <div className="details-container">
        {/* Product Image */}
        <img src={product.image} alt={product.name} className="details-img" />

        {/* Product Name */}
        <h2 className="details-title">{product.name}</h2>

        {/* Product Information */}
        <div className="details-info">
          <p>
            <strong>Location:</strong> {product.location}
          </p>
          <p>
            <strong>Description:</strong> {product.description}
          </p>
          <p>
            <strong>Experience:</strong> {product.experience}
          </p>
        </div>

        {/* Back Button */}
        <button onClick={() => navigate("/product")} className="back-btn">
          Back to Products
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
