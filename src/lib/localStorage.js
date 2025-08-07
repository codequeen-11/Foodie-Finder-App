const FAVORITE_KEY = "favoriteMeals";

export const getFavorites = () => {
  const saved = localStorage.getItem(FAVORITE_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const toggleFavorite = (id) => {
  let favorites = getFavorites();
  if (favorites.includes(id)) {
    favorites = favorites.filter((fid) => fid !== id);
  } else {
    favorites.push(id);
  }
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites));

  // 🚨 Emit custom event
  window.dispatchEvent(new Event("favoritesUpdated"));
};

export const isFavorited = (id) => {
  return getFavorites().includes(id);
};

export const clearFavorites = () => {
  localStorage.removeItem(FAVORITE_KEY);

  // 🚨 Emit custom event
  window.dispatchEvent(new Event("favoritesUpdated"));
};
