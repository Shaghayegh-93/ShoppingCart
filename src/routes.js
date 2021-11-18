import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import ChekoutPage from "./Pages/ChekoutPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
const routes = [
  { path: "/cart", component: CartPage },
  { path: "/checkout", component: ChekoutPage },
  { path: "./login", component: LoginPage },
  { path: "./signup", component: SignupPage },
  { path: "/", component: HomePage, exact: true },
];

export default routes;
