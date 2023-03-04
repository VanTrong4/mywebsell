import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let baseUrl = process.env.REACT_APP_BASE_URL;

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async ({ input }, { rejectWithValue }) => {
    try {
      let { data } = await axios.post(`${baseUrl}/product/cart`, input);
      return data.data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
