import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { addToCart, removeFromCart } from "../Redux/Features/Cart/CartSlice";
import {
  addToWishlist,
  removeFromWishlilst,
} from "../Redux/Features/Wishlist/WishlistSlice";

const ProductCard = ({ product, cardType }) => {
  const dispatch = useDispatch();
  return (
    <div key={product.id} className="product_card">
      <img src={product.image} alt="product" className="thumbnail" />
      <h2 className="product_title">{product.title}</h2>
      <h3>$ {product.price}</h3>
      {cardType === "cart" && <h3>Quantity: {product.qnt}</h3>}
      <p className="product_description">{product.description}</p>
      {cardType === "product" && (
        <div className="button_container">
          <button onClick={() => dispatch(addToCart(product))}>
            Add To Cart
          </button>
          <button onClick={() => dispatch(addToWishlist(product))}>
            Add To Wishlist
          </button>
        </div>
      )}
      {cardType === "cart" && (
        <div className="button_container">
          <button onClick={() => dispatch(removeFromCart(product.id))}>
            Delete
          </button>
          <button onClick={() => dispatch(addToWishlist(product))}>
            Move To Wishlist
          </button>
        </div>
      )}
      {cardType === "wishlist" && (
        <div className="button_container">
          <button onClick={() => dispatch(removeFromWishlilst(product.id))}>
            Delete
          </button>
          <button onClick={() => dispatch(addToCart(product))}>
            Move To Cart
          </button>
        </div>
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: Object,
  cardType: PropTypes.string,
};

export { ProductCard };
