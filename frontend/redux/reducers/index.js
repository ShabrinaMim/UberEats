import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  myCartReducer: cartReducer,
});

console.log("Inside rootReducer.js");

export default rootReducer;
