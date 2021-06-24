import { combineReducers } from "redux";

import { sectionReducer } from "./section/section.reducer";
import { cartReducer } from "./cart/cart.reducer";
import { collectionReducer } from "./collection/collection.reducer";
import { authReducer } from "./auth/auth.reducer";
import { userReducer } from "./user/user.reducer";

export default combineReducers({
  section: sectionReducer,
  cart: cartReducer,
  collection: collectionReducer,
  auth: authReducer,
  user: userReducer,
});
