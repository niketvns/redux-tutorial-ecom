import { createSlice } from "@reduxjs/toolkit";
import { addToCartService, removeFromCartService } from "./CartServices";

const initialState = {
  products: [],
  total: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: addToCartService,
    removeFromCart: removeFromCartService,
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
