import { createAsyncThunk } from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk("product/get", async () => {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
});

// {type: '', payload: 'jfldskjf'}
