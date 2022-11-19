import React from "react";
import styles from "./HeaderCartButton.module.css";
import { useContext } from "react";
import CartContext from "../../store/Cart-Context";

const HeaderCartButton = (props) => {
  const ctx = useContext(CartContext);

  const numOfItems = ctx.items.reduce((currNumber, item) => {
    return +currNumber + +item.amount;
  }, 0);

  return (
    <div className={styles.cartButton} onClick={props.ShowCart}>
      <span>
        <i className="bx bx-cart-alt"></i>
      </span>
      <span>Your Cart</span>
      <span>{numOfItems}</span>
    </div>
  );
};

export default HeaderCartButton;
