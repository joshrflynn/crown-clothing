import "./CartIcon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";
import {
  CartIconContainer,
  ShoppingIcon,
  ItemCount,
} from "./CartIcon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, toggleIsCartOpen, cartQuantity } =
    useContext(CartContext);

  const toggleCart = () => {
    toggleIsCartOpen(!isCartOpen);
  };

  return (
    <CartIconContainer onClick={toggleCart}>
      <ShoppingIcon />
      <ItemCount>{cartQuantity}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
