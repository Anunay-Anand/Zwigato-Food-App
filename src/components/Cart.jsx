import { use } from "react";

import Modal from "./UI/Modal.jsx";
import Button from "./UI/Button.jsx";
import CartItem from "./CartItem.jsx";
import { formatCurrency } from "../util/formatting.js";
import { CartContext } from "../store/CartContext.jsx";
import { ModalContext } from "../store/ModalContext.jsx";

export default function Cart() {
  const cartCtx = use(CartContext);
  const modalCtx = use(ModalContext);
  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  function handleHideCart() {
    modalCtx.hideCart();
  }

  function handleItemDecrease(productId) {
    cartCtx.updateItemQuantity(productId);
  }

  function handleItemIncrease(item) {
    cartCtx.addItemToCart(item);
  }

  return (
    <Modal className="cart" open={modalCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onDecrease={() => handleItemDecrease(item.id)}
            onIncrease={() => handleItemIncrease(item)}
          />
        ))}
      </ul>
      <p className="cart-total">${formatCurrency(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleHideCart}>
          Close
        </Button>
        <Button onClick={modalCtx.showCheckout}>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
