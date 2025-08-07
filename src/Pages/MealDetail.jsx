import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MealDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAllIngredients, setShowAllIngredients] = useState(false);
  const [showFullInstructions, setShowFullInstructions] = useState(false);

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const res = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setMeal(res.data.meals?.[0]);
      } catch (err) {
        console.error("Failed to load meal details", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMeal();
  }, [id]);

  if (loading) return <p className="text-center py-10">Loading meal details...</p>;
  if (!meal) return <p className="text-center py-10">Meal not found.</p>;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  const visibleIngredients = showAllIngredients ? ingredients : ingredients.slice(0, 8);
  const shortInstructions = meal.strInstructions.slice(0, 300);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800 dark:text-white bg-orange-50 dark:bg-orange-950 rounded-lg">
      {/* Image and Ingredients Side-by-Side */}
      <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
        <img
          src={meal.strMealThumb}
          alt={meal.strMeal}
          className="rounded-lg shadow w-full h-[320px] object-cover"
        />

        <div className="bg-white dark:bg-orange-900 p-4 rounded-lg shadow">
          <h1 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-2">
            {meal.strMeal}
          </h1>
          <p className="text-md text-gray-700 dark:text-gray-300 mb-4">
            <span className="font-semibold">Category:</span> {meal.strCategory} &nbsp;|&nbsp;
            <span className="font-semibold">Area:</span> {meal.strArea}
          </p>
          <h2 className="text-xl font-semibold mb-2">🧂 Ingredients ({ingredients.length})</h2>
          <ul className="text-sm space-y-1 max-h-64 overflow-y-auto pr-2">
            {visibleIngredients.map((item, idx) => (
              <li key={idx} className="border-b border-orange-100 py-1">{item}</li>
            ))}
          </ul>
          {ingredients.length > 8 && (
            <button
              onClick={() => setShowAllIngredients(!showAllIngredients)}
              className="mt-4 text-sm text-orange-600 dark:text-orange-300 hover:underline"
            >
              {showAllIngredients ? "Show Less" : "Show All Ingredients"}
            </button>
          )}
        </div>
      </div>

      {/* Instructions and Video Side-by-Side */}
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <div className="bg-white dark:bg-orange-900 p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">📝 Instructions</h2>
          <p className="text-sm leading-relaxed">
            {showFullInstructions ? meal.strInstructions : shortInstructions + "..."}
          </p>
          <button
            onClick={() => setShowFullInstructions(!showFullInstructions)}
            className="mt-2 text-sm text-orange-600 dark:text-orange-300 hover:underline"
          >
            {showFullInstructions ? "Show Less" : "Read More"}
          </button>
        </div>

        {meal.strYoutube && (
          <div className="bg-white dark:bg-orange-900 p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">🎥 Watch Tutorial</h2>
            <div className="aspect-video">
              <iframe
                className="w-full h-full rounded-lg"
                src={`https://www.youtube.com/embed/${meal.strYoutube.split("v=")[1]}`}
                title={meal.strMeal}
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MealDetail;
