import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push({
        ...action.payload,
        quantity: 1,
        totalPrice: action.payload.price,
      });
      toast.success("item added successfully");
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => action.payload !== item.id);
      toast.success("item removed successfully");
    },
    increaseItemQuantity(state, action) {
      const increasedItem = state.cart.find(
        (item) => action.payload === item.id
      );
      increasedItem.quantity++;
      increasedItem.totalPrice = increasedItem.quantity * increasedItem.price;
      toast.success("item quantity increased successfully");
    },
    decreaseItemQuantity(state, action) {
      const decreasedItem = state.cart.find(
        (item) => action.payload === item.id
      );
      decreasedItem.quantity--;
      decreasedItem.totalPrice = decreasedItem.quantity * decreasedItem.price;
      if (decreasedItem.quantity === 0)
        cartSlice.caseReducers.removeItem(state, action);
      toast.success("item quantity decreased successfully");
    },
    clearCart(state) {
      state.cart = [];
      toast.success("cart cleared successfully");
    },
  },
});

export const {
  decreaseItemQuantity,
  increaseItemQuantity,
  addItem,
  removeItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;

export const getCartQuantity = (state) => {
  return state.cart.cart.reduce((sum, curr) => curr.quantity + sum, 0);
};

export const getCartPrice = (state) => {
  return state.cart.cart.reduce((sum, curr) => curr.totalPrice + sum, 0);
};

export const getCart = (state) => state.cart.cart;

export const getCartQuantityById = (id) => (state) => {
  return (
    state.cart.cart.find((item) => {
      return item.id === id;
    })?.quantity ?? 0
  );
};
