import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EditProduct = () => {
  const [product, setProduct] = useState(null);
  const { productID } = useParams();
  const [checkData, setCheckData] = useState(true);
  const navigate = useNavigate();

  const validateInputs = () => {
    if (
      !product.title ||
      !product.brand ||
      !product.price ||
      !product.thumbnail ||
      !product.shippingInformation ||
      !product.category
    ) {
      setCheckData(false);
      alert("All fields are required.");
      return false;
    }
    setCheckData(true);
    return true;
  };
  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3000/products/${productID}`,
    }).then((data) => {
      setProduct({ ...data.data });
    });
  }, [productID]);
  function EditProduct() {
    if (!validateInputs()) return;

    axios({
      method: "PUT",
      url: `http://localhost:3000/products/${productID}`,
      data: product,
    }).then(() => {
      alert("Product Updated successfully!.");
      navigate("/products");
    });

  }

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      {!checkData && (
        <p className="text-red-500 text-center font-medium mb-4">Please Enter Valid Inputs</p>
      )}
      {product&& ["title", "brand", "price", "thumbnail", "shippingInformation", "category"].map((field) => (
        <div className="mb-4" key={field}>
          <label className="block text-sm font-medium text-gray-700 capitalize">
            {field}
          </label>
          <input
            type="text"
            value={product[field]}
            onChange={(e) => setProduct({ ...product, [field]: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
          />
        </div>
      ))}
      <button
        onClick={()=>{EditProduct()}}
        className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Edit Product
      </button>
    </div>
  );
};

export default EditProduct;
