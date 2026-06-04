import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) return;

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

      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search-input"
      /> <br />

      {products
        .filter((product) =>
          product.name
            .toLowerCase()
            .includes(
              search.toLowerCase()
            )
        )
        .map((product) => (
          <div
            key={product._id}
            className="card"
          >
            <h3>{product.name}</h3>

            <p>
              <strong>Category:</strong>{" "}
              {product.category}
            </p>

            <p>
              <strong>Price:</strong> ₹
              {product.price}
            </p>

            <Link
              to={`/product/${product._id}`}
              className="detail-btn"
            >
              View Details
            </Link>

            <br />
            <br />

            <button
              className="delete-btn"
              onClick={() =>
                deleteProduct(
                  product._id
                )
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