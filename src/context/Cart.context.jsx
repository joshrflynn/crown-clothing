import { createContext, useReducer } from "react";
import { createAction } from "../util/reducer/reducer.utils";

//constants
export const CART_ACTIONS = {
  TOGGLE_CART_OPEN: "TOGGLE_CART_OPEN",
  UPDATE_CART: "UPDATE_CART",
};
const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartQuantity: 0,
  cartSubtotal: 0,
};

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
  cartItems: [],
  cartQuantity: 0,
  cartSubtotal: 0,
  toggleIsCartOpen: () => {},
  incrementItemInCart: () => {},
  decrementItemInCart: () => {},
  removeItemFromCart: () => {},
});

export const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS.TOGGLE_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    case CART_ACTIONS.UPDATE_CART:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled cartReducer type ${type}`);
  }
};

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartQuantity, cartSubtotal }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const toggleIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTIONS.TOGGLE_CART_OPEN, bool));
  };

  const updateCartReducer = (cartItems) => {
    const calculatedCartQuantity = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const calculatedCartSubtotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    dispatch(
      createAction(CART_ACTIONS.UPDATE_CART, {
        cartItems: cartItems,
        cartQuantity: calculatedCartQuantity,
        cartSubtotal: calculatedCartSubtotal,
      })
    );
  };

  const incrementItemInCart = (item) => {
    const newCartItems = incrementCartItem(cartItems, item);
    updateCartReducer(newCartItems);
  };

  const decrementItemInCart = (item) => {
    const newCartItems = decrementCartItem(cartItems, item);
    updateCartReducer(newCartItems);
  };

  const removeItemFromCart = (item) => {
    const newCartItems = removeCartItem(cartItems, item);
    updateCartReducer(newCartItems);
  };

  const value = {
    isCartOpen,
    toggleIsCartOpen,
    incrementItemInCart,
    decrementItemInCart,
    removeItemFromCart,
    cartItems,
    cartQuantity,
    cartSubtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
