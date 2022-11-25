import { useReducer } from "react";
import CartContext from "./Cart-Context";

const initialState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingItem = state.items[existingItemIndex];

    let updatedItem;
    let updatedItems;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(updatedItem);
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.amount * +action.item.price;

    return {
      totalAmount: updatedTotalAmount,
      items: updatedItems,
    };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    updatedItems = state.items.filter((item) => {
      return item.id !== action.id;
    });
    return {
      items: updatedItems,
      totalAmount: state.totalAmount - +action.price * +action.amount,
    };
  }

  if (action.type === "RESET") {
    return initialState;
  }
  return initialState;
};

const CartProvider = (props) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initialState);

  const addItemToCart = (item) => {
    cartDispatch({
      type: "ADD",
      item: item,
    });
  };

  const removeItemFromCart = (id, price, amount) => {
    cartDispatch({
      type: "REMOVE",
      id: id,
      price: price,
      amount: amount,
    });
  };
  const resetCart = () => {
    cartDispatch({
      type: "RESET",
    });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItemToCart: addItemToCart,
        removeFromCart: removeItemFromCart,
        resetCart: resetCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
