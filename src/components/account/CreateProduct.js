import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import { createProduct } from "../../features/editUser.js/editUserAction";

const CreateProduct = () => {
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState([]);
  const [sale, setSale] = useState(false);

  const [config] = useOutletContext();

  const dispatch = useDispatch();

  const { loading, error, success, type } = useSelector(
    (state) => state.editUser
  );

  useEffect(() => {
    axios
      .get("http://localhost/laravel/laravel/public/api/category-brand")
      .then((res) => {
        setBrand(res.data.brand);
        setCategory(res.data.category);
      })
      .catch((err) => console.log(err));
  }, []);

  const submitCreate = (e) => {
    e.preventDefault();
    let form = document.getElementById("formCreate");
    let formdata = new FormData(form);
    formdata.delete("image");
    image.map((value) => {
      return formdata.append("file[]", value);
    });
    dispatch(createProduct({ formdata, config }));
  };

  const handleFile = (e) => {
    setImage([...e.target.files]);
  };

  const handleStatus = (e) => {
    if (Number(e.target.value) === 1) {
      setSale(true);
    } else {
      setSale(false);
    }
  };

  return (
    <div className="col-sm-9 padding-right">
      <h3>Create Product</h3>
      <div className="signup-form">
        <form
          className="form-group"
          id="formCreate"
          encType="multipart/form-data"
          onSubmit={submitCreate}
        >
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Name"
          />
          <input
            type="text"
            className="form-control"
            name="price"
            placeholder="Price"
          />
          <input
            type="file"
            className="form-control"
            name="image"
            multiple="multiple"
            onChange={handleFile}
          />
          <select
            className="form-control"
            name="category"
            defaultValue={"default"}
          >
            <option value="default" disabled hidden>
              Please choose category
            </option>
            {category.map((val) => {
              return (
                <option key={val.id} value={val.id}>
                  {val.category}
                </option>
              );
            })}
          </select>
          <select
            className="form-control"
            name="brand"
            defaultValue={"default"}
          >
            <option value="default" disabled hidden>
              Please choose brand
            </option>
            {brand.map((val) => {
              return (
                <option key={val.id} value={val.id}>
                  {val.brand}
                </option>
              );
            })}
          </select>
          <select
            className="form-control"
            name="status"
            defaultValue={"default"}
            onChange={handleStatus}
          >
            <option value="default" disabled hidden>
              Status
            </option>
            <option value={0}>New</option>
            <option value={1}>Sale</option>
          </select>
          {sale ? (
            <input
              type="text"
              className="form-control"
              name="sale"
              placeholder="Sale..."
            />
          ) : (
            <></>
          )}
          <input
            type="text"
            className="form-control"
            name="company"
            placeholder="Company"
          />
          <textarea
            type="text"
            rows={7}
            name="detail"
            placeholder="Detail"
          ></textarea>
          {type === "create" && success && !error ? (
            <p className="registerSuccess">Create Success</p>
          ) : (
            error && <p className="errorSV">{error}</p>
          )}
          <button type="submit" className="btn btn-default">
            {type === "create" && loading ? (
              <i
                className="fa fa-spinner fa-spin"
                style={{ fontSize: "30px", color: "#fe980f" }}
              ></i>
            ) : (
              "Create"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
