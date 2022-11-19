import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import CartProvider from "./store/CartProvider";
import Meals from "./components/Meals/Meals";
function App() {
  const [CartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  const Ordering = () => {
    return console.log("Ordering meals");
  };
  return (
    <CartProvider>
      {CartIsShown && <Cart onClose={hideCartHandler} onAccept={Ordering} />}
      <Header onShowCart={ShowCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
