import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="container">
    <h1>Welcome to urban e-commerce!</h1>
    <Link to="/products" style={{ color: "white", fontSize: "40px" }}>
      <h2>Go to Products</h2>
    </Link>
  </div>
);

export default HomePage;
