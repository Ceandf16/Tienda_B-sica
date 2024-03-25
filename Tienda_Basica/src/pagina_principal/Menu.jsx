import "./Vista_principal.css";
import carrito from "../assets/carritocompra.svg";
import { Link } from "react-router-dom";
function Menu() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#">HOME</a>
          </li>
          <li className="navbar-shopping-cart">
            <Link to="/carrito">
              <img className="carrito" src={carrito} alt="shopping cart" />
            </Link>
          </li>
        </ul>
      </nav>
      <div className="contenedor-buscador"></div>
    </header>
  );
}
export default Menu;
