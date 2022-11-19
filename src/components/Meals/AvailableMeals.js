import DUMMY_MEALS from "./DUMMY_MEALS";
import { Fragment } from "react";
import Meal from "./Meal";

const AvailableMeals = () => {
  return (
    <Fragment>
      {DUMMY_MEALS.map((meal) => (
        <Meal
          key={meal.id}
          id={meal.id}
          desc={meal.desc}
          price={meal.price}
          img={meal.img}
        />
      ))}
    </Fragment>
  );
};

export default AvailableMeals;
