import RecipeCard from "./RecipeCard";

export default function RecipeGrid({ meals }) {
  if (!meals.length) return <p className="empty-state">No recipes found. Try another search.</p>;
  return <div className="recipe-grid">{meals.map((meal) => <RecipeCard key={meal.idMeal} meal={meal} />)}</div>;
}
