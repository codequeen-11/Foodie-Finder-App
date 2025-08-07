// src/pages/FavoritesPage.jsx
// import { useEffect, useState } from "react";
// import axios from "axios";
// import MealGrid from "../components/MealGrid";
// import { getFavorites } from "@/lib/localStorage";

// const FavoritesPage = () => {
//   const [meals, setMeals] = useState([]);

//   useEffect(() => {
//     const fetchFavoriteMeals = async () => {
//       const ids = getFavorites();
//       const requests = ids.map((id) =>
//         axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//       );
//       const handleUnfavorite = (id) => {
//   setMeals((prev) => prev.filter((meal) => meal.idMeal !== id));
// };
//       const results = await Promise.all(requests);
//       const mealData = results.map((res) => res.data.meals?.[0]).filter(Boolean);
//       setMeals(mealData);
//     };

//     fetchFavoriteMeals();
//   }, []);

//   return (
//     <div className="min-h-screen bg-orange-50 dark:bg-orange-950">
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h1 className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-6">
//           💖 Your Favorite Meals
//         </h1>

//         {meals.length > 0 ? (
//         //   <MealGrid meals={meals} />
          
// <MealGrid meals={meals} onUnfavorite={handleUnfavorite} />
//         ) : (
//           <p className="text-gray-600 dark:text-gray-300 text-lg">
//             You haven't added any favorites yet. Click the 💖 on a meal card to save it!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;

// import { useEffect, useState } from "react";
// import axios from "axios";
// import MealGrid from "../components/MealGrid";
// import { getFavorites } from "@/lib/localStorage";

// const FavoritesPage = () => {
//   const [meals, setMeals] = useState([]);

//   // ✅ Move handleUnfavorite here
//   const handleUnfavorite = (id) => {
//     setMeals((prev) => prev.filter((meal) => meal.idMeal !== id));
//   };

//   useEffect(() => {
//     const fetchFavoriteMeals = async () => {
//       const ids = getFavorites();
//       const requests = ids.map((id) =>
//         axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//       );
//       const results = await Promise.all(requests);
//       const mealData = results.map((res) => res.data.meals?.[0]).filter(Boolean);
//       setMeals(mealData);
//     };

//     fetchFavoriteMeals();
//   }, []);

//   return (
//     <div className="min-h-screen bg-orange-50 dark:bg-orange-950">
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h1 className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-6">
//           💖 Your Favorite Meals
//         </h1>

//         {meals.length > 0 ? (
//           <MealGrid meals={meals} onUnfavorite={handleUnfavorite} />
//         ) : (
//           <p className="text-gray-600 dark:text-gray-300 text-lg">
//             You haven't added any favorites yet. Click the 💖 on a meal card to save it!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import MealGrid from "../components/MealGrid";
// import { getFavorites } from "@/lib/localStorage";
// import { Loader2 } from "lucide-react"; // You can use any loader icon or spinner

// const FavoritesPage = () => {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true); // ⬅️ add loading state

//   const handleUnfavorite = (id) => {
//     setMeals((prev) => prev.filter((meal) => meal.idMeal !== id));
//   };

//   useEffect(() => {
//     const fetchFavoriteMeals = async () => {
//       setLoading(true);
//       const ids = getFavorites();

//       try {
//         const requests = ids.map((id) =>
//           axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//         );
//         const results = await Promise.all(requests);
//         const mealData = results
//           .map((res) => res.data.meals?.[0])
//           .filter(Boolean);
//         setMeals(mealData);
//       } catch (err) {
//         console.error("Failed to fetch favorite meals", err);
//       } finally {
//         setLoading(false); // ✅ hide loader when done
//       }
//     };

//     fetchFavoriteMeals();
//   }, []);

//   return (
//     <div className="min-h-screen bg-orange-50 dark:bg-orange-950">
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h1 className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-6">
//           💖 Your Favorite Meals
//         </h1>

//         {loading ? (
//           <div className="flex justify-center py-20">
//             <Loader2 className="animate-spin text-orange-500" size={40} />
//           </div>
//         ) : meals.length > 0 ? (
//           <MealGrid meals={meals} onUnfavorite={handleUnfavorite} />
//         ) : (
//           <p className="text-gray-600 dark:text-gray-300 text-lg">
//             You haven't added any favorites yet. Click the 💖 on a meal card to save it!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import MealGrid from "../components/MealGrid";
// import { getFavorites } from "@/lib/localStorage";
// import { Loader2 } from "lucide-react"; // You can use any loader icon or spinner

// const FavoritesPage = () => {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true); // ⬅️ add loading state

//   const handleUnfavorite = (id) => {
//     setMeals((prev) => prev.filter((meal) => meal.idMeal !== id));
//   };

//   useEffect(() => {
//     const fetchFavoriteMeals = async () => {
//       setLoading(true);
//       const ids = getFavorites();

