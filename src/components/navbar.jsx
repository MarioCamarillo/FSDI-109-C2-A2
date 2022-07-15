import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import StoreContext from "../context/storeContext";

function Navbar() {
  let cart = useContext(StoreContext).cart;
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
            <span className="badge bg-primary">{cart.length}</span>
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
