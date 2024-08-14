import { useRef, useState, useEffect, useContext } from "react";
import { LOGO_IMG_SRC } from "../utils/constants";
import { FoodItem } from "../utils/commonTypes";
import fetchFoodItems from "../hooks/useFoodItems";
import FoodContext from "../utils/FoodContext";

const Header = () => {
    const foodToSearch = useRef<HTMLInputElement | null>(null);
    
    const [foodItems, updateFoodItems] = useState<FoodItem[]>([]);
    const [foodQuery, updateFoodQuery] = useState<string>("");
    const [isFoodListVisible, setIsListVisible] = useState<boolean>(true);

    const {foodSelection, updateFoodSelection} = useContext(FoodContext);

    useEffect(() => {
        const foodItemQuery = foodToSearch?.current?.value || "";
        fetchFoodItems(foodItemQuery)
        .then((data) => {
            const filteredFoodItems = data.common.map((food: any) => ({
                id: food.food_name,
                name: food.food_name,
            }));
            updateFoodItems(filteredFoodItems as FoodItem[]);
        }).catch((error) => {
            console.error(error);
        });
    }, [foodQuery]);

    const handleSearch = () => {
        const foodItemQuery = foodToSearch?.current?.value || "";
        if(foodItemQuery.length > 5 && foodItemQuery !== foodQuery) {
            updateFoodQuery(foodItemQuery);
        }
    }

    const handleFoodSelection = (foodName: string) => {
        updateFoodSelection(foodName);
        setIsListVisible(false);
        updateFoodItems([]);
        foodToSearch.current!.value = foodName;
    }

    return (
        <div className="flex justify-between bg-[#223D44]">
            <div className="flex">
                <img src={LOGO_IMG_SRC} className="w-20 h-20" alt="food main logo"></img>
                <h1 className="text-xl text-white mt-8">Recipe Finder</h1>
            </div>
            <div className="relative">
                <input type="text" placeholder="🔎 Search Bar" onChange={handleSearch} ref={foodToSearch} className="search-input mt-6 p-1 mr-4 rounded-lg"></input>                
                {foodItems.length > 0 && isFoodListVisible && (
                    <ul className="absolute left-0 right-0 mt-1 p-1 bg-white rounded-lg shadow-lg z-10">
                        {foodItems.map((food) => (
                            <li key={food.id} className="p-2 hover:bg-gray-200 cursor-pointer" onClick={() => handleFoodSelection(food.name)}>
                                {food.name}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
export default Header;