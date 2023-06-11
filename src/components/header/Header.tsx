import styles from "./Header.module.css";
import { useFavorites } from "../../hooks/useFavorites";
import { Link } from "react-router-dom";

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <div className={styles.header}>
      <div className={styles.list}>
        <Link to="/recipeRedux/recipes">Recipes</Link>
        <Link to="/recipeRedux/create">Create Recipe</Link>
        <Link to="/recipeRedux/favor">Favorite</Link>
        <Link to="/recipeRedux/cooking">Cooking</Link>
        <Link to="/recipeRedux/auth">Profile</Link>
      </div>
    </div>
  );
}
