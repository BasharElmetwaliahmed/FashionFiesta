import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartListItem from "../features/cart/CartListItem";
import {
  clearCart,
  getCart,
  getCartPrice,
  getCartQuantity,
} from "../features/cart/cartSlice";
import { FaRegTrashAlt } from "react-icons/fa";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import toast from "react-hot-toast";
import { getOrders, saveOrderAction } from "../features/orders/ordersSlice";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Spinner.css"; // Import custom CSS for spinner

function Cart() {
  const cart = useSelector(getCart);
  const { orders } = useSelector(getOrders);
  const totalPrice = useSelector(getCartPrice);
  const totalQuantity = useSelector(getCartQuantity);
  const dispatch = useDispatch();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Loading state

  const pay = async (token) => {
    setLoading(true); // Set loading to true when payment starts
    try {
      const { data } = await axios.post(
        "https://serverfashionaa.onrender.com/pay",
        {
          amount: totalPrice * 100,
          token,
        }
      );
      await dispatch(
        saveOrderAction({
          totalPrice: totalPrice,
          totalQuantity: totalQuantity,
          cartItems: cart,
          userId: user.uid,
          orders,
          orderId: data,
        })
      );
      navigate("/orders");
      dispatch(clearCart());
    } catch (err) {
      toast.error("Error while processing payment, try again later");
    } finally {
      setLoading(false); // Set loading to false after payment is done
    }
  };

  return (
    <div className="container sec-top my-5 relative">
      {loading && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
          <div className="loader"></div> {/* Spinner here */}
        </div>
      )}

      <div className="flex justify-between items-center">
        <h2 className="text-6xl my-8">Cart</h2>
        <button
          className="bg-red-600 text-white w-fit py-2 px-3 rounded-md flex gap-2 items-center"
          onClick={() => dispatch(clearCart())}
          disabled={loading} // Disable button when loading
        >
          <FaRegTrashAlt />
          Clear Cart
        </button>
      </div>

      {cart.length ? (
        <div className="p-3 shadow-md rounded-md w-full md:w-[700px] mx-auto">
          <CartListItem cart={cart} />
          <div className="py-4 flex flex-col gap-2">
            <div className="flex justify-between items-center ">
              <p>Sub total</p>
              <p>{totalPrice}$</p>
            </div>
            <div className="flex justify-between items-center ">
              <p>Shipping</p>
              <p>10$</p>
            </div>
            <div className="flex justify-between items-center font-bold pb-2 border-b-[1px] border-gray-300">
              <p>Total</p>
              <p>{totalPrice}$</p>
            </div>
          </div>

          {user ? (
            <div className="flex my-4 items-center justify-center">
              <StripeCheckout
                name="Fashion Feista"
                stripeKey="pk_test_51P8VJsHDcdTSqshejhEee1gEkpvpc1iTnZFaOr7ClxOK7igf5tVNvvZpmRTWse7VMuC0IAUoevLDyEUd4A3J8PLx00uYj45963"
                description="Your payment"
                ComponentClass="div"
                panelLabel="Give Money"
                amount={totalPrice * 100}
                token={pay}
                currency="USD"
              />
            </div>
          ) : (
            <p>Login To Continue To Payment Process</p>
          )}
        </div>
      ) : (
        <p className="text-center text-xl font-semibold my-52">Empty Cart</p>
      )}
    </div>
  );
}

export default Cart;
