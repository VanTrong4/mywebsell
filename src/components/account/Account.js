import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { updateInforUser } from "../../features/editUser.js/editUserAction";

const Account = () => {
  const [avatar, setAvatar] = useState("");

  const [config, userInfor] = useOutletContext();

  const [input, setInput] = useState(userInfor);
  const dispatch = useDispatch();

  const changeInput = (e) => {
    let name = e.target.name;
    setInput({ ...input, [name]: e.target.value });
  };

  const { loading, error, success, type } = useSelector(
    (state) => state.editUser
  );

  const handleImage = (e) => {
    let file = e.target.files;
    let reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result);
    };
    reader.readAsDataURL(file[0]);
  };

  const updateUser = (e) => {
    e.preventDefault();

    const form = document.getElementById("formUpdate");
    const formdata = new FormData(form);
    formdata.delete("image");
    formdata.append("password", "");
    formdata.append("avatar", avatar);

    dispatch(updateInforUser({ id: userInfor.id, formdata, config }));
  };

  return (
    <div>
      <h3>User Update</h3>
      <div className="col-sm-9">
        <div className="signup-form">
          <form action="#" id="formUpdate" onSubmit={updateUser}>
            <input
              onChange={(e) => changeInput(e)}
              value={input.name || ""}
              type="text"
              name="name"
              placeholder="name"
              className="form-control"
            />
            <input
              onChange={(e) => changeInput(e)}
              value={input.email || ""}
              type="email"
              name="email"
              readOnly
              placeholder="email"
              className="form-control"
            />
            <input
              onChange={(e) => changeInput(e)}
              value={input.address || ""}
              type="text"
              name="address"
              placeholder="address"
              className="form-control"
            />
            <input
              onChange={(e) => changeInput(e)}
              value={input.country || ""}
              type="text"
              name="country"
              placeholder="country"
              className="form-control"
            />
            <input
              onChange={(e) => changeInput(e)}
              value={input.phone || ""}
              type="text"
              name="phone"
              placeholder="phone"
              className="form-control"
            />
            <input
              onChange={(e) => handleImage(e)}
              type="file"
              name="image"
              placeholder="image"
              className="form-control"
            />
            {type === "update" && success && !error ? (
              <p className="registerSuccess">Update Success</p>
            ) : (
              error && <p className="errorSV">{error}</p>
            )}
            <button type="submit" className="btn btn-default">
              {type === "update" && loading ? (
                <i
                  className="fa fa-spinner fa-spin"
                  style={{ fontSize: "30px", color: "#fe980f" }}
                ></i>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
