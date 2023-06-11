import styles from './RecipeItem.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/favorites/favorites.slice';
import { IRecipe } from '../../types/recipe.types';
import { RootState } from '../../store/store';

export interface IRecipeItem {
  recipe: IRecipe;
}

function RecipeItem({ recipe }: IRecipeItem) {
  const dispatch = useDispatch();
  const favorites = useSelector((state: RootState) => state.favorites);

  const isExists = favorites.some((r: IRecipe) => r.id === recipe.id);

  const toggleToFavorites = () => {
    dispatch(actions.toggleToFavorites(recipe));
  };

  console.log(favorites);

  return (
    <div className={styles.item}>
      <img src={recipe.image} alt={recipe.name} width={150} />
      <h2>{recipe.name}</h2>
      <h3>Recipe: {recipe.recipe}</h3>
      <h4>Inctruction: {recipe.order}</h4>
      <button onClick={toggleToFavorites}>
        {isExists ? 'Remove from' : 'Add to'} favorites
      </button>
    </div>
  );
}

export default RecipeItem;
