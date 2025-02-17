import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header className="bg-sky-200 border-b border-gray-700">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <img
                  className="w-auto h-8 lg:h-10"
                  src="dashboard.webp"
                  alt="header logl"
                />
              </a>
            </div>

            <div className="hidden md:flex md:items-center md:space-x-10">
              <button
                onClick={() => navigate("home")}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Home
              </button>
              <button
                onClick={() => navigate("products")}
                className="px-4 py-2 text-sm font-medium text-white bg-green-500 rounded-lg hover:bg-green-600 transition"
              >
                Dashboard
              </button>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;