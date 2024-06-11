// import { NavLink } from "react-router-dom";
// import "./Nav.css";

//  function Nav() {
//   return (
//     <nav className="Nav">
//       <ul>
//         <li className="NavItem">
//           <NavLink to="/">Home</NavLink>
//         </li>
//         <li className="NavItem">
//           <NavLink to="/about">About</NavLink>
//         </li>
//         <li className="NavItem">
//           <NavLink to="/shop"> Products</NavLink>
//         </li>
//         <li className="NavItem">
//           <NavLink to="/contacts">Contacts</NavLink>
//         </li>
//         <li className="NavItem">
//           <NavLink to="/delivery">Delivery</NavLink>
//         </li>
//       </ul>
//     </nav>
//   );
// }
// export default Nav;








import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="Nav">
      <button className={`burger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
        <span className="burger-bar"></span>
      </button>
      <ul className={`NavMenu ${menuOpen ? "open" : ""}`}>
        <li className="NavItem">
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/shop" onClick={() => setMenuOpen(false)}>Products</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/contacts" onClick={() => setMenuOpen(false)}>Contacts</NavLink>
        </li>
        <li className="NavItem">
          <NavLink to="/delivery" onClick={() => setMenuOpen(false)}>Delivery</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