//       try {
//         const requests = ids.map((id) =>
//           axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//         );
//         const results = await Promise.all(requests);
//         const mealData = results
//           .map((res) => res.data.meals?.[0])
//           .filter(Boolean);
//         setMeals(mealData);
//       } catch (err) {
//         console.error("Failed to fetch favorite meals", err);
//       } finally {
//         setLoading(false); // ✅ hide loader when done
//       }
//     };

//     fetchFavoriteMeals();
//   }, []);

//   return (
//     <div className="min-h-screen bg-orange-50 dark:bg-orange-950">
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h1 className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-6">
//           💖 Your Favorite Meals
//         </h1>

//         {loading ? (
//           <div className="flex justify-center py-20">
//             <Loader2 className="animate-spin text-orange-500" size={40} />
//           </div>
//         ) : meals.length > 0 ? (
//           <MealGrid meals={meals} onUnfavorite={handleUnfavorite} />
//         ) : (
//           <p className="text-gray-600 dark:text-gray-300 text-lg">
//             You haven't added any favorites yet. Click the 💖 on a meal card to save it!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;



// import { useEffect, useState } from "react";
// import axios from "axios";
// import MealGrid from "../components/MealGrid";
// import { getFavorites } from "@/lib/localStorage";

// const FavoritesPage = () => {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true); // ⬅️ Add loading state

//   const handleUnfavorite = (id) => {
//     setMeals((prev) => prev.filter((meal) => meal.idMeal !== id));
//   };

//   useEffect(() => {
//     const fetchFavoriteMeals = async () => {
//       setLoading(true); // Start loading
//       try {
//         const ids = getFavorites();
//         if (ids.length === 0) {
//           setMeals([]);
//           return;
//         }

//         const requests = ids.map((id) =>
//           axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//         );
//         const results = await Promise.all(requests);
//         const mealData = results
//           .map((res) => res.data.meals?.[0])
//           .filter(Boolean);
//         setMeals(mealData);
//       } catch (error) {
//         console.error("Failed to fetch favorites", error);
//       } finally {
//         setLoading(false); // Done loading
//       }
//     };

//     fetchFavoriteMeals();
//   }, []);

//   return (
//     <div className="min-h-screen bg-orange-50 dark:bg-orange-950">
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h1 className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-6">
//           💖 Your Favorite Meals
//         </h1>

//         <MealGrid meals={meals} onUnfavorite={handleUnfavorite} loading={loading} />
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;


// import { useEffect, useState } from "react";
// import axios from "axios";
// import MealGrid from "../components/MealGrid";
// import { getFavorites, clearFavorites } from "@/lib/localStorage";
// import { toast } from "sonner"; // ✅ Add toast for feedback

// const FavoritesPage = () => {
//   const [meals, setMeals] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handleUnfavorite = (id) => {
//     setMeals((prev) => prev.filter((meal) => meal.idMeal !== id));
//   };

//   const handleClearAll = () => {
//     clearFavorites();
//     setMeals([]);
//     toast.error("All favorites cleared 💔");
//   };

//   useEffect(() => {
//     const fetchFavoriteMeals = async () => {
//       setLoading(true);
//       try {
//         const ids = getFavorites();
//         if (ids.length === 0) {
//           setMeals([]);
//           return;
//         }

//         const requests = ids.map((id) =>
//           axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//         );
//         const results = await Promise.all(requests);
//         const mealData = results.map((res) => res.data.meals?.[0]).filter(Boolean);
//         setMeals(mealData);
//       } catch (error) {
//         console.error("Failed to fetch favorites", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchFavoriteMeals();
//   }, []);

//   return (
//     <div className="min-h-screen bg-orange-50 dark:bg-orange-950">
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold text-orange-700 dark:text-orange-300">
//             💖 Your Favorite Meals
//           </h1>

//           {meals.length > 0 && (
//             <button
//               onClick={handleClearAll}
//               className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
//             >
//               🗑️ Clear All
//             </button>
//           )}
//         </div>

//         <MealGrid meals={meals} onUnfavorite={handleUnfavorite} loading={loading} />
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;


// import { useEffect, useState } from "react";
// import { getFavorites } from "@/lib/localStorage";
// import axios from "axios";
// import MealGrid from "../components/MealGrid";

// const FavoritesPage = () => {
//   const [meals, setMeals] = useState([]);
//   const [filteredMeals, setFilteredMeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [categoryFilter, setCategoryFilter] = useState("All");

//   const handleUnfavorite = (id) => {
//     const updatedMeals = meals.filter((meal) => meal.idMeal !== id);
//     setMeals(updatedMeals);
//     setFilteredMeals(
//       categoryFilter === "All"
//         ? updatedMeals
//         : updatedMeals.filter((meal) => meal.strCategory === categoryFilter)
//     );
//   };

//   const handleFilterChange = (e) => {
//     const selected = e.target.value;
//     setCategoryFilter(selected);
//     if (selected === "All") {
//       setFilteredMeals(meals);
//     } else {
//       setFilteredMeals(meals.filter((meal) => meal.strCategory === selected));
//     }
//   };

