import React, { useContext } from "react";
import styles from "./Meal.module.css";
import MealActions from "./MealActions";
import CartContext from "../../store/Cart-Context";

const Meal = (props) => {
  const ctx = useContext(CartContext);

  const MealAmounthandler = (a) => {

    ctx.addItemToCart({
      id: props.id,
      price: props.price,
      amount: +a,
      desc: props.desc,
      img: props.img,
    });
  };

  return (
    <div className={styles.Meal} key={props.id}>
      <div>
        <div className={styles.mealImage}>
          <img src={props.img} width="100%" alt={props.desc} />
        </div>
        <div className={styles.mealDescription}>
          <h3>
            <i className="bx bx-purchase-tag"></i>
            {props.desc}
          </h3>
          <h4 className={styles.price}>
            <i className="bx bx-money"></i>
            Tsh {props.price} /=
          </h4>
        </div>
      </div>
      <MealActions onAddCart={MealAmounthandler} />
    </div>
  );
};

export default Meal;
