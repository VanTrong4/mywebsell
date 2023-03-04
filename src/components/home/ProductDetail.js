import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addToCart, updateLocal } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const [brand, setBrand] = useState();
  let idProduct = useParams().id;
  useEffect(() => {
    axios
      .get(
        "http://localhost/laravel/laravel/public/api/product/detail/" +
          idProduct
      )
      .then((res) => setProduct(res.data.data));
    axios
      .get("http://localhost/laravel/laravel/public/api/category-brand")
      .then((res) => {
        setBrand(res.data.brand);
      });
  }, [idProduct]);

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
  console.log(product);

  return (
    <div className="col-sm-9 padding-right">
      {product && (
        <div className="product-details">
          <div className="col-sm-5">
            <div className="view-product">
              <img
                className="imgBig"
                src={
                  product.image &&
                  `http://localhost/laravel/laravel/public/upload/user/product/${
                    product.id_user
                  }/${JSON.parse(product.image)[0]}`
                }
                alt=""
              />
              <Link to="#">
                <h3>ZOOM</h3>
              </Link>
            </div>
            <div
              id="similar-product"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="item active">
                  {/* <Link to>
                    <img
                      className="imgSmall"
                      src={
                        "http://localhost/laravel/laravel/public/upload/user/product/"
                      }
                      alt=""
                    />
                  </Link> */}
                </div>
              </div>
              <Link
                className="left item-control"
                to="#similar-product"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </Link>
              <Link
                className="right item-control"
                to="#similar-product"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </Link>
            </div>
          </div>
          <div className="col-sm-7">
            <div className="product-information">
              <h2>{product.name}</h2>
              <p>Web ID: {product.id}</p>
              <span>
                <span>Price: ${product.price}</span>
                <button
                  type="button"
                  className="btn btn-fefault cart"
                  onClick={() => add(product)}
                >
                  <i className="fa fa-shopping-cart" />
                  Add to cart
                </button>
              </span>
              <p>
                <b>Availability:</b> In Stock
              </p>
              {product.status === 0 ? (
                <p>
                  <b>Condition: </b> New
                </p>
              ) : (
                <>
                  <p>
                    <b>Condition: </b>Sale
                  </p>
                  <p>
                    <b>Sale: </b>
                    {product.sale}
                  </p>
                </>
              )}
              <p>
                <b>Brand:</b>
                {brand &&
                  brand.map((val) => val.id === product.id_brand && val.brand)}
              </p>
              <Link to>
                <img className="share img-responsive" alt="" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
