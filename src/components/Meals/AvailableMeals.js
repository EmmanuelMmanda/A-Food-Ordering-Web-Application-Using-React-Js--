import styles from "./AvailableMeals.module.css";
import DUMMY_MEALS from "./DUMMY_MEALS";
import MealActions from "./MealActions";

const AvailableMeals = () => {
  return (
    <>
      {DUMMY_MEALS.map((meal) => (
        <div className={styles.Meal} key={meal.id}>
          <div>
            <div className={styles.mealImage}>
              <img src={meal.img} width="100%" alt="alt" />
            </div>
            <div className={styles.mealDescription}>
              <h3>
                <i className="bx bx-purchase-tag"></i>
                {meal.desc}
              </h3>
              <h4 className={styles.price}>
                <i className="bx bx-money"></i> 
                Tsh {meal.price} /=
              </h4>
            </div>
          </div>
          <MealActions />
        </div>
      ))}
    </>
  );
};

export default AvailableMeals;
