import { RecipeItem } from "../utils/commonTypes";

const RecipieCard: React.FC<{recipieDetails: RecipeItem}> = (props) => {
    const recipieDetail = props.recipieDetails;
    console.log(recipieDetail.image);
    return (
        <div className="w-1/6 p-4 m-4 bg-white rounded-lg shadow-lg shadow-slate-400">
            <img src={recipieDetail.image} alt="food image" className="h-58 w-full"></img>
            <div>
                <h1 className="text-3xl">{recipieDetail.name}</h1>
            </div>
        </div>
    );
}

export default RecipieCard;