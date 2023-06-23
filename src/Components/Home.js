import React from "react";

import BannerImage from "../Asset/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { productData, responsive } from "../Data/data.js";
import Navbar from "./Navbar";

import Work from "../Pages/Work";
import Products from "../Pages/Products/Products";
import Feature from "../Pages/Feature";
import Product from "../Pages/Products/Product";

import About from "../Pages/About";
import Testimonial from "../Pages/Testimonial";

import { Link } from "react-router-dom";
import Footer from "../Pages/Footer";
import ImageSlider from "../Pages/ImageSlider";

const Home = () => {
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
    />
  ));


  return (
    <div className="home-container">
     <Navbar />
    
      <div className="home-banner-container">
     
        <div className="home-text-section">
          <h1 className="primary-heading">Food</h1>
          <p className="primary-text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione,
            autem nulla illo repellendus ipsam eligendi, sapiente eaque enim
            aut, velit iste aliquam. Architecto nobis voluptates fugiat fuga
            commodi inventore! Facere!
          </p>
          <Link to ="/menu" className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </Link>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>

     
      
      
      <Feature />
      
      <Products />

    
     
      <div class="all-products"> 

      <p className="primary-heading1">Appetizers</p>
      </div>

  
    
      <Carousel  responsive={responsive}>
        {product}
      </Carousel>


      
      <div class="home-products">
      <p className="primary-heading1">Beverage</p>
      </div>
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
       
      <div class="home-products">
      <p className="primary-heading1">Breakfast</p>
      </div>
      <Carousel responsive={responsive}>
        {product}
      </Carousel>
      
      <About />
      <Work />

      <Testimonial />
      <Footer />

      
    </div>
  );
};

export default Home;
