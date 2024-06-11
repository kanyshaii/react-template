// import { useContext } from "react";
// import "./ProductList.css";
// import { AppContext } from "../../App";
// import { Link, useNavigate } from "react-router-dom";
// // import { AddToCart } from "../AddToCart/AddToCart";
// import AddProduct from "../AddProduct/AddProduct";
// import DeleteProduct from "../DeleteProduct/DeleteProduct";

// export default function ProductList({ category }) {
//   const { products, cart, setCart } = useContext(AppContext);
//   const navigate = useNavigate();

//   const handleAddToCartAndRedirect = (product) => {
//     setCart({
//       ...cart,
//       [product.id]: (cart[product.id] || 0) + 1,
//     });
//     navigate("/cart");
//   };

//   const output = products.filter(product => product.category === category.id)
//     .map(product => (
//       <div key={product.id} className="product">
//         <Link to={"/products/" + product.slug}>
//           <img src={product.img} alt={product.name} />
//         </Link>
//         <Link to={"/products/" + product.slug} className="text">
//           {product.name}
//         </Link>

//         <p className="description">{product.desc}</p>

//         <div className="actions">
//           <span>${product.price}</span>
//           {/* <AddToCart product={product} /> */}
//         </div>
//         <DeleteProduct product={product} />

//         <button className="cart-icon" onClick={() => handleAddToCartAndRedirect(product)}>
//           <i className="fa fa-shopping-cart"></i>
//         </button>
//       </div>
//     ));

//   return (
//     <div className="ProductList">
//       {output}
//       <AddProduct category={category} />
//     </div>
//   )
// }





// import { useContext, useState } from "react";
// import "./ProductList.css";
// import "../AddToCart/AddToCart"; // Добавлен импорт для стилей кнопки AddToCart
// import { AppContext } from "../../App";
// import { Link } from "react-router-dom";
// import AddProduct from "../AddProduct/AddProduct";
// import DeleteProduct from "../DeleteProduct/DeleteProduct";
// import { AddToCart } from "../AddToCart/AddToCart";


//  function ProductList({ category }) {
//   const { products, cart, setCart } = useContext(AppContext);
//   const [hoveredProductId, setHoveredProductId] = useState(null);

//   const handleAddToCart = (product) => {
//     const qty = cart[product.id] ? cart[product.id] + 1 : 1;
//     setCart({
//       ...cart,
//       [product.id]: qty,
//     });
//   };
//   const handleAddToCartAndRedirect = (product) => {
//     setCart({
//       ...cart,
//       [product.id]: (cart[product.id] || 0) + 1,
//     });
//     navigate("/cart");
//   };

//   const output = products
//     .filter((product) => product.category === category.id)
//     .map((product) => (
//       <div
//         key={product.id}
//         className="product"
//         onMouseEnter={() => setHoveredProductId(product.id)}
//         onMouseLeave={() => setHoveredProductId(null)}
//       >
//         <Link to={"/products/" + product.slug}>
//           <img src={product.img} alt={product.name} />
//         </Link>
//         <Link to={"/products/" + product.slug} className="text">
//           {product.name}
//         </Link>

//         <p className="description">{product.desc}</p>

//         <div className="actions">
//           <span>${product.price}</span>
//           {/* Используем компонент AddToCart для отображения иконки и добавления товара в корзину */}
//           {hoveredProductId === product.id && (
//             <AddToCart product={product} onAddToCart={handleAddToCart} />
//           )}
//         </div>
//         <DeleteProduct product={product} />
//         <button className="cart-icon" onClick={() => handleAddToCartAndRedirect(product)}>
// //           <i className="fa fa-shopping-cart"></i>
// //         </button>
//       </div>
//     ));

//   return (
//     <div className="ProductList">
//       {output}
//       <AddProduct category={category} />
//     </div>
//   );
// }
// export default  ProductList;

import { useContext, useState } from "react";
import "./ProductList.css";
import "../AddToCart/AddToCart"; // Добавлен импорт для стилей кнопки AddToCart
import { AppContext } from "../../App";
import { Link, useNavigate } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import { AddToCart } from "../AddToCart/AddToCart";

function ProductList({ category }) {
  const { products, cart, setCart } = useContext(AppContext);
  const navigate = useNavigate();
  const [hoveredProductId, setHoveredProductId] = useState(null);

  const handleAddToCart = (product) => {
    const qty = cart[product.id]? cart[product.id] + 1 : 1;
    setCart({
     ...cart,
      [product.id]: qty,
    });
  };

  const handleAddToCartAndRedirect = (product) => {
    setCart({
     ...cart,
      [product.id]: (cart[product.id] || 0) + 1,
    });
    navigate("/cart");
  };

  const output = products
   .filter((product) => product.category === category.id)
   .map((product) => (
      <div
        key={product.id}
        className="product"
        onMouseEnter={() => setHoveredProductId(product.id)}
        onMouseLeave={() => setHoveredProductId(null)}
      >
        <Link to={"/products/" + product.slug}>
          <img src={product.img} alt={product.name} />
        </Link>
        <Link to={"/products/" + product.slug} className="text">
          {product.name}
        </Link>

        <p className="description">{product.desc}</p>

        <div className="actions">
          <span>${product.price}</span>
          {/* Используем компонент AddToCart для отображения иконки и добавления товара в корзину */}
          {hoveredProductId === product.id && (
            <AddToCart product={product} onAddToCart={handleAddToCart} />
          )}
        </div>
        <DeleteProduct product={product} />
        <button className="cart-icon" onClick={() => handleAddToCartAndRedirect(product)}>
           <i className="fa fa-shopping-cart"></i>
         </button>
      </div>
    ));

  return (
    <div className="ProductList">
      {output}
      <AddProduct category={category} />
    </div>
  );
}

export default ProductList;




