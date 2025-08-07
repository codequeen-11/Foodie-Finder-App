import axios from 'axios';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

export const fetchMealsByName = async (name) => {
  const response = await axios.get(`${BASE_URL}/search.php?s=${name}`);
  return response.data.meals;
};
