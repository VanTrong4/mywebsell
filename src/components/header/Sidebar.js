import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  let sumQty = 0
  let products = useSelector((state)=> state.cart)
  // const [check,setCheck] = useState(false)
  let check = localStorage.getItem('auth')
  const logout = () =>{
    // setCheck(true)
    localStorage.clear()
    }

    products.map((val)=>
      sumQty += val.qty
    )

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
                    {!check ? (
                      ""
                    ): (
                      <Link to="/account">
                        <i className="fa fa-user" /> Account
                      </Link>
                    ) }
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
                      <i className="fa fa-shopping-cart" /> Cart {"("}{sumQty}{")"}
                    </Link>
                  </li>
                  <li>
                    {!check ? (
                      <Link to="/login">
                        <i className="fa fa-lock" /> Login
                      </Link>
                    ) : (
                      <Link to="/login" onClick={()=>logout()}>
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
                        {!check ? (
                          <Link to="/login">
                            <i className="fa fa-lock" /> Login
                          </Link>
                        ) : (
                          <Link to="/login">
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
