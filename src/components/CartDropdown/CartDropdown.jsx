import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/Cart.context";
import CartItem from "../CartItem/CartItem";

import {
  DropdownContainer,
  DropdownItems,
  CheckoutButton,
  EmptyCart,
} from "./CartDropdown.styles";

const CartDropdown = () => {
  const { cartItems, toggleIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    toggleIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <DropdownContainer>
      <DropdownItems>
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} cartItem={item} />;
          })
        ) : (
          <EmptyCart>Your cart is empty</EmptyCart>
        )}
      </DropdownItems>
      <CheckoutButton onClick={goToCheckoutHandler}>
        Go to Checkout
      </CheckoutButton>
    </DropdownContainer>
  );
};

export default CartDropdown;
