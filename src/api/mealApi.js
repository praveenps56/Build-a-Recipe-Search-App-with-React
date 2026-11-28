import axios from "axios";

const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export async function searchMeals(query) {
  const response = await axios.get(`${API_BASE}/search.php`, {
    params: { s: query },
    timeout: 10000,
  });
  return response.data.meals ?? [];
}

export async function getMealById(id) {
  const response = await axios.get(`${API_BASE}/lookup.php`, {
    params: { i: id },
    timeout: 10000,
  });
  return response.data.meals?.[0] ?? null;
}
