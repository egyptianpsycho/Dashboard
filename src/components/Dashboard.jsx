import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios({
      method: "GET",
      url: "http://localhost:3000/products",
    }).then((response) => {
      setProducts(response.data);
    });
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      <div className="relative flex flex-col w-full h-full overflow-scroll text-slate-300 bg-slate-800 shadow-md rounded-lg bg-clip-border">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr className="text-center">
              <th className="p-4 border-b border-slate-600 bg-slate-700">
                <p className="text-sm font-normal leading-none text-slate-300">
                  ID
                </p>
              </th>
              <th className="p-4 border-b border-slate-600 bg-slate-700">
                <p className="text-sm font-normal leading-none text-slate-300">
                  Name
                </p>
              </th>
              <th className="p-4 border-b border-slate-600 bg-slate-700">
                <p className="text-sm font-normal leading-none text-slate-300">
                  Brand
                </p>
              </th>
              <th className="p-4 border-b border-slate-600 bg-slate-700">
                <p className="text-sm font-normal leading-none text-slate-300">
                  Price
                </p>
              </th>
              <th className="p-4 border-b border-slate-600 bg-slate-700">
                <p className="text-sm font-normal leading-none text-slate-300">
                  Image
                </p>
              </th>
              <th className="p-4 border-b border-slate-600 bg-slate-700">
                <p className="text-sm font-normal leading-none text-slate-300">
                  Shipping Date
                </p>
              </th>
              <th className="p-4 border-b border-slate-600 bg-slate-700">
                <p className="text-sm font-normal leading-none text-slate-300">
                  Category
                </p>
              </th>
              <th className="p-4 border-b border-slate-600 bg-slate-700">
                <p className="text-sm font-normal leading-none text-slate-300">
                  Action
                </p>
              </th>
              <th className="p-4 border-b border-slate-600 bg-slate-700">
                <p className="text-sm font-normal leading-none text-slate-300">
                  <button onClick={()=> navigate('/addProduct')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2">
                    Add Product
                  </button>{" "}
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((data, index) => (
                <tr key={index} className="hover:bg-slate-700 text-center">
                  <td className="p-3 border-b border-slate-700">
                    <p className="text-sm text-slate-100 font-semibold">
                      {index + 1}
                    </p>
                  </td>
                  <td className="p-3 border-b border-slate-700">
                    <p className="text-sm text-slate-100 font-semibold">
                      {data.title}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <p className=" text-slate-300">
                      {data.brand ? data.brand : "N/A"}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">{data.price} </p>
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <img
                      className="w-40"
                      src={data.thumbnail}
                      alt="product image"
                    />
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                      {data.shippingInformation}{" "}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <p className="text-sm text-slate-300">
                      {capitalizeFirstLetter(data.category)}{" "}
                    </p>
                  </td>
                  <td className="p-4 border-b border-slate-700">
                    <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => navigate(`/products/${data.id}`)}
                    >
                      View
                    </button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-2"
                      onClick={() => navigate (`/editproduct/${data.id}`)}>
                      Edit
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>{" "}
    </div>
  );
};

export default Dashboard;
