import { useEffect } from "react";
import { createContext, useState } from "react";

const incrementCartItem = (cartItems, itemToIncrement) => {
  const itemInCart = cartItems.find((el) => {
    return el.id === itemToIncrement.id;
  });

  if (itemInCart) {
    return cartItems.map((el) => {
      if (el.id === itemToIncrement.id) {
        return { ...el, quantity: el.quantity + 1 };
      } else {
        return el;
      }
    });
  }

  return [...cartItems, { ...itemToIncrement, quantity: 1 }];
};

const decrementCartItem = (cartItems, itemToDecrement) => {
  //find item in cart
  const itemInCart = cartItems.find((el) => {
    return el.id === itemToDecrement.id;
  });

  //reduce quantity by 1
  itemInCart.quantity = itemInCart.quantity - 1;

  //check if quantity has reached zero, remove from array if it has
  if (itemInCart.quantity <= 0) {
    return cartItems.filter((el) => {
      return el.id !== itemToDecrement.id;
    });
  }

  //if quantity of item > 0, return new array with updated quantity
  return [...cartItems];
};

const removeCartItem = (cartItems, itemToRemove) => {
  return cartItems.filter((el) => {
    return el.id !== itemToRemove.id;
  });
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  incrementItemInCart: () => {},
  decrementItemInCart: () => {},
  removeItemFromCart: () => {},
  cartQuantity: 0,
  cartSubtotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartSubtotal, setCartSubtotal] = useState(0);

  useEffect(() => {
    const calculatedCartSubtotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );
    setCartSubtotal(calculatedCartSubtotal);
  }, [cartItems]);

  useEffect(() => {
    const calculatedCartQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartQuantity(calculatedCartQuantity);
  }, [cartItems]);

  const incrementItemInCart = (item) => {
    setCartItems(incrementCartItem(cartItems, item));
  };

  const decrementItemInCart = (item) => {
    setCartItems(decrementCartItem(cartItems, item));
  };

  const removeItemFromCart = (item) => {
    setCartItems(removeCartItem(cartItems, item));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    incrementItemInCart,
    decrementItemInCart,
    removeItemFromCart,
    cartItems,
    cartQuantity,
    cartSubtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
