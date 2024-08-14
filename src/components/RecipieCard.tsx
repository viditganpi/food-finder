import { RecipeItem } from "../utils/commonTypes";

const RecipieCard: React.FC<{recipieDetails: RecipeItem}> = (props) => {
    const recipieDetail = props.recipieDetails;
    console.log(recipieDetail.image);
    return (
        <div className="w-1/6 p-4 m-4 bg-white rounded-lg shadow-lg shadow-slate-400">
            <h1 className="text-3xl">{recipieDetail.name}</h1>
            <div>
                <img src={recipieDetail.image} alt="food image" className="h-48"></img>
            </div>
            <div>
                <p className="text-lg">Description of biryani</p>
            </div>
        </div>
    );
}

export default RecipieCard;