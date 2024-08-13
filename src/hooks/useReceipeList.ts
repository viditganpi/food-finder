import { EDAMAM_APP_ID, EDAMAM_APP_KEY, EDAMAM_BASE_URL } from "../utils/constants";

const useRecipeList = async (recipeQuery: string) => {
    const receipeSearchEndpoint = `${EDAMAM_BASE_URL}/recipes/v2?type=public&q=${recipeQuery}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`;
    
    const response = await fetch(receipeSearchEndpoint);
    const data = await response.json();
    console.log(data);
    return data.hits;
}

export default useRecipeList;