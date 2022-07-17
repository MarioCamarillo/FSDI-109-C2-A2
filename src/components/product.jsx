import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import StoreContext from "./../context/storeContext";
import Cart from "./cart";

const Product = (props) => {
  let [quantity, setQuantity] = useState(1);
  let globalAddProduct = useContext(StoreContext).addProduct;

  const quantityChange = (newVal) => {
    setQuantity(newVal);
  };

  const getTotal = () => {
    let total = props.data.price * quantity;
    return total.toFixed(2);
  };

  const handleAdd = () => {
    ///////////////////////////////////////////////////
    // should be a copy of props.data plus the quantity
    ///////////////////////////////////////////////////
    let prod4cart = { ...props.data };
    prod4cart.quantity = quantity;

    ///////////////////////////////////////////////////
    // should be a copy of props.data plus the quantity
    // (another way)
    ///////////////////////////////////////////////////
    //let prod4cart = { ...props.data, quantity: quantity };

    globalAddProduct(prod4cart);
  };

  return (
    <div className="product">
      <img src={"/img/" + props.data.image} alt="" />
      <h2>{props.data.title}</h2>
      <label>${props.data.price.toFixed(2)}</label>
      <label>${getTotal()}</label>
      <QuantityPicker onChange={quantityChange}></QuantityPicker>

      <button onClick={handleAdd} className="btn btn-primary">
        Add
      </button>
    </div>
  );
};

export default Product;
