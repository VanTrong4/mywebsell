import React from "react";
import { Link } from "react-router-dom";

const CheckOut = ({ products }) => {
  let sum = 0;
  let tax = 2;
  products.map((element) => (sum += element.qty * element.price));

  return (
    <section id="do_action">
      <div className="container">
        <div className="heading">
          <h3>What would you like to do next?</h3>
          <p>
            Choose if you have a discount code or reward points you want to use
            or would like to estimate your delivery cost.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <div className="chose_area">
              <ul className="user_option">
                <li>
                  <input type="checkbox" />
                  <label>Use Coupon Code</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Use Gift Voucher</label>
                </li>
                <li>
                  <input type="checkbox" />
                  <label>Estimate Shipping &amp; Taxes</label>
                </li>
              </ul>
              <ul className="user_info">
                <li className="single_field">
                  <label>Country:</label>
                  <select>
                    <option>United States</option>
                    <option>Bangladesh</option>
                    <option>UK</option>
                    <option>India</option>
                    <option>Pakistan</option>
                    <option>Ucrane</option>
                    <option>Canada</option>
                    <option>Dubai</option>
                  </select>
                </li>
                <li className="single_field">
                  <label>Region / State:</label>
                  <select>
                    <option>Select</option>
                    <option>Dhaka</option>
                    <option>London</option>
                    <option>Dillih</option>
                    <option>Lahore</option>
                    <option>Alaska</option>
                    <option>Canada</option>
                    <option>Dubai</option>
                  </select>
                </li>
                <li className="single_field zip-field">
                  <label>Zip Code:</label>
                  <input type="text" />
                </li>
              </ul>
              <Link className="btn btn-default update" to>
                Get Quotes
              </Link>
              <Link className="btn btn-default check_out" to>
                Continue
              </Link>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="total_area">
              <ul>
                <li>
                  Cart Sub Total <span>${products.length > 0 ? sum : 0}</span>
                </li>
                <li>
                  Eco Tax <span>${tax}</span>
                </li>
                <li>
                  Shipping Cost <span>Free</span>
                </li>
                <li>
                  Total <span className="totalgia">${sum + tax}</span>
                </li>
              </ul>
              <Link className="btn btn-default update" to>
                Update
              </Link>
              <Link className="btn btn-default check_out" to>
                Check Out
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
