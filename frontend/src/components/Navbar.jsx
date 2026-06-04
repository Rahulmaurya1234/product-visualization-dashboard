import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Link
        to="/"
        className="nav-link"
      >
        <button>Products</button>
        
      </Link>
        <h2>Product Dashboard</h2>
      <Link
        to="/add-product"
        className="nav-link"
      >
        <button>Add Product</button>
       
      </Link>
    </div>
  );
}

export default Navbar;