import { useEffect, useState } from "react";
import { searchMeals } from "../api/mealApi";

// Returns { data, loading, error }. An empty query does not make an API call.
export default function useRecipes(query) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const trimmedQuery = query.trim();
    if (!trimmedQuery) {
      setData([]);
      setError("");
      setLoading(false);
      return;
    }

    let active = true;
    setLoading(true);
    setError("");

    searchMeals(trimmedQuery)
      .then((meals) => {
        if (active) setData(meals);
      })
      .catch(() => {
        if (active) setError("Unable to load recipes. Please check your connection and try again.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [query]);

  return { data, loading, error };
}
