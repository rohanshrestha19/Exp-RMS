import Navbar from "../../Components/Navbar";
import Products from "./Products";
import Footer from "../Footer";
import BannerImage from "../../Asset/food.jpeg";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Productdetails = ({ menuDataItem }) => {
  return (
    <>
      <div className="home-container">
        <Navbar />
        {menuDataItem.map((props) => (
        <div className="productdetails-container" key={props.id}>
       
            <div className="productdetails-section-container" >
           
              <div className="productdetails-section-image-container">
                <img src={props.menuimageurl} alt="" />
              </div>
              <div className="productdetails-section-text-container">
                  <h1 className="primary-heading">{props.menuname}</h1>
                  <p className="primary-text">{props.menudescription}</p>

                  <h2 className="product-price1">{props.menuprice}</h2>
                  <div className="stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                  </div>

                  <div className="quantity">
                    <h1>Quantity</h1>
                  </div>

                  <Link
                    to="/cart"
                    className="pcart-button"
                  >
                    Add to Cart
                  </Link>
                </div>
              

            </div>
            
        </div>
))}
        <div>
          <h1 className="description-heading ">Feedback</h1>
          <div className="review pt-4">
            <h5 className="user__name mb-1">Bina</h5>
            <div className="feedback-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="feedback__text">
              Momo here is Fabulous..I would really recommend MOMO from
              here...Gonna order more from here
            </p>
          </div>
          <div className="review">
            <h5 className="user__name mb-0">Bishweshwor</h5>
            <div className="feedback-stars-container">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="feedback__text">
              Momo here is Fabulous..I would really recommend MOMO from
              here...Gonna order more from here
            </p>
          </div>
        </div>

        <div>
          <h1 className="description-heading ">Give Review</h1>
          <div className="mb-4">
            <label className="formlabel">Name</label>
            <input
              type="name"
              className="formcontrol"
              id="FormControlInput1"
              placeholder="Enter you name"
            />
          </div>
          <div className="mb-4">
            <label className="formlabel">Email address </label>
            <input
              type="email"
              className="formcontrol"
              id="FormControlInput1"
              placeholder="name@gmail.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Feedback </label>
            <textarea
              className="form-control"
              id="FormControlTextarea1"
              rows="10"
              placeholder="Message Here ....."
            ></textarea>
          </div>
          <h1>Rate Food</h1>

          <div className="stars-container">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>

          <Link
            to="/"
            className="submit-button"
            // onClick={handleAddToCart}
          >
            Sumbit
          </Link>
        </div>
        <Products />

        <Footer />
      </div>
    </>
  );
};

export default Productdetails;
