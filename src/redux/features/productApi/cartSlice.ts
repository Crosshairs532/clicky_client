import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  cartProducts: [],
  total: 0,
  price: 0,
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
    totalItem: (state) => {
      let val = 0;
      let price = 0;
      console.log(state.cartProducts);
      state.cartProducts.forEach((item) => {
        val += item?.total;
        price += val * item?.price;
      });
      state.total = val;
      state.price = price;
    },
    plus: (state, { payload }) => {
      const updatedCartProducts = state.cartProducts.map((item) =>
        item.id === payload
          ? {
              ...item,
              total: item.total < item.quantity ? item.total + 1 : item.total,
            }
          : item
      );

      state.cartProducts = updatedCartProducts;
    },

    minus: (state, { payload }) => {
      const updatedCartProducts = state.cartProducts.map((item) =>
        item.id === payload
          ? { ...item, total: item.total > 0 ? item.total - 1 : 0 }
          : item
      );

      state.cartProducts = updatedCartProducts;
    },

    deleteItem: (state, { payload }) => {
      console.log(payload);
      const isExist = state.cartProducts.find(
        (product) => payload === product.id
      );
      let afterDelete = [];
      console.log(isExist);
      if (isExist) {
        afterDelete = state.cartProducts.map((item) =>
          item.id === payload
            ? {
                ...item,
                total: item.total > 0 ? item.total - 1 : 0,
              }
            : item
        );

        state.cartProducts = afterDelete;
      }
    },
    clearCart: (state) => {
      state.cartProducts = [];
      state.total = 0;
      state.price = 0;
    },
  },
});

export const {
  addProduct,
  updateCart,
  totalItem,
  plus,
  minus,
  deleteItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
