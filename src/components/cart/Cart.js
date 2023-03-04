import React from "react";
import { useSelector } from "react-redux";
import CheckOut from "./CheckOut";
import ListCart from "./ListCart";

const Cart = () => {
  let listQty = localStorage.getItem("qty");

  const { products, loading } = useSelector((state) => state.cart);

  return (
    <>
      <ListCart products={products} loading={loading} listQty={listQty} />
      <CheckOut products={products} />
    </>
  );
};

export default Cart;
