import axios from "axios";
import { useState } from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const SearchProduct = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    if (searchQuery.length > 1) {
      setLoading(true);
      try {
        axios({
          method: "GET",
          url: `http://localhost:3000/products?q=${searchQuery}`,
        }).then((response) => {
          const filteredResults = response.data.filter((product) =>
            product.title.toLowerCase().startsWith(searchQuery.toLowerCase())
          );
          setResults(filteredResults);
          console.log(filteredResults);
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    } else {
      setResults([]);
    }
  };

  return (
    <div className="">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
        className="p-2 border border-gray-500 rounded static w-fit"
      />

      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : results.length > 0 ? (
        results.map((product) => (
          <Button
            key={product.id}
            className=" py-2 bg-white text-black cursor-pointer hover:bg-cyan-950 btn hover:text-white rounded-tr rounded-br  relative right-21 bottom-0.5"
            onClick={() => navigate(`/products/${product.id}`)}
          >
            View
          </Button>
        ))
      ) : (
        query && <p className="p-2 text-gray-500 ">No results found</p>
      )}
    </div>
  );
};

export default SearchProduct;
