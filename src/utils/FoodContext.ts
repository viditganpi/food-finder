import { createContext } from "react";
import { FoodContextType } from "./commonTypes";

const FoodContext = createContext({} as FoodContextType);

export default FoodContext;