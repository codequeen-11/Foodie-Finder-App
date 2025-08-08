import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MealGrid from "@/components/MealGrid.jsx";

const CategoryPage = () => {
  const { name } = useParams(); // Get category name from URL
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
      );
      setMeals(res.data.meals || []);
    };
    fetchMeals();
  }, [name]);

  return (
    <div className="min-h-screen bg-orange-50 dark:bg-orange-950">
      <div className="max-w-7xl mx-auto px-6 pt-10">
        <h1 className="text-3xl font-bold text-orange-600 dark:text-orange-300 mb-6">
          🍽️ Meals in {name} Category
        </h1>
        <MealGrid meals={meals} />
      </div>
    </div>
  );
};

export default CategoryPage;
