import { createSlice } from "@reduxjs/toolkit";

type TinitialState = {
  minPrice: number | null;
  maxPrice: number | null;
  productName: string;
  sort: string;
};

export const initialState: TinitialState = {
  minPrice: 0,
  maxPrice: 1000,
  productName: "",
  sort: "",
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    minPrice: (state, { payload }) => {
      console.log(payload, "min price");
      state.minPrice = payload ? payload : 0;
    },
    maxPrice: (state, { payload }) => {
      state.maxPrice = payload ? payload : 0;
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
