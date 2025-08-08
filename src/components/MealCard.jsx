 
import { Link } from "react-router-dom";
import { Heart, HeartOff, Utensils } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils"
import { getFavorites, toggleFavorite, isFavorited } from "@/lib/LocalStorage";
import { toast } from "sonner";

const MealCard = ({ meal, onUnfavorite }) => {
  const [favorited, setFavorited] = useState(false);

  useEffect(() => {
    setFavorited(isFavorited(meal.idMeal));
  }, [meal.idMeal]);

const handleFavorite = (e) => {
  e.preventDefault();

  if (favorited) {
    toast.warning(`“${meal.strMeal}” is already in your favorites.`, {
      action: {
        label: "Remove",
        onClick: () => {
          toggleFavorite(meal.idMeal);
          setFavorited(false);
          if (onUnfavorite) onUnfavorite(meal.idMeal);
          toast.error(`Removed “${meal.strMeal}” from favorites 💔`);
        },
      },
    });
  } else {
    toggleFavorite(meal.idMeal);
    setFavorited(true);
    toast.success(`Added “${meal.strMeal}” to favorites 💖`);
  }
};

  

  return (
    <Link
      to={`/meal/${meal.idMeal}`}
      className="relative bg-orange-50 dark:bg-orange-900 border border-orange-100 dark:border-orange-700 rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
    >
      {/* Favorite Button (top-right corner) */}
      <button
        onClick={handleFavorite}
        className="absolute top-2 right-2 bg-white dark:bg-orange-800 p-2 rounded-full shadow hover:scale-105 transition z-10"
      >
        {favorited ? (
          <Heart className="text-rose-500 fill-rose-500" size={18} />
        ) : (
          <Heart className="text-gray-400" size={18} />
        )}
      </button>

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg font-semibold text-orange-700 dark:text-orange-200 mb-2">
            {meal.strMeal}
          </h3>

          <div className="flex flex-wrap gap-2 text-sm mb-4">
            {meal.strCategory && (
              <span className="bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-200 px-2 py-1 rounded-full">
                🍽️ {meal.strCategory}
              </span>
            )}
            {meal.strArea && (
              <span className="bg-orange-100 dark:bg-orange-800 text-orange-600 dark:text-orange-200 px-2 py-1 rounded-full">
                🌍 {meal.strArea}
              </span>
            )}
          </div>
        </div>

        <div className="mt-auto">
          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg flex justify-center items-center gap-2 transition">
            <Utensils size={18} />
            View Recipe
          </button>
        </div>
      </div>
    </Link>
  );
};

export default MealCard;  
