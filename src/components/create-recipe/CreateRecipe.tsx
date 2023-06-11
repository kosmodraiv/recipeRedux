import { useState, FormEvent } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";
import { IRecipeData } from "../../types/recipe.types";

const defaultValue: IRecipeData = {
  name: "",
  image: "",
  recipe: "",
  order: ""
};

export default function CreateRecipe() {
  const [recipe, setRecipe] = useState<IRecipeData>(defaultValue);
  const [createRecipe] = useCreateRecipeMutation();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createRecipe(recipe).then(() => {
      setRecipe(defaultValue);
    });
  };

  const isUserLoggedIn = !!localStorage.getItem("loggedInUsername");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>Create New Recipe:</p>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Image"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Recipe"
            value={recipe.recipe}
            onChange={(e) => setRecipe({ ...recipe, recipe: e.target.value })}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Instruction"
            value={recipe.order}
            onChange={(e) => setRecipe({ ...recipe, order: e.target.value })}
          />
        </label>
        {isUserLoggedIn ? (
          <button type="submit">Create</button>
        ) : (
          <p>Please log in to create a recipe.</p>
        )}
      </form>
    </div>
  );
}
