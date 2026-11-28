import { useEffect, useState } from "react";
import { getMealById } from "../api/mealApi";

export default function useRecipeDetail(id) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;
    setLoading(true);
    setError("");
    getMealById(id)
      .then((meal) => {
        if (!active) return;
        if (!meal) setError("Recipe not found.");
        setData(meal);
      })
      .catch(() => {
        if (active) setError("Unable to load this recipe. Please try again.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, [id]);

  return { data, loading, error };
}
