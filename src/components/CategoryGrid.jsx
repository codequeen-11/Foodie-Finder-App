import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const CategoryGrid = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const data = await res.json();
      setCategories(data.categories || []);
    };
    fetchCategories();
  }, []);

  return (
    <section className="bg-orange-50 dark:bg-orange-950 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 dark:text-orange-300 mb-6">
          ⭐ Popular Categories
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
  to={`/category/${cat.strCategory}`}
  key={cat.idCategory}
  className="bg-orange-100 dark:bg-orange-900 rounded-lg overflow-hidden shadow hover:shadow-md transition"
>
  <img
    src={cat.strCategoryThumb}
    alt={cat.strCategory}
    className="w-full h-32 object-cover"
  />
  <div className="p-3 text-center font-medium text-orange-800 dark:text-orange-200">
    {cat.strCategory}
  </div>
</Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
