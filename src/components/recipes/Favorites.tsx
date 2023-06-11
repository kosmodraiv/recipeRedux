import { useDispatch, useSelector } from "react-redux";
import { actions as favoritesActions } from "../../store/favorites/favorites.slice";
import { actions as cookingActions }  from "../../store/cooking/cooking.slice";
import { RootState } from "../../store/store";
import { IRecipe } from "../../types/recipe.types";
import style from "./favorites.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);
  const isUserLoggedIn = !!localStorage.getItem("loggedInUsername");
  

  const toggleToFavorites = (recipe: IRecipe) => {
    dispatch(favoritesActions.toggleToFavorites(recipe));
  };

  const addToCooking = (recipe: IRecipe) => {
    dispatch(cookingActions.addToCooking(recipe));
  };

  return (
    <div>
      {isUserLoggedIn ? (
        <div style={{ padding: 20 }}>
          <h2>Favorite Recipes</h2>
          {favorites.map((recipe) => (
            <div className={style.favorites} key={recipe.id}>
              <h2>{recipe.name}</h2>
              <h3>Recipe: {recipe.recipe}</h3>
              <h4>Instruction: {recipe.order}</h4>
              <button onClick={() => toggleToFavorites(recipe)}>
                {favorites.some((r) => r.id === recipe.id)
                  ? "Remove from favorites"
                  : "Add to favorites"}
              </button>
              <button style={{ marginLeft: 15 }} onClick={() => addToCooking(recipe)}>
                Start cooking
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p style={{ padding: 20 }}>Please login</p>
      )}
    </div>
  );
};

export default Favorites;
