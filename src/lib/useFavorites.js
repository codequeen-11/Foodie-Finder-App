import { useEffect, useState } from "react";
import { getFavorites, toggleFavorite as toggleFavoriteStorage } from "@/lib/localStorage.js";

const useFavorites = () => {
  const [favorites, setFavorites] = useState(getFavorites());
  const [count, setCount] = useState(favorites.length);

  const refresh = () => {
    const updated = getFavorites();
    setFavorites(updated);
    setCount(updated.length);
  };

  const toggleFavorite = (id) => {
    if (!id) return;
    toggleFavoriteStorage(id);
    refresh();
  };

  useEffect(() => {
    const handleChange = () => refresh();
    window.addEventListener("favoritesUpdated", handleChange);
    return () => window.removeEventListener("favoritesUpdated", handleChange);
  }, []);

  const isFavorited = (id) => {
    if (!id) return false;
    return favorites?.includes(id);
  };

  return { favorites, count, toggleFavorite, isFavorited };
};

export default useFavorites;
