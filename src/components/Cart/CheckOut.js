import styles from "./Cart.module.css";

const CheckOut = (props) => {
  const CheckOutSubmitHandler = (event) => {
    event.preventDefault();
    const FullName = event.target.fullName.value;
    const Address = event.target.address.value;
    const Phone = event.target.phone.value;

    props.onCheckOut({
      fullname: FullName,
      phone: Phone,
      address: Address,
    });

    event.target.fullName.value = "";
    event.target.address.value = "";
    event.target.phone.value = "";
  };

  return (
    <form className={styles.checkoutModal} onSubmit={CheckOutSubmitHandler}>
      <h4>
        Delivery Details{" "}
        <small style={{ fontSize: ".7rem", color: "red" }}>
          *All Payments on Delivery
        </small>
      </h4>
      <div className={styles.inputsContainer}>
        <div className={styles.Input}>
          <label htmlFor="fullName">FullName</label>
          <input
            type="text"
            name="fullName"
            placeholder="ie. Emmanuel Mmanda"
            required
          />
        </div>
        <div className={styles.Input}>
          <label htmlFor="fullName">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="ie. +255769642323"
            required
          />
        </div>
        <div className={styles.Input}>
          <label htmlFor="fullName">Delivery Address</label>
          <input
            type="text"
            name="address"
            placeholder="ie. Sinza C 6 Dar es Salaam"
            required
          />
        </div>
        <br />
        <button type="submit" style={{ fontSize: ".8rem", color: "#eee" }}>
          <span>
            Confirm Order <i className="bx bx-check"></i>
          </span>
        </button>
      </div>
    </form>
  );
};

export default CheckOut;
