import { Link } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider";
import { useCart } from "../../Context/CartProvider";
import "./checkout.css";

const Checkout = () => {
  const auth = useAuth();
  const { cart, total } = useCart();

  if (!cart.length)
    return (
      <main className="container">
        <Link to="/">go to shopping</Link>
      </main>
    );
  return (
    <main className="container">
      <section className="checkoutCenter">
        {auth ? (
          <>
            <section className="checkoutUserInfo">
              <h3>checkout detail</h3>

              <p>name:{auth.name}</p>
              <p>email:{auth.email}</p>
              <p>tel:{auth.phoneNumber}</p>
            </section>
            <section className="cartSummaryList">
              {cart &&
                cart.map((c) => {
                  return (
                    <div className="cartSummaryItem" key={cart.id}>
                      <div className="itemImg">
                        <img src={c.image} alt={c.name}></img>
                      </div>
                      <div>
                        {" "}
                        {c.name}*{c.quantity}:{c.quantity * c.offPrice}
                      </div>
                    </div>
                  );
                })}

              <div className="checkoutTotal">total price: {total}</div>
            </section>
          </>
        ) : (
          <Link to="/login">please login</Link>
        )}
      </section>
    </main>
  );
};

export default Checkout;
