let initialState = {
  cartArray: [],
  restaurantName: "",
};

console.log("Inside cartReducer.js");

function cartReducer(state = initialState, action) {
  console.log("Inside cartReducer.js function");
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartArray: [...state.cartArray, action.payload.foodItem],
        restaurantName: action.payload.restaurantName,
      };
    case "REMOVE_RROM_CART":
      let array = state.cartArray.filter(function (i) {
        return i.title != action.payload.foodItem.title;
      });
      return {
        cartArray: array,
        restaurantName: action.payload.restaurantName,
      };

    default:
      return state;
  }
}
export default cartReducer;
