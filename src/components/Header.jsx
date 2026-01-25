import logoImg from '../assets/logo.png';
import Button from './UI/Button';

export default function Header({ title }) {
  return (
    <header id='main-header'>
      <div id='title'>
        <img src={logoImg} alt='Zwigato Logo' />
        <h1>{title}</h1>
      </div>
      <nav>
        <Button textOnly className="cart-button">
          Cart (0)
        </Button>
      </nav>
    </header>
  );
}
