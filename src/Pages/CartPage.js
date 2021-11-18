import { useCart, useCartActions } from "../Context/CartProvider";
import Layout from "../Layout/Layout";
import "../Pages/cartPage.css";
import { Link } from "react-router-dom";
// import { BiPlus,BiMinus } from "react-icons/bi";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  if (!cart.length)
    return (
      <Layout>
        <main>
          <h2>cart is empty!</h2>
        </main>
      </Layout>
    );
  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: cartItem });
  };
  const decrementHandler = (cartItem) => {
    dispatch({ type: "DECREMENT_PRODUCT", payload: cartItem });
  };
  return (
    <Layout>
      <main className="container">
        <section className="cartCenter">
          <section className="cartItemList">
            {cart.map((item) => {
              return (
                <div className="cartItem" key={item.id}>
                  <div className="itemImg">
                    <img src={item.image} alt={item.name}></img>
                  </div>
                  <div>{item.name}</div>
                  <div>{item.offPrice * item.quantity}</div>
                  <div className="btnGroup">
                    <button onClick={() => incHandler(item)}>+</button>
                    <button>{item.quantity}</button>
                    <button onClick={() => decrementHandler(item)}>-</button>
                  </div>
                </div>
              );
            })}
          </section>
          <CartSummary cart={cart} total={total} />
        </section>
      </main>
    </Layout>
  );
};

export default CartPage;
const CartSummary = ({ total, cart }) => {
  const originalTotalPrice = cart.length
    ? cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;
  return (
    <section className="cartSummary">
      <h2 style={{ marginBottom: "30px" }}>Cart summary</h2>
      <div className="summaryItem">
        <p>original total price</p>
        <p>${originalTotalPrice}</p>
      </div>
      <div className="summaryItem">
        <p>cart discount</p>
        <p>${originalTotalPrice - total}</p>
      </div>
      <div className="summaryItem net">
        <p>net price</p>
        <p>${total}</p>
      </div>
      <Link to="/checkout">
        <button className="btn primary" style={{ margin: "20px 0" ,width:"100%"}}>
          Go to checkout
        </button>
      </Link>
    </section>
  );
};
