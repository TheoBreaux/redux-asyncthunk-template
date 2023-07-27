import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../redux/productsSlice";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.products.cart);
  const totalPrice = cart
    .reduce((total, item) => total + item.price, 0)
    .toFixed(2);

  return (
    <div>
      <h1>Checkout</h1>
      <div className="checkout-grid">
        {cart.map((item, index) => (
          <div key={index} className="checkout-card">
            <img src={item.image} alt={item.title} />
            <div>
              <h2>{item.title}</h2>
              <p>${item.price}</p>
              <button onClick={() => dispatch(removeFromCart(item))}>
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <p>Total: ${totalPrice}</p>
      <Link to="/">Go to Home</Link>
      <br />
      <Link to="/products">Go to Products</Link>
    </div>
  );
};

export default CheckoutPage;
