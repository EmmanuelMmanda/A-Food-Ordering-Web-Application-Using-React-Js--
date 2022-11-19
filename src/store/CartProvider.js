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
    updatedItems = state.items.filter((item) => item.id !== action.id);
    console.log(updatedItems);
    return {
      items: updatedItems,
    };
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

  const removeItemFromCart = (id) => {
    cartDispatch({
      type: "REMOVE",
      id: id,
    });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItemToCart: addItemToCart,
        removeFromCart: removeItemFromCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
