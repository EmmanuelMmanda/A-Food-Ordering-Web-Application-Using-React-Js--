import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";
import Meals from "./components/Meals/Meals";
import Footer from "./components/Layout/footer";
function App() {
  const [CartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const OrderingMealsHandler = (cartmeals) => {
    return console.log("Ordering meals", cartmeals);
  };
  return (
    <CartProvider>
      {CartIsShown && (
        <Cart onClose={hideCartHandler} onAccept={OrderingMealsHandler} />
      )}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
      <Footer />
    </CartProvider>
  );
}

export default App;
