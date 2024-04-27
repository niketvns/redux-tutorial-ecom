import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "./ProductServices";

const initialState = {
  products: [],
  total: 0,
  isLoading: false,
  error: null,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.total = action.payload.length;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getProducts.rejected, (state) => {
        state.isLoading = false;
        state.error = "Something went wrong!";
      });
  },
});

export default productSlice.reducer;
