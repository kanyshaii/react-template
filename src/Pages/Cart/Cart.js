import { useContext, useState } from "react";
import CartList from "../../Components/CartList/CartList";
import OrderForm from "../../Components/OrderForm/OrderForm";
import { AppContext } from "../../App";
import Title from '../../Components/Title/Title';

export function Cart() {
  const [modalActive, setModalActive] = useState(false);
  const { cart, user } = useContext(AppContext);

  if (Object.keys(cart).length === 0) {
    return (
      <div className="Cart">
        <h1>Cart</h1>
        <CartList setModalActive={setModalActive} />
        <OrderForm active={modalActive} setActive={setModalActive} />
      </div>
    )
  }
  if (!user) {
    return (
      <div className="Cart">
        <h1>Cart</h1>
        <CartList setModalActive={setModalActive} />
        <OrderForm active={modalActive} setActive={setModalActive} />
      </div>
    )
  }

  return (
    <div className="Cart">
      <h1>Cart</h1>
      <CartList setModalActive={setModalActive} />
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
  )
}
