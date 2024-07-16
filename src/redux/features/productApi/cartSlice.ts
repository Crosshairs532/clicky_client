import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  products: [],
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.products.push(payload);
    },
  },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
