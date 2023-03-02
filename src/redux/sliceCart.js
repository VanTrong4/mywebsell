import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const sliceCart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    callApi: (state, product) => {
      return [...product.payload];
    },
    addToCart: (state, product) => {
      let isProduct = state.find((val) => val.id === product.payload.id);
      console.log(isProduct);
      if (isProduct) {
        return state.map((val) =>
          val.id === product.payload.id
            ? { ...val, qty: val.qty + 1 }
            : { ...val }
        );
      } else {
        return [...state, { ...product.payload, qty: 1 }];
      }
    },
    deleteCart: (state, product) => {
      return state.filter((val) => val.id !== product.payload.id);
    },
    increaseCart: (state, product) => {
      return state.map((val) =>
        val.id === product.payload.id
          ? { ...val, qty: val.qty + 1 }
          : { ...val }
      );
    },
    decreaseCart: (state, product) => {
      if (product.payload.qty <= 1) {
        return state.filter((val) => val.id !== product.payload.id);
      } else {
        return state.map((val) =>
          val.id === product.payload.id
            ? { ...val, qty: val.qty - 1 }
            : { ...val }
        );
      }
    },
    updateLocal: (state, product) => {
      let productQty = {};
      if (state.length > 0) {
        state.map((val) => (productQty = { ...productQty, [val.id]: val.qty }));
      } else {
        productQty = {};
      }
      localStorage.setItem("qty", JSON.stringify(productQty));
    },
  },
});

export const {
  addToCart,
  deleteCart,
  increaseCart,
  decreaseCart,
  updateLocal,
  callApi,
} = sliceCart.actions;
export default sliceCart.reducer;
