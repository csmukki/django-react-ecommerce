import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectHidden = createSelector([selectCart], (cart) => cart.hidden);

export const selectCartCount = createSelector([selectCartItems], (cartItem) =>
  cartItem.reduce(
    (AccumulativeValue, item) => AccumulativeValue + item.quantity,
    0
  )
);
