import { combineReducers } from "redux";

import { sectionReducer } from "./section/section.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { collectionReducer } from "./collection/collection.reducer";

export default combineReducers({
  section: sectionReducer,
  cart: cartReducer,
  collection: collectionReducer,
});
