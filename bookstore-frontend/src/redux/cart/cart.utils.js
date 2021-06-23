export function addItem(cartItems, cartItemToAdd) {
  const existing = cartItems.find((item) => item.id === cartItemToAdd.id);
  if (existing) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { ...cartItem }
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}
