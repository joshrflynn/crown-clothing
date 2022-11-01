import "./Checkout.scss";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

const Checkout = () => {
  const { cartItems, cartSubtotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((el) => (
        <CheckoutItem key={el.id} cartItem={el} />
      ))}
      <span className="total">Total: ${cartSubtotal}</span>
    </div>
  );
};
export default Checkout;
