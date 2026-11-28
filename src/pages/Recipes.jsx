import { useState } from "react";
import useRecipes from "../hooks/useRecipes";
import Spinner from "../components/Spinner";
import RecipeGrid from "../components/RecipeGrid";

export default function Recipes() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const { data, loading, error } = useRecipes(query);

  function handleSubmit(event) {
    event.preventDefault();
    setQuery(input.trim());
  }

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">THE RECIPE COLLECTION</p>
        <h1>Find something <em>delicious.</em></h1>
        <p>Search by meal name — try chicken, pasta, curry, or soup.</p>
      </div>
      <form className="search-form" onSubmit={handleSubmit}>
        <label className="sr-only" htmlFor="recipe-search">Search recipes</label>
        <input id="recipe-search" value={input} onChange={(event) => setInput(event.target.value)} placeholder="What would you like to cook?" />
        <button className="primary-button" type="submit" disabled={!input.trim()}>Search recipes</button>
      </form>
      {!query && <div className="hint-panel">👩‍🍳 <span>Ready when you are. Enter an ingredient or dish above to get started.</span></div>}
      {loading && <Spinner label="Finding delicious recipes..." />}
      {error && <p className="error-message" role="alert">{error}</p>}
      {!loading && !error && query && <RecipeGrid meals={data} />}
    </section>
  );
}
