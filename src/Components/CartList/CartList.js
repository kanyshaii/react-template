import "./CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function CartList({ setModalActive }) {
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
          <span>${(cart[product.id] * product.price)}</span>
          <i className="fa-solid fa-xmark" onClick={() => onItemRemove(product)} />
        </div>
      </div>
    ));

  const totalPrice = products
    .filter((product) => productIds.includes(product.id))
    .reduce((total, product) => total + cart[product.id] * product.price, 0);

  const totalItems = productIds.reduce((total, id) => total + cart[id], 0);

  return (<div className="container">
    <div className="CartList">
      <div>
        {output}
      </div>
      {totalItems > 0 && (
        <div className="totalPrice">
          <div>Items: {totalItems}</div>
          <div>Price: ${totalPrice}</div>
          <button className="order" onClick={() => setModalActive(true)}>Order</button>
        </div>
      )}
    </div>
    </div>
  );
}
