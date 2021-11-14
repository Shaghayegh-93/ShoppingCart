import { NavLink,withRouter } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/" activeClassName="activeLink" exact >
              home
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" activeClassName="activeLink">
              cart
            </NavLink>
          </li>
        </ul>
        <div>Shopping</div>
      </nav>
    </header>
  );
};

export default  withRouter(Navigation);
