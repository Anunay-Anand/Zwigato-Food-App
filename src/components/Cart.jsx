import { use } from "react";

import Modal from "./UI/Modal.jsx";
import { formatCurrency } from "../util/formatting.js";
import { CartContext } from "../store/CartContext.jsx";

export default function Cart() {
  const cartCtx = use(CartContext);
  const cartTotal = cartCtx.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <Modal className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <li key={item.id} className="cart-item">
            {item.name} -- ${item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">${formatCurrency(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
