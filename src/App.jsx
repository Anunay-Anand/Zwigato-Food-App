import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/Cart";
import CartContextProvider from "./store/CartContext";
import ModalContextProvider from "./store/ModalContext";

function App() {
  return (
    <ModalContextProvider>
      <CartContextProvider>
        <Header title={"Zwigato App"} />
        <Meals />
        <Cart />
      </CartContextProvider>
    </ModalContextProvider>
  );
}

export default App;