//   useEffect(() => {
//     const fetchFavoriteMeals = async () => {
//       setLoading(true);
//       const ids = getFavorites();
//       const requests = ids.map((id) =>
//         axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//       );
//       const results = await Promise.all(requests);
//       const mealData = results.map((res) => res.data.meals?.[0]).filter(Boolean);
//       setMeals(mealData);
//       setFilteredMeals(mealData);
//       setLoading(false);
//     };

//     fetchFavoriteMeals();
//   }, []);

//   const uniqueCategories = [
//     "All",
//     ...Array.from(new Set(meals.map((meal) => meal.strCategory))).sort(),
//   ];

//   return (
//     <div className="min-h-screen bg-orange-50 dark:bg-orange-950">
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h1 className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-6">
//           💖 Your Favorite Meals
//         </h1>

//         {meals.length > 0 && (
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
//               Filter by Category:
//             </label>
//             <select
//               value={categoryFilter}
//               onChange={handleFilterChange}
//               className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-orange-800 text-gray-800 dark:text-white"
//             >
//               {uniqueCategories.map((cat) => (
//                 <option key={cat} value={cat}>
//                   {cat}
//                 </option>
//               ))}
//             </select>
//           </div>
//         )}

//         {loading ? (
//           <p className="text-gray-600 dark:text-gray-300 text-lg animate-pulse">
//             Loading your favorite meals...
//           </p>
//         ) : filteredMeals.length > 0 ? (
//           <MealGrid meals={filteredMeals} onUnfavorite={handleUnfavorite} />
//         ) : (
//           <p className="text-gray-600 dark:text-gray-300 text-lg">
//             You haven't added any favorites yet. Click the 💖 on a meal card to save it!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;


// import { useEffect, useState } from "react";
// import { getFavorites } from "@/lib/localStorage";
// import axios from "axios";
// import MealGrid from "../components/MealGrid";
// import { Filter } from "lucide-react";

// const FavoritesPage = () => {
//   const [meals, setMeals] = useState([]);
//   const [filteredMeals, setFilteredMeals] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [categoryFilter, setCategoryFilter] = useState("All");

//   const handleUnfavorite = (id) => {
//     const updatedMeals = meals.filter((meal) => meal.idMeal !== id);
//     setMeals(updatedMeals);
//     setFilteredMeals(
//       categoryFilter === "All"
//         ? updatedMeals
//         : updatedMeals.filter((meal) => meal.strCategory === categoryFilter)
//     );
//   };

//   const handleFilterChange = (e) => {
//     const selected = e.target.value;
//     setCategoryFilter(selected);
//     if (selected === "All") {
//       setFilteredMeals(meals);
//     } else {
//       setFilteredMeals(meals.filter((meal) => meal.strCategory === selected));
//     }
//   };

//   useEffect(() => {
//     const fetchFavoriteMeals = async () => {
//       setLoading(true);
//       const ids = getFavorites();
//       const requests = ids.map((id) =>
//         axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
//       );
//       const results = await Promise.all(requests);
//       const mealData = results.map((res) => res.data.meals?.[0]).filter(Boolean);
//       setMeals(mealData);
//       setFilteredMeals(mealData);
//       setLoading(false);
//     };

//     fetchFavoriteMeals();
//   }, []);

//   const uniqueCategories = [
//     "All",
//     ...Array.from(new Set(meals.map((meal) => meal.strCategory))).sort(),
//   ];

//   return (
//     <div className="min-h-screen bg-orange-50 dark:bg-orange-950">
//       <div className="max-w-7xl mx-auto px-6 py-10">
//         <h1 className="text-3xl font-bold text-orange-700 dark:text-orange-300 mb-6">
//           💖 Your Favorite Meals
//         </h1>

//         {meals.length > 0 && (
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 flex items-center gap-2">
//               <Filter className="h-4 w-4 text-orange-600 dark:text-orange-300" />
//               Filter by Category:
//             </label>
//             <div className="relative w-full max-w-xs">
//               <select
//                 value={categoryFilter}
//                 onChange={handleFilterChange}
//                 className="appearance-none w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-orange-800 text-gray-800 dark:text-white focus:ring-2 focus:ring-orange-500 focus:outline-none pr-8"
//               >
//                 {uniqueCategories.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500 dark:text-gray-300">
//                 <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
//                   <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         )}

//         {loading ? (
//           <p className="text-gray-600 dark:text-gray-300 text-lg animate-pulse">
//             Loading your favorite meals...
//           </p>
//         ) : filteredMeals.length > 0 ? (
//           <MealGrid meals={filteredMeals} onUnfavorite={handleUnfavorite} />
//         ) : (
//           <p className="text-gray-600 dark:text-gray-300 text-lg">
//             You haven't added any favorites yet. Click the 💖 on a meal card to save it!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FavoritesPage;


import { useEffect, useState } from "react";
import { getFavorites } from "@/lib/localStorage";
import axios from "axios";
import MealGrid from "../components/MealGrid";
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
