import { createSlice } from "@reduxjs/toolkit";

type TinitialState = {
  minPrice: number | null | string;
  maxPrice: number | null | string;
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
      state.minPrice = payload ? parseInt(payload) : 0;
    },
    maxPrice: (state, { payload }) => {
      state.maxPrice = payload ? parseInt(payload) : 1000;
    },
    productName: (state, { payload }) => {
      state.productName = payload;
    },
    sort: (state, { payload }) => {
      state.sort = payload;
    },
    reset: (state) => {
      state.minPrice = initialState.minPrice;
      state.maxPrice = initialState.maxPrice;
      state.productName = initialState.productName;
      state.sort = initialState.sort;
    },
  },
});

export const { minPrice, maxPrice, productName, sort, reset } =
  productSlice.actions;
export default productSlice.reducer;
