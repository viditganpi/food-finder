import { useContext, useEffect, useState } from 'react';
import { RecipeItem } from '../utils/commonTypes';
import { v4 as uuidv4 } from 'uuid';
import RecipieCard from './RecipieCard';
import FoodContext from '../utils/FoodContext';
import { EDAMAM_APP_ID, EDAMAM_APP_KEY, EDAMAM_BASE_URL } from '../utils/constants';

const RecipeList = () => {
    const [recipies, updateRecipiesList] = useState<RecipeItem[]>([]);
    const {foodSelection, updateFoodSelection} = useContext(FoodContext);
    
    const fetchRecipies = async (recipeQuery: string) => {
        console.log("calling fetchRecipies");
        const receipeSearchEndpoint = `${EDAMAM_BASE_URL}/recipes/v2?type=public&q=${recipeQuery}&app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}`;
        
        const response = await fetch(receipeSearchEndpoint);
        const data = await response.json();
        console.log(data);
        return data.hits;
    }
    
    useEffect(() => {
        fetchRecipies(foodSelection)
        .then((data) => {
            console.log(data);
            const uniqueRecipies = new Set<string>();
            const filteredData = data.filter((recipie: any) => {
                if(uniqueRecipies.has(recipie.recipe.url.trim())) {
                    return false;
                }
                uniqueRecipies.add(recipie.recipe.url.trim());
                return true;
            });
            console.log(filteredData);
            const filteredRecipies = filteredData.map((recipie: any) => {
                return {
                    id: uuidv4(),
                    image: recipie.recipe.image,
                    name: recipie.recipe.label,
                    source: recipie.recipe.url,
                }
            });
            updateRecipiesList(filteredRecipies as RecipeItem[]);
        }).catch((error) => {
            console.error(error);
        });
    }, [foodSelection]);
    
    return (
        <div className='flex flex-wrap'>
            {
                recipies && recipies.map((recipie) => (
                    <RecipieCard key={recipie.id} recipieDetails={recipie} />
                ))
            }
        </div>
    );
};

export default RecipeList;