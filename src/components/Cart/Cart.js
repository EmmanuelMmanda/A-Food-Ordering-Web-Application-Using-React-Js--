import React, { Fragment } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-Context";
import { useContext, useState } from "react";
import CheckOut from "./CheckOut";
import Spinner from "../UI/Spinner";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [showContactForm, setshowContactForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState();
  const [orderStatus, setorderStatus] = useState("Initialzing Order");

  let hasItems = ctx.items.length > 0;
  const totalAmount = ctx.totalAmount;
  const mealsData = ctx.items;

  const resetCartitemsHandler = () => {
    ctx.resetCart();
  };
  const removeCartItemHandler = (id, price, amount) => {
    ctx.removeFromCart(id, price, amount);
  };

  const AcceptCartHandler = () => {
    setshowContactForm(true);
  };

  const CheckOuthandler = async (userData) => {
    setIsLoading(true);
    setshowContactForm(false);
    setTimeout(() => {
      setorderStatus("Ordering Meals");
    }, 3000);
    const orderDetails = {
      ...userData,
      mealsData,
    };
    try {
      const request = await fetch(
        "https://hourlycodes-default-rtdb.firebaseio.com/orders.json",
        {
          method: "POST",
          body: JSON.stringify(orderDetails),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(request);
      if (!request.ok) {
        console.log("an error has occured", request.statusText);
        throw new Error("An Error has Occured");
      }
    } catch (error) {
      setErrors(error.message);
    }
    setTimeout((timer) => {
      setorderStatus(
        "Order Succesfully Received, We will Contact you for Your Delivery"
      );
      clearTimeout(timer);
    }, 4000);

    console.log("reseting cart items");
    resetCartitemsHandler();
    console.log("reseting complete");
  };

  return (
    <Fragment>
      <Modal
        title="Your Cart Items"
        AcceptText={hasItems && !isLoading && !showContactForm ? "Order" : ""}
        onAccept={AcceptCartHandler}
        // onAccept={props.onAccept.bind(null, ctx.items)}
        onClose={props.onClose}
      >
        {isLoading && !errors ? (
          <Spinner spinnertext={orderStatus} />
        ) : (
          <div
            style={{
              overflow: "scroll",
              maxHeight: "210px",
              overflowX: "hidden",
              padding: 5,
              scrollbarWidth: "thin",
              scrollbarColor: "var(--link-color)",
              MozScrollbarColor: "var(--link-color)",
              borderBottom: "1px solid var(--border-Color)",
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
            {errors && (
              <p
                style={{
                  color: "red",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Opps!: {errors}
              </p>
            )}
            {!hasItems && !errors && (
              <p style={{ textAlign: "center" }}> No items in Cart</p>
            )}
            <div className={styles.cart_Summary}>
              {errors || !hasItems ? (
                ""
              ) : (
                <div className={styles.total_price}>
                  <span>Total Price: </span>
                  <span>Tsh {totalAmount}</span>
                </div>
              )}
            </div>
          </div>
        )}

        {showContactForm && <CheckOut onCheckOut={CheckOuthandler} />}
      </Modal>
    </Fragment>
  );
};

export default Cart;
