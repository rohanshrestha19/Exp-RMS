import React from "react";

import { Link } from "react-router-dom";
import Categories from "../../Categories";


const Momo = ({ momoDataItem }) => {
  return (
    <>
      <Categories />

      <div className="row m-5 p-4">
        <div className="all-products">
          {momoDataItem.map((props) => (
            <div className="product" key={props.id}>
              <img src={props.momoimageurl} alt="" />
              <div className="product-info">
                <Link
                  to={`/momodetails/${props.id}`}
                  className="product-title"
                >
                  {props.momoname}
                </Link>
                

                <p className="product-price">{props.momoprice}</p>
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
