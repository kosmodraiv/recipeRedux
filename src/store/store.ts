import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { reducer as favoritesReducer } from "./favorites/favorites.slice";
import { reducer as cookingReducer } from "./cooking/cooking.slice";
import { api } from "./api/api";
import { createLogger } from "redux-logger";

const logger = createLogger({
  collapsed: true,
});

const persistConfig = {
  key: 'root',
  storage
};

const reducers = combineReducers({
  favorites: favoritesReducer,
  cooking: cookingReducer,
  [api.reducerPath]: api.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
