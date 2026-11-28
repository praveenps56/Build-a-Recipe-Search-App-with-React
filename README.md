# Recipe Finder

A React + Vite recipe search application using React Router DOM, Axios, and TheMealDB.

## Features
- Home, Recipes, Recipe Detail (`/recipes/:id`), and Favourites pages
- Responsive navbar with active route highlighting
- `useRecipes(query)` custom hook returning `{ data, loading, error }`
- Controlled recipe search form
- Loading spinner and API error states
- Recipe detail fetched using `useParams`
- Save/remove favourites from cards and detail page
- Shared favourites context, persisted in `localStorage`

## Run locally
1. Install Node.js (18+ recommended).
2. Extract this ZIP and open the `recipe-finder` folder in VS Code.
3. Open a terminal in that folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Build for deployment
```bash
npm run build
npm run preview
```

The production build is created in `dist/`.

## API
Uses the free public [TheMealDB API](https://www.themealdb.com/api.php). An internet connection is required for recipe search and details.
