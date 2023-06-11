import { useState } from "react";

import RecipeItem from "../recipe-item/RecipeItem";

import { useGetRecipesQuery } from "../../store/api/api";

const Recipes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [queryTerm, setQueryTerm] = useState("");

  const { isLoading, data } = useGetRecipesQuery(queryTerm);

  const handleSearch = () => {
    setQueryTerm(searchTerm);
  };

  const isUserLoggedIn = !!localStorage.getItem("loggedInUsername");

  return (
    <div>
      {isUserLoggedIn ? (
        <div style={{ padding: 10 }}>
          <div>
            <p>Find:</p>
            <div>
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter search term"
              />
              <button onClick={handleSearch}>Search</button>
            </div>
          </div>
          <div>
            {isLoading ? (
              <div>Loading...</div>
            ) : data ? (
              data.map((recipe) => (
                <RecipeItem key={recipe.id} recipe={recipe} />
              ))
            ) : (
              <div>Not found</div>
            )}
          </div>
        </div>
      ) : (
        <p style={{ padding: 10 }}>Please Login</p>
      )}
    </div>
  );
};

export default Recipes;
