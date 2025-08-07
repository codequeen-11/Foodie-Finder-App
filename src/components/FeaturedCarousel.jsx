import { useEffect, useState } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import MealCard from "./MealCard";

const FeaturedCarousel = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMeals = async () => {
    try {
      const requests = Array.from({ length: 6 }, () =>
        axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
      );
      const results = await Promise.all(requests);
      const fetchedMeals = results.map((res) => res.data.meals[0]);
      setMeals(fetchedMeals);
    } catch (err) {
      console.error("Error fetching featured meals", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h2 className="text-2xl font-bold text-orange-700 dark:text-orange-300 mb-6">
        🍴 Suggested For You
      </h2>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(4)
            .fill(0)
            .map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse bg-orange-100 dark:bg-orange-800 h-72 rounded-xl"
              />
            ))}
        </div>
      ) : (
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
        >
          {meals.map((meal) => (
            <SwiperSlide key={meal.idMeal}>
              <MealCard meal={meal} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default FeaturedCarousel;
