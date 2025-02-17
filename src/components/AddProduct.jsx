import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [data, setData] = useState({
    title: "",
    brand: "",
    price: "",
    thumbnail: "",
    shippingInformation: "",
    category: "",
  });
  const [checkData, setCheckData] = useState(false);

  const validateInputs = () => {
    if (
      !data.title ||
      !data.brand ||
      !data.price ||
      !data.thumbnail ||
      !data.shippingInformation ||
      !data.category
    ) {
      setCheckData(false);
      alert("All fields are required.");
      return false;
    }
    setCheckData(true);
    return true;
  };

  const addProduct = () => {
    if (!validateInputs()) return;

    axios({
      method: "POST",
      url: "http://localhost:3000/products",
      data: data,
    }).then(() => {
      alert("All Product added successfully!.");
    });
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      {!checkData && (
        <p className="text-red-500 text-center font-medium mb-4">Please Enter Valid Inputs</p>
      )}
      {["title", "brand", "price", "thumbnail", "shippingInformation", "category"].map((field) => (
        <div className="mb-4" key={field}>
          <label className="block text-sm font-medium text-gray-700 capitalize">
            {field}
          </label>
          <input
            type="text"
            value={data[field]}
            onChange={(e) => setData({ ...data, [field]: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
          />
        </div>
      ))}
      <button
        onClick={addProduct}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
