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
            const filteredRecipies = data.map((recipie: any) => ({
                id: uuidv4(),
                image: recipie.recipe.image,
                name: recipie.recipe.label,
            }));
            updateRecipiesList(filteredRecipies as RecipeItem[]);
        }).catch((error) => {
            console.error(error);
        });
    }, [foodSelection]);
    
    return (
        <div>
            {
                recipies && recipies.map((recipie) => (
                    <RecipieCard key={recipie.id} recipieDetails={recipie} />
                ))
            }
        </div>
    );
};

export default RecipeList;