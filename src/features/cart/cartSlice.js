import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart: [
  //   {
  //     pizzaId: 12,
  //     name: "Mediterranean",
  //     quantity: 2,
  //     unitPrice: 16,
  //     totalPrice: 32,
  //   },
  // ],
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increaseItem: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreasecItem: (state, action) => {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((curr, pizza) => curr + pizza.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((curr, pizza) => curr + pizza.totalPrice, 0);

export const getCart = (state) => state.cart.cart;

export const { addItem, deleteItem, increaseItem, decreasecItem, clearCart } =
  cartSlice.actions;

export const getQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export default cartSlice.reducer;
