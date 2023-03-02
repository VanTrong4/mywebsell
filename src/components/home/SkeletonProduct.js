import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';

const SkeletonProduct = () => {
    return (
        <div className="col-sm-4">
              <div className="product-image-wrapper">
                <div className="single-products">
                  <div className="productinfo text-center">
                    <Skeleton style={{height:"190px"}}/>
                    <h2><Skeleton/></h2>
                    <p><Skeleton/></p>
                    <Link to="#" className="btn btn-default add-to-cart">
                    <Skeleton/>
                    </Link>
                  </div>
                </div>
                <div className="choose">
                  <ul className="nav nav-pills nav-justified">
                    <li>
                      <Link to="#">
                      <Skeleton/>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                      <Skeleton/>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    );
};

export default SkeletonProduct;