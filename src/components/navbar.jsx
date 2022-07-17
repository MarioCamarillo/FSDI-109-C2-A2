import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../context/storeContext";

function Navbar() {
  let cart = useContext(StoreContext).cart;

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
    <div className="navbar btn-outline-light">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/catalog">
            Catalog
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="About">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Cart">
            <span className="badge bg-primary">{getCount()}</span>
            Cart
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/Admin">
            Admin
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
