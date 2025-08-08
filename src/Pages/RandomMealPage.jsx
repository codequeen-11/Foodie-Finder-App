import { useEffect, useState } from "react";
import axios from "axios";
import { Heart } from "lucide-react";
import useFavorites from "@/lib/useFavorites.js";
import { toast } from "sonner";

const RandomMeal = () => {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    fetchRandomMeal();
  }, []);

  const fetchRandomMeal = async () => {
    setLoading(true);
    try {
      const res = await axios.get("https://www.themealdb.com/api/json/v1/1/random.php");
      const randomMeal = res.data.meals[0];
      setMeal(randomMeal);
    } catch (err) {
      console.error("Failed to fetch random meal", err);
    } finally {
      setLoading(false);
    }
  };

  const isFavorited = (id) => favorites?.includes(id);

  const handleFavorite = () => {
    if (!meal) return;
    const wasFavorited = isFavorited(meal.idMeal);
    toggleFavorite(meal.idMeal);
    toast.success(
      wasFavorited
        ? `Removed "${meal.strMeal}" from favorites 💔`
        : `Added "${meal.strMeal}" to favorites 💖`
    );
  };

  const ingredients = [];
  if (meal) {
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];
      const measure = meal[`strMeasure${i}`];
      if (ingredient && ingredient.trim()) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
  }

  if (loading) return <p className="text-center py-10 animate-pulse">Loading random meal...</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-gray-800 dark:text-white bg-orange-50 dark:bg-orange-950 rounded-lg shadow">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-300">
          🍽️ {meal.strMeal}
        </h1>
        <button
          onClick={fetchRandomMeal}
          className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-700 transition"
        >
          🔄 Another Meal
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative">
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="rounded-lg w-full object-cover shadow-md"
          />
          <button
            onClick={handleFavorite}
            className={`absolute top-3 right-3 text-rose-500 hover:text-rose-600 transition ${isFavorited(meal.idMeal) ? "scale-110" : "opacity-80"}`}
            title="Toggle Favorite"
          >
            <Heart fill={isFavorited(meal.idMeal) ? "#f43f5e" : "none"} size={28} />
          </button>
        </div>

        <div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="bg-orange-200 dark:bg-orange-800 text-orange-900 dark:text-orange-100 px-3 py-1 rounded-full text-sm font-medium">
              Category: {meal.strCategory}
            </span>
            <span className="bg-rose-200 dark:bg-rose-800 text-rose-900 dark:text-rose-100 px-3 py-1 rounded-full text-sm font-medium">
              Area: {meal.strArea}
            </span>
          </div>

          <h2 className="mt-4 text-xl font-semibold">🧂 Ingredients</h2>
          <ul className="list-disc list-inside text-sm space-y-1 mt-2">
            {ingredients.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2">📝 Instructions</h2>
          <p className="text-sm leading-relaxed whitespace-pre-wrap">
            {meal.strInstructions}
          </p>
        </div>

        {meal.strYoutube && (
          <div>
            <h2 className="text-xl font-semibold mb-2">🎥 Watch Tutorial</h2>
            <iframe
              className="w-full aspect-video rounded shadow-md"
              src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
              title={meal.strMeal}
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomMeal;
