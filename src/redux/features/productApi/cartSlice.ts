import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cartProducts: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.cartProducts.push(payload);
    },
    updateCart: (state, { payload }) => {
      state.cartProducts = payload;
    },
  },
});

export const { addProduct, updateCart } = cartSlice.actions;
export default cartSlice.reducer;
