
import { useEffect, useRef, useState } from "react";
import Hero from "@/components/Hero.jsx";
import FeaturedCarousel from "@/components/FeaturedCarousel.jsx";
import CategoryGrid from "@/components/CategoryGrid.jsx";
import MealGrid from "@/components/MealGrid.jsx";
import axios from "axios";

const Home = () => {
  const [meals, setMeals] = useState([]);
  const [searchActive, setSearchActive] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const resultsRef = useRef(null);
  const categoryRef = useRef(null);

  const handleCategorySelect = async (category) => {
    setSearchActive(false); // ✅ Reset search mode
    setNoResults(false);
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    setMeals(res.data.meals || []);

    // Scroll to MealGrid
    setTimeout(() => {
      categoryRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleSearchResults = (results) => {
    setSearchActive(true);
    setMeals(results);
    setNoResults(results.length === 0);

    // ⏬ Smooth scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleClearSearch = () => {
    setSearchActive(false);
    setMeals([]);
    setNoResults(false);
  };

  return (
    <div>
      {/* 🔍 Hero Search */}
      <Hero onResults={handleSearchResults} />

      {/* 🔍 Search Results Section */}
      {searchActive && (
        <div
          ref={resultsRef}
          className="max-w-7xl mx-auto px-6 py-10 scroll-mt-24"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-300">
              🔍 Search Results
            </h2>
            <button
              onClick={handleClearSearch}
              className="text-sm bg-rose-500 hover:bg-rose-600 text-white px-4 py-1 rounded transition"
            >
              ❌ Clear Search
            </button>
          </div>

          {/*  No Results Message */}
          {noResults ? (
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              No meals found for your search.
            </p>
          ) : (
            <MealGrid meals={meals} />
          )}
        </div>
      )}

      {/*  Show Featured + Categories if NOT searching */}
      {!searchActive && (
        <>
          <FeaturedCarousel />
             <div id="category-section">
          <CategoryGrid onCategorySelect={handleCategorySelect} />
             </div>
          {/* <MealGrid meals={meals} /> */}
        </>
      )}
    </div>
  );
};

export default Home;

 

