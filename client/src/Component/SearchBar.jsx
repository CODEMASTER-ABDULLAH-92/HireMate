import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import {asset} from "../assets/assets"

const SearchSection = () => {
  const [query, setQuery] = useState("");
  const [filteredResults, setFilteredResults] = useState([]); // Initialize with all data

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setQuery(searchTerm);
    const results = asset.filter((item) =>
      item.heading.toLowerCase().includes(searchTerm)
    );
    setFilteredResults(results);
  };

  const checkQuery = () =>{
    if (query === "") {
      setFilteredResults([]);
    }
  }
useEffect(()=>{
  checkQuery();
},[query])


  return (
    <div className="bg-gray-900 text-white flex flex-col items-center px-4 py-10">
      {/* Title */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500 mb-6 text-center">
      <span className="text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 animate-text-shine">
        Explore Content

      </span>
      </h1>

      {/* Search Input */}
      <div className="relative w-full max-w-2xl">
        <label htmlFor="search-input" className="sr-only">
          Search
        </label>
        <input
          id="search-input"
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search here..."
          className="w-full p-4 pr-12 bg-gray-800 text-orange-300 text-lg border border-gray-700 rounded-lg outline-none focus:ring-2 focus:ring-orange-500 transition"
        />
        <Search
          className="absolute right-4 top-4 text-orange-400"
          size={24}
          aria-label="Search icon"
        />
      </div>

      {/* Search Results */}
      <div className="mt-6 w-full max-w-2xl">
        {filteredResults.length > 0 ? (
          <ul className="bg-gray-800 rounded-lg flex flex-col p-4">
            {filteredResults.map((item) => (
              <li key={item._id} className="border-b border-gray-700 last:border-none">
                <Link
                  to={item._id}
                  className="block p-2 text-lg hover:bg-gray-700 transition"
                >
                  {item.heading}
                </Link>
              </li>
            ))}
          </ul>
        ) : (
<p className="text-lg text-center text-amber-500">No, Data Found !Oops..</p>
        )}
      </div>

      {/* Dummy Text */}
      <div className="mt-8 max-w-3xl text-lg text-gray-300 leading-relaxed text-center">
        Welcome to <span className="text-orange-400 font-semibold">code365</span>, 
        your ultimate platform for learning and coding resources. Discover guides, 
        problem-solving strategies, and in-depth articles tailored to help you excel 
        in Data Structures, Algorithms, and Web Development.
      </div>

      {/* Get Started Button */}
      <Link
        to="/all"
        className="px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg shadow-md hover:scale-105 hover:shadow-lg transition-transform duration-300 mt-6"
      >
        Let's Get Started
      </Link>
    </div>
  );
};

export default SearchSection;