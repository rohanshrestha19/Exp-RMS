import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./Login/Login";
import Cart from "./Pages/Cart/Cart";
import Home from "./Components/Home";

import Menu from "./Pages/Products/Menu/Menu";
import Products from "./Pages/Products/Menu/Products";
import Profile from "./Pages/Profile";
import Gallery from "./Pages/Gallery";
import Productdetails from "./Pages/Products/Menu/Productdetails";

import Error from "./Pages/Error";
import Team from "./Pages/Team";
import Feature from "./Pages/Feature";

import Testimonial from "./Pages/Testimonial";

import About from "./Pages/About";
import Product from "./Pages/Products/Menu/Product";
import Register from "./Login/Register";
import ForgetPassword from "./Login/ForgetPassword";
import Otp from "./Login/Otp";
import Categories from "./Pages/Products/Categories";
import Bookatable from "./Pages/Bookatable";
import { menuData } from "./Data/data";
import { momoData, topsellingData } from "./Data/categorydata";



import Momo from "./Pages/Products/Category/Momo/Momo";
import Momodetails from "./Pages/Products/Category/Momo/Momodetails"
import Topselling from "./Pages/Products/Category/Topselling/Topselling";
import Topsellingdetails from "./Pages/Products/Category/Topselling/Topsellingdetails";


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
          
          
          <Route path="cart" element={<Cart />} />

          <Route path="productdetails/:id" element={<Productdetails menuDataItem={menuData}/>} />
          <Route path="momodetails/:id" element={<Momodetails momoDataItem={momoData}/>} />
          

          <Route path="menu" element={<Menu menuDataItem={menuData} />} />

          <Route path="momo" element={<Momo momoDataItem={momoData} />} />

          <Route path="topselling" element={<Topselling topsellingDataItem={topsellingData} />} />
          <Route path="topsellingdetails/:id" element={<Topsellingdetails topsellingDataItem={topsellingData} />} />


            
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
