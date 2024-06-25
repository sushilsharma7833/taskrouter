// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./ProductList";
import SingleProduct from "./SingleProduct";

const productData = [
  { id: 1, ProductName: "Iphone", ProductPrice: "$678" },
  { id: 2, ProductName: "Samsung", ProductPrice: "$099" },
  { id: 3, ProductName: "MI", ProductPrice: "$67" },
  { id: 4, ProductName: "Jio", ProductPrice: "$456" },
  { id: 5, ProductName: "One_plus", ProductPrice: "$456" },
];

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Product List</h1>
        <Routes>
          <Route path="/" element={<ProductList products={productData} />} />
          <Route
            path="/product/:id"
            element={<SingleProduct products={productData} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
