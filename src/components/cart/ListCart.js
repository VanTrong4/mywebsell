import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseCart,
  deleteCart,
  increaseCart,
  updateLocal,
} from "../../features/cart/cartSlice";
import { toast } from "react-toastify";
import SkeletonCart from "./SkeletonCart";

const ListCart = ({ products, loading, listQty }) => {
  const dispatch = useDispatch();

  const { userInfor } = useSelector((state) => state.auth);

  const deleteProduct = (product) => {
    dispatch(deleteCart(product));
    dispatch(updateLocal());
    toast.success(`Delete ${product.name} success`, {
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

  const increaseQty = (product) => {
    dispatch(increaseCart(product));
    dispatch(updateLocal());
  };

  const decreaseQty = (product) => {
    dispatch(decreaseCart(product));
    dispatch(updateLocal());
  };
  return (
    <section id="cart_items">
      <div className="container">
        <div className="breadcrumbs">
          <ol className="breadcrumb">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="active">Shopping Cart</li>
          </ol>
        </div>
        <div className="table-responsive cart_info">
          <table className="table table-condensed">
            <thead>
              <tr className="cart_menu">
                <td style={{ width: "20%" }} className="image">
                  Item
                </td>
                <td style={{ width: "20%" }} className="description">
                  Description
                </td>
                <td style={{ width: "10%" }} className="price">
                  Price
                </td>
                <td style={{ width: "20%" }} className="quantity">
                  Quantity
                </td>
                <td style={{ width: "20%" }} className="total">
                  Total
                </td>
                <td style={{ width: "10%" }}>Delete</td>
              </tr>
            </thead>
            <tbody>
              {loading
                ? listQty &&
                  Object.keys(JSON.parse(listQty)[userInfor.id]).map(
                    (val, i) => <SkeletonCart key={i} />
                  )
                : products.map((val) => {
                    return (
                      <tr key={val.id}>
                        <td className="cart_product">
                          <Link to="">
                            <img
                              height={110}
                              src={
                                "http://localhost/laravel/laravel/public/upload/user/product/" +
                                val.id_user +
                                "/" +
                                JSON.parse(val.image)[0]
                              }
                              alt=""
                            />
                          </Link>
                        </td>
                        <td className="cart_description">
                          <h4>
                            <Link to="">{val.name}</Link>
                          </h4>
                          <p>{val.id}</p>
                        </td>
                        <td className="cart_price">
                          <p>{val.price}</p>
                        </td>
                        <td className="cart_quantity">
                          <div className="cart_quantity_button">
                            <Link
                              className="cart_quantity_up"
                              to=""
                              onClick={() => increaseQty(val)}
                            >
                              {" "}
                              +{" "}
                            </Link>
                            <input
                              className="cart_quantity_input"
                              type="text"
                              name="quantity"
                              value={val.qty}
                              autoComplete="off"
                              size="2"
                              onChange={() => {}}
                            />
                            <Link
                              className="cart_quantity_down"
                              onClick={() => decreaseQty(val)}
                              to=""
                            >
                              {" "}
                              -{" "}
                            </Link>
                          </div>
                        </td>
                        <td className="cart_total">
                          <p className="cart_total_price">
                            ${val.qty * val.price}
                          </p>
                        </td>
                        <td className="cart_delete">
                          <Link
                            className="cart_quantity_delete"
                            to=""
                            onClick={() => deleteProduct(val)}
                          >
                            <i className="fa fa-times"></i>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ListCart;
