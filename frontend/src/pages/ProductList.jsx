import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await api.get("/products");
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
  <div className="container">
    <h1 className="heading">
      Products
    </h1>

    {products.map((product) => (
      <div
        key={product._id}
        className="card"
      >
        <h3>{product.name}</h3>

        <p>
          Category:
          {product.category}
        </p>

        <p>
          Price: ₹{product.price}
        </p>

        <Link
          to={`/product/${product._id}`}
          className="detail-btn"
        >
          View Details
        </Link>

        <br />

        <button
          className="delete-btn"
          onClick={() =>
            deleteProduct(product._id)
          }
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);
}

export default ProductList;