 
import SearchBar from "@/components/SearchBar.jsx";

const Hero = ({ onResults }) => {
  return (
    <section className="bg-orange-50 dark:bg-orange-950 text-gray-800 dark:text-white py-16">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-orange-600 dark:text-orange-300 mb-4">
          Discover Delicious Meals from Around the World 🌍
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto mb-8">
          Search by ingredient, category, or country. Find recipes, watch how-tos, and explore new tastes!
        </p>

        <div className="max-w-xl mx-auto">
          <SearchBar onResults={onResults} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
