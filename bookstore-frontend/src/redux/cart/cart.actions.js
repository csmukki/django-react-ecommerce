import { cartActionTypes } from "./cart.types";

export const addItemToCart = (item) => ({
  type: cartActionTypes.ADD_ITEM_TO_CART,
  payload: item,
});

export const toggleHiddenCart = () => ({
  type: cartActionTypes.TOGGLE_HIDDEN,
});
