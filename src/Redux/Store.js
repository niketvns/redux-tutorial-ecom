import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Features/Products/ProductSlice";
import cartReducer from "./Features/Cart/CartSlice";
import wishlistReducer from "./Features/Wishlist/WishlistSlice";

const store = configureStore({
  reducer: {
    productData: productReducer,
    cartData: cartReducer,
    wishlistData: wishlistReducer,
  },
});

export default store;
