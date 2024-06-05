import "./Header.css";
import Logo from "../Logo/Logo";
import CartLink from "../CartLink/CartLink";
import Auth from "../Auth/Auth";
import Nav from "../Nav/Nav"
export default function HeaderSection() {

  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo />
          <Nav />
          <div className="buttons flex">
            <CartLink />
            <Auth/>
          </div>
        </div>
      </div>
    </header>
  )
  
}