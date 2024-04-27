import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./Redux/Features/Products/ProductServices";
import { ProductCard } from "./Components";

function App() {
  const { products, isLoading } = useSelector((store) => store.productData);
  const cartData = useSelector((store) => store.cartData);
  const wishlistData = useSelector((store) => store.wishlistData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="container">
      <h1>Redux Learning</h1>
      <section>
        <h1>All Products</h1>
        <div className="product_container">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              cardType="product"
            />
          ))}
        </div>
      </section>
      <section>
        <h1>Cart</h1>
        {cartData.products.length > 0 ? (
          <div className="product_container">
            {cartData.products.map((product) => (
              <ProductCard key={product.id} product={product} cardType="cart" />
            ))}
          </div>
        ) : (
          <p className="not_found">Cart is Empty</p>
        )}
      </section>
      <section>
        <h1>Wishlist</h1>
        {wishlistData.products.length > 0 ? (
          <div className="product_container">
            {wishlistData.products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cardType="wishlist"
              />
            ))}
          </div>
        ) : (
          <p className="not_found">Wishlist is Empty</p>
        )}
      </section>
    </div>
  );
}

export default App;
