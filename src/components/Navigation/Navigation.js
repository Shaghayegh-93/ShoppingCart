import { NavLink, withRouter } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { useCart } from "../../Context/CartProvider";
import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <div>Shopping</div>
          <li>
            <NavLink to="/" activeClassName="activeLink" exact>
              home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to={userData ? "/profile" : "/login"}
              activeClassName="activeLink"
            >
              {userData ? `${userData.name} welcome` : "login/signup"}
            </NavLink>
          </li>
          <li className="cartLink">
            <NavLink to="/cart" activeClassName="activeLink">
              cart
            </NavLink>
            <span> {cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
