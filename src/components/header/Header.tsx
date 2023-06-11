import styles from "./Header.module.css";
import { useFavorites } from "../../hooks/useFavorites";
import { Link } from "react-router-dom";

export default function Header() {
  const { favorites } = useFavorites();

  return (
    <div className={styles.header}>
      <div className={styles.list}>
        <Link to="/recipes">Recipes</Link>
        <Link to="/create">Create Recipe</Link>
        <Link to="/favor">Favorite</Link>
        <Link to="/cooking">Cooking</Link>
        <Link to="/auth">Profile</Link>
      </div>
    </div>
  );
}
