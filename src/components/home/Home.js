import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import LeftHome from "./LeftHome";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const getProducts = async () => {
      const data = await axios.get(
        "http://localhost/laravel/laravel/public/api/product/list",
        { params: { page: page } }
      );
      try {
        if (page === 1) {
          setProducts(data.data.data.data);
        } else {
          setProducts([...products, ...data.data.data.data]);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, [page]);

  const moreProducts = () => {
    setPage(page + 1);
  };
  return (
    <div className="container">
      <div className="row">
        <LeftHome />
        <div className="col-sm-9 padding-right">
          <div className="features_items">
            {/*features_items*/}
            <h2 className="title text-center">Features Items</h2>
            <Outlet context={[products, loading]} />
          </div>
          {location.pathname === "/" && (
            <button
              onClick={() => moreProducts()}
              className="btn btn-default add-to-cart"
              style={{ marginLeft: "15px" }}
            >
              More...
            </button>
          )}
          {/*features_items*/}
          <div className="category-tab">
            {/*category-tab*/}
            <div className="col-sm-12">
              <ul className="nav nav-tabs">
                <li className="active">
                  <Link to="#tshirt" data-toggle="tab">
                    T-Shirt
                  </Link>
                </li>
                <li>
                  <Link to="#blazers" data-toggle="tab">
                    Blazers
                  </Link>
                </li>
                <li>
                  <Link to="#sunglass" data-toggle="tab">
                    Sunglass
                  </Link>
                </li>
                <li>
                  <Link to="#kids" data-toggle="tab">
                    Kids
                  </Link>
                </li>
                <li>
                  <Link to="#poloshirt" data-toggle="tab">
                    Polo shirt
                  </Link>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-pane fade active in" id="tshirt">
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery1.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery2.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery3.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery4.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="blazers">
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery4.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery3.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery2.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery1.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="sunglass">
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery3.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery4.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery1.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery2.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="kids">
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery1.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery2.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery3.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery4.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="poloshirt">
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery2.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery4.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery3.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/gallery1.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart">
                          <i className="fa fa-shopping-cart" />
                          Add to cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*/category-tab*/}
          <div className="recommended_items">
            {/*recommended_items*/}
            <h2 className="title text-center">recommended items</h2>
            <div
              id="recommended-item-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="item active">
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="images/home/recommend1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="images/home/recommend2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="images/home/recommend3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="images/home/recommend1.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="images/home/recommend2.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="product-image-wrapper">
                      <div className="single-products">
                        <div className="productinfo text-center">
                          <img src="images/home/recommend3.jpg" alt="" />
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart">
                            <i className="fa fa-shopping-cart" />
                            Add to cart
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                className="left recommended-item-control"
                to="#recommended-item-carousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left" />
              </Link>
              <Link
                className="right recommended-item-control"
                to="#recommended-item-carousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right" />
              </Link>
            </div>
          </div>
          {/*/recommended_items*/}
        </div>
      </div>
    </div>
  );
};

export default Home;
