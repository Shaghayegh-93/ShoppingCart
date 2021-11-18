import { NavLink, withRouter } from "react-router-dom";
import { useCart } from "../../Context/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="activeLink" exact>
              home
            </NavLink>
          </li>
          <li className="cartLink">
            <NavLink to="/cart" activeClassName="activeLink">
              cart
            </NavLink>
            <span> {cart.length}</span>
          </li>
        </ul>
        <div>Shopping</div>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
