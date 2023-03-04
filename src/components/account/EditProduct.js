import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useOutletContext } from "react-router-dom";

const EditProduct = () => {
  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [image, setImage] = useState([]);
  const [sale, setSale] = useState(false);
  const [product, setProduct] = useState({});
  const [imgCheckbox, setImgCheckbox] = useState([]);

  let { id } = useParams();

  let [config, userInfor] = useOutletContext();

  useEffect(() => {
    axios
      .get("http://localhost/laravel/laravel/public/api/category-brand")
      .then((res) => {
        setBrand(res.data.brand);
        setCategory(res.data.category);
      })
      .catch((err) => console.log(err));
    axios
      .get("http://localhost/laravel/laravel/public/api/product/detail/" + id)
      .then((res) => {
        setProduct({
          id: res.data.data.id,
          name: res.data.data.name,
          price: res.data.data.price,
          sale: res.data.data.sale,
          company: res.data.data.company_profile,
          detail: res.data.data.detail,
          image: res.data.data.image,
          status: res.data.data.status,
          category: res.data.data.id_category,
          brand: res.data.data.id_brand,
        });
      });
  }, [id]);

  const handleStatus = (e) => {
    if (Number(e.target.value) === 1) {
      setSale(true);
    } else {
      setSale(false);
    }
  };

  const changeInput = (e) => {
    let name = e.target.name;
    setProduct({ ...product, [name]: e.target.value });
  };
  const handleFile = (e) => {
    setImage([...e.target.files]);
  };

  const changeCheckbox = (e, val) => {
    if (e.target.checked) {
      setImgCheckbox([...imgCheckbox, val]);
    } else {
      setImgCheckbox(imgCheckbox.filter((val2) => val2 !== val));
    }
  };

  const submitUpdate = (e) => {
    e.preventDefault();

    const getForm = document.getElementById("formUpdate");
    const formdata = new FormData(getForm);
    formdata.delete("image");
    imgCheckbox.map((val) => {
      return formdata.append("avatarCheckBox[]", val);
    });
    image.map((val) => {
      return formdata.append("file[]", val);
    });

    axios
      .post(
        "http://localhost/laravel/laravel/public/api/user/edit-product/" +
          product.id,
        formdata,
        config
      )
      .then((res) => console.log(res));
  };

  return (
    <div className="col-sm-9 padding-right">
      <h3>Edit Product</h3>
      <div className="signup-form">
        <form
          className="form-group"
          id="formUpdate"
          encType="multipart/form-data"
          onSubmit={submitUpdate}
        >
          <input
            type="text"
            className="form-control"
            onChange={(e) => changeInput(e)}
            name="name"
            value={product.name || ""}
            placeholder="Name"
          />
          <input
            type="text"
            className="form-control"
            onChange={(e) => changeInput(e)}
            name="price"
            value={product.price || ""}
            placeholder="Price"
          />
          <input
            type="file"
            className="form-control"
            name="image"
            multiple="multiple"
            onChange={handleFile}
          />
          <div className="imgProduct" style={{ display: "flex" }}>
            {product.image &&
              JSON.parse(product.image).map((val, i) => {
                return (
                  <div key={i} style={{ marginRight: "5px" }}>
                    <input
                      style={{
                        height: "10px",
                        marginBottom: "3px",
                      }}
                      type="checkbox"
                      id={i}
                      onChange={(e) => changeCheckbox(e, val)}
                    />
                    <label htmlFor={i} style={{ marginBottom: "10px" }}>
                      <img
                        height={50}
                        width={50}
                        src={
                          "http://localhost/laravel/laravel/public/upload/user/product/" +
                          userInfor.id +
                          "/" +
                          val
                        }
                        alt=""
                      />
                    </label>
                  </div>
                );
              })}
          </div>
          <select
            className="form-control"
            onChange={(e) => changeInput(e)}
            name="category"
            defaultValue={product.category || ""}
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
            onChange={(e) => changeInput(e)}
            name="brand"
            defaultValue={product.brand || ""}
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
            defaultValue={product.status || ""}
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
              onChange={(e) => changeInput(e)}
              value={product.sale || ""}
              name="sale"
              placeholder="Sale..."
            />
          ) : (
            <></>
          )}
          <input
            type="text"
            className="form-control"
            onChange={(e) => changeInput(e)}
            name="company"
            value={product.company || ""}
            placeholder="Company"
          />
          <textarea
            type="text"
            rows={7}
            name="detail"
            onChange={(e) => changeInput(e)}
            value={product.detail || ""}
            placeholder="Detail"
          ></textarea>
          <button type="submit" className="btn btn-default">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
