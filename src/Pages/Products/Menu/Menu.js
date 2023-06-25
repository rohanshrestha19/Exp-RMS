import React from "react";
import { FaRightLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Categories from "../Categories";
import { useState } from "react";
import { menuData } from "../../../Data/data";

const Menu = () => {
  const [menuDataItem] = useState(menuData)
  return (
    <>
      <Categories />
      <div className="row m-0 p-4">

      <div class="all-products">
          <p className="primary-heading1">All Menu </p>
        </div>
      <div className="all-products">
        {menuDataItem.map((props) => (
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

export default Menu;
