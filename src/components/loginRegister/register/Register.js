import axios from "axios";
import React, { useState } from "react";
import { arrRegister } from "../arrayForm";
import InputRegister from "./InputRegister";

const Register = () => {
  const [data, setData] = useState({ level: 0 });
  const [success, setSuccess] = useState(false);
  const [errorSv, setErrorSv] = useState("");
  const [loading, setLoading] = useState(false);

  const changeInput = (e) => {
    let nameInput = e.target.name;
    setData({ ...data, [nameInput]: e.target.value });
  };

  const register = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost/laravel/laravel/public/api/register", data)
      .then((res) => {
        if (res.data.errors) {
          setErrorSv(res.data.errors.email[0]);
          setSuccess(false);
        } else {
          console.log(res);
          setErrorSv("");
          setSuccess(true);
          console.log("succes");
        }
        setLoading(false);
      });
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
                changeInput={changeInput}
              />
            );
          })}
          {errorSv && <p className="errorSV">{errorSv}</p>}
          {loading && (
            <i
              className="fa fa-spinner fa-spin"
              style={{ fontSize: "30px", color: "#fe980f" }}
            ></i>
          )}
          {success && <p className="registerSuccess">Đăng ký thành công</p>}
          <button type="submit" className="btn btn-default">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
