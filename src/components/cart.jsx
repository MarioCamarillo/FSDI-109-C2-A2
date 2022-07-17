import { useState } from "react";
import { Link } from "react-router-dom";
import "./cart.css";
import { useContext } from "react";
import StoreContext from "../context/storeContext";
import Product from "./product";
import ProductInCart from "./productInCart";

const Cart = () => {
  const cart = useContext(StoreContext).cart;

  const getTotal = () => {
    let total = 0;
    for (let index = 0; index < cart.length; index++) {
      let product = cart[index];
      total += product.price * product.quantity;
    }
    return total.toFixed(2);
  };

  const getCount = () => {
    let count = 0;

    ////////////////////////////////////
    // travel through the array and sum
    // the quantity of each product
    ////////////////////////////////////
    for (let index = 0; index < cart.length; index++) {
      count = count + cart[index].quantity;
    }

    return count;
  };

  return (
    <div className="cart-page">
      <h1>This is the cart page</h1>
      <h3>There are {getCount()}</h3>
      <div className="parent">
        <section className="list">
          {cart.map((prod) => (
            <ProductInCart key={prod.id} data={prod} />
          ))}
        </section>

        <section className="info">
          <h5>Total to pay</h5>
          <h3>${getTotal()}</h3>
        </section>
      </div>
    </div>
  );
};

export default Cart;
