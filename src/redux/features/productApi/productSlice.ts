import { createSlice } from "@reduxjs/toolkit";

type TinitialState = {
  minPrice: number;
  maxPrice: number;
  productName: string;
  sort: string;
};

const initialState: TinitialState = {
  minPrice: 0,
  maxPrice: 100,
  productName: "",
  sort: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    minPrice: (state, { payload }) => {
      state.minPrice = payload;
    },
    maxPrice: (state, { payload }) => {
      state.maxPrice = payload;
    },
    productName: (state, { payload }) => {
      state.productName = payload;
    },
    sort: (state, { payload }) => {
      state.sort = payload;
    },
  },
});

export const { minPrice, maxPrice, productName, sort } = productSlice.actions;

export default productSlice.reducer;
