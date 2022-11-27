import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/Cart.context";
import CartItem from "../CartItem/CartItem";

import {
  DropdownContainer,
  DropdownItems,
  CheckoutButton,
} from "./CartDropdown.styles";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <DropdownContainer>
      <DropdownItems>
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </DropdownItems>
      <CheckoutButton onClick={goToCheckoutHandler}>
        Go to Checkout
      </CheckoutButton>
    </DropdownContainer>
  );
};

export default CartDropdown;
