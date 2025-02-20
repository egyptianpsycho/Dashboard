import { useState, useEffect } from "react";
import axios from "axios";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Dashboard = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const fetchProducts = () => {
    axios({
      method: "GET",
      url: "http://localhost:3000/products",
    }).then((response) => {
      setProducts(response.data);
    });
  };
  useEffect(() => {
    fetchProducts();
  }, []);

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const deleteProduct = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "DELETE",
          url: `http://localhost:3000/products/${id}`,
        }).then(() => {
          fetchProducts();
        });
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
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
                    
                    <div className="flex w-max flex-col gap-4 cursor-pointer conta">
                      <ButtonGroup>
                        <Button
                        className="cursor-pointer hover:bg-fuchsia-100 btn hover:text-black"
                          onClick={() => navigate(`/products/${data.id}`)}
                        >
                          View
                        </Button>
                        <Button
                          className="mx-1 cursor-pointer hover:bg-blue-950 btn"
                          onClick={() => navigate(`/editproduct/${data.id}`)}
                        >
                          Update
                        </Button>
                        <Button
                          className="cursor-pointer hover:bg-red-950 btn"
                          onClick={() => deleteProduct(data.id)}>
                          Delete
                        </Button>
                      </ButtonGroup>
                    </div>
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
