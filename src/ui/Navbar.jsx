import { NavLink, useLocation } from "react-router-dom";
import { GiShoppingCart } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { getCartQuantity } from "../features/cart/cartSlice.js";
import { useAuth } from "../context/AuthContext.jsx";
import ButtonIcon from "./ButtonIcon.jsx";
import { IoLogInOutline } from "react-icons/io5";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { useEffect } from "react";
import { clearOrders } from "../features/orders/ordersSlice.js";

function Navbar() {
  const cartQuantity = useSelector(getCartQuantity);
  const location = useLocation();
  const [navOpen, setNavOpen] = useState(false);
  const dispatch = useDispatch();
  const { user, logOut } = useAuth();
  const logOutHandler = () => {

    logOut();
    dispatch(clearOrders());
  };
  useEffect(() => {
    setNavOpen(false);
  }, [location]);
  return (
    <nav className="flex gap-2 md:gap-8 items-center">
      <div
        className={` flex fixed  gap-8 md:gap-4  top-[76px] md:top-0 md:z-[5000] transition-all duration-300 ${
          !navOpen ? "translate-y-[-2000px]" : "translate-y-0"
        }  md:!translate-y-0 left-0 bg-white nav text-primary-700 md:bg-transparent md:text-white  h-[calc(100vh_-_76px)] md:h-fit w-full md:w-fit z-50 items-center md:py-0 py-16  flex-col md:flex-row md:static`}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}>
          Home
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) => (isActive ? "active" : "")}>
          Products
        </NavLink>
        <NavLink
          to="/contactus"
          className={({ isActive }) => (isActive ? "active" : "")}>
          Contact us
        </NavLink>
        {!user ? (
          <>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Sign Up{" "}
            </NavLink>
            <NavLink
              to="/signin"
              className={({ isActive }) => (isActive ? "active" : "")}>
              Sign In
            </NavLink>
          </>
        ) : (
          <NavLink
            to="/orders"
            className={({ isActive }) => (isActive ? "active" : "")}>
            Orders
          </NavLink>
        )}
      </div>

      {user && (
        <>
          <ButtonIcon onClick={logOutHandler}>
            <IoLogInOutline />
          </ButtonIcon>
        </>
      )}
      <NavLink
        to="/cart"
        className="md:p-3 p-1 bg-white text-primary-700 rounded-full text-lg md:text-2xl  font-bold  flex justify-center items-center relative opactiy-transition">
        <GiShoppingCart />
        <span className="absolute -top-3 -left-3 bg-red-700  p-2 md:p-4 w-6 h-6 flex items-center justify-center rounded-full text-base md:text-xl  text-white">
          {cartQuantity}
        </span>
      </NavLink>
      <button className="md:hidden" onClick={() => setNavOpen(!navOpen)}>
        <CiMenuFries />
      </button>
    </nav>
  );
}

export default Navbar;
