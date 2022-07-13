import {useState} from "react";
import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import { useEffect } from "react";

const Catalog= ()=>{

    let [products, setProducts] = useState([]);

    const loadCatalog = ()=>{
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
    }

    //////////////////////////////////////////////////////////////////
    //use effect() is used to call an annonimous function to get the
    // data
    //////////////////////////////////////////////////////////////////

    useEffect(() =>{
        loadCatalog();
    },[]);


    return(
        <div className="catalog container">
            <h2>This is our Catalog</h2>
            <h3>We have {products.length} products</h3>
            <div className="products-container">
            {
                products.map((prod)=>
                    <Product key={prod.id} data={prod}></Product>
                )
            }
            </div>
        </div>
    );
}

export default Catalog;