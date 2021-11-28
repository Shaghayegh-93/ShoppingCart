import { NavLink, withRouter } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { useCart } from "../../Context/CartProvider";
import { BiCartAlt } from "react-icons/bi";
// import logo from "../../assets/images/logo.png";

import "./Navigation.css";

const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();

  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <div className="logo">
            {/* <img src={logo} alt="logo" ></img> */}
            <h1>shopping</h1>
          </div>
          <li>
            <NavLink to="/" activeClassName="activeLink" exact>
              Home
            </NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink
              to={userData ? "/profile" : "/login"}
              activeClassName="activeLink"
            >
              {userData ? `welcome ${userData.name} ` : "login/signup"}
            </NavLink>
          </li>
          <li className="cartLink">
            <NavLink to="/cart" activeClassName="activeLink">
              <BiCartAlt className="cartIcon" />
            </NavLink>
            <span> {cart.length}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Navigation);
