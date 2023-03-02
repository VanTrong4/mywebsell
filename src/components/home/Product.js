import { Link, useOutletContext } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, updateLocal } from "../../redux/sliceCart";
import SkeletonProduct from "./SkeletonProduct";
import Skeleton from "react-loading-skeleton";
import { toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  let [products, loading] = useOutletContext();

  const add = (product) => {
    dispatch(addToCart(product));
    dispatch(updateLocal());
    toast.success("Add to cart", {
      position: "bottom-left",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: "",
      theme: "light",
    });
  };

  return loading ? (
    <Skeleton wrapper={SkeletonProduct} count={products.length || 6} />
  ) : (
    products.map((val) => {
      return (
        <div className="col-sm-4" key={val.id}>
          <div className="product-image-wrapper">
            <div className="single-products">
              <div className="productinfo text-center">
                <img
                  src={
                    "http://localhost/laravel/laravel/public/upload/user/product/" +
                    val.id_user +
                    "/" +
                    JSON.parse(val.image)[0]
                  }
                  alt=""
                />
                <h2>{val.price}</h2>
                <p>{val.name}</p>
                <Link
                  to="#"
                  className="btn btn-default add-to-cart"
                  style={{ marginRight: "10%" }}
                >
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </Link>
                <Link to="#" className="btn btn-default add-to-cart">
                  Detail
                </Link>
              </div>
              <div className="product-overlay">
                <div className="overlay-content">
                  <h2>{val.price}</h2>
                  <p>{val.name}</p>
                  <Link
                    to="#"
                    className="btn btn-default add-to-cart "
                    onClick={() => add(val)}
                    style={{ marginRight: "10%" }}
                  >
                    <i className="fa fa-shopping-cart" />
                    Add to cart
                  </Link>
                  <Link
                    to={`/product-detail/${val.id}`}
                    className="btn btn-default add-to-cart "
                  >
                    Detail
                  </Link>
                </div>
              </div>
            </div>
            <div className="choose">
              <ul className="nav nav-pills nav-justified">
                <li>
                  <Link to="#">
                    <i className="fa fa-plus-square" />
                    Add to wishlist
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <i className="fa fa-plus-square" />
                    Add to compare
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    })
  );
};

export default Product;
