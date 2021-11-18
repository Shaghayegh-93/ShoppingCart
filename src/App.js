import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./Context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <ToastContainer theme="colored"  />
        <Switch>
          {routes.map((route) => (
            <Route {...route} />
          ))}
        </Switch>
      </CartProvider>
    </Router>
  );
}

export default App;
