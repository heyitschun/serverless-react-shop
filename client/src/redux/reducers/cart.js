import { ADD_TO_CART, REMOVE_FROM_CART } from "../actionTypes";

const initialState = {
  allItems: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      let item = action.payload;
      state = {
        ...state,
        allItems: [...state.allItems, item]
      };
      state.allItems = state.allItems.sort(function (a, b) {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      });
      return state;
    }
    case REMOVE_FROM_CART: {
      const product = action.payload;
      let indexToRemove = state.allItems.indexOf(product);
      state.allItems.splice(indexToRemove, 1);
      return state;
    }
    default:
      return state;
  }
}