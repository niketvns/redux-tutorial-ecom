export const addToWishlistService = (state, action) => {
  const foundProduct = state.products.some(
    (product) => product.id === action.payload.id
  );

  if (!foundProduct) {
    state.products = [...state.products, { ...action.payload, qnt: 1 }];
    state.total = state.products.length;
  }
};

export const removeFromWishlilstService = (state, action) => {
  state.products = state.products.filter(
    (product) => product.id !== action.payload
  );
  state.total = state.products.length;
};
