import "./Checkout.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./Checkout.styles.jsx";
const Checkout = () => {
  const { cartItems, cartSubtotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((el) => (
        <CheckoutItem key={el.id} cartItem={el} />
      ))}
      <Total>Total: ${cartSubtotal}</Total>
    </CheckoutContainer>
  );
};
export default Checkout;
