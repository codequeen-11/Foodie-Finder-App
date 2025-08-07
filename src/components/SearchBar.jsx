 
import { useState } from "react";
import axios from "axios";
import { Search } from "lucide-react";

const SearchBar = ({ onResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;

    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      onResults(res.data.meals || []);
    } catch (err) {
      console.error("Search error:", err);
      onResults([]);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search for meals..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 dark:bg-orange-100 dark:text-gray-900"
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition flex items-center"
      >
        <Search size={18} className="mr-1" />
        Search
      </button>
    </div>
  );
};

export default SearchBar;
