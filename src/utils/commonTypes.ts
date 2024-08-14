export type FoodItem = {
    id: string;
    name: string;
}

export type RecipeItem = {
    id: string;
    name: string;
    image: string;
}

export type FoodContextType = {
    foodSelection: string;
    updateFoodSelection: (food: string) => void;
}