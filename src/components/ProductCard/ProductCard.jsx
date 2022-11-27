import "./ProductCard.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

import { Button, BUTTON_TYPE_CLASSES } from "../Button/Button";
import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from "./ProductCard.styles.jsx";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { incrementItemInCart } = useContext(CartContext);
  const addItemHandler = () => {
    incrementItemInCart(product);
  };

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>${price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addItemHandler}
      >
        Add to Cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
