import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import cartSlice from "../features/cart/cartSlice";
import editUserSlice from "../features/editUser.js/editUserSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    auth: authSlice,
    editUser: editUserSlice,
  },
});
