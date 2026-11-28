import { Link } from "react-router-dom";
import { useFavorites } from "../context/FavoritesContext";
import RecipeGrid from "../components/RecipeGrid";

export default function Favourites() {
  const { favorites } = useFavorites();
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">YOUR PERSONAL COOKBOOK</p>
        <h1>Saved with <em>love.</em></h1>
        <p>Your favourite recipes stay here while you explore the app — and after a refresh.</p>
      </div>
      {favorites.length ? <RecipeGrid meals={favorites} /> : (
        <div className="empty-panel">
          <span className="empty-icon">♡</span>
          <h2>No favourites yet</h2>
          <p>Save recipes you love and they will appear here.</p>
          <Link to="/recipes" className="primary-button">Find recipes</Link>
        </div>
      )}
    </section>
  );
}
