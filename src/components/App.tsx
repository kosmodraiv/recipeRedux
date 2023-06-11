import Header from "./header/Header";
import CreateRecipe from "./create-recipe/CreateRecipe";
import Authentication from "./users/Authentication";
import Recipes from "./recipes/Recipes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorites from "./recipes/Favorites";
import RecipeDetails from "./cooking/CookingLogic";
function App() {


  return (
    <section>
      <Router>
        <Header />
        
        <Routes>
          <Route path="recipeRedux/auth" element={<Authentication />} />
          <Route path="recipeRedux/favor" element={<Favorites />}/>
          <Route path="recipeRedux/recipes" element={<Recipes />} />
          <Route path="recipeRedux/create" element={<CreateRecipe />} />
          <Route path="recipeRedux/cooking" element={<RecipeDetails />} />
        </Routes>
        
    </Router>
    </section>
  );
}

export default App;
