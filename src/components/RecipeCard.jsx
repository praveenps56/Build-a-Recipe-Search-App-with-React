import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";

export default function RecipeCard({ meal }) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(meal.idMeal);

  return (
    <article className="recipe-card">
      <Link to={`/recipes/${meal.idMeal}`} className="card-image-link" aria-label={`View ${meal.strMeal}`}>
        <img src={meal.strMealThumb} alt={meal.strMeal} className="card-image" loading="lazy" />
      </Link>
      <div className="card-content">
        <div>
          <p className="eyebrow">{meal.strCategory || "Recipe"}{meal.strArea ? ` · ${meal.strArea}` : ""}</p>
          <h3><Link to={`/recipes/${meal.idMeal}`}>{meal.strMeal}</Link></h3>
        </div>
        <div className="card-actions">
          <Link className="text-link" to={`/recipes/${meal.idMeal}`}>View recipe →</Link>
          <button className={`save-button${saved ? " saved" : ""}`} onClick={() => toggleFavorite(meal)} aria-pressed={saved}>
            {saved ? "♥ Saved" : "♡ Save"}
          </button>
        </div>
      </div>
    </article>
  );
}
