import { useNavigate } from "react-router-dom";
import { MdDashboardCustomize } from "react-icons/md";
import SearchProduct from "./SearchProduct";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="bg-slate-600 border-b border-gray-700">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
              <MdDashboardCustomize size={55} color="#00FFFF" />
              </a>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-10">
              <button
                onClick={() => navigate("/home")}
                className=" px-4 py-2 text-sm font-medium text-black bg-white rounded-lg transition btn"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/products")}
                className="px-4 py-2 text-sm font-medium text-black bg-white rounded-lg transition btn"
              >
                Dashboard
              </button>
              <button
                onClick={() => navigate("/addProduct")}
                className="px-4 py-2 text-sm font-medium text-black bg-white rounded-lg transition btn"
              >
                Add Product
              </button>{" "}
              <SearchProduct />
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
