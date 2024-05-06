import "./App.css";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";

import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { Toaster } from "react-hot-toast";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import ProductsPage from "./pages/ProductsPage";

import { useAuth } from "./context/AuthContext";
import Orders from "./pages/Orders";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOrdersAction } from "./features/orders/ordersSlice";
import OrderPage from "./pages/OrderPage";
import ContactUs from "./pages/ContactUs";
import {  getCategoriesAction } from "./features/categories/categoriesSlice";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const { user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(getOrdersAction({id:user.uid}));
    }
  }, [user]);

  useEffect(()=>{
  dispatch(getCategoriesAction());
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/orders/:id" element={<OrderPage />} />
          <Route path="/categories/:id" element={<CategoryPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <SignUp />}
          />
          <Route
            path="/signin"
            element={user ? <Navigate to="/" /> : <SignIn />}
          />
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
