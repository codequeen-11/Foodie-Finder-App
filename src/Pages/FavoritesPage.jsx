
import { useEffect, useState } from "react";
import { getFavorites } from "@/lib/localStorage";
import axios from "axios";
import MealGrid from "@/components/MealGrid";
import { Filter } from "lucide-react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const FavoritesPage = () => {
  const [meals, setMeals] = useState([]);
  const [filteredMeals, setFilteredMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState("All");

  const handleUnfavorite = (id) => {
    const updatedMeals = meals.filter((meal) => meal.idMeal !== id);
    setMeals(updatedMeals);
    setFilteredMeals(
      categoryFilter === "All"
        ? updatedMeals
        : updatedMeals.filter((meal) => meal.strCategory === categoryFilter)
    );
  };

  const handleFilterChange = (selected) => {
    setCategoryFilter(selected);
    if (selected === "All") {
      setFilteredMeals(meals);
    } else {
      setFilteredMeals(meals.filter((meal) => meal.strCategory === selected));
    }
  };

  useEffect(() => {
    const fetchFavoriteMeals = async () => {
      setLoading(true);
      const ids = getFavorites();
      const requests = ids.map((id) =>
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      );
      const results = await Promise.all(requests);
      const mealData = results.map((res) => res.data.meals?.[0]).filter(Boolean);
      setMeals(mealData);
      setFilteredMeals(mealData);
      setLoading(false);
    };

    fetchFavoriteMeals();
  }, []);

  const uniqueCategories = [
    "All",
    ...Array.from(new Set(meals.map((meal) => meal.strCategory))).sort(),
  ];

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-orange-950">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-6">
          💖 Your Favorite Meals
        </h1>

        {meals.length > 0 && (
          <div className="mb-6">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-orange-800 text-gray-800 dark:text-white border border-gray-300 dark:border-orange-600 rounded-md shadow-sm hover:bg-orange-100 dark:hover:bg-orange-700 transition">
                  <Filter className="h-4 w-4 text-orange-600 dark:text-orange-300" />
                  {categoryFilter === "All" ? "Filter by Category" : categoryFilter}
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content className="mt-2 w-56 bg-white dark:bg-orange-800 rounded-md shadow-lg p-1 z-50">
                {uniqueCategories.map((cat) => (
                  <DropdownMenu.Item
                    key={cat}
                    onSelect={() => handleFilterChange(cat)}
                    className="px-3 py-2 text-sm text-gray-700 dark:text-white hover:bg-orange-100 dark:hover:bg-orange-700 rounded cursor-pointer"
                  >
                    {cat}
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        )}

        {loading ? (
          <p className="text-gray-600 dark:text-gray-300 text-lg animate-pulse">
            Loading your favorite meals...
          </p>
        ) : filteredMeals.length > 0 ? (
          <MealGrid meals={filteredMeals} onUnfavorite={handleUnfavorite} />
        ) : (
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            You haven't added any favorites yet. Click the 💖 on a meal card to save it!
          </p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
