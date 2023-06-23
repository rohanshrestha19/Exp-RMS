import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login/Login";
import Cart from "./Pages/Cart";
import Home from "./Components/Home";

import Menu from "./Pages/Products/Menu";
import Products from "./Pages/Products/Products";
import Profile from "./Pages/Profile";
import Gallery from "./Pages/Gallery";
import Productdetails from "./Pages/Products/Productdetails";
import Error from "./Pages/Error";
import Team from "./Pages/Team";
import Feature from "./Pages/Feature";

import Testimonial from "./Pages/Testimonial";

import About from "./Pages/About";
import Product from "./Pages/Products/Product";
import Register from "./Login/Register";
import ForgetPassword from "./Login/ForgetPassword";
import Otp from "./Login/Otp";
import Categories from "./Pages/Products/Categories";
import Bookatable from "./Pages/Bookatable";
import { menuData } from "./Data/data";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="feature" element={<Feature />} />
          <Route path="profile" element={<Profile />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="products" element={<Products />} />
          <Route path="product" element={<Product />} />
          
          <Route path="menu" element={<Menu menuDataItem={menuData} />} />
          <Route path="cart" element={<Cart />} />
          <Route path="productsdetails" element={<Productdetails menuDataItem={menuData}/>} />
          
          <Route path="Team" element={<Team />} />
          <Route path="testimonial" element={<Testimonial />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
          <Route path="otp" element={<Otp />} />
          
          <Route path="*" element={<Error />} />
          <Route path="categories" element={<Categories />} />
          <Route path="bookatable" element={<Bookatable />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
