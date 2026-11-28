import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">FIND YOUR NEXT FAVOURITE</p>
        <h1>Good food starts with <em>one idea.</em></h1>
        <p className="hero-description">Discover recipes from around the world, explore ingredients, and save the dishes you want to make next.</p>
        <Link to="/recipes" className="primary-button">Explore recipes <span>→</span></Link>
      </div>
      <div className="hero-art">
        <img src="https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg" alt="A freshly prepared meal" />
        <div className="floating-note">A little inspiration<br /><strong>for your kitchen ✨</strong></div>
      </div>
    </section>
  );
}
