import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "../redux/productsSlice";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status, dispatch]);

  if (status === "loading") {
    return <h1>Loading...</h1>;
  } else if (status === "failed") {
    return <h1 style={{ color: "white" }}>Error loading products</h1>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>
              Add to cart
            </button>
            <Link to="/checkout">Go to Checkout</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
