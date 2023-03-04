import { createSlice } from "@reduxjs/toolkit";
import {
  createProduct,
  deleteProduct,
  getMyProduct,
  updateInforUser,
} from "./editUserAction";

const initialState = {
  loading: false,
  error: null,
  success: false,
  type: null,
  products: {},
};

const editUserSlice = createSlice({
  name: "editUser",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // UPDATE USER
    builder.addCase(updateInforUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.type = "update";
    });

    builder.addCase(updateInforUser.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(updateInforUser.rejected, (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
      state.success = false;
    });
    // CREATE PRODUCT
    builder.addCase(createProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.type = "create";
    });

    builder.addCase(createProduct.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
      state.success = true;
    });
    builder.addCase(createProduct.rejected, (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
      state.success = false;
    });
    // GET PRODUCT
    builder.addCase(getMyProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.type = "getProduct";
    });

    builder.addCase(getMyProduct.fulfilled, (state, actions) => {
      state.loading = false;
      state.error = null;
      state.products = actions.payload;
    });
    builder.addCase(getMyProduct.rejected, (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
    });
    // DELETE PRODUCT
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.type = "deleteProduct";
    });

    builder.addCase(deleteProduct.fulfilled, (state, actions) => {
      state.loading = false;
      state.error = null;
      state.products = actions.payload;
    });
    builder.addCase(deleteProduct.rejected, (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
    });
  },
});

export default editUserSlice.reducer;
