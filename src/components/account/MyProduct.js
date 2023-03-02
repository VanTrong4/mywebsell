import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

const MyProduct = () => {
  const [products, setProducts] = useState({});

  const [auth, config] = useOutletContext();

  useEffect(() => {
    axios
      .get(
        "http://localhost/laravel/laravel/public/api/user/my-product",
        config
      )
      .then((res) => {
        setProducts(res.data.data);
      });
  }, [config]);

  const deleteProduct = (id) => {
    axios
      .get(
        "http://localhost/laravel/laravel/public/api/user/delete-product/" + id,
        config
      )
      .then((res) => {
        setProducts(res.data.data);
      });
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
              {Object.values(products).map((val) => {
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
                              auth.id +
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
                          onClick={() => deleteProduct(val.id)}
                        >
                          <i className="fa fa-times"></i>
                        </Link>
                      </h4>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <button className="btn btn-primary">Add New</button>
      </section>
    </div>
  );
};

export default MyProduct;
