import { useState } from "react";
import Header from "./Header";
import RecipeList from "./RecipeList";
import FoodContext from "../utils/FoodContext";

const Body = () => {
  const [foodSelection, updateFoodSelection] = useState<string>("biryani");
  
  return (
    <FoodContext.Provider value={{foodSelection, updateFoodSelection}}>
    <div>
      <Header/>
      <RecipeList />
    </div>
    </FoodContext.Provider>
  );
}

export default Body;