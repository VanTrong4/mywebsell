import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let baseUrl = process.env.REACT_APP_BASE_URL;

export const registerUser = createAsyncThunk(
  "auth/register",
  async (input, { rejectWithValue }) => {
    try {
      let { data } = await axios.post(`${baseUrl}/register`, input);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (input, { rejectWithValue }) => {
    try {
      let { data } = await axios.post(`${baseUrl}/login`, input);
      if (data.success) {
        localStorage.setItem("token", JSON.stringify(data.success.token));
        localStorage.setItem("userInfor", JSON.stringify(data.Auth));
      }
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
