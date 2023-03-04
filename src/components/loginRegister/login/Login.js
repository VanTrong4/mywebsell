import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { arrLogin } from "../arrayForm";
import InputLogin from "./InputLogin";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../features/auth/authActions";

const Login = () => {
  const [input, setInput] = useState({ level: 0 });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error, userInfor, type } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (userInfor) {
      navigate("/");
    }
  }, [userInfor]);

  const changeInput = (e) => {
    let name = e.target.name;
    setInput({ ...input, [name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    dispatch(loginUser(input));
  };

  return (
    <div className="login-form">
      <h2>Login to your account</h2>
      <form action="#" onSubmit={(e) => login(e)}>
        {arrLogin.map((val) => {
          return (
            <InputLogin key={val.id} list={val} changeInput={changeInput} />
          );
        })}
        {type === "login" && error && <p className="errorSV">{error}</p>}
        <button type="submit" className="btn btn-default">
          {loading && type === "login" ? (
            <i
              className="fa fa-spinner fa-spin"
              style={{ fontSize: "30px", color: "#fe980f" }}
            ></i>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
