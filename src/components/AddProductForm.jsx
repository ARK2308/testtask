import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProductForm = ({ products, setProducts }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = (e) => {
    e.preventDefault();
    if (!name || !price) {
      toast.error("Please fill out all fields!");
      return;
    }
    if (products.some((product) => product.name === name)) {
      toast.warn("Product already exists!");
      return;
    }
    setProducts([...products, { name, price }]);
    setName("");
    setPrice("");
    toast.success("Product added successfully!");
  };

  return (
    <div className="max-w-md mx-auto">
      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      <form onSubmit={addProduct} className="border p-4 rounded bg-white">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
        <div className="mb-4">
          <label htmlFor="productName" className="block mb-2 font-medium">
            Product Name
          </label>
          <input
            type="text"
            id="productName"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2 font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="p-2 border rounded w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded w-full"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
