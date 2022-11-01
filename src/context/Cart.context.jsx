import React, { useEffect } from "react";
import { createContext, useState } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  const itemInCart = cartItems.find((el) => {
    return el.id === itemToAdd.id;
  });

  if (itemInCart) {
    return cartItems.map((el) => {
      if (el.id === itemToAdd.id) {
        return { ...el, quantity: el.quantity + 1 };
      } else {
        return el;
      }
    });
  }

  return [...cartItems, { ...itemToAdd, quantity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalQuantity: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const calculatedTotalQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );

    setTotalQuantity(calculatedTotalQuantity);
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    totalQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
