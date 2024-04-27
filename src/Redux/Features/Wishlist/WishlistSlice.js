import { createSlice } from "@reduxjs/toolkit";
import {
  addToWishlistService,
  removeFromWishlilstService,
} from "./WishlistServices";

const initialState = {
  products: [],
  total: 0,
};

export const wishlistSlice = createSlice({
  name: "wishlilst",
  initialState,
  reducers: {
    addToWishlist: addToWishlistService,
    removeFromWishlilst: removeFromWishlilstService,
  },
});

export default wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlilst } = wishlistSlice.actions;
