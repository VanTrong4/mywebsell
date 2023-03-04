import { createSlice } from "@reduxjs/toolkit";
import { updateInforUser } from "../editUser.js/editUserAction";
import { loginUser, registerUser } from "./authActions";

const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
const userInfor = localStorage.getItem("userInfor")
  ? JSON.parse(localStorage.getItem("userInfor"))
  : null;

const initialState = {
  loading: false,
  userInfor,
  token,
  error: null,
  success: false,
  type: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logoutUser: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("userInfor");
      state.loading = false;
      state.userInfor = null;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    //register user
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
      state.type = "register";
    });

    builder.addCase(registerUser.fulfilled, (state, actions) => {
      state.loading = false;
      if (actions.payload.errors) {
        state.error = actions.payload.errors.email;
      } else {
        state.success = true;
      }
    });

    builder.addCase(registerUser.rejected, (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
      state.success = false;
    });

    //login user
    builder.addCase(loginUser.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.type = "login";
    });

    builder.addCase(loginUser.fulfilled, (state, actions) => {
      state.loading = false;
      if (actions.payload.errors) {
        state.error = actions.payload.errors.errors;
      } else {
        state.token = actions.payload.success.token;
        state.userInfor = actions.payload.Auth;
      }
    });

    builder.addCase(loginUser.rejected, (state, actions) => {
      state.loading = false;
      state.error = actions.payload;
    });

    //  UPDATE USER
    builder.addCase(updateInforUser.fulfilled, (state, actions) => {
      state.token = actions.payload.token;
      state.userInfor = actions.payload.newUser;
    });
  },
});

export default authSlice.reducer;
export const { logoutUser } = authSlice.actions;
