import Button from "./UI/Button.jsx"
import { formatCurrency } from "../util/formatting.js";

export default function CartItem({ name, quantity, price, onDecrease, onIncrease }) {
    return (
        <li className="cart-item">
            <p>{name} - {quantity} x {formatCurrency(price)}</p>
            <div className="cart-item-actions">
                <Button textOnly onClick={onDecrease}>-</Button>
                <span>{quantity}</span>
                <Button textOnly onClick={onIncrease}>+</Button>
            </div>
        </li>
    );
}