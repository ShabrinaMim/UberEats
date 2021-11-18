function addToCart(foodItem, restaurantName) {
  return {
    type: "ADD_TO_CART",
    payload: { foodItem: foodItem, restaurantName: restaurantName },
  };
}
function removeFromCart(foodItem, restaurantName) {
  return {
    type: "REMOVE_RROM_CART",
    payload: { foodItem: foodItem, restaurantName: restaurantName },
  };
}

export { addToCart, removeFromCart };
