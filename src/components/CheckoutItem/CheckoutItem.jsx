import "./CheckoutItem.styles.jsx";
import { CartContext } from "../../context/Cart.context";
import { useContext, useState, useEffect } from "react";
import {
  Arrow,
  CheckoutItemContainer,
  DefaultSpan,
  ImageContainer,
  Quantity,
  RemoveButton,
  Value,
} from "./CheckoutItem.styles.jsx";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const [totalPrice, setTotalPrice] = useState(price);
  const { removeItemFromCart, incrementItemInCart, decrementItemInCart } =
    useContext(CartContext);

  const decrementHandler = () => decrementItemInCart(cartItem);
  const incrementHandler = () => incrementItemInCart(cartItem);
  const removeHandler = () => removeItemFromCart(cartItem);

  useEffect(() => {
    setTotalPrice(price * quantity);
  }, [quantity, price]);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={name} />
      </ImageContainer>
      <DefaultSpan>{name}</DefaultSpan>
      <Quantity>
        <Arrow onClick={decrementHandler}>&lt;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={incrementHandler}>&gt;</Arrow>
      </Quantity>
      <DefaultSpan>{totalPrice}</DefaultSpan>
      <RemoveButton onClick={removeHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
