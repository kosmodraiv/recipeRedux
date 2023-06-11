import React, { useState, useEffect } from "react";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "../../store/cooking/cooking.slice";
import styles from "./Cooking.module.css";

interface CookingItem {
  id: number;
  name: string;
  recipe: string;
}

const RecipeDetails: React.FC = () => {
  const cooking = useSelector(
    (state: RootState) => state.cooking
  ) as CookingItem[];
  const [checkedItems, setCheckedItems] = useState<boolean[]>([]);

  const handleCheckboxChange = (itemIndex: number): void => {
    const updatedCheckedItems = [...checkedItems];
    updatedCheckedItems[itemIndex] = !updatedCheckedItems[itemIndex];
    setCheckedItems(updatedCheckedItems);
  };

  const handleResetCooking = (itemId: number): void => {
    const updatedCheckedItems = [...checkedItems];
    const itemIndices = cooking[itemId].recipe
      .split(",")
      .map((_, index) => itemId * cooking[itemId].recipe.length + index);
    itemIndices.forEach((index) => {
      updatedCheckedItems[index] = false;
    });
    setCheckedItems(updatedCheckedItems);
  };

  useEffect(() => {
    const storedCheckedItems = localStorage.getItem("checkedItems");
    if (storedCheckedItems) {
      setCheckedItems(JSON.parse(storedCheckedItems) as boolean[]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("checkedItems", JSON.stringify(checkedItems));
  }, [checkedItems]);

  useEffect(() => {
    return () => {
      localStorage.removeItem("checkedItems");
    };
  }, []);

  return (
    <div>
      {cooking.map((item: CookingItem, index: number) => (
        <div className={styles.cooking} key={item.id}>
          <p>Name: {item.name}</p>
          <ul>
            {item.recipe
              .split(",")
              .map((ingredient: string, ingredientIndex: number) => {
                const itemIndex = index * item.recipe.length + ingredientIndex;
                return (
                  <li key={ingredientIndex}>
                    {ingredient.trim()}
                    <input
                      type="checkbox"
                      checked={checkedItems[itemIndex] || false}
                      onChange={() => handleCheckboxChange(itemIndex)}
                    />
                  </li>
                );
              })}
          </ul>
          <button onClick={() => handleResetCooking(index)}>
            Reset cooking
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeDetails;
