import { Link, useParams } from "react-router-dom";
import useRecipeDetail from "../hooks/useRecipeDetail";
import { useFavorites } from "../context/FavoritesContext";
import Spinner from "../components/Spinner";

export default function RecipeDetail() {
  const { id } = useParams();
  const { data: meal, loading, error } = useRecipeDetail(id);
  const { isFavorite, toggleFavorite } = useFavorites();

  if (loading) return <Spinner label="Loading recipe details..." />;
  if (error) return <div className="page-section"><p className="error-message">{error}</p><Link to="/recipes" className="text-link">← Back to recipes</Link></div>;
  if (!meal) return null;

  const ingredients = Array.from({ length: 20 }, (_, index) => {
    const number = index + 1;
    const ingredient = meal[`strIngredient${number}`]?.trim();
    const measure = meal[`strMeasure${number}`]?.trim();
    return ingredient ? `${measure ? `${measure} ` : ""}${ingredient}` : null;
  }).filter(Boolean);

  return (
    <article className="detail-page">
      <Link to="/recipes" className="text-link back-link">← Back to recipes</Link>
      <div className="detail-layout">
        <img className="detail-image" src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="detail-copy">
          <p className="eyebrow">{meal.strArea || "World"} · {meal.strCategory || "Recipe"}</p>
          <h1>{meal.strMeal}</h1>
          <p className="detail-intro">A delicious recipe to add to your cooking list.</p>
          <button className={`primary-button${isFavorite(meal.idMeal) ? " favorite-active" : ""}`} onClick={() => toggleFavorite(meal)}>
            {isFavorite(meal.idMeal) ? "♥ Saved to Favourites" : "♡ Save to Favourites"}
          </button>
          {meal.strTags && <p className="tags">Tags: {meal.strTags}</p>}
          {meal.strSource && <p><a className="text-link" href={meal.strSource} target="_blank" rel="noreferrer">Original recipe source ↗</a></p>}
        </div>
      </div>
      <div className="detail-sections">
        <section>
          <h2>Ingredients</h2>
          <ul className="ingredient-list">{ingredients.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section>
          <h2>Method</h2>
          <p className="instructions">{meal.strInstructions}</p>
          {meal.strYoutube && <a className="text-link" href={meal.strYoutube} target="_blank" rel="noreferrer">Watch preparation video ↗</a>}
        </section>
      </div>
    </article>
  );
}
