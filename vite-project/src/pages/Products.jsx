import React, { useState } from "react";
import axios from "axios";

const Products = () => {
  const [product, setProduct] = useState({
    id: "",
    sku: "",
    name: "",
    price: "",
    discount: "",
    new: false,
    rating: "",
    saleCount: "",
    category: ["Parfum"],
    tag: [],
    stock: "",
    image: "", // Single string for comma-separated URLs
    shortDescription: "",
    fullDescription: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the payload, adjusting fields as needed
    const payload = {
      ...product,
      new: product.new, // Already a boolean
      tag: product.tag, // Already an array
      category: product.category, // Already an array
      image: product.image.split(",").map((img) => img.trim()), // Convert comma-separated string to array
    };

    try {
      const response = await axios.post(
        "http://localhost:4000/api/products",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      alert("Product added:", response.data);
      // Optionally reset form or show a success message
    } catch (error) {
      console.error(
        "Error adding product:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Add New Product</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>ID:</label>
          <input
            type="text"
            name="id"
            value={product.id}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>SKU:</label>
          <input
            type="text"
            name="sku"
            value={product.sku}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Product Name:</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Price:</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Discount:</label>
          <input
            type="number"
            name="discount"
            value={product.discount}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Is New:</label>
          <input
            type="checkbox"
            name="new"
            checked={product.new}
            onChange={handleChange}
            style={styles.checkbox}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Rating:</label>
          <input
            type="number"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            style={styles.input}
            min="0"
            max="5"
            step="0.1"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Sale Count:</label>
          <input
            type="number"
            name="saleCount"
            value={product.saleCount}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Tags:</label>
          <input
            type="text"
            name="tag"
            value={product.tag.join(", ")}
            onChange={(e) =>
              setProduct({ ...product, tag: e.target.value.split(", ") })
            }
            style={styles.input}
            placeholder="Comma-separated values"
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Category:</label>
          <select
            name="category"
            value={product.category[0]} // Display first category for simplicity
            onChange={(e) =>
              setProduct({ ...product, category: [e.target.value] })
            }
            style={styles.input}
          >
            <option value="Parfum">Parfum</option>
            <option value="Watches">Watches</option>
            <option value="Men's glasses">Men's glasses</option>
          </select>
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Stock:</label>
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Short Description:</label>
          <input
            type="text"
            name="shortDescription"
            value={product.shortDescription}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Full Description:</label>
          <textarea
            name="fullDescription"
            value={product.fullDescription}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Images (comma-separated URLs):</label>
          <input
            type="text"
            name="image"
            value={product.image}
            onChange={handleChange}
            style={styles.input}
            placeholder="http://example.com/image1.jpg, http://example.com/image2.jpg"
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Add Product
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "20px auto",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  header: {
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "15px",
  },
  label: {
    marginBottom: "5px",
    fontSize: "14px",
    color: "#666",
  },
  input: {
    padding: "10px",
    fontSize: "14px",
    borderRadius: "4px",
    border: "1px solid #ddd",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default Products;
