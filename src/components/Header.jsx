import { use } from 'react';
import logoImg from '../assets/logo.png';
import Button from './UI/Button';
import { CartContext } from '../store/CartContext';
import { ModalContext } from '../store/ModalContext';

export default function Header({ title }) {

  const cartCtx = use(CartContext);
  const modalCtx = use(ModalContext);
  const totalCartItems = cartCtx.items.reduce((total, items) => total + items.quantity, 0);

  function handleShowCart() {
    modalCtx.showCart();
  }

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logoImg} alt='Zwigato Logo' />
        <h1>{title}</h1>
      </div>
      <nav>
        <Button textOnly className="cart-button" onClick={handleShowCart}>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
