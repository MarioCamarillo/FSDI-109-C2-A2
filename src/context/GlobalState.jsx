import StoreContext from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  const myAddProduct = (product) => {
    console.log("Global Add Product");

    ////////////////////////////////////////////////////
    // make a copy of the product and put it into cart
    ////////////////////////////////////////////////////
    let copyCart = [...cart];
    copyCart.push(product);
    setCart(copyCart);
  };

  const myRemoveProduct = () => {
    console.log("Global Remove Product");
  };

  return (
    <StoreContext.Provider
      value={{
        cart: cart,
        user: user,
        addProduct: myAddProduct,
        removeProduct: myRemoveProduct,
      }}
    >
      {props.children};
    </StoreContext.Provider>
  );
};

export default GlobalState;
