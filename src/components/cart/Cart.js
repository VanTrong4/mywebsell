import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { callApi } from "../../redux/sliceCart";
import CheckOut from "./CheckOut";
import ListCart from "./ListCart";

const Cart = () => {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  let listQty = localStorage.getItem("qty");

  useEffect(() => {
    setLoading(true);
    if (listQty) {
      let qty = JSON.parse(listQty);
      axios
        .post("http://localhost/laravel/laravel/public/api/product/cart", qty)
        .then((res) => {
          dispatch(callApi(res.data.data));
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }
  }, [dispatch]);

  const products = useSelector((state) => state.cart);

  if (localStorage.getItem("auth")) {
    return (
      <>
        <ListCart products={products} loading={loading} listQty={listQty} />
        <CheckOut products={products} />
      </>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
};

export default Cart;
