// import "./Header.css";
// import Logo from "../Logo/Logo";
// import CartLink from "../CartLink/CartLink";
// import Auth from "../Auth/Auth";
// export default function HeaderSection() {

//   return (
//     <header className="Header">
//       <div className="container">
//         <div className="Head flex">
//           <Logo />
//           <div className="buttons flex">
//             <CartLink />
//             <Auth/>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
  
// }
import './Header.css';
// import Menu from '../Menu/Menu';
// import Button from '../Button/Button';
// import {Link} from 'react-router-dom'
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
          {/* <Menu /> */}
          <div className="Buttons flex">
            <CartLink/>
            <Auth/>
          </div>
          {/* <Link to="/cart" className="Cart_ic">
            <span>20</span>
          </Link> */}
        </div>
      </div>
    </header>
  );
}

export default Header;