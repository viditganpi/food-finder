import { useEffect, useState } from 'react';
import fetchFoodItems from '../hooks/useFoodItems';
import FoodCard from './FoodCard';
import { FoodItem } from '../utils/commonTypes';

const FoodList = () => {
    const [foodItems, updateFoodItems] = useState<FoodItem[]>([]);
    
    useEffect(() => {
        fetchFoodItems("biryani")
        .then((data) => {
            const filteredFoodItems = data.common.map((food: any) => ({
                id: food.food_name,
                thumb: food.photo.thumb,
                name: food.food_name,
            }));
            updateFoodItems(filteredFoodItems as FoodItem[]);
        }).catch((error) => {
            console.error(error);
        });
    }, []);
    
    return (
        <div>
            {
                foodItems && foodItems.map((food) => (
                    <FoodCard key={food.id} foodDetails={food} />
                ))
            }
        </div>
    );
};

export default FoodList