import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let baseUrl = process.env.REACT_APP_BASE_URL;

export const updateInforUser = createAsyncThunk(
  "editUser/update",
  async ({ id, formdata, config }, { rejectWithValue }) => {
    try {
      let { data } = await axios.post(
        `${baseUrl}/user/update/${id}`,
        formdata,
        config
      );
      let newUser = data.Auth;
      delete newUser["password"];
      localStorage.setItem("userInfor", JSON.stringify(newUser));
      localStorage.setItem("token", JSON.stringify(data.success.token));
      return { newUser, token: data.success.token };
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const createProduct = createAsyncThunk(
  "editUser/createProduct",
  async ({ formdata, config }, { rejectWithValue }) => {
    try {
      await axios.post(`${baseUrl}/user/add-product`, formdata, config);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getMyProduct = createAsyncThunk(
  "editUser/getMyProduct",
  async (config, { rejectWithValue }) => {
    try {
      let { data } = await axios.get(`${baseUrl}/user/my-product`, config);
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

export const deleteProduct = createAsyncThunk(
  "editUser/deleteProduct",
  async ({ id, config }, { rejectWithValue }) => {
    try {
      let { data } = await axios.get(
        `${baseUrl}/user/delete-product/${id}`,
        config
      );
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
