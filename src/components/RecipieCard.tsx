import { RecipeItem } from "../utils/commonTypes";

const RecipieCard: React.FC<{recipieDetails: RecipeItem}> = (props) => {
    const recipieDetail = props.recipieDetails;
    
    const handleCardClick = () => {
        console.log("Opening recipie source in new tab", recipieDetail.source);
        window.open(recipieDetail.source, "_blank");
    };
    
    return (
        <div className="w-1/3 md:w-1/6 p-4 m-4 bg-white rounded-lg shadow-lg shadow-slate-400 hover:cursor-pointer hover:shadow-slate-800" onClick={handleCardClick}>
            <img src={recipieDetail.image} alt="recipe" className="h-36 md:h-58 w-full"></img>
            <div>
                <h1 className="text-base md:text-3xl">{recipieDetail.name}</h1>
            </div>
        </div>
    );
}

export default RecipieCard;