import "./CheckoutItem.scss";
import { CartContext } from "../../context/Cart.context";
import { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { removeItemFromCart, incrementItemInCart, decrementItemInCart } =
    useContext(CartContext);

  const decrementHandler = () => decrementItemInCart(cartItem);
  const incrementHandler = () => incrementItemInCart(cartItem);
  const removeHandler = () => removeItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={decrementHandler}>
          &lt;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={incrementHandler}>
          &gt;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={removeHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
