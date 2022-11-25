import { Fragment, useState, useEffect } from "react";
import Spinner from "../UI/Spinner";
import Meal from "./Meal";

const AvailableMeals = () => {
  const [requestError, setRequestError] = useState(null);
  const [MealsData, setMealsData] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  // const addDummyMealsHandler = async (meals) => {
  //   for (const meal of meals) {
  //     try {
  //       const request = await fetch(
  //         "https://hourlycodes-default-rtdb.firebaseio.com/meals.json",
  //         {
  //           method: "POST",
  //           body: JSON.stringify(meal),
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );

  //       if (!request.ok) {
  //         throw new Error(request.statusText);
  //       }

  //       console.log("meal added", request.statusText);
  //     } catch (error) {
  //       setRequestError(error);
  //     }
  //   }
  // };

  const fetchMealsHandler = async () => {
    setisLoading(true);
    try {
      const response = await fetch(
        "https://foody-84852-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const meals = await response.json();

      let LoadedMeals = [];

      for (const key in meals) {
        const meal = {
          id: key,
          desc: meals[key].desc,
          price: meals[key].price,
          img: meals[key].img,
        };
        LoadedMeals.push(meal);
      }
      setMealsData(LoadedMeals);
    } catch (error) {
      setRequestError(error);
    }
    setisLoading(false);
  };

  useEffect(() => {
    fetchMealsHandler();

    return () => {};
  }, []);

  return (
    <Fragment>
      {requestError && !isLoading && (
        <p className="errorBox">{requestError.message}</p>
      )}

      {isLoading && <Spinner spinnertext="Loading Available Meals"/>}
      {MealsData.map((meal) => (
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
