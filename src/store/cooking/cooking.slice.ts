import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe.types";

interface FavoritesState {
  favorites: IRecipe[];
}

const initialState: FavoritesState  = {
    favorites: [],
  };

export const CookingSlice = createSlice({
  name: 'cooking',
  initialState,
  reducers: {
    addToCooking: (state, action: PayloadAction<IRecipe>) => {
        state.favorites.push(action.payload);
      }
  }
});

export const { actions, reducer } = CookingSlice;
