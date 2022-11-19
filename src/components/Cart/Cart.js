import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-Context";
import { useContext } from "react";

const Cart = (props) => {
  const ctx = useContext(CartContext);


  const hasItems = ctx.items.length > 0;
  const totalAmount = ctx.totalAmount;

  const removeCartItemHandler = (id, price, amount) => {
    ctx.removeFromCart(id, price, amount);
  };

  return (
    <Modal
      title="Your Cart Items"
      AcceptText={hasItems ? "Order" : ""}
      onAccept={props.onAccept}
      onClose={props.onClose}
    >
      <div
        style={{
          overflow: "scroll",
          maxHeight: "300px",
          overflowX: "hidden",
          padding: 5,
          scrollbarWidth: "thin",
          scrollbarColor: "var(--link-color)",
          MozScrollbarColor: "var(--link-color)",
        }}
      >
        {ctx.items.map((item) => (
          <div className={styles.cart_item} key={item.id}>
            <div className={styles.cart_Image}>
              <img src={item.img} width="100%" alt={item.desc} />
            </div>
            <div className={styles.Cart_item_desc}>{item.desc}</div>
            <div className={styles.cart_amount_price}>
              <span>Amount: {item.amount}</span>
              <span>Tsh {item.price}</span>
            </div>
            <i
              className={`bx bx-trash trash ${styles["trashIcon"]}`}
              onClick={removeCartItemHandler.bind(
                null,
                item.id,
                item.price,
                item.amount
              )}
            ></i>
          </div>
        ))}
        {!hasItems && <p style={{ textAlign: "center" }}> No items in Cart</p>}
        <div className={styles.cart_Summary}>
          <div className={styles.total_price}>
            <span>Total Price: </span>
            <span>Tsh {totalAmount}</span>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
