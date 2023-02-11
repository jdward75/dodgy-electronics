import { createContext, useReducer } from "react";
import cartReducer from "../reducers/cart-reducer";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cart, cartDispatcher] = useReducer(cartReducer, {
    items: {},
    total_value: 0,
  });

  const updateCartHandler = (data) => {
    cartDispatcher({
      type: "UPDATE",
      data: data,
    });
  };

  const cartContext = {
    cart: cart,
    updateCart: updateCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
