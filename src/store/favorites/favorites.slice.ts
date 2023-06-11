import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IRecipe } from "../../types/recipe.types";

const initialState: IRecipe[] = [];

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleToFavorites: (state, { payload: recipe }: PayloadAction<IRecipe>) => {
      const isExists = state.some(r => r.id === recipe.id)

      if (isExists) {
        return state.filter(item => item.id !== recipe.id);
      } else {
        return [...state, recipe];
      }
    }
  }
});

export const { actions, reducer } = favoritesSlice;
