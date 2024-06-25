// src/ProductList.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <h2>{product.ProductName}</h2>
          <p>{product.ProductPrice}</p>
          <Link to={`/product/${product.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
