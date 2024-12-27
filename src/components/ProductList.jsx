import React from "react";
import { toast } from "react-toastify";

const ProductList = ({ products, setProducts }) => {
  if (products.length === 0) {
    return <p className="text-gray-500">No Products Found</p>;
  }

  // Function to handle product deletion
  const handleDelete = (index) => {
    const deletedProduct = products[index].name;
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);

    // Show toast notification
    toast.success(`Product "${deletedProduct}" deleted successfully!`);
  };

  return (
    <div className="bg-red border p-4 rounded">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2">Product Name</th>
            <th className="border border-gray-300 px-4 py-2">Price</th>
            <th className="border border-gray-300 px-4 py-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-300 px-4 py-2">{product.name}</td>
              <td className="border border-gray-300 px-4 py-2">{product.price}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
