import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Heading from "./Heading";
import ProductListPage from "./ProductListPage";
import Footer from "./Footer";
import Discription from "./Discription";
import NotFound from "./NotFound";
import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";

function App() {
  const savedDataString = localStorage.getItem("my-cart") || "{}";
  const savedData = JSON.parse(savedDataString);

  const [cart, setCart] = useState(savedData);
  function handleAddToCart(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }
  function updateCart(newCart) {
    setCart(newCart);
    const cartString = JSON.stringify(newCart);
    localStorage.setItem("my-cart", cartString);
  }
  const totalCount = Object.keys(cart).reduce(function (previous, current) {
    return previous + cart[current];
  }, 0);

  return (
    <div className="flex flex-col h-screen overflow-scroll bg-gray-200">
      <Heading productCount={totalCount} />

      <div className="grow">
        <Routes>
          <Route index element={<ProductListPage />} />
          <Route
            path="/Discription/:id"
            element={<Discription onAddToCart={handleAddToCart} />}
          />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/CartPage/"
            element={<CartPage cart={cart} updateCart={updateCart} />}
          />
          <Route path="/CartPage/" element={<CartPage />} />
          <Route path="/loginPage/" element={<LoginPage />} />
          <Route path="/signUpPage/" element={<SignUp />} />
          <Route path="/forgotPassword/" element={<ForgotPassword />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
