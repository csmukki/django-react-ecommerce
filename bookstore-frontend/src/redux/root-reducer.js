import { combineReducers } from "redux";

import { sectionReducer } from "./section/section.reducer";
import { cartReducer } from "./cart/cart.reducer";

export default combineReducers({
  section: sectionReducer,
  cart: cartReducer,
});
