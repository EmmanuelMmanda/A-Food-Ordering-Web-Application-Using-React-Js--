import React from "react";
import Input from "../UI/Input";
import styles from "./MealActions.module.css";

const MealActions = () => {
  return (
    <form className={styles.mealActions}>
      <Input
        label="Amount"
        input={{
          id: 1,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
        }}
      />
      <button className={styles.addCard}>
        <i className="bx bx-cart-add"></i>
      </button>
    </form>
  );
};

export default MealActions;
