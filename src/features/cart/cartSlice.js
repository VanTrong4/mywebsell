import { createSlice } from "@reduxjs/toolkit";
import { logoutUser } from "../auth/authSlice";
import { fetchCart } from "./cartActions";

const initialState = {
  loading: false,
  error: null,
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, product) => {
      let isProduct = state.products.find(
        (val) => val.id === product.payload.id
      );
      if (isProduct) {
        state.products = state.products.map((val) =>
          val.id === product.payload.id
            ? { ...val, qty: val.qty + 1 }
            : { ...val }
        );
      } else {
        state.products = [...state.products, { ...product.payload, qty: 1 }];
      }
    },
    deleteCart: (state, product) => {
      state.products = state.products.filter(
        (val) => val.id !== product.payload.id
      );
    },
    increaseCart: (state, product) => {
      state.products = state.products.map((val) =>
        val.id === product.payload.id
          ? { ...val, qty: val.qty + 1 }
          : { ...val }
      );
    },
    decreaseCart: (state, product) => {
      if (product.payload.qty <= 1) {
        state.products = state.products.filter(
          (val) => val.id !== product.payload.id
        );
      } else {
        state.products = state.products.map((val) =>
          val.id === product.payload.id
            ? { ...val, qty: val.qty - 1 }
            : { ...val }
        );
      }
    },
    updateLocal: (state) => {
      const userInfor = localStorage.getItem("userInfor")
        ? JSON.parse(localStorage.getItem("userInfor"))
        : null;
      const getQty = JSON.parse(localStorage.getItem("qty"));
      let productQty = { ...getQty };
      let check = Object.keys(productQty).find((val) => val === userInfor.id);
      if (check) {
        state.products.map(
          (val) =>
            (productQty[check] = { ...productQty[check], [val.id]: val.qty })
        );
      } else {
        state.products.map(
          (val) =>
            (productQty = {
              ...productQty,
              [userInfor.id]: {
                ...productQty[userInfor.id],
                [val.id]: val.qty,
              },
            })
        );
      }
      localStorage.setItem("qty", JSON.stringify(productQty));
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutUser, (state) => {
      state.products = [];
    });
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchCart.fulfilled, (state, actions) => {
      state.products = actions.payload;
      state.loading = false;
    });
    builder.addCase(fetchCart.rejected, (state, actions) => {
      state.products = actions.payload;
      state.loading = false;
      state.error = actions.payload;
    });
  },
});

export const {
  addToCart,
  deleteCart,
  increaseCart,
  decreaseCart,
  updateLocal,
} = cartSlice.actions;
export default cartSlice.reducer;
