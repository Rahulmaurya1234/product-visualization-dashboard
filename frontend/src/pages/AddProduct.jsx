import { useState } from "react";
import api from "../services/api";
import "./AddProduct.css";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
        !formData.name.trim() ||
        !formData.category.trim() ||
        !formData.price ||
        !formData.description.trim()
    ) {
        alert("Please fill all fields");
        return;
    }

  try {
    await api.post("/products", formData);

    alert("Product Added Successfully!");

    setFormData({
      name: "",
      category: "",
      price: "",
      description: "",
    });
  } catch (error) {
    console.log(error);
  }
};

  return (
  <div className="container">
    <h1 className="heading">
      Add Product
    </h1>

    <form onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        className="input"
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
      />

      <br />
      <br />

      <input
        className="input"
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
      />

      <br />
      <br />

      <textarea
        className="textarea"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <br />
      <br />

      <button
        className="button"
        type="submit"
      >
        Add Product
      </button>
    </form>
  </div>
);}

export default AddProduct;