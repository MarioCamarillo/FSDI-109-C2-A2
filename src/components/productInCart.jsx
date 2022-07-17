import "./productInCart.css";
import { useContext } from "react";
import storeContext from "../context/storeContext";

const ProductInCart = (props) => {
  const removeProduct = useContext(storeContext).removeProduct;

  const getTotal = () => {
    let total = props.data.price * props.data.quantity;
    return total.toFixed(2);
  };

  const handleRemoveProduct = () => {
    removeProduct(props.data.id);
  };

  return (
    <div className="product-cart">
      <img src={"/img/" + props.data.image} alt="" />

      <div className="info">
        <h5> {props.data.title} </h5>
        <p> {props.data.category} </p>
      </div>

      <div className="price">
        <label>Price</label>
        <label> ${props.data.price} </label>
      </div>

      <div className="quantity">
        <label>Quantity</label>
        <label> ${props.data.quantity} </label>
      </div>

      <div className="Total">
        <label>Total</label>
        <label> {getTotal()} </label>
      </div>

      <button onClick={handleRemoveProduct} className="btn btn-dm btn-danger">
        Remove
      </button>
    </div>
  );
};

export default ProductInCart;
