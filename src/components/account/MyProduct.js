import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import {
  deleteProduct,
  getMyProduct,
} from "../../features/editUser.js/editUserAction";

const MyProduct = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [index, setIndex] = useState(null);

  const [config, userInfor] = useOutletContext();
  const { products, loading, type } = useSelector((state) => state.editUser);

  useEffect(() => {
    dispatch(getMyProduct(config));
  }, [config]);

  const onDeleteProduct = (id) => {
    dispatch(deleteProduct({ id, config }));
    setIndex(id);
  };

  return (
    <div className="col-sm-9 ">
      <section id="account_items">
        <div className="table-responsive account_info">
          <table className="table table-condensed">
            <thead>
              <tr className="account_menu">
                <td className="id">Id</td>
                <td className="description">Name</td>
                <td className="image">Image</td>
                <td className="price">Price</td>
                <td className="action">Action</td>
              </tr>
            </thead>
            <tbody>
              {type === "getProduct" && loading ? (
                <tr>
                  <td>
                    <i
                      className="fa fa-spinner fa-spin"
                      style={{ fontSize: "30px", color: "#fe980f" }}
                    ></i>
                  </td>
                </tr>
              ) : (
                Object.values(products).map((val) => {
                  return (
                    <tr key={val.id}>
                      <td className="product_id">
                        <h4>{val.id}</h4>
                      </td>
                      <td className="product_name">
                        <h4>{val.name}</h4>
                      </td>
                      <td className="product_image">
                        {JSON.parse(val.image).map((imge, index) => {
                          return (
                            <img
                              key={index}
                              height="50"
                              width={50}
                              style={{ marginRight: "5px" }}
                              alt=""
                              src={
                                "http://localhost/laravel/laravel/public/upload/user/product/" +
                                userInfor.id +
                                "/" +
                                imge
                              }
                            />
                          );
                        })}
                      </td>
                      <td className="product_price">
                        <h4>${val.price}</h4>
                      </td>
                      <td className="product_action">
                        <h4>
                          <Link to={"/account/editProduct/" + val.id}>
                            <i className="fa fa-edit"></i>
                          </Link>
                          <Link
                            to=""
                            style={{ marginLeft: "30px" }}
                            onClick={() => onDeleteProduct(val.id)}
                          >
                            {index === val.id &&
                            type === "deleteProduct" &&
                            loading ? (
                              <i
                                className="fa fa-spinner fa-spin"
                                style={{ fontSize: "30px", color: "#fe980f" }}
                              ></i>
                            ) : (
                              <i className="fa fa-times"></i>
                            )}
                          </Link>
                        </h4>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/account/createProduct")}
        >
          Add New
        </button>
      </section>
    </div>
  );
};

export default MyProduct;
