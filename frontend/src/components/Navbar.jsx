import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link
        to="/"
        className="nav-link"
      >
        Products
      </Link>

      <Link
        to="/add-product"
        className="nav-link"
      >
        Add Product
      </Link>
    </div>
  );
}

export default Navbar;