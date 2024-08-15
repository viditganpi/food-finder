export type FoodItem = {
    id: string;
    name: string;
}

export type RecipeItem = {
    id: string;
    name: string;
    image: string;
    source: string;
}

export type FoodContextType = {
    foodSelection: string;
    updateFoodSelection: (food: string) => void;
}