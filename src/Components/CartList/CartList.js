import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function CartList() {
  const { products, cart, setCart } = useContext(AppContext);

  function onQuantityChange(product, qty) {
    setCart({
      ...cart,
      [product.id]: qty
    });
  }

  function onItemRemove(product) {
    const newCart = { ...cart };
    delete newCart[product.id];
    setCart(newCart);
  }

  const productIds = Object.keys(cart);

  const output = products
    .filter((product) => productIds.includes(product.id))
    .map((product) => (
      <div className="cartItem" key={product.id}>
        <Link to={"/products/" + product.slug}>
          <img src={product.img} alt={product.name} />
        </Link>
        <Link to={"/products/" + product.slug}>{product.name}</Link>

        <div className="inputs">
          <input
            type="number"
            value={cart[product.id]}
            min={1}
            onChange={(event) => onQuantityChange(product, +event.target.value)}
          />
          <span>${(cart[product.id] * product.price).toFixed(2)}</span>
          <i className="fa-solid fa-xmark" onClick={() => onItemRemove(product)} />
        </div>
      </div>
    ));

  const totalPrice = products
    .filter((product) => productIds.includes(product.id))
    .reduce((total, product) => total + cart[product.id] * product.price, 0);

  const totalItems = productIds.reduce((total, id) => total + cart[id], 0);

  return (
    <div className="CartList">
      {output}
      <div className="totalPrice">
        Items: {totalItems}
      </div>
      <div className="totalPrice">
        Total Price: ${totalPrice.toFixed(2)}
      </div>
    </div>
  );
}
