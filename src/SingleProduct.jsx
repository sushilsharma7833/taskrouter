// src/SingleProduct.jsx
import React from "react";
import { useParams } from "react-router-dom";
import "./SingleProduct.css";

const SingleProduct = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="single-product">
      <h2>{product.ProductName}</h2>
      <p>{product.ProductPrice}</p>
    </div>
  );
};

export default SingleProduct;
