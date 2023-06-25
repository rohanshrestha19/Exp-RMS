import React from "react";

import { Link } from "react-router-dom";
import Categories from "../Categories";


const Momo = ({ momoDataItem }) => {
  return (
    <>
      <Categories />

      <div className="row m-0 p-4">
        <div className="all-products">
          {momoDataItem.map((props) => (
            <div className="product" key={props.id}>
              <img src={props.menuimageurl} alt="" />
              <div className="product-info">
                <Link
                  to={`/productdetails/${props.id}`}
                  className="product-title"
                >
                  {props.menuname}
                </Link>
                

                <p className="product-price">{props.menuprice}</p>
                <Link to="/cart" className="primary-button">
                  Add to Cart
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Momo;
