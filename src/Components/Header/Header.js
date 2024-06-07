import './Header.css';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import CartLink from '../CartLink/CartLink';
import Auth from "../Auth/Auth"
function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo/>
          <Nav/>
          <div className="Buttons flex">
            <CartLink/>
            <Auth/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;