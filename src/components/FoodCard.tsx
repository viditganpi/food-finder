import { FoodItem } from "../utils/commonTypes";

const FoodCard: React.FC<{foodDetails: FoodItem}> = (props) => {
    const foodDetail = props.foodDetails;
    return (
        <div className="w-1/6 p-4 m-4 bg-white rounded-lg shadow-lg shadow-slate-400">
            <h1 className="text-3xl">{foodDetail.name}</h1>
            <div>
                <img src="{foodDetails.thumb}" alt="food image" className="h-48"></img>
            </div>
            <div>
                <p className="text-lg">Description of biryani</p>
            </div>
        </div>
    );
}

export default FoodCard;