import { NUTRITIONIX_BASE_URL, NUTRITIONIX_APP_ID, NUTRITIONIX_APP_KEY } from "../utils/constants";

const fetchFoodItems = async (foodItemQuery: string) => {
    const searchEndpoint = `${NUTRITIONIX_BASE_URL}/search/instant?query=${foodItemQuery}`;
    const headers: HeadersInit = {
        "x-app-id": NUTRITIONIX_APP_ID,
        "x-app-key": NUTRITIONIX_APP_KEY,
    };

    const response = await fetch(searchEndpoint, { headers: headers });
    const data = await response.json();
    console.log(data);
    return data;
};

export default fetchFoodItems;