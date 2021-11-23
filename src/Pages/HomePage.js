import Layout from "../Layout/Layout";
import * as data from "../data";
import { useCart, useCartActions } from "../Context/CartProvider";
import checkInCart from "../utils/checkInCart";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const HomePage = () => {
  const { cart } = useCart();
  const dispatch = useCartActions();
  const addProductHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart!`);
  };
  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product" key={product.id}>
                <div className="productImg">
                  <img src={product.image} alt={product.name}></img>
                </div>
                <div className="productDesc">
                  <p>{product.name}</p>
                  <p>${product.price}</p>
                  <button
                    onClick={() => addProductHandler(product)}
                    className="btn primary"
                  >
                    {checkInCart(cart, product) ? (
                      <Link to="/cart" className="btn primary">
                        In Cart
                      </Link>
                    ) : (
                      " Add to Cart"
                    )}
                  </button>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;
