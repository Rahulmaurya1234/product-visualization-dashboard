import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async () => {
    try {
      const res = await api.put(
        `/products/${id}`,
        product
      );

      setProduct(res.data);
      setIsEditing(false);

      alert("Product Updated Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  if (!product) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="product-detail-container">
      <h1 className="product-title">
        Product Detail
      </h1>

      {!isEditing ? (
        <div className="product-info">
          <h2>{product.name}</h2>

          <p>
            <strong>Category:</strong>{" "}
            {product.category}
          </p>

          <p>
            <strong>Price:</strong> ₹
            {product.price}
          </p>

          <p>
            <strong>Description:</strong>{" "}
            {product.description}
          </p>

          <button
            className="update-btn"
            onClick={() =>
              setIsEditing(true)
            }
          >
            Update Product
          </button>
        </div>
      ) : (
        <div>
          <input
            className="product-input"
            type="text"
            value={product.name}
            onChange={(e) =>
              setProduct({
                ...product,
                name: e.target.value,
              })
            }
          />

          <input
            className="product-input"
            type="text"
            value={product.category}
            onChange={(e) =>
              setProduct({
                ...product,
                category:
                  e.target.value,
              })
            }
          />

          <input
            className="product-input"
            type="number"
            value={product.price}
            onChange={(e) =>
              setProduct({
                ...product,
                price: e.target.value,
              })
            }
          />

          <textarea
            className="product-textarea"
            value={product.description}
            onChange={(e) =>
              setProduct({
                ...product,
                description:
                  e.target.value,
              })
            }
          />

          <button
            className="save-btn"
            onClick={updateProduct}
          >
            Save Changes
          </button>

          <button
            className="cancel-btn"
            onClick={() =>
              setIsEditing(false)
            }
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductDetail;