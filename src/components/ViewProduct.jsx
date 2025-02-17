import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewProduct = () => {
  const { productID } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios({
      method: "GET",
      url: `http://localhost:3000/products/${productID}`,
    }).then((data) => {
      setProduct(data.data);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {product && (
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-md w-full space-y-4">
          <img
            src={product.thumbnail}
            alt="product img"
            className="w-full h-64 object-cover rounded-xl"
          />
          <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
          <p className="text-gray-600">{product.shippingInformation}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold text-blue-600">
              ${product.price}
            </span>
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg text-sm">
              {product.category}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
