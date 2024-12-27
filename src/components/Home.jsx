import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddProductForm from "./AddProductForm";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";

const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Redirect to login page if the user is not logged in
    if (!localStorage.getItem("user")) {
      navigate("/"); // Redirect to login page if not logged in
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/"); // Redirect to login page after logging out
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg w-[90%] max-w-6xl p-8 flex flex-col gap-6">
        {/* Header Section */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Product Management
        </h1>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Add Product Form */}
          <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
              Add Product
            </h2>
            <AddProductForm products={products} setProducts={setProducts} />
          </div>

          {/* Right Section: Search, Product List, Logout */}
          <div className="flex-1 flex flex-col gap-6 bg-gray-50 p-6 rounded-lg shadow-md">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <ProductList products={filteredProducts} setProducts={setProducts} />
            <button
              onClick={handleLogout}
              className="bg-red-500 text-white mb-[3%] px-4 py-2 rounded shadow-md hover:bg-red-600 mt-auto"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
