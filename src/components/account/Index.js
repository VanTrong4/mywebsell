import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import LeftAccount from "./LeftAccount";

const Index = ({ children }) => {
  const { token, userInfor } = useSelector((state) => state.auth);

  let config = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json",
    },
  };

  return (
    <div className="container">
      <div className="row">
        <LeftAccount />
        <div className="col-sm-9 padding-right">
          <Outlet context={[config, userInfor]} />
        </div>
      </div>
    </div>
  );
};

export default Index;
