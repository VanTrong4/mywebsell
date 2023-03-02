import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { arrLogin } from "../arrayForm";
import InputLogin from "./InputLogin";

const Login = () => {
  const [input, setInput] = useState({ level: 0 });
  const [errorSv, setErrorSv] = useState("");
  const [loading, setLoading] = useState("");

  let navigate = useNavigate();

  const changeInput = (e) => {
    let name = e.target.name;
    setInput({ ...input, [name]: e.target.value });
  };

  const login = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost/laravel/laravel/public/api/login", input)
      .then((res) => {
        if (res.data.errors) {
          setErrorSv(res.data.errors.errors);
          console.log(res);
        } else {
          localStorage.setItem("token", JSON.stringify(res.data.success.token));
          localStorage.setItem("auth", JSON.stringify(res.data.Auth));
          navigate("/");
        }
        setLoading(false);
      });
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
        {errorSv && <p className="errorSV">{errorSv}</p>}
        {loading && (
          <i
            className="fa fa-spinner fa-spin"
            style={{ fontSize: "30px", color: "#fe980f" }}
          ></i>
        )}
        <button type="submit" className="btn btn-default">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
