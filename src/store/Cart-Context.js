import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItemToCart: (item) => {},
  removeFromCart: (id,price) => {},
});

export default CartContext;
