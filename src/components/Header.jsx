import { use } from 'react';
import logoImg from '../assets/logo.png';
import Button from './UI/Button';
import { CartContext } from '../store/CartContext';

export default function Header({ title }) {

  const cartCtx = use(CartContext);
  const totalCartItems = cartCtx.items.reduce((total, items) => total + items.quantity, 0);

  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logoImg} alt='Zwigato Logo' />
        <h1>{title}</h1>
      </div>
      <nav>
        <Button textOnly className="cart-button">
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
}
