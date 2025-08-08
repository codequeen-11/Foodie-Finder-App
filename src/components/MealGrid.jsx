
// import MealCard from "@/MealCard";
import MealCard from "@/components/MealCard";


const MealSkeleton = () => (
  <div className="animate-pulse bg-orange-100 dark:bg-orange-800 rounded-xl h-[330px] shadow" />
);

const MealGrid = ({ meals, onUnfavorite, loading = false }) => {
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <MealSkeleton key={idx} />
        ))}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {meals.map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} onUnfavorite={onUnfavorite} />
      ))}
    </div>
  );
};

export default MealGrid;
