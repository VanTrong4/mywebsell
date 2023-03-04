import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../features/auth/authSlice";
import { fetchCart } from "../../features/cart/cartActions";

const Sidebar = () => {
  const dispatch = useDispatch();
  let sumQty = 0;

  let listQty = localStorage.getItem("qty")
    ? JSON.parse(localStorage.getItem("qty"))
    : null;

  const { token, userInfor } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.cart);

  const logout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (userInfor) {
      dispatch(fetchCart({ input: listQty[userInfor.id], abc: "123" }));
    }
  }, [userInfor]);

  if (products) {
    products.map((val) => {
      return (sumQty += val.qty);
    });
  }
  return (
    <header id="header">
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="contactinfo">
                <ul className="nav nav-pills">
                  <li>
                    <Link to="#">
                      <i className="fa fa-phone" /> +2 95 01 88 821
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-envelope" /> info@domain.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="social-icons pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    <Link to="#">
                      <i className="fa fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-dribbble" />
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <i className="fa fa-google-plus" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container">
          <div className="row">
            <div className="col-md-4 clearfix">
              <div className="logo pull-left">
                <Link to="index.html">
                  <img src="images/home/logo.png" alt="" />
                </Link>
              </div>
              <div className="btn-group pull-right clearfix">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-default dropdown-toggle usa"
                    data-toggle="dropdown"
                  >
                    USA
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href>Canada</Link>
                    </li>
                    <li>
                      <Link href>UK</Link>
                    </li>
                  </ul>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-default dropdown-toggle usa"
                    data-toggle="dropdown"
                  >
                    DOLLAR
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link href>Canadian Dollar</Link>
                    </li>
                    <li>
                      <Link href>Pound</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-8 clearfix">
              <div className="shop-menu clearfix pull-right">
                <ul className="nav navbar-nav">
                  <li>
                    {!token ? (
                      ""
                    ) : (
                      <Link to="/account">
                        <i className="fa fa-user" /> Account
                      </Link>
                    )}
                  </li>
                  <li>
                    <Link href>
                      <i className="fa fa-star" /> Wishlist
                    </Link>
                  </li>
                  <li>
                    <Link to="checkout.html">
                      <i className="fa fa-crosshairs" /> Checkout
                    </Link>
                  </li>
                  <li>
                    <Link to="/cart">
                      <i className="fa fa-shopping-cart" /> Cart {"("}
                      {sumQty}
                      {")"}
                    </Link>
                  </li>
                  <li>
                    {!token ? (
                      <Link to="/login">
                        <i className="fa fa-lock" /> Login
                      </Link>
                    ) : (
                      <Link to="/login" onClick={() => logout()}>
                        <i className="fa fa-lock" /> Logout
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="container">
          <div className="row">
            <div className="col-sm-9">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>
              <div className="mainmenu pull-left">
                <ul className="nav navbar-nav collapse navbar-collapse">
                  <li>
                    <Link to="/" className="active">
                      Home
                    </Link>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      Shop
                      <i className="fa fa-angle-down" />
                    </Link>
                    <ul role="menu" className="sub-menu">
                      <li>
                        <Link to="shop.html">Products</Link>
                      </li>
                      <li>
                        <Link to="product-details.html">Product Details</Link>
                      </li>
                      <li>
                        <Link to="checkout.html">Checkout</Link>
                      </li>
                      <li>
                        <Link to="cart.html">Cart</Link>
                      </li>
                      <li>
                        {!token ? (
                          <Link to="/login">
                            <i className="fa fa-lock" /> Login
                          </Link>
                        ) : (
                          <Link to="/login" onClick={() => logout()}>
                            <i className="fa fa-lock" /> Logout
                          </Link>
                        )}
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <Link to="#">
                      Blog
                      <i className="fa fa-angle-down" />
                    </Link>
                    <ul role="menu" className="sub-menu">
                      <li>
                        <Link to="blog.html">Blog List</Link>
                      </li>
                      <li>
                        <Link to="blog-single.html">Blog Single</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="404.html">404</Link>
                  </li>
                  <li>
                    <Link to="contact-us.html">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="search_box pull-right">
                <input type="text" placeholder="Search" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
