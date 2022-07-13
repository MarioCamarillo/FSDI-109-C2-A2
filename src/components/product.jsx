import { useState } from "react";
import "./product.css";
import QuantityPicker from "./quantityPicker";


const Product = (props) => {

    let [quantity, setQuantity] = useState(1);

    const quantityChange = (newVal) => {
        setQuantity(newVal);
    };

    const getTotal = () => {
        let total = props.data.price*quantity;
        return total.toFixed(2);
    }

    return(
        <div className="product">
            <img src={"/img/" + props.data.image} alt="" />
            <h2>{props.data.title}</h2>
            <label>${props.data.price.toFixed(2)}</label>
            <label>${getTotal()}</label>
            <QuantityPicker onChange={quantityChange}></QuantityPicker>

            <button className="btn btn-primary">Add</button>

        </div>
    );
}

export default Product;