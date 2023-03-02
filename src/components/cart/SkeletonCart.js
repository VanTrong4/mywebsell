import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const SkeletonCart = () => {
  return (
    <tr>
      <td style={{ width: "20%" }} className="cart_product">
        <Link to="">
          <Skeleton style={{ width: "110px", height: "110px" }} />
        </Link>
      </td>
      <td style={{ width: "20%" }} className="cart_description">
        <h4>
          <Link to="">
            <Skeleton />
          </Link>
        </h4>
        <p>
          <Skeleton />
        </p>
      </td>
      <td className="cart_price">
        <p>
          <Skeleton />
        </p>
      </td>
      <td className="cart_quantity">
        <div className="cart_quantity_button">
          <Link className="cart_quantity_up" to="">
            <Skeleton />
          </Link>
          <Skeleton className="cart_quantity_input" />
          <Link className="cart_quantity_down" to="">
            <Skeleton />
          </Link>
        </div>
      </td>
      <td className="cart_total">
        <p className="cart_total_price">
          $<Skeleton />
        </p>
      </td>
      <td className="cart_delete">
        <Link className="cart_quantity_delete" to="">
          <i className="fa fa-times"></i>
        </Link>
      </td>
    </tr>
  );
};

export default SkeletonCart;
