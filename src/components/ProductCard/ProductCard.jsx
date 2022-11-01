import "./ProductCard.scss";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

import { Button } from "../Button/Button";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { incrementItemInCart } = useContext(CartContext);
  const addItemHandler = () => {
    incrementItemInCart(product);
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <Button buttonType="inverted" onClick={addItemHandler}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
