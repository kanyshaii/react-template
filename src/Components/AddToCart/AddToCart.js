import "./AddToCart.css";
import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export function AddToCart({ product }) {
  const { cart, setCart } = useContext(AppContext);

  function onAddToCartClick() {
    const qty = cart[product.id] ? cart[product.id] + 1 : 1;
    setCart({
      ...cart,
      [product.id]: qty,
    });
  }

  return (
    <div className="AddToCart">
      <button onClick={onAddToCartClick}>Add to cart</button>
      {cart[product.id] ? cart[product.id] : 0}
    </div>
  );
}

// import { FaCheck } from "react-icons/fa"; // Импортируем иконку FaCheck из библиотеки react-icons/fa

// import "./AddToCart.css";
// import { useContext } from "react";
// import { AppContext } from "../../App";

// export function AddToCart({ product }) {
//   const { cart, setCart } = useContext(AppContext);

//   function onAddToCartClick() {
//     const qty = cart[product.id] ? cart[product.id] + 1 : 1;
//     setCart({
//       ...cart,
//       [product.id]: qty,
//     });
//   }

//   return (
//     <div className="AddToCart">
//       <button onClick={onAddToCartClick}>
//         <FaCheck /> {/* Используем иконку FaCheck */}
//       </button>
//       {cart[product.id] ? cart[product.id] : 0}
//     </div>
//   );
// }
