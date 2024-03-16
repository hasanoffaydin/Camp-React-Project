import { combineReducers } from "redux";
import cartReducer from "./Reducer/CartReducer";

// tum stateleri topladigim yer
const rootReducer = combineReducers(
    {
        cart : cartReducer
    }
)
export default rootReducer