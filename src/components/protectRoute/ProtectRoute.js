import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";

const ProtectRoute = () => {
  const { userInfor } = useSelector((state) => state.auth);

  if (!userInfor) {
    return (
      <div className="container">
        <div className="row protectRoute">
          <p style={{ fontSize: "20px" }}>
            Vui lòng login để thực hiện chức năng này
          </p>
          <Link to="/login" style={{ fontSize: "18px", marginBottom: "15px" }}>
            Go to Login...
          </Link>
        </div>
      </div>
    );
  }
  return <Outlet />;
};

export default ProtectRoute;
