import Input from "../UI/Input";
import styles from "./MealActions.module.css";
import { useRef } from "react";

const MealActions = (props) => {
  const inputRef = useRef();

  const submithandler = (e) => {
     e.preventDefault();
    const  mealAmount = inputRef.current.value;
    props.onAddCart(mealAmount)
  };

  return (
    <form className={styles.mealActions} onSubmit={submithandler}>
      <Input
        label="Amount"
        ClassName={styles.inputNumber}
        ref={inputRef}
        input={{
          id: "amound-Input",
          type: "number",
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button className={styles.addCard}>
        <i className="bx bx-cart-add"></i>
      </button>
    </form>
  );
};

export default MealActions;
