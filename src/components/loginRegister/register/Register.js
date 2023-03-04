import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../features/auth/authActions";
import { arrRegister } from "../arrayForm";
import InputRegister from "./InputRegister";

const Register = () => {
  const [data, setData] = useState({
    level: 0,
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
  });

  const { loading, success, error, type } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    setData({
      level: 0,
      name: "",
      email: "",
      password: "",
      address: "",
      phone: "",
    });
  }, [success]);

  const changeInput = (e) => {
    let nameInput = e.target.name;
    setData({ ...data, [nameInput]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    dispatch(registerUser(data));
  };

  return (
    <div>
      <div className="signup-form">
        <h2>New User Signup!</h2>
        <form onSubmit={register}>
          {arrRegister.map((val) => {
            return (
              <InputRegister
                key={val.id}
                list={val}
                data={data}
                changeInput={changeInput}
                success={success}
              />
            );
          })}
          {type === "register" && error && (
            <p className="errorSV">{error.toString()}</p>
          )}
          {type === "register" && success && !error && (
            <p className="registerSuccess">Đăng ký thành công</p>
          )}
          <button type="submit" className="btn btn-default">
            {type === "register" && loading ? (
              <i
                className="fa fa-spinner fa-spin"
                style={{ fontSize: "30px", color: "#fe980f" }}
              ></i>
            ) : (
              "Sign up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
