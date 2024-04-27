export const addToCartService = (state, action) => {
  const foundProduct = state.products.find(
    (product) => product.id === action.payload.id
  );

  if (foundProduct) {
    foundProduct.qnt += 1;
  } else {
    state.products = [...state.products, { ...action.payload, qnt: 1 }];
    state.total = state.products.length;
  }
};

export const removeFromCartService = (state, action) => {
  state.products = state.products.filter(
    (product) => product.id !== action.payload
  );
  state.total = state.products.length;
};
