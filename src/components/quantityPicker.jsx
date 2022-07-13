import { useState } from "react";
import  "./quantityPicker.css";

const MIN_VALUE = 0;

const QuantityPicker = (props) => {
    let [quantity,setQuantity] = useState(0);


    ///////////////////////////////////////
    //best practice is to use "handle"
    ///////////////////////////////////////

    const handleIncrease=()=>{
        let newVal = quantity+1;
        setQuantity(newVal);
        props.onChange(newVal);
    }


    const handleDecrease=()=>{
        if (quantity <= MIN_VALUE ){
        }
        else{
            let newVal = quantity - 1;
            setQuantity(newVal);
            props.onChange(newVal);
        }
    
    }

    return(
        <div className="quantityPicker">

            
            <button className="btn btn-primary btn-sm" onClick={handleDecrease}>-</button>
            <label>{quantity}</label>
            <button className="btn btn-primary btn-sm" onClick={handleIncrease}>+</button>

        </div>
    );
}


export default QuantityPicker;